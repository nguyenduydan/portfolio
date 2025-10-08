import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//vi
import navbar_vi from "../locales/vi/navbar.json";
import other_vi from "../locales/vi/other.json";
import hero_vi from "../locales/vi/hero.json";
import project_vi from "../locales/vi/project.json";
import skill_vi from "../locales/vi/skill.json";
import about_vi from "../locales/vi/about.json";
//en
import navbar_en from "../locales/en/navbar.json";
import other_en from "../locales/en/other.json";
import hero_en from "../locales/en/hero.json";
import project_en from "../locales/en/project.json";
import skill_en from "../locales/en/skill.json";
import about_en from "../locales/en/about.json";


i18n
    .use(initReactI18next)
    .init({
        lng: "vi", // ngôn ngữ mặc định
        fallbackLng: "vi",
        interpolation: { escapeValue: false },
        resources: {
            vi: {
                navbar: navbar_vi,
                other: other_vi,
                hero: hero_vi,
                project: project_vi,
                skill: skill_vi,
                about: about_vi,
            },
            en: {
                navbar: navbar_en,
                other: other_en,
                hero: hero_en,
                project: project_en,
                skill: skill_en,
                about: about_en,
            },
        },
    });

export default i18n;
