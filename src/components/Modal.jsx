import { ExternalLink, Github, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Carousel from './Carousel';
import { useTranslation } from 'react-i18next';

const Modal = ({ isOpen, onClose, project }) => {
    const [visible, setVisible] = useState(false);
    const [animate, setAnimate] = useState(false);
    const { t } = useTranslation("project");

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
                className="fixed inset-0 bg-transparent"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`relative bg-black/80 backdrop-blur-md rounded-2xl shadow-2xl md:max-w-5xl w-full border border-[#00d369]/30 transition-all duration-300 transform ease-in-out
                        ${animate ? 'scale-100  opacity-100' : 'scale-50 opacity-0'}`}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-0 right-0 bg-white/10 hover:bg-white/20 p-2 rounded-tr-2xl rounded-bl-lg transition-colors z-10"
                    >
                        <X size={24} className="text-red-500" />
                    </button>

                    {/* Modal Content */}
                    <div className="flex flex-col max-h-[80vh] overflow-hidden">
                        {/* Image */}
                        <div className="relative">
                            <Carousel items={project?.img || ""} />
                        </div>

                        {/* Content */}
                        <div className="p-8 overflow-y-hidden ">
                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Left Column */}
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#00d369] to-blue-500 bg-clip-text text-transparent">
                                        {project?.title || ""}
                                    </h2>

                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {project?.description || ""}
                                    </p>
                                </div>

                                {/* Right Column */}
                                <div className="w-1/2">
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-[#00d369] mb-3">
                                            {t("text_tech")}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project?.tech.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-2 bg-gradient-to-r from-[#00d369]/20 to-blue-600/20 text-[#00d369] text-sm rounded-lg border border-[#00d369]/30 font-medium hover:scale-105 transition-transform"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-5">
                                <a
                                    href={project?.demo || ""}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gradient-to-r from-[#00d369] to-blue-600 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-[#00d369]/50"
                                >
                                    <ExternalLink size={20} />
                                    {t("btn_demo")}
                                </a>
                                <a
                                    href={project?.github || ""}
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
