import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Java Programming for Beginners (Duration: 15 days)",
      topics: [
        {
          title: "Week 1: Introduction to Java",
          details: [
            "Overview of Java programming language",
            "Setting up Java Development Environment (JDK, IDE)",
            "Variables, data types, operators, and expressions",
            "Control flow: if-else statements, loops",
          ],
        },
        {
          title: "Week 2: Object-Oriented Programming in Java",
          details: [
            "Classes and objects",
            "Inheritance, polymorphism, encapsulation",
            "Arrays and collections",
            "Exception handling",
          ],
        },
      ],
    },
    {
      phase: "Week 3: Java Development Practices",
      topics: [
        {
          title: "File handling and I/O operations",
          details: [],
        },
        {
          title: "Introduction to GUI programming with Swing (optional)",
          details: [],
        },
        {
          title: "Introduction to basic data structures (lists, stacks, queues)",
          details: [],
        },
        {
          title: "Introduction to basic algorithms (sorting, searching)",
          details: [],
        },
      ],
    },
  ];
     


const JavsaBeginnerSyllabus = () => {
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
  
  export default JavsaBeginnerSyllabus;