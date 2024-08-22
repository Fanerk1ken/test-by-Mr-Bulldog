export interface Zodiac {
    sign: string;
    period: string;
    icon: string;
    ru: { name: string };
    en: { name: string };
}

export interface Horoscope {
    description: string;
}

export type Language = 'ru' | 'en';