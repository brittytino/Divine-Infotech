import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';


const syllabus = [
    {
      phase: "Phase 1: Introduction to MEAN Stack (Days 1-10)",
      topics: [
        {
          title: "MongoDB",
          details: [
            "Overview of NoSQL databases and MongoDB",
            "CRUD operations and data modeling",
            "Aggregation framework and indexing",
          ],
        },
        {
          title: "Express.js",
          details: [
            "Setting up an Express server",
            "Middleware functions and routing",
            "RESTful API development with Express",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Backend Development with Node.js and Express (Days 11-20)",
      topics: [
        {
          title: "Node.js",
          details: [
            "Event-driven architecture and asynchronous programming",
            "File system module and handling I/O operations",
            "Creating and handling RESTful APIs",
          ],
        },
        {
          title: "Connecting MongoDB with Express",
          details: [
            "Integrating MongoDB with Mongoose",
            "Schema design and validation with Mongoose",
            "Advanced querying and population",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Frontend Development with Angular (Days 21-35)",
      topics: [
        {
          title: "Introduction to Angular",
          details: [
            "Setting up Angular development environment",
            "Angular components, modules, and services",
            "Data binding and directives",
          ],
        },
        {
          title: "Advanced Angular Features",
          details: [
            "Routing and navigation",
            "Reactive forms and validation",
            "HTTP client and interacting with APIs",
            "State management with NgRx (optional)",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Authentication and Authorization (Days 36-45)",
      topics: [
        {
          title: "User Authentication",
          details: [
            "Implementing authentication with JWT",
            "Protecting routes and handling user sessions",
            "Role-based access control (RBAC)",
          ],
        },
        {
          title: "Security Best Practices",
          details: [
            "Securing Express applications",
            "Implementing HTTPS and handling CORS",
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
            "Deploying MEAN stack applications to platforms like Heroku, AWS, or DigitalOcean",
            "Environment variables and configuration",
          ],
        },
        {
          title: "Advanced Topics",
          details: [
            "Real-time applications with WebSocket and Socket.IO",
            "Performance optimization and best practices",
            "Monitoring and maintaining MEAN applications",
          ],
        },
      ],
    },
  ];
  



const MeanstackSyllabus = () => {
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
  
  export default MeanstackSyllabus;