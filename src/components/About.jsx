import React from 'react';
import { Github, Linkedin, Mail, Download, Phone } from 'lucide-react';

const About = ({ hasAnimated }) => {
    return (
        <section id='about' className='md:px-10 px-5 py-16 bg-transparent relative flex items-center'>
            <div className="md:max-w-6xl max-w-3xl mx-auto w-full py-5">
                {/* Title */}
                <div className={`transition-all duration-1000 delay-100 ${hasAnimated.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <h2 className='text-4xl md:text-5xl font-bold mb-15 text-center'>
                        Thông tin <span className='text-[#00FF7F]'>về mình</span>
                    </h2>
                </div>

                {/* Content Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-centerp-10 rounded-4xl py-5'>
                    {/* Left Side - Text Content */}
                    <div className={`transition-all duration-1000 delay-300 ${hasAnimated.about ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        <div className='space-y-6'>
                            <p className='text-gray-600 text-lg leading-relaxed'> Xin chào! Mình là một <span className='text-[#009c4e] font-semibold'>Lập trình viên Backend</span> mới ra trường, đam mê xây dựng các ứng dụng web ổn định và những API mạnh mẽ, mang lại trải nghiệm tốt nhất cho người dùng.
                            </p>
                            <p className='text-gray-600 text-lg leading-relaxed'> Mình có kiến thức và kinh nghiệm thực hành với các ngôn ngữ lập trình như <span className='text-[#009c4e] font-semibold'>PHP, JavaScript, HTML/CSS, C++, C#</span> cùng với các framework hiện đại như <span className='text-[#009c4e] font-semibold'>ReactJS, ASP.NET, Express và Laravel</span>. Ngoài ra, mình quen thuộc với nhiều hệ quản trị cơ sở dữ liệu như <span className='text-[#009c4e] font-semibold'>SQL Server, MySQL</span> và <span className='text-[#009c4e] font-semibold'>MongoDB</span>.
                            </p>
                            <p className='text-gray-600 text-lg leading-relaxed'> Mình là người <span className='text-[#009c4e] font-semibold'>lập kế hoạch hiệu quả</span>, có khả năng phối hợp tốt trong môi trường làm việc có thời hạn chặt chẽ. Là một người <span className='text-[#009c4e] font-semibold'>cởi mở và nhiệt tình</span>, mình luôn sẵn sàng học hỏi và hợp tác để cùng nhóm đạt được kết quả tốt nhất.
                            </p>
                        </div>
                        {/* Action Buttons */}
                        <div className='flex flex-wrap gap-4 pt-6 justify-center'>
                            <a
                                href="#contact"
                                className='inline-flex items-center px-6 py-3 bg-[#00FF7F] text-black font-semibold rounded-lg hover:bg-[#00FF7F]/90 transition-all duration-300 hover:scale-105'
                            >
                                <Phone size={20} className='mr-2 animate-bounce' />
                                Liên hệ mình
                            </a>

                            <a
                                href="/cv.pdf"
                                download
                                className='inline-flex items-center px-6 py-3 border-2 border-[#00FF7F] text-[#00FF7F] font-semibold rounded-lg hover:bg-[#00FF7F] hover:text-black transition-all duration-300 hover:scale-105'
                            >
                                <Download size={20} className='mr-2' />
                                Download CV
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
