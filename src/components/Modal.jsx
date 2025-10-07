import { ExternalLink, Github, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose, project }) => {
    const [visible, setVisible] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            // delay nhẹ để transition kick in
            const timeout = setTimeout(() => setAnimate(true), 10);
            return () => clearTimeout(timeout);
        } else {
            setAnimate(false);
            const timeout = setTimeout(() => setVisible(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    if (!visible) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                className="fixed inset-0 z-40 bg-transparent"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`relative bg-black/80 backdrop-blur-md rounded-2xl shadow-2xl max-w-4xl w-full border border-[#00d369]/30 transition-all duration-300 transform
                        ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-0 right-0 bg-white/10 hover:bg-white/20 p-2 rounded-tr-lg rounded-bl-lg transition-colors z-10 cursor-pointer"
                    >
                        <X size={24} className="text-white" />
                    </button>

                    {/* Modal Content */}
                    <div className="flex flex-col md:flex-row max-h-[90vh] overflow-hidden">
                        {/* Image */}
                        <div className="md:w-1/2 relative">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-64 md:h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="md:w-1/2 p-8 overflow-y-auto">
                            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#00d369] to-blue-500 bg-clip-text text-transparent">
                                {project.title}
                            </h2>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-[#00d369] mb-3">
                                    Công nghệ sử dụng
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-gradient-to-r from-[#00d369]/20 to-blue-600/20 text-[#00d369] text-sm rounded-lg border border-[#00d369]/30 font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-[#00d369] mb-3">
                                    Tính năng nổi bật
                                </h3>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#00d369] mt-1">✓</span>
                                        <span>Giao diện hiện đại, responsive</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#00d369] mt-1">✓</span>
                                        <span>Tối ưu hiệu suất cao</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#00d369] mt-1">✓</span>
                                        <span>Bảo mật và an toàn</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gradient-to-r from-[#00d369] to-blue-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-[#00d369]/50"
                                >
                                    <ExternalLink size={20} />
                                    Xem Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-semibold transition-all border border-white/20"
                                >
                                    <Github size={20} />
                                    Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
