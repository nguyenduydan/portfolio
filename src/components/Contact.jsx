import React, { useState } from "react";
import { Mail, Linkedin, Github, Facebook, Phone, Copy, Check } from "lucide-react";
import { contactLinks } from "../data/contact.js";

const iconMap = {
    Facebook: Facebook,
    LinkedIn: Linkedin,
    GitHub: Github,
};

const Contact = () => {
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === 'phone') {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        } else {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        }
    };

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
                    <p className="text-gray-40 mb-3 max-w-2xl mx-auto">
                        Hãy kết nối với tôi qua các nền tảng dưới đây — tôi luôn sẵn lòng trao đổi,
                        hợp tác hoặc thảo luận về các ý tưởng công nghệ mới 💡
                    </p>
                    <div className="flex flex-col items-center justify-center py-6 gap-6">
                        {/* Phone */}
                        <div className="group relative w-full">
                            {/* Animated background glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>

                            <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-4 border border-green-400/20 group-hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-400/20">
                                <div className="flex items-center justify-between gap-4">
                                    {/* Icon with animation */}
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                            <div className="relative bg-gradient-to-br from-green-400 to-emerald-600 p-3 rounded-full group-hover:rotate-12 transition-transform duration-300">
                                                <Phone className="text-white" size={24} />
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="text-gray-400 text-sm text-start font-medium mb-1">Số điện thoại</span>
                                            <a
                                                href="tel:0898394312"
                                                className="text-green-400 text-md md:text-xl font-bold tracking-wider group-hover:text-green-300 transition-colors"
                                            >
                                                0898 394 312
                                            </a>
                                        </div>
                                    </div>

                                    {/* Copy button */}
                                    <button
                                        onClick={() => copyToClipboard('0898394312', 'phone')}
                                        aria-label={copiedPhone ? "Copied phone number" : "Copy phone number"}
                                        className="bg-green-400/10 hover:bg-green-400/20 p-3 rounded-lg border border-green-400/30 hover:border-green-400/50 transition-all duration-300 group/btn hover:scale-110 cursor-pointer"
                                    >
                                        {copiedPhone ? (
                                            <Check className="text-green-400" size={20} />
                                        ) : (
                                            <Copy className="text-green-400 group-hover/btn:rotate-12 transition-transform" size={20} />
                                        )}
                                    </button>

                                </div>

                                {/* Animated underline */}
                                <div className="h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="group relative w-full">
                            {/* Animated background glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>

                            <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-4 border border-blue-400/20 group-hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20">
                                <div className="flex items-center justify-between gap-4">
                                    {/* Icon with animation */}
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                            <div className="relative bg-gradient-to-br from-blue-400 to-cyan-600 p-3 rounded-full group-hover:rotate-12 transition-transform duration-300">
                                                <Mail className="text-white" size={24} />
                                            </div>
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="text-gray-400 text-sm font-medium mb-1 text-start">Email</span>
                                            <a
                                                href="mailto:duydan.cv@gmail.com"
                                                className="text-blue-400 text-md md:text-xl font-bold group-hover:text-blue-300 transition-colors break-all"
                                            >
                                                duydan.cv@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Copy button */}
                                    <button
                                        onClick={() => copyToClipboard('duydan.cv@gmail.com', 'email')}
                                        aria-label={copiedPhone ? "Copied email" : "Copy email"}
                                        className="bg-blue-400/10 hover:bg-blue-400/20 p-3 rounded-lg border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 group/btn hover:scale-110 cursor-pointer"
                                    >
                                        {copiedEmail ? (
                                            <Check className="text-blue-400" size={20} />
                                        ) : (
                                            <Copy className="text-blue-400 group-hover/btn:rotate-12 transition-transform" size={20} />
                                        )}
                                    </button>
                                </div>

                                {/* Animated underline */}
                                <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="flex justify-center gap-3 mt-4">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                    </div>
                    {/* Contact Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
                        {contactLinks.map((link, index) => {
                            const Icon = iconMap[link.label];
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
            </div >

        </section >
    );
};

export default Contact;
