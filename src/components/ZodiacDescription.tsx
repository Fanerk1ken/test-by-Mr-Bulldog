import React, { useState, useEffect } from 'react';
import { BackButton } from '@twa-dev/sdk/react';
import { useSwipeable } from 'react-swipeable';
import { Zodiac, Horoscope, Language } from '../types';
import { fetchHoroscope } from '../api/horoscopeApi';

interface ZodiacDescriptionProps {
    zodiac: Zodiac;
    onBack: () => void;
    language: Language;
}

const ZodiacDescription: React.FC<ZodiacDescriptionProps> = ({ zodiac, onBack, language }) => {
    const [horoscope, setHoroscope] = useState<Horoscope | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const handlers = useSwipeable({
        onSwipedRight: onBack,
        trackMouse: true
    });

    const fetchHoroscopeData = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const data = await fetchHoroscope(zodiac.sign, language);
            setHoroscope(data);
        } catch (err) {
            console.error('Error in component:', err);
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchHoroscopeData();
    }, [zodiac.sign, language]);

    return (
        <div {...handlers} className="zodiac-description">
            <img src={`/icons/${zodiac.sign}.svg`} alt={zodiac.sign} className="zodiac-icon" />
            <h2>{zodiac[language].name}</h2>
            <p>{zodiac.period}</p>
            {isLoading && <p>{language === 'ru' ? 'Загрузка...' : 'Loading...'}</p>}
            {error && (
                <div>
                    <p className="error">{error}</p>
                    <button onClick={fetchHoroscopeData}>
                        {language === 'ru' ? 'Попробовать снова' : 'Try Again'}
                    </button>
                </div>
            )}
            {!isLoading && !error && horoscope && <p>{horoscope.description}</p>}
            <div className="back-button-wrapper">
                <button className="back-button" onClick={onBack}>
                    <BackButton />
                    <span>{language === 'ru' ? 'Назад' : 'Back'}</span>
                </button>
            </div>
        </div>
    );
};

export default ZodiacDescription