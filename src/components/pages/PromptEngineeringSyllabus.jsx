import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
    phase: "Phase 1: Introduction to Software Engineering (Days 1-5)",
    topics: [
      {
        title: "Software Engineering Overview",
        details: [
          "Introduction to software development lifecycle (SDLC)",
          "Roles and responsibilities of software engineers",
          "Importance of prompt engineering in modern software development",
        ],
      },
      {
        title: "Prompt Development Basics",
        details: [
          "Overview of prompt languages and frameworks",
          "Setting up a prompt development environment",
          "Basic prompt commands and operations",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Data Structures and Algorithms (Days 6-10)",
    topics: [
      {
        title: "Data Structures",
        details: [
          "Arrays, linked lists, stacks, queues, and trees",
          "Understanding hash tables and graphs",
          "Implementing data structures in prompt",
        ],
      },
      {
        title: "Algorithms",
        details: [
          "Sorting algorithms (e.g., bubble sort, merge sort)",
          "Searching algorithms (e.g., binary search, depth-first search)",
          "Algorithm efficiency (time complexity and space complexity)",
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Database Fundamentals (Days 11-15)",
    topics: [
      {
        title: "Relational Databases",
        details: [
          "Introduction to SQL and relational database management systems (RDBMS)",
          "SQL queries for data retrieval and manipulation",
          "Database design principles and normalization",
        ],
      },
      {
        title: "NoSQL Databases",
        details: [
          "Overview of NoSQL databases (e.g., MongoDB, Redis)",
          "Differences between SQL and NoSQL databases",
          "Using NoSQL databases for prompt storage and retrieval",
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Software Testing and Quality Assurance (Days 16-20)",
    topics: [
      {
        title: "Introduction to Software Testing",
        details: [
          "Importance of testing in software development",
          "Types of testing (unit testing, integration testing, system testing)",
          "Test-driven development (TDD) and continuous integration (CI)",
        ],
      },
      {
        title: "Quality Assurance Processes",
        details: [
          "QA methodologies and best practices",
          "Implementing quality checks and validation processes",
          "Bug tracking and issue management",
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Project Development and Deployment (Days 21-25)",
    topics: [
      {
        title: "Project Planning and Management",
        details: [
          "Planning and defining project requirements",
          "Agile methodologies and sprint planning",
          "Version control and collaboration using Git",
        ],
      },
      {
        title: "Capstone Project",
        details: [
          "Developing a prompt engineering project from scratch",
          "Implementing data structures, algorithms, and database integration",
          "Testing, debugging, and deploying the project",
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