import {
    Code2,
    Sparkles,
    BookOpen,
    Users,
    Coffee,
    Lightbulb,
} from "lucide-react";
import { skills } from "../data/skills";
import { useTranslation } from "react-i18next";

const Skills = ({ hasAnimated }) => {
    const softSkillIcons = [Users, BookOpen, Sparkles, Coffee, Lightbulb];
    const allSkills = skills.flatMap(category => category.items);
    const { t } = useTranslation("skill");
    const softSkills = t("softSkills", { returnObjects: true });

    return (
        <section id="skills" className="px-6 py-16 bg-transparent relative">
            <div className="max-w-6xl mx-auto px-3">
                {/* Section Title */}
                <div
                    className={`transition-all duration-1000 delay-100 ${hasAnimated.skills
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                        {t("title")} <span className="text-[#00FF7F]">{t("highlight")}</span>
                    </h2>
                </div>

                {/* Content Wrapper */}
                <div className="flex flex-col gap-3">
                    {/* Top Section */}
                    <div
                        className={`flex-1 transition-all duration-1000 delay-300 ${hasAnimated.skills
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10"
                            }`}
                    >
                        <div className="bg-zinc-900/40 backdrop-blur-lg rounded-2xl p-6 md:p-8  hover:border-[#00FF7F]/50 transition-all duration-500 h-full">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                                {/* Cat */}
                                <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-[#00FF7F]/30 shadow-lg shadow-[#00FF7F]/20 flex-shrink-0 mx-auto sm:mx-0">
                                    <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-100 flex items-center justify-center text-6xl">
                                        🐱
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="flex-1 text-center sm:text-left">
                                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-[#00FF7F]/20 flex items-center justify-center">
                                            <Code2 className="text-[#00FF7F]" size={22} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">
                                            {t("title_tech")}
                                        </h3>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {t("text_tech")}
                                    </p>
                                </div>
                            </div>
                            {/* Auto Scrolling Carousel */}
                            <div className="relative overflow-hidden w-full py-4 ">
                                <div className="flex gap-3 animate-scroll-left whitespace-nowrap">
                                    {[...allSkills, ...allSkills].map((skill, index) => (
                                        <div
                                            key={index}
                                            className={`inline-flex items-center justify-center px-4 rounded-xl ${index % 2 === 0
                                                ? "bg-gradient-to-r from-[#00FF7F] to-[#014422] text-white"
                                                : "bg-white text-[#00FF7F]"
                                                } transition-transform duration-300 pointer-events-none`}
                                        >
                                            <span className="text-2xl mb-1">{skill.icon}</span>
                                            <span className="font-semibold text-xs sm:text-sm text-center">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-3 animate-scroll-right whitespace-nowrap mt-4">
                                    {[...allSkills, ...allSkills].map((skill, index) => (
                                        <div
                                            key={index}
                                            className={`inline-flex items-center justify-center px-4 rounded-xl ${index % 2 === 0
                                                ? "bg-gradient-to-r from-[#00FF7F] to-[#014422] text-white"
                                                : "bg-white text-[#00FF7F]"
                                                } transition-transform duration-300 pointer-events-none`}
                                        >
                                            <span className="text-2xl mb-1">{skill.icon}</span>
                                            <span className="font-semibold text-xs sm:text-sm text-center">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section - Soft Skills */}
                    <div
                        className={`flex-1 transition-all duration-1000 delay-500 ${hasAnimated.skills
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-10"
                            }`}
                    >
                        <div className="bg-zinc-900/40 backdrop-blur-lg rounded-2xl p-6 md:p-8 hover:border-[#00FF7F]/50 transition-all duration-500 h-full">
                            {/* Header */}
                            <div className="flex flex-col-reverse sm:flex-row items-start gap-4 mb-6">
                                <div className="flex-1 text-center sm:text-left">
                                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-[#00FF7F]/20 flex items-center justify-center">
                                            <Sparkles className="text-[#00FF7F]" size={22} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">
                                            {t("title_softskill")}
                                        </h3>
                                    </div>
                                    <p className="text-gray-200 text-sm leading-relaxed">
                                        {t("text_softskill")}
                                    </p>
                                </div>

                                <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-[#00FF7F]/30 shadow-lg shadow-[#00FF7F]/20 mx-auto sm:mx-0">
                                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-6xl">
                                        🐱
                                    </div>
                                </div>
                            </div>

                            {/* Soft Skills List */}
                            <div className="flex flex-wrap-reverse justify-center gap-4">
                                {softSkills.map((skill, index) => {
                                    const SkillIcon = softSkillIcons[index];
                                    return (
                                        <div
                                            key={index}
                                            className="group flex flex-row items-center justify-center px-2 w-full md:w-80 py-1 bg-black/30 rounded-xl border border-zinc-800 hover:border-[#00FF7F] transition-all duration-300 hover:scale-105 cursor-pointer">
                                            <div className="p-3 rounded-lg bg-[#00FF7F]/10 flex items-center justify-center group-hover:bg-[#00FF7F]/20 group-hover:scale-110 transition-all duration-300"
                                            >
                                                <SkillIcon className="text-[#00FF7F]" size={15} />
                                            </div>

                                            <div className="text-start">
                                                <h4 className="text-white font-semibold text-sm sm:text-base mb-1 px-2">
                                                    {skill.name}
                                                </h4>
                                                <p className="text-gray-400 text-xs sm:text-sm leading-snug px-2">
                                                    {skill.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div
                    className={`mt-12 transition-all duration-1000 delay-700 ${hasAnimated.skills
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                        }`}
                >
                    <div className="h-1 bg-gradient-to-r from-transparent via-[#00FF7F] to-transparent rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
