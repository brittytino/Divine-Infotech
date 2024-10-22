import React, { useRef, useEffect, useState } from 'react';
import courseData from './courseData'; // Import the course data

const ToolsCovered = ({ courseId }) => { // Accept courseId as a prop
    const course = courseData.find(course => course.id === courseId); // Find the course by ID
    const tools = course ? course.tools : []; // Get tools for the specific course

    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollAmount = 150; // Adjust this value based on your card width

    const scrollToNext = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
            setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length);
        }
    };

    const scrollToIndex = (index) => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: scrollAmount * index,
                behavior: 'smooth',
            });
            setCurrentIndex(index);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            scrollToNext();
        }, 3000); // Adjust the delay for automatic scrolling

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white lg:px-32 mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">Tools Covered</h2>
            <div className="flex overflow-hidden space-x-4 pb-4" ref={scrollRef}>
                {tools.map((tool, index) => (
                    <div key={index} className={`flex-shrink-0 h-24 md:h-40 w-32 flex flex-col items-center justify-center ${courseId !== 1 ? 'rounded-lg shadow-md' : ''}`}>
                        <img src={tool.logo} alt={tool.name} className={`mb-2 px-2 ${courseId !== 1 ? 'h-16' : ''}`} />
                        {/* Conditional rendering based on courseId */}
                        {courseId !== 1 && <p className='text-center px-2 text-xs'>{tool.name}</p>}
                    </div>
                ))}
            </div>
            <div className="flex justify-center space-x-2 mt-4">
                {tools.slice(0, 4).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'} hover:bg-gray-400 focus:outline-none`}
                        onClick={() => scrollToIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToolsCovered;
