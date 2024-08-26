import React, { useState, useEffect } from 'react';
import ZodiacList from './components/ZodiacList';
import ZodiacDescription from './components/ZodiacDescription';
import LanguageToggle from './components/LanguageToggle';
import { ZODIAC_SIGNS } from './constants';
import { Language } from './types';
import './styles/App.css';
import WebApp from '@twa-dev/sdk';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedZodiac, setSelectedZodiac] = useState<string | null>(null);
  const [premium, setPremium] = useState(false);

  useEffect(() => {
    const initApp = async () => {
      try {
        await WebApp.ready();
        console.log('WebApp ready');

        // Логируем все доступные данные для отладки
        console.log('WebApp.initDataUnsafe:', WebApp.initDataUnsafe);

        if (WebApp.initDataUnsafe.user) {
          const webAppLanguage = WebApp.initDataUnsafe.user.language_code;
          console.log('Telegram language:', webAppLanguage);

          if (webAppLanguage) {
            setLanguage(webAppLanguage.toLowerCase().startsWith('ru') ? 'ru' : 'en');
          } else {
            console.log('Telegram language not detected, defaulting to English');
            setLanguage('en');
          }

          setPremium(!!WebApp.initDataUnsafe.user.is_premium);
        } else {
          console.log('User data not available');
          setLanguage('en');
        }
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