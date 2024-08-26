interface TelegramWebApps {
    WebApp: {
        initDataUnsafe: {
            user?: {
                language_code?: string;
                is_premium?: boolean;
            };
        };
        ready(): Promise<void>;
        close(): void;
        expand(): void;
    };
}

declare global {
    interface Window {
        Telegram: TelegramWebApps;
    }
}

export {};