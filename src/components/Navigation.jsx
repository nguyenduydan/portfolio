import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navigation = () => {
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const [isScroll, setIsScroll] = useState(false);
    const { t } = useTranslation("navbar");

    const toggleMobileMenu = () => {
        setIsMobileMenu(!isMobileMenu);
    };

    const closeMobileMenu = () => {
        setIsMobileMenu(false);
    };

    const scrollToSection = (href) => {
        const el = document.querySelector(href);
        if (el) {
            const navHeight = 60;
            const elementPos = el.offsetTop - navHeight;
            window.scrollTo({
                top: elementPos,
                behavior: 'smooth'
            });
        }
        closeMobileMenu();
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 50);
            if (isMobileMenu) {
                closeMobileMenu();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenu]);

    const navItems = [
        { href: "#about", label: t("about") },
        { href: "#skills", label: t("skills") },
        { href: "#projects", label: t("projects") },
        { href: "#contact", label: t("contact") },
    ];

    return (
        <nav className="fixed top-0 w-full z-50">
            <div className="flex justify-center mx-auto z-10">
                <div
                    className={`transition-all duration-500 ease-in-out ${isScroll
                        ? "mt-4 mx-4 bg-black/50 backdrop-blur-sm shadow-lg rounded-full max-w-full md:max-w-4xl w-full"
                        : "lg:max-w-6xl md:max-w-3xl w-full bg-transparent mt-0 mx-0 rounded-none shadow-none backdrop-blur-none"
                        }`}
                >
                    <div className={`container mx-auto ${isScroll ? "px-6 py-3" : "px-5 py-4"}`}>
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <div className={`font-extrabold flex gap-2 ${isScroll
                                ? "text-white text-2xl mr-5 scale-95"
                                : "text-gray-900 text-2xl mr-0 scale-100"
                                }`}>
                                <img src="/favicon-32x32.png" alt="favicon" />
                                <a href="#">
                                    {t("brand").split("Port")[0]}Port<span className="text-[#00FF7F]">folio</span>
                                </a>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex items-center space-x-10">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.href}
                                        item={item}
                                        isScroll={isScroll}
                                        scrollToSection={scrollToSection}
                                    />
                                ))}
                                <LanguageSwitcher />
                            </div>

                            {/* Mobile Menu */}
                            <div className="md:hidden flex gap-2">
                                <button
                                    onClick={toggleMobileMenu}
                                    className={`p-2 rounded-lg transition-colors cursor-pointer ${isScroll
                                        ? "text-white hover:bg-white/10"
                                        : "text-gray-900 hover:bg-gray-300"
                                        }`}
                                >
                                    {isMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                                </button>
                                <LanguageSwitcher />
                            </div>
                        </div>

                        {/* Mobile Dropdown */}
                        <div className="md:hidden w-full">
                            <div
                                className={`absolute transition-all duration-400 ease-out left-0 right-0 mt-4 mx-4 p-4 bg-black/80 backdrop-blur-lg shadow-lg rounded-lg ${isMobileMenu ? "h-56 opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
                            >
                                <div className="space-y-3">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                scrollToSection(item.href);
                                            }}
                                            className="block py-2 px-3 text-white hover:bg-gray-200 hover:text-black rounded-lg transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
