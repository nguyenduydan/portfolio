import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { useState, useEffect } from "react";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isVI, setIsVI] = useState(i18n.language === "vi");

    useEffect(() => {
        setIsVI(i18n.language === "vi");
    }, [i18n.language]);

    const toggleLanguage = () => {
        const newLang = isVI ? "en" : "vi";
        i18n.changeLanguage(newLang);
        setIsVI(!isVI);
    };

    return (
        <button
            onClick={toggleLanguage}
            className={`relative flex items-center w-16 h-7 rounded-lg p-1 border border-[#00FF7F]/60 bg-zinc-800/80 transition-all duration-200 ease-in-out
        hover:shadow-[0_0_10px_#00FF7F,0_0_20px_#00FF7F_inset]`}>
            {/* Nền chuyển màu */}
            <div className={`absolute inset-0 rounded-lg transition-colors duration-200 ease-in-out ${isVI ? "bg-gradient-to-r from-[#00FF7F]/30 to-transparent" : "bg-gradient-to-l from-[#00FF7F]/30 to-transparent"}`} />

            {/* Nút trượt */}
            <div className={`relative z-10 w-6 h-6 rounded-lg text-black flex items-center justify-center transition-all duration-200 ease-in-out transform
          ${isVI ? "translate-x-0" : "translate-x-8"}`}>
                <ReactCountryFlag
                    countryCode={isVI ? "VN" : "US"}
                    svg
                    alt="flag"
                    style={{
                        width: "1.4em",
                        height: "1.4em",
                        borderRadius: "2px",
                    }}
                />
            </div>
        </button>
    );
};

export default LanguageSwitcher;
