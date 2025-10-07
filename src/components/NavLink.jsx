import React from "react";

const NavLink = ({ item, isScroll, scrollToSection }) => {
    return (
        <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
            }}
            className={`
                relative font-semibold transition-all duration-300 ease-out
                ${isScroll ? 'text-white/90 text-md' : 'text-gray-700 text-md'}
                hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]
                after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[3px]
                after:w-0 after:bg-gradient-to-r after:from-cyan-500 after:to-[#00FF7F]  after:rounded-full after:transition-all after:duration-300
                hover:after:left-0 hover:after:w-full
            `}
        >
            {item.label}
        </a>
    );
};

export default NavLink;
