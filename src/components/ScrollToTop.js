import React, { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to certain amount
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

    // Scroll to top on button click
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
                    className="fixed bottom-6 right-6 z-10 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full cursor-pointer transition-all duration-300"
                    onClick={scrollToTop}
                >
                    <FiChevronUp className="text-3xl" />
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
