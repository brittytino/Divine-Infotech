import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { FaCaretRight } from "react-icons/fa";


const fullStackSyllabus = [
    {
        phase: "Phase 1: Frontend Foundations",
        topics: [
            {
                title: "HTML, CSS, and JavaScript basics",
                details: [
                    "Understanding the structure of a webpage using HTML",
                    "Styling elements using CSS and building responsive designs",
                    "Introduction to JavaScript for dynamic content"
                ]
            },
            {
                title: "Responsive design with Bootstrap and Flexbox",
                details: [
                    "Using Bootstrap for rapid design",
                    "Flexbox fundamentals for responsive layout"
                ]
            }
        ]
    },
    {
        phase: "Phase 2: Advanced Frontend Techniques",
        topics: [
            {
                title: "ReactJS, Redux, and Single-Page Applications",
                details: [
                    "Building modular applications using ReactJS",
                    "State management with Redux",
                    "Creating dynamic Single-Page Applications (SPA)"
                ]
            },
            {
                title: "CSS Grid and Material UI",
                details: [
                    "Using CSS Grid for complex layouts",
                    "Building component libraries with Material UI"
                ]
            }
        ]
    },
    {
        phase: "Phase 3: Backend Development Essentials",
        topics: [
            {
                title: "Node.js, Express.js, and RESTful API Development",
                details: [
                    "Introduction to backend development with Node.js",
                    "Creating RESTful APIs using Express.js",
                    "Handling HTTP requests and responses"
                ]
            },
            {
                title: "Database integration with MongoDB",
                details: [
                    "Storing and retrieving data using MongoDB",
                    "Connecting MongoDB with backend using Mongoose"
                ]
            }
        ]
    },
    {
        phase: "Phase 4: Full Stack Integration",
        topics: [
            {
                title: "Connecting frontend with backend",
                details: [
                    "Using APIs to communicate between frontend and backend",
                    "Passing data using REST architecture"
                ]
            },
            {
                title: "Authentication & Authorization (JWT)",
                details: [
                    "Securing the application with JSON Web Tokens",
                    "Implementing role-based access control"
                ]
            }
        ]
    },
    {
        phase: "Phase 5: Deployment & Project Showcase",
        topics: [
            {
                title: "Version control with Git & GitHub",
                details: [
                    "Collaborating on projects using Git",
                    "Pushing code to GitHub and managing repositories"
                ]
            },
            {
                title: "Cloud deployment (Heroku/AWS)",
                details: [
                    "Deploying full-stack applications to Heroku",
                    "Exploring AWS for cloud solutions"
                ]
            },
            {
                title: "Real-world project presentation & portfolio building",
                details: [
                    "Showcasing your projects in a professional portfolio",
                    "Preparing for job interviews with a solid project"
                ]
            }
        ]
    }
];

const FullStackSyllabus = () => {
    const [openIndex, setOpenIndex] = useState(null); // Track the open section index
    const contentRefs = useRef([]);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the section, close if already open
    };

    return (
        <div id='syllabus' className="bg-[#f6f7f8]  py-8 px-2  lg:px-40">
            <div className='lg:w-3/4 py-10'>
            <h2 className=" font-bold text-black text-3xl md:text-4xl leading-tight mb-6">Topics You will Learn</h2>
            <div className="space-y-4">
                {fullStackSyllabus.map((phase, index) => (
                    <div key={index} className="border-l-4  border-blue-500 rounded-xl shadow-md">
                        <div
                            className="flex items-center justify-between bg-gray-50 rounded-xl md:px-4 py-3 cursor-pointer"
                            onClick={() => toggleSection(index)}
                        >
                            <h3 className="md:text-xl text-sm font-semibold flex px-2 md:px-0 items-center">
                                <FaCaretRight className='text-blue-600 h-6 w-6 md:h-8 md:w-8 md:mr-4'/>
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
            </div></div>
        </div>
    );
};

export default FullStackSyllabus;
