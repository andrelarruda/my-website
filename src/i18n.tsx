import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next",
            "about": "About",
            "experiences": "Experiences",
            "skills": "Skills",
            "projects": "Projects",
            "contact": "Contact",
            "my name": "Andre Arruda",
            "footer all rights": "Andre Arruda. All rights reserved",
        }
    },
    pt: {
        translation: {
            "Bem vindo ao React": "Bem vindo ao React e react-i18next",
            "about": "Sobre",
            "experiences": "Experiências",
            "skills": "Habilidades",
            "projects": "Projetos",
            "contact": "Contato",
            "my name": "André Arruda",
            "footer all rights": "Andre Arruda. Todos os direitos reservados",
        }
    },
    fr: {
        translation: {
            "Welcome to React": "Bienvenue à React et react-i18next"
        }
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;