import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
        phase: "Phase 1: Introduction to Programming and Basics of C (Days 1-5)",
        topics: [
            {
                title: "Day 1-2: Introduction to Programming",
                details: [
                    "Overview of programming languages and their importance",
                    "Introduction to algorithms and problem-solving techniques",
                ],
            },
            {
                title: "Day 3-4: Basics of C Programming",
                details: [
                    "Introduction to C programming language",
                    "Variables, data types, operators, and expressions",
                    "Control flow: if-else statements, loops, switch-case",
                ],
            },
            {
                title: "Day 5: Functions and Arrays in C",
                details: [
                    "Functions: declaration, definition, and recursion",
                    "Arrays: single-dimensional and multi-dimensional arrays",
                ],
            },
        ],
    },
    {
        phase: "Phase 2: Intermediate C++ Programming (Days 6-10)",
        topics: [
            {
                title: "Day 6-7: Object-Oriented Programming in C++",
                details: [
                    "Classes and objects in C++",
                    "Inheritance, polymorphism, and encapsulation",
                ],
            },
            {
                title: "Day 8-9: C++ Programming Constructs",
                details: [
                    "Pointers and references in C++",
                    "Exception handling and file handling",
                ],
            },
            {
                title: "Day 10: Standard Template Library (STL)",
                details: [
                    "Overview of STL containers (vectors, lists, maps)",
                    "STL algorithms (sorting, searching)",
                ],
            },
        ],
    },
    {
        phase: "Phase 3: Python Programming Fundamentals (Days 11-15)",
        topics: [
            {
                title: "Day 11-12: Introduction to Python",
                details: [
                    "Overview of Python programming language",
                    "Variables, data types, operators, and expressions",
                ],
            },
            {
                title: "Day 13-14: Control Flow and Functions in Python",
                details: [
                    "Control flow: if-else statements, loops",
                    "Functions: defining functions, lambda functions",
                ],
            },
            {
                title: "Day 15: Data Structures in Python",
                details: [
                    "Lists, tuples, dictionaries, and sets",
                    "File handling and exception handling in Python",
                ],
            },
        ],
    },
    {
        phase: "Phase 4: Java Programming Basics (Days 16-20)",
        topics: [
            {
                title: "Day 16-17: Introduction to Java",
                details: [
                    "Basics of Java programming language",
                    "Setting up Java Development Environment (JDK, IDE)",
                ],
            },
            {
                title: "Day 18-19: Object-Oriented Programming in Java",
                details: [
                    "Classes, objects, inheritance, polymorphism",
                    "Abstract classes and interfaces",
                ],
            },
            {
                title: "Day 20: Arrays and Collections in Java",
                details: [
                    "Arrays: single-dimensional and multi-dimensional arrays",
                    "Overview of Java collections framework (lists, sets, maps)",
                ],
            },
        ],
    },
    {
        phase: "Phase 5: Advanced Topics and Project Work (Days 21-25)",
        topics: [
            {
                title: "Day 21-22: Advanced Concepts in Programming",
                details: [
                    "Recursion and dynamic programming",
                    "Introduction to algorithms and data structures",
                ],
            },
            {
                title: "Day 23-24: Introduction to GUI Programming (Optional)",
                details: [
                    "Basics of GUI programming with Java Swing or Python Tkinter",
                ],
            },
            {
                title: "Day 25: Final Project and Review",
                details: [
                    "Designing and implementing a small project integrating concepts from C, C++, Python, and Java",
                    "Project presentation and review",
                ],
            },
        ],
    },
];


const ProgrammingFundamentalsSyllabus = () => {
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
  
  export default ProgrammingFundamentalsSyllabus;