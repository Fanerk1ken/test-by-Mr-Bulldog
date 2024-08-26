declare module '@twa-dev/sdk' {
    interface WebApp {
        initDataUnsafe: {
            user: {
                language_code: string;
                is_premium: true
            };
        };
        isInitialized: boolean;
        ready(): void;
        close(): void;
        expand(): void;
    }

    const WebApp: WebApp;

    export default WebApp;
}