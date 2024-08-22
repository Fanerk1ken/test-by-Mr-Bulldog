import axios from 'axios';
import { Horoscope, Language } from '../types';

const HOROSCOPE_API_URL = 'https://poker247tech.ru/get_horoscope/';

export const fetchHoroscope = async (sign: string, language: Language): Promise<Horoscope> => {
    try {
        const horoscopeResponse = await axios.post(HOROSCOPE_API_URL, {
            sign: sign,
            language: language === 'ru' ? 'original' : 'translated',
            period: 'today'
        });

        if (horoscopeResponse.data && horoscopeResponse.data.description) {
            return { description: horoscopeResponse.data.description };
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error('Error fetching horoscope:', error);
        throw new Error('Failed to fetch horoscope');
    }
};