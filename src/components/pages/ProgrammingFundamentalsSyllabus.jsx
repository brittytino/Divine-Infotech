import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
        phase: "Phase 1: Introduction to Programming (Days 1-7)",
        topics: [
            {
                title: "Objective: Establish a foundational understanding of programming concepts and logic.",
                details: [
                    "Introduction to Programming",
                    "Overview of programming paradigms (procedural, object-oriented)",
                    "Importance of algorithms and problem-solving techniques",
                    "Basics of compiling and executing programs",
                ],
            },
            {
                title: "Introduction to C Programming",
                details: [
                    "Structure of a C program",
                    "Variables, data types, and operators in C",
                    "Control flow statements (if-else, loops) in C",
                ],
            },
        ],
    },
    {
        phase: "Phase 2: Object-Oriented Programming with C++ (Days 8-14)",
        topics: [
            {
                title: "Objective: Learn the principles of object-oriented programming (OOP) using C++.",
                details: [
                    "Basics of C++ Programming",
                    "Classes, objects, and methods in C++",
                    "Encapsulation and data abstraction",
                    "Inheritance and polymorphism in C++",
                ],
            },
            {
                title: "Advanced Concepts in C++",
                details: [
                    "Templates and generic programming in C++",
                    "Exception handling and error management",
                    "Standard Template Library (STL) overview",
                ],
            },
        ],
    },
    {
        phase: "Phase 3: Python Programming Fundamentals (Days 15-21)",
        topics: [
            {
                title: "Objective: Explore Python's syntax, data structures, and application development capabilities.",
                details: [
                    "Introduction to Python",
                    "Python language fundamentals and syntax",
                    "Variables, data types, and basic operators",
                    "Control flow statements (if-else, loops) in Python",
                ],
            },
            {
                title: "Data Structures in Python",
                details: [
                    "Lists, tuples, dictionaries, and sets in Python",
                    "Understanding mutability and immutability",
                    "Iterators and generators in Python",
                ],
            },
        ],
    },
    {
        phase: "Phase 4: Core Java Programming (Days 22-28)",
        topics: [
            {
                title: "Objective: Develop foundational skills in Java programming for application development.",
                details: [
                    "Introduction to Java",
                    "Overview of Java language and its platform",
                    "Setting up Java development environment (JDK, IDEs)",
                    "Writing and executing Java programs",
                ],
            },
            {
                title: "Object-Oriented Programming in Java",
                details: [
                    "Classes, objects, and methods in Java",
                    "Inheritance, polymorphism, and encapsulation",
                    "Interfaces and abstract classes in Java",
                ],
            },
        ],
    },
    {
        phase: "Phase 5: Application Development and Project (Days 29-30)",
        topics: [
            {
                title: "Objective: Apply learned concepts to develop basic applications in each programming language.",
                details: [
                    "Programming Exercises",
                    "Solving programming problems using C, C++, Python, and Java",
                    "Implementing algorithms and data structures",
                    "Hands-on coding exercises to reinforce learning",
                ],
            },
            {
                title: "Capstone Project",
                details: [
                    "Developing a small application or module in each language",
                    "Applying programming concepts and best practices",
                    "Presenting the project and receiving feedback",
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