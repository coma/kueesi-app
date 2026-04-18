import {useAuth0} from '@auth0/auth0-react';

const accessTokenSettings = {
  authorizationParams: {
    audience: import.meta.env.VITE_AUTH0_AUDIENCE,
  },
};

export function OrdersView() {
  const {
    getAccessTokenSilently,
    getAccessTokenWithPopup,
  } = useAuth0();

  const testBrevo = async () => {
    try {
      const token = await getAccessTokenSilently(accessTokenSettings)
        .catch(() => getAccessTokenWithPopup(accessTokenSettings));

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/v1/orders`,
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

  return (
    <>
      <hgroup>
        <h1>Orders</h1>
        <p>Bla bla bla goes here.</p>
      </hgroup>
      <button
        type="button"
        onClick={testBrevo}
      >
        Test Brevo
      </button>
    </>
  );
}
