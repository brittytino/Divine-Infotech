import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
    phase: "Phase 1: Fundamentals of Web Development (Days 1-10)",
    topics: [
      {
        title: "Introduction to Web Development",
        details: [
          "Overview of web development",
          "Understanding front-end, back-end, and full stack development",
        ],
      },
      {
        title: "HTML & CSS",
        details: [
          "Basic HTML elements and structure",
          "Styling with CSS (Selectors, properties, and values)",
          "Responsive design with CSS Grid and Flexbox",
          "Basic SEO principles",
        ],
      },
      {
        title: "JavaScript Basics",
        details: [
          "Introduction to JavaScript",
          "Variables, data types, and operators",
          "Control structures (if-else, loops)",
          "Functions and events",
        ],
      },
      {
        title: "Tools and Workflow",
        details: [
          "Introduction to version control with Git and GitHub",
          "Setting up a development environment",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Front-End Development (Days 11-20)",
    topics: [
      {
        title: "Advanced JavaScript",
        details: [
          "DOM manipulation",
          "ES6+ features (let, const, arrow functions, template literals)",
          "Asynchronous JavaScript (Promises, async/await)",
        ],
      },
      {
        title: "Front-End Frameworks",
        details: [
          "Introduction to front-end frameworks (React)",
          "Creating components in React",
          "State and props management",
          "React Router for single-page applications",
        ],
      },
      {
        title: "Styling Libraries",
        details: [
          "Using CSS-in-JS (Styled-components, Emotion)",
          "Bootstrap for responsive design",
          "Tailwind CSS for utility-first design",
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Back-End Development (Days 21-30)",
    topics: [
      {
        title: "Node.js & Express.js",
        details: [
          "Introduction to Node.js and server-side development",
          "Setting up an Express server",
          "Middleware and routing",
          "RESTful API design and implementation",
        ],
      },
      {
        title: "Databases",
        details: [
          "Introduction to databases (SQL vs. NoSQL)",
          "Using MongoDB for NoSQL databases",
          "Mongoose for MongoDB schema and model management",
          "CRUD operations with MongoDB",
        ],
      },
      {
        title: "Authentication & Authorization",
        details: [
          "User authentication with JWT",
          "Implementing secure login and registration",
          "Role-based access control",
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Full Stack Integration (Days 31-40)",
    topics: [
      {
        title: "Connecting Front-End to Back-End",
        details: [
          "Fetching data from APIs using Axios or Fetch API",
          "State management in React with Redux",
          "Implementing front-end authentication",
        ],
      },
      {
        title: "Building a Full Stack Application",
        details: [
          "Planning and setting up a project structure",
          "Creating and connecting the front-end and back-end",
          "Real-time applications with WebSockets (Socket.io)",
        ],
      },
      {
        title: "Testing and Debugging",
        details: [
          "Unit testing with Jest",
          "Integration testing",
          "Debugging techniques and tools",
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Advanced Topics and Deployment (Days 41-50)",
    topics: [
      {
        title: "Advanced React",
        details: [
          "Context API for state management",
          "Hooks (useState, useEffect, custom hooks)",
          "Performance optimization (lazy loading, memoization)",
        ],
      },
      {
        title: "Advanced Node.js",
        details: [
          "Building scalable applications",
          "Performance tuning and best practices",
          "Introduction to microservices architecture",
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

const CompletefullStackSyllabus = () => {
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

export default CompletefullStackSyllabus;
