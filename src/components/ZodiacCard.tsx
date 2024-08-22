import React from 'react';
import { Zodiac, Language } from '../types';

interface ZodiacCardProps {
    zodiac: Zodiac;
    onClick: () => void;
    language: Language;
}

const ZodiacCard: React.FC<ZodiacCardProps> = ({ zodiac, onClick, language }) => (
    <div className="zodiac-card" onClick={onClick}>
        <img src={`/icons/${zodiac.sign}.svg`} alt={zodiac.sign} className="zodiac-icon" style={{filter: 'invert(1)'}}/>
        <h2>{zodiac[language].name}</h2>
        <p>{zodiac.period}</p>
    </div>
);

export default ZodiacCard;