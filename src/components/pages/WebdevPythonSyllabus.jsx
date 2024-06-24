import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
        phase: "Phase 1: Foundation (5 Days)",
        topics: [
            {
                title: "Introduction to Web Development",
                details: [
                    "Understand the basics of how websites work and the different technologies involved."
                ]
            },
            {
                title: "Python Fundamentals",
                details: [
                    "Learn the core concepts of Python programming, including variables, data types, operators, control flow, and functions."
                ]
            },
            {
                title: "Setting Up Your Environment",
                details: [
                    "Install Python and a code editor to start writing your first programs."
                ]
            }
        ]
    },
    {
        phase: "Phase 2: Building Blocks (10 Days)",
        topics: [
            {
                title: "HTML & CSS",
                details: [
                    "Dive into the building blocks of web pages - HTML for structure and CSS for styling."
                ]
            },
            {
                title: "Working with Data",
                details: [
                    "Explore how Python handles data, including lists, dictionaries, and files."
                ]
            }
        ]
    },
    {
        phase: "Phase 3: Web Frameworks (10 Days)",
        topics: [
            {
                title: "Introduction to Web Frameworks",
                details: [
                    "Discover frameworks like Django or Flask that simplify web development in Python."
                ]
            },
            {
                title: "Building a Simple Web Application",
                details: [
                    "Put your newfound knowledge into action by creating a basic web app using your chosen framework."
                ]
            },
            {
                title: "Routing and Forms",
                details: [
                    "Learn how to handle user interaction and data submission within your web app."
                ]
            }
        ]
    },
    {
        phase: "Phase 4: Advanced Concepts (5 Days)",
        topics: [
            {
                title: "Databases & APIs",
                details: [
                    "Explore how web applications interact with databases to store and retrieve information. Get introduced to APIs for integrating external services."
                ]
            },
            {
                title: "User Authentication",
                details: [
                    "Implement secure login and user management features in your web app."
                ]
            }
        ]
    },
    {
        phase: "Phase 5: Project & Deployment (5 Days)",
        topics: [
            {
                title: "Develop a Final Project",
                details: [
                    "Apply your skills to build a complete web application based on your interests."
                ]
            },
            {
                title: "Deployment",
                details: [
                    "Learn how to deploy your web application to make it accessible online (optional, depending on the course)."
                ]
            }
        ]
    }
];


const WebdevPythonSyllabus = () => {
    const [openSections, setOpenSections] = useState(new Array(syllabus.length).fill(false));
    const contentRefs = useRef([]);
  
    const toggleSection = (index) => {
      setOpenSections((prevOpenSections) =>
        prevOpenSections.map((isOpen, i) => (i === index ? !isOpen : isOpen))
      );
    };
  
    return (
      <div className="max-w-7xl mx-auto py-8 px-2 sm:px-6 lg:px-8">
        <h2 className="md:text-3xl text-2xl font-semibold mb-6">Course Syllabus</h2>
        <div className="space-y-4">
          {syllabus.map((phase, index) => (
            <div key={index} className="border border-gray-300 rounded-lg shadow-sm">
              <div
                className="flex items-center justify-between bg-gray-200 px-4 py-3 cursor-pointer"
                onClick={() => toggleSection(index)}
              >
                <h3 className="md:text-xl text-sm font-medium">{phase.phase}</h3>
                {openSections[index] ? (
                  <FaChevronUp className="text-xl" />
                ) : (
                  <FaChevronDown className="text-xl" />
                )}
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  openSections[index] ? 'max-h-screen' : 'max-h-0'
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
    );
  };
  
  export default WebdevPythonSyllabus;