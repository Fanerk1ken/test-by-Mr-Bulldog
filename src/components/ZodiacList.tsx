import React from 'react';
import ZodiacCard from './ZodiacCard';
import { Zodiac, Language } from '../types';

interface ZodiacListProps {
    zodiacSigns: Zodiac[];
    onZodiacClick: (sign: string) => void;
    language: Language;
}

const ZodiacList: React.FC<ZodiacListProps> = ({ zodiacSigns, onZodiacClick, language }) => (
    <div className="zodiac-list">
        {zodiacSigns.map(zodiac => (
            <ZodiacCard
                key={zodiac.sign}
                zodiac={zodiac}
                onClick={() => onZodiacClick(zodiac.sign)}
                language={language}
            />
        ))}
    </div>
);

export default ZodiacList;