import React from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = ({ showScrollTop }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-8 bg-gradient-to-bl from-green-400 to-black text-white p-3 rounded-full hover:bg-gray-800 transition-all duration-500 shadow-lg cursor-pointer
                transform ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
            `}
        >
            <ArrowUp className="h-5 w-5 animate-bounce" />
        </button>
    );
};

export default ScrollToTop;
