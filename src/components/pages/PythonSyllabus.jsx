import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const syllabus = [
    {
      module: "MODULE 1: INTRODUCTION TO PYTHON (Days 1-5)",
      days: [
        {
          day: "Day 1: Introduction to Python",
          topics: [
            "What is Python?",
            "Installing Python and setting up the development environment",
            "Running Python code",
            "Python syntax and basic commands",
          ],
        },
        {
          day: "Day 2: Basic Data Types and Variables",
          topics: [
            "Numbers (int, float)",
            "Strings",
            "Booleans",
            "Variables and constants",
            "Type conversion",
          ],
        },
        {
          day: "Day 3: Basic Operators and Expressions",
          topics: [
            "Arithmetic operators",
            "Comparison operators",
            "Logical operators",
            "Assignment operators",
            "Operator precedence",
          ],
        },
        {
          day: "Day 4: Strings and String Methods",
          topics: [
            "String concatenation and replication",
            "String slicing and indexing",
            "String methods: len(), upper(), lower(), replace(), etc.",
            "String formatting",
          ],
        },
        {
          day: "Day 5: Basic Input and Output",
          topics: [
            "print() function",
            "Taking user input with input()",
            "Type casting user input",
            "Simple interactive programs",
          ],
        },
      ],
    },
    {
      module: "MODULE 2: CONTROL FLOW (Days 6-10)",
      days: [
        {
          day: "Day 6: Conditional Statements",
          topics: [
            "if statements",
            "else and elif statements",
            "Nested conditional statements",
            "Ternary operators",
          ],
        },
        {
          day: "Day 7: Loops",
          topics: [
            "while loops",
            "for loops",
            "break and continue statements",
            "Nested loops",
          ],
        },
        {
          day: "Day 8: Lists and Tuples",
          topics: [
            "Creating and accessing lists and tuples",
            "List methods: append(), remove(), sort(), etc.",
            "List slicing",
            "Tuples and immutability",
          ],
        },
        {
          day: "Day 9: Dictionaries and Sets",
          topics: [
            "Creating and accessing dictionaries",
            "Dictionary methods: keys(), values(), items(), etc.",
            "Creating and using sets",
            "Set operations: union, intersection, difference",
          ],
        },
        {
          day: "Day 10: Functions",
          topics: [
            "Defining functions",
            "Function parameters and arguments",
            "Return values",
            "Scope of variables",
            "Lambda functions",
          ],
        },
      ],
    },
    {
      module: "MODULE 3: DATA STRUCTURES AND ALGORITHMS (Days 11-15)",
      days: [
        {
          day: "Day 11: Advanced List Manipulation",
          topics: [
            "List comprehensions",
            "Nested list comprehensions",
            "Working with multi-dimensional lists",
          ],
        },
        {
          day: "Day 12: Working with Files",
          topics: [
            "Reading files",
            "Writing files",
            "File methods: read(), write(), readlines(), etc.",
            "Using with statement for file operations",
          ],
        },
        {
          day: "Day 13: Error Handling",
          topics: [
            "try and except blocks",
            "Handling specific exceptions",
            "finally block",
            "Raising exceptions",
          ],
        },
        {
          day: "Day 14: Modules and Packages",
          topics: [
            "Importing modules",
            "Standard library modules",
            "Creating and using packages",
            "pip and installing third-party packages",
          ],
        },
        {
          day: "Day 15: Basic Algorithms",
          topics: [
            "Sorting algorithms: bubble sort, selection sort, insertion sort",
            "Searching algorithms: linear search, binary search",
            "Understanding algorithm complexity (Big O notation)",
          ],
        },
      ],
    },
    {
      module: "MODULE 4: OBJECT-ORIENTED PROGRAMMING (Days 16-20)",
      days: [
        {
          day: "Day 16: Introduction to OOP",
          topics: [
            "Classes and objects",
            "Defining a class",
            "Creating objects",
          ],
        },
        {
          day: "Day 17: Class Attributes and Methods",
          topics: [
            "Instance attributes and methods",
            "Class attributes and methods",
            "self keyword",
            "__init__ method",
          ],
        },
        {
          day: "Day 18: Inheritance",
          topics: [
            "Inheriting from a parent class",
            "Method overriding",
            "Using super()",
            "Multiple inheritance",
          ],
        },
        {
          day: "Day 19: Encapsulation and Polymorphism",
          topics: [
            "Private attributes and methods",
            "Getter and setter methods",
            "Polymorphism",
            "Method overloading",
          ],
        },
        {
          day: "Day 20: Working with Modules and Packages in OOP",
          topics: [
            "Organizing code with modules and packages",
            "Importing classes and functions",
            "Creating reusable modules",
          ],
        },
      ],
    },
    {
      module: "MODULE 5: ADVANCED PYTHON CONCEPTS (Days 21-25)",
      days: [
        {
          day: "Day 21: Advanced Functions",
          topics: [
            "Decorators",
            "Generators and yield",
            "map(), filter(), and reduce()",
            "Recursive functions",
          ],
        },
        {
          day: "Day 22: Working with JSON and XML",
          topics: [
            "Parsing JSON",
            "Writing JSON",
            "Parsing XML",
            "Writing XML",
          ],
        },
        {
          day: "Day 23: Regular Expressions",
          topics: [
            "Introduction to regular expressions",
            "Using re module",
            "Common regex patterns",
            "Searching and matching with regex",
          ],
        },
        {
          day: "Day 24: Working with Databases",
          topics: [
            "Introduction to databases and SQL",
            "Using SQLite with Python",
            "Performing CRUD operations",
            "Using SQLAlchemy for ORM",
          ],
        },
        {
          day: "Day 25: Web Scraping",
          topics: [
            "Introduction to web scraping",
            "Using requests library",
            "Parsing HTML with BeautifulSoup",
            "Extracting data from web pages",
          ],
        },
      ],
    },
    {
      module: "MODULE 6: PROJECTS AND ADVANCED TOPICS (Days 26-30)",
      days: [
        {
          day: "Day 26: Data Analysis with Pandas",
          topics: [
            "Introduction to Pandas",
            "DataFrames and Series",
            "Reading and writing data",
            "Data manipulation and analysis",
          ],
        },
        {
          day: "Day 27: Data Visualization with Matplotlib",
          topics: [
            "Introduction to Matplotlib",
            "Creating basic plots",
            "Customizing plots",
            "Plotting with Pandas",
          ],
        },
        {
          day: "Day 28: Introduction to APIs",
          topics: [
            "Understanding APIs",
            "Using requests to interact with APIs",
            "Handling API responses",
            "Working with RESTful APIs",
          ],
        },
        {
          day: "Day 29: Building a Web Application with Flask",
          topics: [
            "Introduction to Flask",
            "Setting up a Flask project",
            "Routing and views",
            "Templates and static files",
            "Handling forms and user input",
          ],
        },
        {
          day: "Day 30: Final Project and Review",
          topics: [
            "Full-stack web application project",
            "Review of key concepts",
            "Q&A session",
            "Course conclusion and next steps",
          ],
        },
      ],
    },
  ];

const PythonSyllabus = () => {
  const [openModule, setOpenModule] = useState(null);

  const handleToggle = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold underline underline-offset-4 decoration-blue-700 mb-14 text-center">Course Syllabus</h1>
      {syllabus.map((module, index) => (
        <div key={index} className="mb-6 border-b border-gray-300 pb-4">
          <button
            onClick={() => handleToggle(index)}
            className="flex items-center justify-between w-full text-left text-sm md:text-base font-medium text-gray-700 hover:text-[#453fe1] transition-all"
          >
            <span>{module.module}</span>
            <ChevronDownIcon className={`h-6 w-6 transition-transform ${openModule === index ? 'rotate-180' : ''}`} />
          </button>
          {openModule === index && (
            <div className="mt-4">
              {module.days.map((day, idx) => (
                <div key={idx} className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">{day.day}</h2>
                  <ul className="list-disc list-inside pl-4 mt-2">
                    {day.topics.map((topic, i) => (
                      <li key={i} className="text-gray-600">{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PythonSyllabus;
