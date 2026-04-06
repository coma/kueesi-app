import {useAuth0} from '@auth0/auth0-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {Button} from '@/components/ui/button'

const accessTokenSettings = {
  authorizationParams: {
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
  },
};

export function App() {
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
      const token = await getAccessTokenSilently(accessTokenSettings)
        .catch(() => getAccessTokenWithPopup(accessTokenSettings));

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
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
        <CardDescription>
          Logged in as {user?.email}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={listProfiles}>List profiles</Button>
        <Button onClick={logout}>Logout</Button>
      </CardContent>
    </Card>
  ) : (
    <>
      {error && <p>Error: {error.message}</p>}
      <button onClick={signup}>Signup</button>
      <button onClick={login}>Login</button>
    </>
  );
}
