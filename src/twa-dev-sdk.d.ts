declare module '@twa-dev/sdk' {
    const WebApp: {
        getInstance(): WebApp;
        isInitialized: boolean;
    };

    interface WebApp {
        initDataUnsafe: {
            user: {
                language_code: string;
            };
        };
    }

    export default WebApp;
}