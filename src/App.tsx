import React, { useState, useEffect } from 'react';
import ZodiacList from './components/ZodiacList';
import ZodiacDescription from './components/ZodiacDescription';
import LanguageToggle from './components/LanguageToggle';
import { ZODIAC_SIGNS } from './constants';
import { Language } from './types';
import './styles/App.css';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedZodiac, setSelectedZodiac] = useState<string | null>(null);
  // const [premium, setPremium] = useState(false);

  useEffect(() => {
    const initApp = async () => {
      try {
        await window.Telegram.WebApp.ready();

        const initData = window.Telegram.WebApp.initDataUnsafe;

        if (initData.user) {
          const webAppLanguage = initData.user.language_code;

          if (webAppLanguage) {
            setLanguage(webAppLanguage.toLowerCase().startsWith('ru') ? 'ru' : 'en');
          } else {
            setLanguage('en');
          }

          // setPremium(!!initData.user.is_premium);
        } else {
          setLanguage('en');
        }
      } catch (error) {
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
        {/*<div className="premium">Premium? - {premium ? 'Yes' : 'No'}</div>*/}
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