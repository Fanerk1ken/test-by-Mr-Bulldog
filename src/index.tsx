import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WebApp from '@twa-dev/sdk';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const TelegramApp: React.FC = () => {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const initApp = async () => {
            try {
                WebApp.ready();
                setIsInitialized(true);
            } catch (error) {
                console.error('Failed to initialize WebApp:', error);
            }
        };

        initApp();
    }, []);

    if (!isInitialized) {
        return <div>Loading...</div>;
    }

    return <App />;
};

root.render(
    <React.StrictMode>
        <TelegramApp />
    </React.StrictMode>
);