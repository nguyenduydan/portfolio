import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Card = ({ project, onClick }) => {
    const { t } = useTranslation("project");
    return (
        <div
            className='group bg-white rounded-2xl border-3 border-black overflow-hidden shadow-lg hover:drop-shadow-[15px_20px_0_black] transition-all duration-200 transform animate-fade-in ease-in-out hover:-translate-y-4'
        >
            {/* Project Image */}
            <div className='relative h-52 overflow-hidden bg-black border-b-3'>
                <img
                    src={project.img[0]?.url || null}
                    alt={project?.title || "No image"}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className='absolute hidden md:block inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    <div className='absolute bottom-4 left-4 right-4 flex gap-3'>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project?.github}
                            className='flex-1 bg-white text-gray-900 py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-white transition-colors'
                        >
                            <Github size={18} />
                            Code
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project?.demo}
                            className='flex-1 bg-gradient-to-l from-[#00d369] to-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors'
                        >
                            <ExternalLink size={18} />
                            Live
                        </a>
                    </div>
                </div>
            </div>

            {/* Project Info */}
            <div className='p-6 pointer-events-none'>
                <h3 className='text-xl font-bold text-black mb-2 group-hover:text-[#00d369] transition-colors'>
                    {project.title}
                </h3>

                {/* Tags */}
                <div className="flex gap-2 items-center">
                    {project.tech.slice(0, 3).map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-[#00d369] to-black text-white text-sm rounded-full shadow-md font-medium"
                        >
                            {tag}
                        </span>
                    ))}

                    {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-gradient-to-r from-[#00d369] to-black text-white text-sm rounded-full font-medium">...</span>
                    )}
                </div>
                <div className='md:hidden flex gap-5 mt-5'>
                    <a
                        target="_blank"
                        href={project.github}
                        className='flex-1 bg-white border-3 text-gray-900 py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-white transition-colors pointer-events-auto'
                    >
                        <Github size={18} />
                        Code
                    </a>
                    <a
                        target="_blank"
                        href={project.demo}
                        className='flex-1 bg-gradient-to-l from-[#00d369] to-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors pointer-events-auto'
                    >
                        <ExternalLink size={18} />
                        {t("btn_demo")}
                    </a>
                </div>
            </div>

            {/* View Details Link */}
            <div className='px-6 pb-6 hidden md:block'>
                <button className='w-full text-emerald-400 font-medium flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 group/btn'
                    onClick={onClick}
                >
                    {t("btn_detail")}
                    <ChevronRight size={18} className='group-hover/btn:translate-x-1 transition-transform' />
                </button>
            </div>
        </div>
    );
};

export default Card;
