import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {
    isLoading, // Loading state, the SDK needs to reach Auth0 on load
    isAuthenticated,
    error,
    loginWithRedirect, // Starts the login flow
    logout: auth0Logout, // Starts the logout flow
    user, // User profile
    getAccessTokenSilently,
    getAccessTokenWithPopup,
  } = useAuth0();

  const login = () =>
    loginWithRedirect();

  const signup = () =>
    loginWithRedirect({ authorizationParams: { screen_hint: 'signup' } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  const listProfiles = async () => {
    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: import.meta.env.VITE_API_URL,
        }
      }).catch((_) => {
        return getAccessTokenWithPopup({
          authorizationParams: {
            audience: import.meta.env.VITE_API_URL,
          }
        });
      });

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/v1/profiles`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const responseData = await response.json();

      console.log(responseData.message);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  if (isLoading) return "Loading...";

  return isAuthenticated ? (
    <>
      <p>Logged in as {user?.email}</p>
      <h1>User Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={listProfiles}>List profiles</button>
      <button onClick={logout}>Logout</button>
    </>
  ) : (
    <>
      {error && <p>Error: {error.message}</p>}
      <button onClick={signup}>Signup</button>
      <button onClick={login}>Login</button>
    </>
  );
}

export default App;
