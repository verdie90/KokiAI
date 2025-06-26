"use client";

import React, { createContext, useState, useEffect, useMemo } from 'react';
import { type Language, translations } from '@/lib/translations';

type AppContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
  favorites: string[];
  toggleFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('id');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedLang = localStorage.getItem('recipe-app-lang') as Language;
    if (storedLang && translations[storedLang]) {
      setLanguageState(storedLang);
    }
    const storedFavorites = localStorage.getItem('recipe-app-favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if(isMounted) {
      localStorage.setItem('recipe-app-lang', lang);
    }
  };

  const toggleFavorite = (recipeId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(recipeId)
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId];
      if(isMounted) {
        localStorage.setItem('recipe-app-favorites', JSON.stringify(newFavorites));
      }
      return newFavorites;
    });
  };

  const isFavorite = (recipeId: string) => favorites.includes(recipeId);

  const t = (key: keyof typeof translations.en) => {
    return (translations[language] && translations[language][key]) || translations.en[key];
  };

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t,
    favorites,
    toggleFavorite,
    isFavorite,
  }), [language, favorites, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
