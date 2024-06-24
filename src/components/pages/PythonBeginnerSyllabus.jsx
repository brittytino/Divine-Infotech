import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Phase 1: Introduction to Python (Days 1-6)",
      topics: [
        {
          title: "Overview of Python",
          details: [
            "History, features, and applications",
            "Setting up Python environment (interpreter, IDE)",
          ],
        },
        {
          title: "Basics of Python Programming",
          details: [
            "Variables and Data Types",
            "Understanding variables, constants, and data types (integers, floats, strings, booleans)",
          ],
        },
        {
          title: "Control Flow",
          details: [
            "Conditional Statements",
            "Using if, elif, and else statements",
            "Conditional expressions",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Loops and Functions (Days 7-12)",
      topics: [
        {
          title: "For Loops",
          details: [
            "Iterating over sequences (lists, tuples, strings)",
            "Using range() function",
          ],
        },
        {
          title: "While Loops",
          details: [
            "Using while loops",
            "Loop control statements (break, continue, pass)",
          ],
        },
        {
          title: "Functions",
          details: [
            "Defining Functions",
            "Parameters, return values, and function scope",
            "Lambda functions",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Data Structures and File Handling (Days 13-18)",
      topics: [
        {
          title: "Lists",
          details: [
            "Creating and manipulating lists",
            "List comprehensions",
          ],
        },
        {
          title: "Dictionaries",
          details: [
            "Creating and accessing dictionaries",
            "Dictionary methods",
          ],
        },
        {
          title: "Strings and File Handling",
          details: [
            "Working with Strings",
            "String methods and formatting",
            "Regular expressions (basic introduction)",
            "Reading from and writing to files",
            "Using with statement for file handling",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Exception Handling and OOP (Days 19-24)",
      topics: [
        {
          title: "Exception Handling",
          details: [
            "Handling Exceptions",
            "Try, except, else, and finally blocks",
            "Raising exceptions",
          ],
        },
        {
          title: "Object-Oriented Programming (OOP) Basics",
          details: [
            "Introduction to OOP",
            "Classes and objects",
            "Attributes, methods, and constructors",
          ],
        },
        {
          title: "More on OOP",
          details: [
            "Inheritance",
            "Creating subclasses",
            "Method overriding and super() function",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Modules, NumPy, Pandas, and Final Project (Days 25-30)",
      topics: [
        {
          title: "Modules and Packages",
          details: [
            "Creating and Using Modules",
            "Importing modules",
            "Exploring built-in and third-party modules",
          ],
        },
        {
          title: "Introduction to NumPy and Pandas",
          details: [
            "NumPy Basics",
            "Arrays and basic operations",
            "NumPy functions and attributes",
          ],
        },
        {
          title: "Data Analysis with Pandas",
          details: [
            "Introduction to Pandas",
            "Series and DataFrame objects",
            "Data manipulation and analysis",
          ],
        },
        {
          title: "Final Project and Review",
          details: [
            "Applying learned concepts to solve a programming problem",
            "Presenting and reviewing the final project",
          ],
        },
      ],
    },
  ];
  

const PythonBeginnerSyllabus = () => {
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
  
  export default PythonBeginnerSyllabus;