import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';   

const syllabus = [
    {
      phase: "Phase 1: Introduction to Python and Backend Development Basics (Weeks 1-2)",
      topics: [
        {
          title: "Week 1: Introduction to Python programming language",
          details: [
            "Variables, data types, operators, and expressions",
            "Control flow: if-else statements, loops",
          ],
        },
        {
          title: "Week 2: Object-oriented programming in Python",
          details: [
            "File handling and exceptions",
            "Introduction to databases (SQL and NoSQL)",
            "Setting up development environment (IDEs, virtual environments)",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Backend Development with Python (Weeks 3-4)",
      topics: [
        {
          title: "Week 3: Flask web framework: setup and basic routes",
          details: [
            "Templates and forms in Flask",
            "Working with databases in Flask (SQLAlchemy for SQL databases, MongoDB for NoSQL)",
          ],
        },
        {
          title: "Week 4: RESTful APIs: principles and design",
          details: [
            "Building RESTful APIs with Flask",
            "Authentication and authorization basics",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Frontend Development with JavaScript and React (Weeks 5-6)",
      topics: [
        {
          title: "Week 5: Introduction to JavaScript: syntax, variables, data types",
          details: [
            "DOM manipulation with JavaScript",
            "Asynchronous JavaScript: promises and async/await",
          ],
        },
        {
          title: "Week 6: Introduction to React.js: setup and basic components",
          details: [
            "State management in React",
            "Building a frontend CRUD application with React",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Integrating Frontend with Backend (Weeks 7-8)",
      topics: [
        {
          title: "Week 7: Fetch API: communicating with backend from frontend",
          details: [
            "Form handling and validation in React",
            "Authentication and JWT implementation",
          ],
        },
        {
          title: "Week 8: Connecting React frontend to Flask backend",
          details: [
            "Redux for state management in React (optional)",
            "Deployment considerations: cloud platforms, CI/CD pipelines",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Advanced Topics and Project Work (Weeks 9-10)",
      topics: [
        {
          title: "Week 9: Testing in Python and JavaScript",
          details: [
            "Performance optimization techniques",
            "Introduction to Docker and containerization",
          ],
        },
        {
          title: "Week 10: Final project development",
          details: [
            "Project presentations and code reviews",
            "Career guidance and next steps in Full Stack development",
          ],
        },
      ],
    },
  ];
  

const FullstackPythonSyllabus = () => {
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
  
  export default FullstackPythonSyllabus;