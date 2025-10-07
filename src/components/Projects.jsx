
import { projects } from '../data/projects';
import Card from './Card';

const Projects = ({ hasAnimated }) => {

    return (
        <section id='projects' className='py-16 md:px-10 px-5 min-h-screen'>
            <div className="md:max-w-6xl max-w-3xl mx-auto w-full py-10">
                <div className={`transition-all ease-out duration-1000 delay-300 ${hasAnimated.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    {/* Header */}
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                            <span className='bg-gradient-to-r from-[#00FF7F] to-black text-transparent bg-clip-text'>Dự án</span> của mình
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            Khám phá những tác phẩm mới nhất và các giải pháp sáng tạo của tôi. Mỗi dự án đều là một thử thách và trải nghiệm học tập độc đáo
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up'>
                        {projects.map((project, index) => (
                            <Card index={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
