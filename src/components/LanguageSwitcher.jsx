import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "vi" ? "en" : "vi";
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="px-3 py-1 bg-zinc-800 border rounded-lg text-white text-sm hover:bg-[#00FF7F]/40  transition-all flex items-center gap-2 duration-300"
        >
            <ReactCountryFlag
                countryCode={i18n.language === "vi" ? "VN" : "US"}
                svg
                style={{
                    width: "1.5em",
                    height: "1.5em",
                    borderRadius: "3px"
                }}
                title={i18n.language.toUpperCase()}
            />
            <span className="font-bold">{i18n.language === "vi" ? "VI" : "EN"}</span>
        </button>
    );
};

export default LanguageSwitcher;
