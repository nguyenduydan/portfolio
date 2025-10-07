import React from 'react';

const Footer = () => {
    return (
        <footer className='flex justify-center items-center py-10 mt-5 '>
            {/* Footer note */}
            <div className="mt-16 text-gray-500 text-sm">
                © {new Date().getFullYear()} — by ❤️{" "}
                <span className="text-[#00d369] font-semibold">Fog</span>. <span>Built with ReactJS and Tailwind CSS.</span>
            </div>
        </footer>
    );
};

export default Footer;
