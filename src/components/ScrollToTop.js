// src/components/ScrollToTop.js

import React, { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <div
                    className="fixed bottom-4 right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full cursor-pointer transition-all duration-300"
                    onClick={scrollToTop}
                >
                    <FiChevronUp className="text-3xl" />
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
