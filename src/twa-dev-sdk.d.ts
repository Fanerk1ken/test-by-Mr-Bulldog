declare global {
    interface Window {
        Telegram: {
            WebApp: {
                initDataUnsafe: {
                    user?: {
                        language_code?: string;
                        is_premium?: boolean;
                    };
                };
                isInitialized: boolean;
                ready(): Promise<void>;
                close(): void;
                expand(): void;
            };
        };
    }
}

export {};