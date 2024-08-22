declare module '@twa-dev/sdk' {
    interface WebApp {
        initDataUnsafe: {
            user: {
                language_code: string;
            };
        };
        isInitialized: boolean;
        ready(): void;
        close(): void;
        expand(): void;
    }

    const WebApp: {
        getInstance(): WebApp;
        isInitialized: boolean;
        ready(): void;
    };

    export default WebApp;
}