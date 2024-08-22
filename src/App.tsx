import React, { useState, useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import ZodiacList from './components/ZodiacList';
import ZodiacDescription from './components/ZodiacDescription';
import LanguageToggle from './components/LanguageToggle';
import { fetchHoroscope } from './api/horoscopeApi';
import { ZODIAC_SIGNS } from './constants';
import { Horoscope, Language } from './types';
import './styles/App.css';

const App: React.FC = () => {
  const webApp = WebApp.getInstance();
  const [language, setLanguage] = useState<Language>(webApp.initDataUnsafe.user.language_code === 'ru' ? 'ru' : 'en');
  const [selectedZodiac, setSelectedZodiac] = useState<string | null>(null);
  const [horoscope, setHoroscope] = useState<Horoscope | null>(null);

  useEffect(() => {
    if (selectedZodiac) {
      fetchHoroscope(selectedZodiac, language)
          .then(data => setHoroscope(data))
          .catch(error => console.error('Error fetching horoscope:', error));
    }
  }, [selectedZodiac, language]);

  const handleZodiacClick = (zodiac: string) => {
    setSelectedZodiac(zodiac);
  };

  const handleBack = () => {
    setSelectedZodiac(null);
    setHoroscope(null);
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
                horoscope={horoscope}
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