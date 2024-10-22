import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import courseData from './courseData'; // Import the course data


const SyllabusAccordion = ({ courseId }) => { // Accept courseId as a prop
    const course = courseData.find(course => course.id === courseId); // Find the course by ID

    const [openIndex, setOpenIndex] = useState(null); // Track the open section index
    const contentRefs = useRef([]);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the section, close if already open
    };

    return (
        <div id='syllabus' className="bg-[#f6f7f8] py-8 px-2 lg:px-40">
            <div className='lg:w-3/4 py-10'>
                <h2 className="font-bold text-black text-3xl md:text-4xl leading-tight mb-6">Topics You will Learn</h2>
                <div className="space-y-4">
                    {course.syllabus.map((phase, index) => (
                        <div key={index} className="border-l-4 border-blue-500 rounded-xl shadow-md">
                            <div
                                className="flex items-center justify-between bg-gray-50 rounded-xl md:px-4 py-3 cursor-pointer"
                                onClick={() => toggleSection(index)}
                            >
                                <h3 className="md:text-xl text-sm font-semibold flex px-2 md:px-0 items-center">
                                    <span className="flex-1">{phase.phase}</span>
                                </h3>
                                <div className="flex items-center px-2 ">
                                    {openIndex === index ? (
                                        <FaChevronUp className="text-lg " />
                                    ) : (
                                        <FaChevronDown className="text-lg " />
                                    )}
                                </div>
                            </div>
                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                                    openIndex === index ? 'max-h-screen' : 'max-h-0'
                                }`}
                                style={{ transitionProperty: 'max-height' }}
                            >
                                <div className="bg-white px-4 py-3">
                                    {phase.topics.map((topic, idx) => (
                                        <div key={idx} className="mb-4">
                                            <h4 className="text-lg font-semibold text-gray-700">{topic.title}</h4>
                                            <ul className="list-disc list-inside pl-4 mt-2 space-y-2">
                                                {topic.details.map((detail, i) => (
                                                    <li key={i} className="text-gray-600">{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SyllabusAccordion;
