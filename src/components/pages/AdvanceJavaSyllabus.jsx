import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Week 1-2: Advanced Object-Oriented Programming",
      topics: [
        {
          title: "Design Patterns",
          details: [
            "Singleton, Factory, MVC, etc.",
          ],
        },
        {
          title: "Generics and Collections",
          details: [
            "Generics and collections in depth",
          ],
        },
        {
          title: "Advanced Exception Handling",
          details: [
            "Advanced exception handling and assertions",
          ],
        },
      ],
    },
    {
      phase: "Week 3-4: Concurrency in Java",
      topics: [
        {
          title: "Introduction to Threads",
          details: [
            "Introduction to threads and multithreading",
          ],
        },
        {
          title: "Synchronization and Thread Safety",
          details: [
            "Synchronization and thread safety",
          ],
        },
        {
          title: "Concurrent Collections and Utilities",
          details: [
            "Concurrent collections and utilities",
          ],
        },
      ],
    },
    {
      phase: "Week 5-6: Java Persistence API (JPA)",
      topics: [
        {
          title: "Introduction to JPA and ORM",
          details: [
            "Introduction to JPA and ORM concepts",
          ],
        },
        {
          title: "Mapping Entities",
          details: [
            "Mapping entities to database tables",
          ],
        },
        {
          title: "Advanced Querying",
          details: [
            "Advanced querying with JPQL",
          ],
        },
      ],
    },
    {
      phase: "Week 7-8: Java Enterprise Edition (Java EE)",
      topics: [
        {
          title: "Introduction to Java EE",
          details: [
            "Introduction to Java EE platform",
          ],
        },
        {
          title: "Enterprise JavaBeans (EJB)",
          details: [
            "EJB (Enterprise JavaBeans)",
          ],
        },
        {
          title: "Java EE Application Servers",
          details: [
            "Java EE application servers (e.g., Tomcat, GlassFish)",
          ],
        },
      ],
    },
    {
      phase: "Week 9-10: Web Services in Java",
      topics: [
        {
          title: "Introduction to Web Services",
          details: [
            "Introduction to SOAP and RESTful web services",
          ],
        },
        {
          title: "Developing and Consuming Web Services",
          details: [
            "Developing and consuming web services in Java",
          ],
        },
      ],
    },
    {
      phase: "Week 11-12: Advanced Spring Framework",
      topics: [
        {
          title: "Spring Boot Fundamentals",
          details: [
            "Spring Boot fundamentals",
          ],
        },
        {
          title: "Microservices Architecture",
          details: [
            "Microservices architecture with Spring Cloud",
          ],
        },
        {
          title: "Securing Spring Applications",
          details: [
            "Securing Spring applications",
          ],
        },
      ],
    },
    {
      phase: "Week 13-14: Java Performance Tuning",
      topics: [
        {
          title: "Profiling Java Applications",
          details: [
            "Profiling Java applications",
          ],
        },
        {
          title: "Memory Management",
          details: [
            "Memory management and garbage collection",
          ],
        },
        {
          title: "Optimizing Code and Queries",
          details: [
            "Optimizing code and database queries",
          ],
        },
      ],
    },
    {
      phase: "Week 15: Final Project and Presentation",
      topics: [
        {
          title: "Designing a Complex Java Application",
          details: [
            "Designing and implementing a complex Java application",
          ],
        },
        {
          title: "Presentation and Review",
          details: [
            "Presentation and code review",
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