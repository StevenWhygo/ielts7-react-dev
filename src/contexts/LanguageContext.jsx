import {useState, useEffect, createContext} from 'react'
import en from '../languages/en/index';
import zh from '../languages/zh/index';

export const LanguageContext = createContext(null);

const init = {
    fallback: 'en',
    languages: ['en', 'zh'],
    global: {
        en: en,
        zh: zh
    },
    current: ''
}

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(null);
    const [global,  setGlobal] = useState(null);

    useEffect(() => {
        const lang = navigator.language.split('-')[0];
        if(init.languages.includes(lang)) {

            setGlobal(init.global[lang]);
        }
        else {
            setGlobal(init.global[init.fallback]);
        }
    }, []);

    useEffect(() => {        
        if(language) {
            setGlobal(init.global[language]);
        }
    }, [language])

    return (
        <LanguageContext.Provider value={{
            language,
            setLanguage,
            global,
            setGlobal
        }}>
            {children}
        </LanguageContext.Provider>
    )
}