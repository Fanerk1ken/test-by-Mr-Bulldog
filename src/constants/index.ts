import { Zodiac, Language } from '../types';

export const LANGUAGES: Record<string, Language> = {
    RU: 'ru',
    EN: 'en',
};

export const ZODIAC_SIGNS: Zodiac[] = [
    { sign: 'aries', period: '21.03 - 20.04', icon: '/icons/aries.svg', ru: { name: 'Овен' }, en: { name: 'Aries' } },
    { sign: 'taurus', period: '21.04 - 21.05', icon: '/icons/taurus.svg', ru: { name: 'Телец' }, en: { name: 'Taurus' } },
    { sign: 'gemini', period: '22.05 - 21.06', icon: '/icons/gemini.svg', ru: { name: 'Близнецы' }, en: { name: 'Gemini' } },
    { sign: 'cancer', period: '22.06 - 22.07', icon: '/icons/cancer.svg', ru: { name: 'Рак' }, en: { name: 'Cancer' } },
    { sign: 'leo', period: '23.07 - 22.08', icon: '/icons/leo.svg', ru: { name: 'Лев' }, en: { name: 'Leo' } },
    { sign: 'virgo', period: '23.08 - 23.09', icon: '/icons/virgo.svg', ru: { name: 'Дева' }, en: { name: 'Virgo' } },
    { sign: 'libra', period: '24.09 - 23.10', icon: '/icons/libra.svg', ru: { name: 'Весы' }, en: { name: 'Libra' } },
    { sign: 'scorpio', period: '24.10 - 22.11', icon: '/icons/scorpio.svg', ru: { name: 'Скорпион' }, en: { name: 'Scorpio' } },
    { sign: 'sagittarius', period: '23.11 - 21.12', icon: '/icons/sagittarius.svg', ru: { name: 'Стрелец' }, en: { name: 'Sagittarius' } },
    { sign: 'capricorn', period: '22.12 - 20.01', icon: '/icons/capricorn.svg', ru: { name: 'Козерог' }, en: { name: 'Capricorn' } },
    { sign: 'aquarius', period: '21.01 - 19.02', icon: '/icons/aquarius.svg', ru: { name: 'Водолей' }, en: { name: 'Aquarius' } },
    { sign: 'pisces', period: '20.02 - 20.03', icon: '/icons/pisces.svg', ru: { name: 'Рыбы' }, en: { name: 'Pisces' } }
];