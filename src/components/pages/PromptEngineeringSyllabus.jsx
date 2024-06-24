import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Phase 1: Programming Basics",
      topics: [
        {
          title: "Introduction to programming concepts",
          details: [
            "Understanding the basics of programming",
            "Learning different programming paradigms",
          ],
        },
        {
          title: "Variables, data types, and operators",
          details: [
            "Declaring and initializing variables",
            "Understanding data types",
            "Using operators for calculations and logic",
          ],
        },
        {
          title: "Control flow and loops",
          details: [
            "Using if-else statements for decision making",
            "Implementing loops: for, while, and do-while",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Functions and Modules",
      topics: [
        {
          title: "Writing functions and using libraries",
          details: [
            "Defining and calling functions",
            "Using standard libraries for extended functionality",
          ],
        },
        {
          title: "Scope and namespaces",
          details: [
            "Understanding variable scope",
            "Using namespaces to organize code",
          ],
        },
        {
          title: "Modular programming practices",
          details: [
            "Breaking code into reusable modules",
            "Importing and exporting modules",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Data Structures",
      topics: [
        {
          title: "Arrays, lists, and dictionaries",
          details: [
            "Working with arrays for fixed-size data",
            "Using lists for dynamic data",
            "Storing key-value pairs with dictionaries",
          ],
        },
        {
          title: "Introduction to algorithms",
          details: [
            "Understanding algorithm basics",
            "Learning about complexity and efficiency",
          ],
        },
        {
          title: "Basic sorting and searching techniques",
          details: [
            "Implementing sorting algorithms: bubble sort, selection sort",
            "Using search algorithms: linear search, binary search",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Object-Oriented Programming",
      topics: [
        {
          title: "Principles of OOP (Object-Oriented Programming)",
          details: [
            "Learning the four pillars of OOP",
            "Understanding the importance of OOP in software design",
          ],
        },
        {
          title: "Classes, objects, and inheritance",
          details: [
            "Defining classes and creating objects",
            "Implementing inheritance for code reuse",
          ],
        },
        {
          title: "Encapsulation and polymorphism",
          details: [
            "Encapsulating data within classes",
            "Using polymorphism for flexible code",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Project Development",
      topics: [
        {
          title: "Applying learned concepts to a small project",
          details: [
            "Developing a project from scratch",
            "Incorporating all learned programming concepts",
          ],
        },
        {
          title: "Version control basics (using Git for project management)",
          details: [
            "Understanding the basics of version control",
            "Using Git for project tracking and collaboration",
          ],
        },
        {
          title: "Documentation and best practices",
          details: [
            "Writing clear and concise documentation",
            "Following best practices in code development",
          ],
        },
      ],
    },
  ];
  

const PromptEngineeringSyllabus = () => {
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
  
  export default PromptEngineeringSyllabus;