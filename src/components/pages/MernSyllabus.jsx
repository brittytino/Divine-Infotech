import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
    phase: "Phase 1: Introduction to MERN Stack (Days 1-10)",
    topics: [
      {
        title: "MongoDB",
        details: [
          "Introduction to NoSQL databases and MongoDB",
          "CRUD operations and data modeling",
        ],
      },
      {
        title: "Express.js",
        details: [
          "Setting up a server with Express",
          "RESTful API development with Express",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Building Backend with Node.js and Express (Days 11-20)",
    topics: [
      {
        title: "Node.js",
        details: [
          "Asynchronous programming and event-driven architecture",
          "Middleware and error handling in Node.js applications",
        ],
      },
      {
        title: "Connecting MongoDB with Express",
        details: [
          "Integration of MongoDB with Mongoose",
          "Implementing CRUD operations with Mongoose",
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Frontend Development with React (Days 21-35)",
    topics: [
      {
        title: "Introduction to React",
        details: [
          "Components, props, and state management",
          "JSX syntax and virtual DOM in React",
        ],
      },
      {
        title: "State Management in React",
        details: [
          "Using hooks (useState, useEffect) for managing state",
          "Context API and Redux for global state management",
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Advanced React and Integration (Days 36-45)",
    topics: [
      {
        title: "React Router",
        details: [
          "Implementing client-side routing in React applications",
        ],
      },
      {
        title: "Authentication and Authorization",
        details: [
          "Implementing authentication using JWT in MERN stack",
          "Securing routes and handling user sessions",
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Deployment and Advanced Topics (Days 46-50)",
    topics: [
      {
        title: "Deployment to Production",
        details: [
          "Deploying MERN stack applications to platforms like Heroku or AWS",
        ],
      },
      {
        title: "Advanced Topics",
        details: [
          "Real-time applications with WebSocket and Socket.IO",
          "Performance optimization and best practices in MERN stack development",
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
      <h2 className="text-3xl font-semibold mb-6">Course Syllabus</h2>
      <div className="space-y-4">
        {syllabus.map((phase, index) => (
          <div key={index} className="border border-gray-300 rounded-lg shadow-sm">
            <div
              className="flex items-center justify-between bg-gray-200 px-4 py-3 cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <h3 className="md:text-xl text-base md:font-semibold font-medium">{phase.phase}</h3>
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
