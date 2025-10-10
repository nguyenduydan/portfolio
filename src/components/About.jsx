import React from 'react';
import { Github, Linkedin, Mail, Download, Phone } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const About = ({ hasAnimated }) => {
    const { t } = useTranslation("about");
    const paragraphs = t("paragraphs", { returnObjects: true });

    return (
        <section id='about' className='md:px-10 px-5 py-16 bg-transparent relative flex items-center'>
            <div className="md:max-w-6xl max-w-3xl mx-auto w-full py-5">
                {/* Title */}
                <div className={`transition-all duration-1000 delay-100 ${hasAnimated.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <h2 className='text-3xl md:text-5xl font-bold mb-8 text-center'>
                        {t("title")} <span className='text-[#00FF7F]'>{t("highlight")}</span>
                    </h2>
                </div>

                {/* Content Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-centerp-10 rounded-4xl py-5'>
                    {/* Left Side - Text Content */}
                    <div className={`transition-all duration-1000 delay-300 ${hasAnimated.about ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        <div className='space-y-6'>
                            {paragraphs.map((text, index) => (
                                <p key={index} className="text-gray-600 text-lg leading-relaxed">
                                    {text.split(/<1>|<\/1>/).map((part, i) =>
                                        i % 2 === 1 ? (
                                            <span key={i} className="text-[#009c4e] font-semibold">{part}</span>
                                        ) : (
                                            part
                                        )
                                    )}
                                </p>
                            ))}
                        </div>
                        {/* Action Buttons */}
                        <div className='flex flex-wrap gap-4 pt-6 justify-center'>
                            <a
                                href="#contact"
                                className='inline-flex items-center px-6 py-3 bg-[#00FF7F] text-black font-semibold rounded-lg btn-hero-primary'
                            >
                                <Phone size={20} className='mr-2 animate-bounce' />
                                {t("btn_contact")}
                            </a>

                            <a
                                href="/cv.pdf"
                                download
                                className='inline-flex items-center px-6 py-3 border-2 border-black text-black bg-white font-semibold rounded-lg hover:drop-shadow-[5px_5px_black] transition-all duration-200 ease-out'
                            >
                                <Download size={20} className='mr-2' />
                                {t("btn_download")}
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Image/Avatar */}
                    <div className={`hidden lg:block transition-all duration-1000 delay-500 ${hasAnimated.about ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                        <div className='relative'>
                            {/* Glowing Background Effect */}
                            <div className='absolute inset-0 bg-[#00FF7F]/20 blur-3xl rounded-full'></div>

                            {/* Main Avatar Container */}
                            <div className='relative w-full max-w-sm mx-auto aspect-square'>
                                <div className='absolute inset-0 rounded-full bg-gradient-to-br from-[#00FF7F] to-[#00FF7F]/30 animate-pulse'></div>
                                <div className='absolute inset-2 rounded-full bg-black flex items-center justify-center'>
                                    {/* Avatar Emoji */}
                                    <div className='text-9xl'>👨‍💻</div>
                                </div>

                                {/* Decorative Rings */}
                                <div className='absolute -inset-4 rounded-full border-2 border-[#00FF7F]/30 animate-spin-slow'></div>
                                <div className='absolute -inset-8 rounded-full border-2 border-[#00FF7F]/20 animate-spin-reverse'></div>
                            </div>

                            {/* Floating Tech Icons */}
                            <div className='absolute top-0 right-0 w-16 h-16 bg-zinc-900 rounded-lg border border-[#00FF7F] flex items-center justify-center text-3xl animate-float'>
                                ⚡
                            </div>
                            <div className='absolute bottom-10 left-0 w-16 h-16 bg-zinc-900 rounded-lg border border-[#00FF7F] flex items-center justify-center text-3xl animate-float'>
                                🐍
                            </div>
                            <div className='absolute top-1/2 -right-4 w-16 h-16 bg-zinc-900 rounded-lg border border-[#00FF7F] flex items-center justify-center text-3xl animate-float'>
                                🐘
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
