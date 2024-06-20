import React, { useState, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';

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
  const [openPhase, setOpenPhase] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setOpenPhase(openPhase === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold underline underline-offset-4 decoration-blue-700 mb-4 md:mb-0 text-center md:text-left">Course Syllabus</h1>
       
      </div>
      {syllabus.map((phase, index) => (
        <div key={index} className="mb-6 border-b border-gray-300 pb-4">
          <button
            onClick={() => handleToggle(index)}
            className="flex items-center justify-between w-full text-left text-sm md:text-base font-medium text-gray-700 hover:text-[#453fe1] transition-all"
          >
            {phase.phase}
            <ChevronDownIcon className={`h-6 w-6 transition-transform ${openPhase === index ? 'rotate-180' : ''}`} />
          </button>
          <div
            ref={el => (contentRefs.current[index] = el)}
            style={{
              maxHeight: openPhase === index ? `${contentRefs.current[index].scrollHeight}px` : '0',
              transition: 'max-height 0.3s ease',
              overflow: 'hidden',
            }}
            className="mt-4"
          >
            {phase.topics.map((topic, idx) => (
              <div key={idx} className="mb-4">
                <h2 className="text-lg font-semibold text-gray-700">{topic.title}</h2>
                <ul className="list-disc list-inside pl-4 mt-2">
                  {topic.details.map((detail, i) => (
                    <li key={i} className="text-gray-600">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MernSyllabus;
