'use client';
import { createContext, useContext, useState } from 'react';
import { textos } from '../idiomas'; // Traemos los textos del paso 1

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [idioma, setIdioma] = useState('en'); // Empezamos en inglés

    const cambiarIdioma = () => {
        setIdioma((prev) => (prev === 'en' ? 'es' : 'en'));
    };

    // 't' serán los textos traducidos según el idioma elegido
    const t = textos[idioma];

    return (
        <LanguageContext.Provider value={{ t, cambiarIdioma, idioma }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);