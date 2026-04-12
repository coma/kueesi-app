import {useCallback} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {Navigate, Outlet, NavLink} from 'react-router';
import {WaitView} from './WaitView';
import style from './PrivateLayout.module.css';

export function PrivateLayout() {
  const {isLoading, isAuthenticated, logout} = useAuth0();
  const logoutAndReturn = useCallback(() => logout({ logoutParams: { returnTo: window.location.origin } }), [logout]);

  if (isLoading) {
    return <WaitView />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={style.layout}>
      <aside>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/profiles">Profiles</NavLink>
            </li>
            <li>
              <NavLink to="/boxes">Boxes</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Orders</NavLink>
            </li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
            <li>
              <button
                type="button"
                onClick={logoutAndReturn}
                className="outline contrast"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
