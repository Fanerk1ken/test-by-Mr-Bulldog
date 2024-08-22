import React from 'react';
import { BackButton } from '@twa-dev/sdk/react';
import { Zodiac, Horoscope, Language } from '../types';

interface ZodiacDescriptionProps {
    zodiac: Zodiac;
    horoscope: Horoscope | null;
    onBack: () => void;
    language: Language;
}

const ZodiacDescription: React.FC<ZodiacDescriptionProps> = ({ zodiac, horoscope, onBack, language }) => (
    <div className="zodiac-description">
        <BackButton onClick={onBack} />
        <img src={`/icons/${zodiac.sign}.svg`} alt={zodiac.sign} className="zodiac-icon" />
        <h2>{zodiac[language].name}</h2>
        <p>{zodiac.period}</p>
        <p>{horoscope?.description || 'Loading...'}</p>
    </div>
);

export default ZodiacDescription;