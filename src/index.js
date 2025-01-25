import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Provider from './state/Provider';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Provider>
        <GoogleOAuthProvider clientId="463029945-kuiu9rkfkh0bc5965dpisi35520uqd6b.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </Provider>
    // </React.StrictMode>
);
reportWebVitals();
