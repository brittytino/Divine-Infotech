import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
    phase: "Phase 1: Java Fundamentals Review (Days 1-8)",
    topics: [
      {
        title: "Review of Core Java Concepts",
        details: [
          "Recap of Java syntax, data types, and operators",
          "Control flow statements (if-else, loops)",
          "Methods, classes, and objects in Java",
        ],
      },
      {
        title: "Exception Handling",
        details: [
          "Handling exceptions in Java (try-catch, throws, throw)",
          "Custom exceptions and best practices",
          "Using Java's built-in exception classes",
        ],
      },
      {
        title: "Collections Framework",
        details: [
          "Overview of Java Collections (List, Set, Map)",
          "Using iterators and enhancing for loops",
          "Understanding the differences between collections",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Object-Oriented Programming in Depth (Days 9-16)",
    topics: [
      {
        title: "Inheritance and Polymorphism",
        details: [
          "Implementing inheritance in Java classes",
          "Method overriding and dynamic method dispatch",
          "Understanding polymorphism and its practical applications",
        ],
      },
      {
        title: "Abstract Classes and Interfaces",
        details: [
          "Creating abstract classes and methods",
          "Implementing interfaces for multiple inheritance",
          "Using interfaces to define contracts and behaviors",
        ],
      },
      {
        title: "Design Patterns",
        details: [
          "Introduction to common design patterns (e.g., Singleton, Factory)",
          "Applying design patterns to solve real-world problems",
          "Benefits and drawbacks of design pattern usage",
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Advanced Java Features (Days 17-26)",
    topics: [
      {
        title: "Concurrency in Java",
        details: [
          "Introduction to threads and multithreading in Java",
          "Synchronization and thread safety",
          "Java's Executor framework and concurrent collections",
        ],
      },
      {
        title: "Java I/O and File Handling",
        details: [
          "Reading and writing files using Java I/O classes",
          "Working with streams and readers/writers",
          "Serialization and deserialization of objects",
        ],
      },
      {
        title: "Java Database Connectivity (JDBC)",
        details: [
          "Connecting Java applications to databases",
          "Performing CRUD operations using JDBC",
          "Handling transactions and batch processing",
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Java Enterprise Edition (Java EE) (Days 27-35)",
    topics: [
      {
        title: "Servlets and JSP",
        details: [
          "Creating dynamic web applications with Servlets",
          "Integrating Java code with JSP pages",
          "Session management and request handling",
        ],
      },
      {
        title: "Java Persistence API (JPA)",
        details: [
          "Introduction to JPA for object-relational mapping (ORM)",
          "Configuring persistence units and entities",
          "Performing CRUD operations with JPA",
        ],
      },
      {
        title: "Introduction to Spring Framework",
        details: [
          "Overview of Spring framework and its modules",
          "Dependency Injection (DI) and Inversion of Control (IoC)",
          "Integrating Spring with Java EE applications",
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Advanced Topics and Application Development (Days 36-40)",
    topics: [
      {
        title: "RESTful Web Services with JAX-RS",
        details: [
          "Designing and implementing RESTful APIs in Java",
          "Using JAX-RS annotations for resource mapping",
          "Consuming RESTful services in Java applications",
        ],
      },
      {
        title: "Testing and Debugging",
        details: [
          "Unit testing with JUnit framework",
          "Debugging techniques and tools in Java IDEs",
          "Writing effective test cases and test suites",
        ],
      },
      {
        title: "Capstone Project",
        details: [
          "Developing a complex Java application or module",
          "Applying all learned concepts and best practices",
          "Presenting the project and receiving feedback",
        ],
      },
    ],
  },
];


const AdvanceJavaSyllabus = () => {
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
  
  export default AdvanceJavaSyllabus;