import {useCallback} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {Navigate} from 'react-router';
import {WaitView} from './WaitView';
import style from './LoginView.module.css';

export function LoginView() {
  const {isLoading, isAuthenticated, error, loginWithRedirect} = useAuth0();
  const login = useCallback(() => loginWithRedirect(), [loginWithRedirect]);
  const signup = useCallback(() => loginWithRedirect({ authorizationParams: { screen_hint: 'signup' } }), [loginWithRedirect]);

  if (isLoading) {
    return <WaitView />;
  }

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  return (
    <main className={style.layout}>
      <article>
        <hgroup>
          <h1>Welcome</h1>
          <p>Bla bla bla goes here.</p>
        </hgroup>
        {error && <p>Error: {error.message}</p>}
        <div className="grid">
          <button onClick={signup}>Signup</button>
          <button onClick={login}>Login</button>
        </div>
      </article>
    </main>
  );
}
