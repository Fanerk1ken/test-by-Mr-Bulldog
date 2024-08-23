import React, { useState, useEffect } from 'react';
import { BackButton } from '@twa-dev/sdk/react';
import { Zodiac, Horoscope, Language } from '../types';
import { fetchHoroscope } from '../api/horoscopeApi';
import { useSwipeable } from 'react-swipeable';


interface ZodiacDescriptionProps {
    zodiac: Zodiac;
    onBack: () => void;
    language: Language;
}

const ZodiacDescription: React.FC<ZodiacDescriptionProps> = ({ zodiac, onBack, language }) => {
    const [horoscope, setHoroscope] = useState<Horoscope | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [tryAgain, setTryAgain] = useState(false)

    const handlers = useSwipeable({
        onSwipedRight: onBack,
        trackMouse: true
    });

    const handleTryAgain = () => {
        setTryAgain(!tryAgain)
    }

    useEffect(() => {
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

        fetchHoroscopeData();
    }, [zodiac.sign, language, tryAgain]);



    return (
        <div {...handlers} className="zodiac-description">
            <div className="zodiac-description">
                <BackButton onClick={onBack}/>
                <img src={`/icons/${zodiac.sign}.svg`} alt={zodiac.sign} className="zodiac-icon"/>
                <h2>{zodiac[language].name}</h2>
                <p>{zodiac.period}</p>
                {isLoading && <p>Loading...</p>}
                {error && (
                    <div>
                        <p className="error">{error}</p>
                        <button onClick={handleTryAgain}>Try Again</button>
                    </div>
                )}
                {!isLoading && !error && horoscope && <p>{horoscope.description}</p>}
            </div>
        </div>
    );
};

export default ZodiacDescription;