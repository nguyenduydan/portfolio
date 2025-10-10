import React, { useEffect, useState } from "react";
import { getHeroData } from "../data/hero";
import { Github, Mail, Linkedin, Mouse } from "lucide-react";
import Rocket from "../assets/rocket-icon.svg";
import Laptop from "../assets/laptop-icon.svg";
import Avatar from "../assets/Avatar.jpg";
import { useTranslation } from "react-i18next";
import "./custom.css";

const Hero = ({ hasAnimated }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(120);
    const { t } = useTranslation("hero");
    const heroData = getHeroData(t);
    const roles = heroData.roles;

    useEffect(() => {
        const currentRole = roles[currentTextIndex];

        if (!isDeleting) {
            if (currentText.length < currentRole.length) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentRole.slice(0, currentText.length + 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(60);
                }, 1500);
                return () => clearTimeout(timeout);
            }
        } else {
            if (currentText.length > 0) {
                const timeout = setTimeout(() => {
                    setCurrentText(currentText.slice(0, currentText.length - 1));
                }, typingSpeed);
                return () => clearTimeout(timeout);
            } else {
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % roles.length);
                setTypingSpeed(120);
            }
        }
    }, [currentText, currentTextIndex, isDeleting, typingSpeed, roles]);

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-transparent pt-30" id="hero">
            <div className="relative max-w-6xl mx-auto px-5 text-center h-full flex flex-col justify-center items-center">
                <div className={`transition-all z-2 duration-1000 ${hasAnimated.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 '}`}>
                    <div className="relative mb-5">
                        <img
                            src={Avatar}
                            alt="avatar"
                            className="inline-block z-10 h-30 w-30 md:h-40 md:w-40 rounded-full object-cover relative
                                    transition-all duration-700 ease-out
                                    hover:scale-[2] hover:translate-y-10
                                    hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute h-35 w-35 md:h-45 md:w-45 rounded-full bg-gradient-to-r from-pink-400 via-cyan-400 to-green-300 blur-md opacity-100 animate-spin-slow z-2">
                            </div>
                        </div>
                    </div>
                    {/* Greeting */}
                    <div className="mb-5">
                        <span className="inline-block bg-black rounded-full text-white text-md font-medium px-4 py-2 animate-bounce delay-500">
                            {heroData.greeting}
                        </span>
                    </div>

                    {/* Name */}
                    <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent mb-3 animate-fade-in-up delay-75 py-3.5">
                        {heroData.name}
                    </h1>

                    <div className="h-12 md:h-16 animate-fade-in-up delay-100 mb-2">
                        {/* Typing */}
                        <h2 className="text-2xl md:text-3xl text-gray-600">
                            {t("im")} {" "}
                            <span className="relative">
                                <span className="bg-gradient-to-r from-cyan-500 to-[#00FF7F] bg-clip-text text-transparent font-bold border-r-2 border-gray-600 pr-1 text-shadow-2xs">
                                    {currentText}
                                </span>
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-[#00FF7F]"></span>
                            </span>
                        </h2>
                    </div>
                    {/* Desciption */}
                    <p className="text-base md:text-lg mb-8 max-w-3xl leading-relaxed mx-auto animate-fade-in-up delay-200">
                        {heroData.description}
                    </p>
                    {/* {ctaButtons} */}
                    <div className="flex flex-col items-center justify-center gap-5 mb-4 sm:flex-row fade-in delay-1000">
                        {heroData.ctaButtons.map((button, index) => (
                            <a
                                key={index}
                                href={button.href}
                                className={`group relative px-6 py-3 rounded-lg transition-all duration-300 font-medium text-sm
                            ${button.variant === 'primary'
                                        ? 'btn-hero-primary'
                                        : 'border-2 border-black text-black bg-white font-semibold rounded-lg hover:drop-shadow-[5px_5px_black] transition-all duration-200'
                                    }`}
                            >
                                <span className={button.variant === 'primary' ? 'relative z-10' : ''}>
                                    {button.text}
                                </span>
                            </a>
                        ))}
                    </div>
                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-4 animate-fade-in-up delay-300">
                        {heroData.socialLinks.map((social, index) => {
                            const IconComponent =
                                social.icon === "GitHub"
                                    ? Github
                                    : social.icon === "Linkedin"
                                        ? Linkedin
                                        : Mail;

                            return (
                                <a
                                    key={index}
                                    href={social.url}
                                    aria-label={`Visit my ${social.icon} profile`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                >
                                    <IconComponent className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors" />
                                </a>
                            );
                        })}
                    </div>
                    {/* stats */}
                    <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-500">
                        {heroData.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl font-bold">
                                    {stat.number}
                                </div>
                                <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    {/* Scroll Indicator */}
                    <div className="hidden animate-zoom-in relative md:flex justify-center ">
                        <div className="animate-bounce">
                            <button onClick={scrollToAbout} className="group flex flex-col items-center justify-center text-gray-600 hover:text-black cursor-ns-resize">
                                <span className="text-sm font-medium ">Scroll</span>
                                <Mouse className="transform -rotate-180" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute top-15 left-5 animate-float z-1" style={{ '--delay': "0.3s" }}>
                    <img src={Rocket} alt="rocket" className="h-30 w-30" />
                </div>
                <div className="absolute top-15 right-5 animate-float" style={{ '--delay': "1s" }}>
                    <img src={Laptop} alt="rocket" className="h-30 w-30" />
                </div>
            </div>
            <div className="z-1">
                <div
                    className="absolute top-60 left-40 h-5 w-5 rounded-full bg-cyan-500/50 border border-cyan-300 shadow-xl/30 shadow-cyan-500/50 backdrop-blur-sm animate-float duration-700" style={{ '--delay': "2s" }}></div>
                <div className="absolute top-150 right-40 h-15 w-15  rounded-full bg-green-500/50 border border-green-300 shadow-xl/30 shadow-green-500/50 backdrop-blur-sm animate-float duration-700" style={{ '--delay': "1s" }}></div>
                <div className="absolute bottom-30 left-20 h-10 w-10  rounded-full bg-purple-500/50 border border-purple-300 shadow-xl/30 shadow-purple-500/50 backdrop-blur-sm animate-float duration-700" style={{ '--delay': "0.3s" }}></div>
            </div>

        </section>
    );
};

export default Hero;
