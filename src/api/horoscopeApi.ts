import axios from 'axios';
import { Horoscope, Language } from '../types';

const HOROSCOPE_API_URL = 'https://aztro.sameerkumar.website/';
const TRANSLATE_API_URL = 'https://translate.terraprint.co/translate';

// Простой кэш для хранения переводов
const translationCache: { [key: string]: string } = {};

export const fetchHoroscope = async (sign: string, language: Language): Promise<Horoscope> => {
    try {
        const horoscopeResponse = await axios.post(`${HOROSCOPE_API_URL}?sign=${sign}&day=today`);
        let description = horoscopeResponse.data.description;

        if (language === 'ru') {
            // Проверяем, есть ли перевод в кэше
            if (translationCache[description]) {
                description = translationCache[description];
            } else {
                const translateResponse = await axios.post(TRANSLATE_API_URL, {
                    q: description,
                    source: "en",
                    target: "ru"
                });
                description = translateResponse.data.translatedText;
                // Сохраняем перевод в кэш
                translationCache[horoscopeResponse.data.description] = description;
            }
        }

        return { description };
    } catch (error) {
        console.error('Error fetching horoscope:', error);
        throw new Error('Failed to fetch horoscope');
    }
};