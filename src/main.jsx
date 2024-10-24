import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

    <Auth0Provider
    domain="aman-pixel.jp.auth0.com"
    clientId="xgZ2GETfz6FytkWD8U3M6Nlat71oPtld"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
 
)
