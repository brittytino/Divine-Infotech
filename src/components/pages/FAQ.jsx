import React, { useState, useRef } from 'react';
import courseData from './courseData'; // Import the course data

const FAQ = ({ courseId }) => { // Accept courseId as a prop
    const course = courseData.find(course => course.id === courseId); // Find the course by ID
    const faqs = course ? course.faqs : []; // Get FAQs for the specific course

    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id='faq' className="bg-[#f6f7f8]">
            <div className='lg:w-3/4 py-8 px-4 md:px-8 lg:px-40'>
                <h2 className="text-3xl text-center font-bold mb-4">
                    Still Having 
                    <span className="relative inline-block ml-2">
                        <span className="relative z-10 text-blue-600 mr-2">Doubts?</span>
                        <span className="absolute inset-0 z-0 bg-blue-100 h-4 transform translate-y-4"></span>
                    </span>
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b-2">
                            <div
                                className="flex justify-between items-center p-2 md:p-4 cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="md:text-lg text-sm font-medium text-gray-800">{faq.question}</h3>
                                <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
                            </div>
                            <div
                                ref={el => contentRefs.current[index] = el}
                                className={`overflow-hidden transition-all duration-300 ease-in-out`}
                                style={{
                                    height: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                                }}
                            >
                                <div className="p-4 text-sm md:text-base text-gray-600">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
