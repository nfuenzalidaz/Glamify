import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.jsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const { VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENT_ID, VITE_FRONT_URL } = import.meta.env;
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Auth0Provider
    domain={VITE_AUTH0_DOMAIN}
    clientId={VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: `${VITE_FRONT_URL}/home`,
    }}
  >
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </Auth0Provider>
  // </React.StrictMode>
);
