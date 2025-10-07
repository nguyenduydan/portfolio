import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { contactLinks } from "../data/contact.js";

const iconMap = {
    Email: Mail,
    LinkedIn: Linkedin,
    GitHub: Github,
};

const Contact = () => {
    return (
        <section
            id="contact"
            className="flex justify-center relative py-10 bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden"
        >
            <div className="max-w-6xl">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#00d36920,_transparent_70%)] pointer-events-none" />

                <div className="relative container mx-auto px-6 py-20 text-center">
                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00d369] to-blue-500 bg-clip-text text-transparent">
                        Liên hệ với tôi
                    </h2>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                        Hãy kết nối với tôi qua các nền tảng dưới đây — tôi luôn sẵn lòng trao đổi,
                        hợp tác hoặc thảo luận về các ý tưởng công nghệ mới 💡
                    </p>

                    {/* Contact Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
                        {contactLinks.map((link, index) => {
                            const Icon = iconMap[link.label];

                            // 🧠 Logic layout:
                            // - Email chiếm full hàng (col-span-2 trên md)
                            // - Các link còn lại chia đều 2 cột
                            const isEmail = link.label === "Email";
                            const gridClass =
                                isEmail
                                    ? "md:col-span-2 lg:col-span-1 w-full"
                                    : "w-full";

                            return (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/10 border border-white/10 hover:bg-gradient-to-r hover:from-[#00d369] hover:to-blue-600 hover:shadow-[0_0_20px_#00d36950] hover:scale-105 transition-all duration-300 ${gridClass}`}
                                >
                                    <Icon
                                        size={22}
                                        className="text-[#00d369] group-hover:text-white transition-colors"
                                    />
                                    <span className="font-medium text-gray-200 group-hover:text-white">
                                        {link.label}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;
