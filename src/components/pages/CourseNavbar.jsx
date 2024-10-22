import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-scroll';

const CourseNavbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const navRef = useRef(null);

    const sections = [
        { id: "about", name: "About" },
        { id: "syllabus", name: "Syllabus" },
        { id: "certificate", name: "Certificate" },
        { id: "benefits", name: "Bonus" },
        { id: "testimony", name: "Testimony" },
        { id: "faq", name: "FAQ" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const pageYOffset = window.pageYOffset;
            let newActiveSection = "";

            sections.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) {
                    const elementTop = element.offsetTop;
                    const elementBottom = elementTop + element.clientHeight;

                    if (pageYOffset >= elementTop && pageYOffset < elementBottom) {
                        newActiveSection = id;
                    }
                }
            });

            if (newActiveSection !== activeSection) {
                setActiveSection(newActiveSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    useEffect(() => {
        if (activeSection && navRef.current) {
            const activeElement = navRef.current.querySelector(`[data-section="${activeSection}"]`);
            if (activeElement) {
                activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [activeSection]);

    return (
        <div className="w-full shadow-sm sticky top-0  bg-white z-20 border-b-2 border-gray-100">
            <nav ref={navRef} className="w-full px-5 md:px-32 overflow-x-auto scrollbar-hide">
                <ul className="flex whitespace-nowrap md:flex-wrap gap-4 md:gap-8">
                    {sections.map(({ id, name }) => (
                        <li key={id} className="flex-shrink-0">
                            <Link
                                to={id}
                                spy={true}
                                smooth={true}
                                duration={500}
                                data-section={id}
                                className={`block cursor-pointer p-4 font-medium text-center transition-colors duration-300 ${
                                    activeSection === id ? 'bg-blue-100 text-semibold' : ''
                                }`}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default CourseNavbar;
