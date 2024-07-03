import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';   

const syllabus = [
  {
    phase: "Phase 1: Python Basics and Setup (Days 1-10)",
    topics: [
      {
        title: "Day 1-3: Introduction to Python",
        details: [
          "Overview of Python language fundamentals",
          "Installing Python and setting up development environment (IDEs, virtual environments)"
        ],
      },
      {
        title: "Day 4-6: Python Data Structures and Algorithms",
        details: [
          "Lists, tuples, dictionaries, and sets in Python",
          "Algorithmic thinking and problem-solving techniques",
          "Understanding time and space complexity"
        ],
      },
      {
        title: "Day 7-10: Object-Oriented Programming in Python",
        details: [
          "Classes, objects, inheritance, and polymorphism",
          "Encapsulation and abstraction principles",
          "Implementing OOP concepts in practical exercises"
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Frontend Development with Python (Days 11-20)",
    topics: [
      {
        title: "Day 11-13: HTML, CSS, and JavaScript Basics",
        details: [
          "Fundamentals of HTML5, CSS3, and JavaScript",
          "Building responsive web pages and layouts",
          "Introduction to frontend frameworks (e.g., Bootstrap)"
        ],
      },
      {
        title: "Day 14-16: Introduction to Flask",
        details: [
          "Setting up a Flask development environment",
          "Creating routes, templates, and handling requests",
          "Integrating Flask with HTML and CSS for dynamic web applications"
        ],
      },
      {
        title: "Day 17-20: Advanced Flask and Jinja Templating",
        details: [
          "Using Jinja templates for dynamic content rendering",
          "Form handling and validation in Flask applications",
          "Building RESTful APIs with Flask"
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Backend Development with Python (Days 21-35)",
    topics: [
      {
        title: "Day 21-25: Introduction to Django",
        details: [
          "Overview of Django framework and its components",
          "Creating Django projects and applications",
          "Building models, views, and templates in Django"
        ],
      },
      {
        title: "Day 26-30: Database Management with Django",
        details: [
          "Integrating Django with SQL databases (SQLite, PostgreSQL)",
          "Designing database schemas and relationships",
          "Querying data using Django ORM"
        ],
      },
      {
        title: "Day 31-35: RESTful API Development",
        details: [
          "Building REST APIs using Django REST Framework",
          "Serializers, views, and authentication mechanisms",
          "Testing and documenting APIs"
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Advanced Topics in Full Stack Development (Days 36-45)",
    topics: [
      {
        title: "Day 36-38: Authentication and Authorization",
        details: [
          "Implementing user authentication and authorization mechanisms",
          "OAuth integration and secure user sessions"
        ],
      },
      {
        title: "Day 39-42: Deployment and DevOps",
        details: [
          "Deployment strategies for Python web applications (Heroku, AWS)",
          "Continuous integration and deployment pipelines (CI/CD)",
          "Monitoring and scaling web applications"
        ],
      },
      {
        title: "Day 43-45: Version Control with Git and GitHub",
        details: [
          "Git fundamentals and version control workflows",
          "Collaborative development using GitHub",
          "Branching, merging, and resolving conflicts"
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Capstone Project and Portfolio Development (Days 46-50)",
    topics: [
      {
        title: "Day 46-48: Capstone Project",
        details: [
          "Planning and designing a full stack Python application",
          "Implementation, testing, and debugging",
          "Finalizing project documentation and presentation"
        ],
      },
      {
        title: "Day 49-50: Portfolio Development",
        details: [
          "Showcasing projects and demonstrating skills",
          "Creating an online portfolio to attract potential employers or clients",
          "Networking and job search strategies for full stack Python developers"
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