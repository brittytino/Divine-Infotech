import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Phase 1: Frontend Development Basics (Days 1-15)",
      topics: [
        {
          title: "HTML5",
          details: [
            "Semantic HTML, forms, and input validation",
            "Accessibility features in HTML",
          ],
        },
        {
          title: "CSS3",
          details: [
            "Selectors, box model, and positioning techniques",
            "Responsive design principles and media queries",
          ],
        },
        {
          title: "JavaScript",
          details: [
            "Variables, data types, operators, and control structures",
            "Functions, scope, and closures",
            "DOM manipulation and event handling",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Frontend Frameworks (Days 16-30)",
      topics: [
        {
          title: "Introduction to Frontend Frameworks",
          details: [
            "Overview of popular frameworks like React, Vue.js, or Angular",
            "Building Single Page Applications (SPA)",
            "Routing, state management, and component-based architecture",
          ],
        },
        {
          title: "Working with APIs",
          details: [
            "Consuming RESTful APIs with Axios or Fetch",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Backend Development with Node.js (Days 31-45)",
      topics: [
        {
          title: "Introduction to Node.js",
          details: [
            "Setting up Node.js environment and package management with npm",
            "Building server-side applications with Express.js",
          ],
        },
        {
          title: "Database Integration",
          details: [
            "CRUD operations with MongoDB or MySQL",
            "ORM/ODM libraries like Mongoose or Sequelize",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Authentication and Authorization (Days 46-50)",
      topics: [
        {
          title: "User Authentication",
          details: [
            "Implementing authentication using JWT (JSON Web Tokens)",
            "Session-based authentication with cookies",
          ],
        },
        {
          title: "Authorization",
          details: [
            "Role-based access control (RBAC)",
            "Middleware for authentication and authorization",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Deployment and DevOps (Days 51-60)",
      topics: [
        {
          title: "Version Control with Git",
          details: [
            "Git fundamentals, branching strategies, and pull requests",
          ],
        },
        {
          title: "Continuous Integration and Deployment (CI/CD)",
          details: [
            "Setting up CI/CD pipelines with tools like Jenkins or GitLab CI",
          ],
        },
        {
          title: "Cloud Deployment",
          details: [
            "Deploying applications to platforms like AWS, Heroku, or Firebase",
          ],
        },
        {
          title: "Monitoring and Scalability",
          details: [
            "Basics of monitoring tools and scaling strategies",
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