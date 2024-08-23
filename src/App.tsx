import React, { useState, useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import ZodiacList from './components/ZodiacList';
import ZodiacDescription from './components/ZodiacDescription';
import LanguageToggle from './components/LanguageToggle';
import { ZODIAC_SIGNS } from './constants';
import { Language } from './types';
import './styles/App.css';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedZodiac, setSelectedZodiac] = useState<string | null>(null);

  useEffect(() => {
    const initApp = async () => {
      try {
        await WebApp.ready();
        const userLanguage = WebApp.initDataUnsafe.user?.language_code || navigator.language;
        console.log('Detected language:', userLanguage);
        setLanguage(userLanguage === 'ru' ? 'ru' : 'en');
      } catch (error) {
        console.error('Failed to initialize WebApp:', error);
        setLanguage('en');
      }
    };

    initApp();
  }, []);

  const handleZodiacClick = (zodiac: string) => {
    setSelectedZodiac(zodiac);
  };

  const handleBack = () => {
    setSelectedZodiac(null);
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'ru' ? 'en' : 'ru');
  };

  const selectedZodiacData = ZODIAC_SIGNS.find(zodiac => zodiac.sign === selectedZodiac);

  return (
      <div className="app">
        <LanguageToggle language={language} onToggle={toggleLanguage} />
        {selectedZodiac && selectedZodiacData ? (
            <ZodiacDescription
                zodiac={selectedZodiacData}
                onBack={handleBack}
                language={language}
            />
        ) : (
            <ZodiacList
                zodiacSigns={ZODIAC_SIGNS}
                onZodiacClick={handleZodiacClick}
                language={language}
            />
        )}
      </div>
  );
};

export default App;