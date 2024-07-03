import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
    phase: "Phase 1: Introduction to MERN Stack (Days 1-7)",
    topics: [
      {
        title: "Overview of MERN Stack",
        details: [
          "Introduction to full stack development with MERN",
          "Understanding the architecture and workflow",
        ],
      },
      {
        title: "MongoDB Basics",
        details: [
          "Introduction to NoSQL databases",
          "Installing and setting up MongoDB",
          "CRUD operations in MongoDB",
          "Schema design and data modeling",
        ],
      },
      {
        title: "Express.js Basics",
        details: [
          "Setting up a Node.js and Express server",
          "Middleware and routing",
          "Building RESTful APIs with Express",
        ],
      },
      {
        title: "React Basics",
        details: [
          "Introduction to React and single-page applications",
          "Creating components in React",
          "State and props management",
          "JSX and virtual DOM",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Front-End Development with React (Days 8-14)",
    topics: [
      {
        title: "Advanced React",
        details: [
          "Functional vs. class components",
          "React hooks (useState, useEffect, custom hooks)",
          "Component lifecycle methods",
        ],
      },
      {
        title: "React Router",
        details: [
          "Setting up React Router",
          "Creating multi-page applications",
          "Dynamic routing and nested routes",
        ],
      },
      {
        title: "State Management",
        details: [
          "Introduction to state management libraries",
          "Managing global state with Redux",
          "Using Context API for state management",
        ],
      },
      {
        title: "Styling React Components",
        details: [
          "CSS Modules",
          "Styled-components",
          "Tailwind CSS",
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Back-End Development with Node.js and Express (Days 15-21)",
    topics: [
      {
        title: "Advanced Node.js",
        details: [
          "Asynchronous programming with Promises and async/await",
          "File system and streams",
          "Working with modules and packages",
        ],
      },
      {
        title: "Advanced Express.js",
        details: [
          "Handling requests and responses",
          "Middleware functions and error handling",
          "Building secure APIs with JWT authentication",
        ],
      },
      {
        title: "Database Integration",
        details: [
          "Connecting Express to MongoDB with Mongoose",
          "Schema definition and data validation",
          "Implementing relationships and embedding documents",
        ],
      },
      {
        title: "API Development",
        details: [
          "RESTful API principles",
          "Versioning and documenting APIs",
          "Testing APIs with Postman",
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Full Stack Integration (Days 22-28)",
    topics: [
      {
        title: "Connecting Front-End to Back-End",
        details: [
          "Fetching data from APIs using Axios",
          "Managing asynchronous operations in React",
          "Implementing front-end authentication",
        ],
      },
      {
        title: "Building a Full Stack Application",
        details: [
          "Setting up a project structure",
          "Creating and connecting front-end and back-end",
          "Handling form submissions and validations",
        ],
      },
      {
        title: "Real-Time Applications",
        details: [
          "Introduction to WebSockets",
          "Building real-time features with Socket.io",
          "Real-time data updates in React",
        ],
      },
      {
        title: "Testing and Debugging",
        details: [
          "Unit testing with Jest and Enzyme",
          "Integration testing with Supertest",
          "Debugging techniques and tools",
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Advanced Topics and Deployment (Days 29-35)",
    topics: [
      {
        title: "Advanced React Concepts",
        details: [
          "Performance optimization (lazy loading, memoization)",
          "Advanced hooks (useMemo, useReducer)",
          "Context API for complex state management",
        ],
      },
      {
        title: "Advanced Node.js & Express.js",
        details: [
          "Building scalable and maintainable applications",
          "Performance tuning and best practices",
          "Introduction to microservices",
        ],
      },
      {
        title: "DevOps and Deployment",
        details: [
          "Introduction to CI/CD pipelines",
          "Deploying applications with Heroku, Netlify, and Vercel",
          "Containerization with Docker",
        ],
      },
      {
        title: "Project Work",
        details: [
          "Capstone project development",
          "Best practices for project documentation and presentation",
          "Final project review and feedback",
        ],
      },
    ],
  },
];


const MernSyllabus = () => {
  const [openSections, setOpenSections] = useState([false, false, false, false, false]);
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

export default MernSyllabus;
