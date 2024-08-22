import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WebApp from '@twa-dev/sdk';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        {WebApp.isInitialized ? (
            <App />
        ) : (
            <div>Loading...</div>
        )}
    </React.StrictMode>
);