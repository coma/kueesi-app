import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Auth0Provider} from '@auth0/auth0-react';
import {BrowserRouter, Routes, Route} from 'react-router';
import {PrivacyView} from './PrivacyView';
import {TosView} from './TosView';
import {LoginView} from './LoginView';
import {PrivateLayout} from './PrivateLayout';
import {DashboardView} from './DashboardView';
import {ProfilesView} from './ProfilesView';
import {BoxesView} from './BoxesView';
import {OrdersView} from './OrdersView';
import {SettingsView} from './SettingsView';
import './main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      useRefreshTokens
      cacheLocation="localstorage"
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="privacy" element={<PrivacyView />} />
          <Route path="tos" element={<TosView />} />
          <Route path="login" element={<LoginView />} />
          <Route element={<PrivateLayout />}>
            <Route index element={<DashboardView />} />
            <Route path="profiles" element={<ProfilesView />} />
            <Route path="boxes" element={<BoxesView />} />
            <Route path="orders" element={<OrdersView />} />
            <Route path="settings" element={<SettingsView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);
