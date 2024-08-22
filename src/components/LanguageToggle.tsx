import React from 'react';
import { Language } from '../types';

interface LanguageToggleProps {
    language: Language;
    onToggle: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => (
    <button onClick={onToggle} className="language-toggle">
        {language === 'ru' ? 'EN' : 'RU'}
    </button>
);

export default LanguageToggle;