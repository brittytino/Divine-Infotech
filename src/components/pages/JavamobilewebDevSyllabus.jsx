import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'; 
const syllabus = [
    {
      phase: "Week 1-2: Java Basics Review",
      topics: [
        {
          title: "Review of Java Fundamentals",
          details: [
            "Overview of Java syntax and programming concepts",
            "Object-oriented programming in Java",
          ],
        },
      ],
    },
    {
      phase: "Week 3: Java Web Development",
      topics: [
        {
          title: "Introduction to Servlets",
          details: [
            "Understanding Servlets and their lifecycle",
            "Creating and deploying Servlets",
          ],
        },
        {
          title: "JavaServer Pages (JSP)",
          details: [
            "Introduction to JSP and its features",
            "Integrating JSP with Servlets",
          ],
        },
      ],
    },
    {
      phase: "Week 4: Database Connectivity",
      topics: [
        {
          title: "JDBC (Java Database Connectivity)",
          details: [
            "Setting up JDBC in Java",
            "Performing CRUD operations with JDBC",
          ],
        },
        {
          title: "Handling Database Operations",
          details: [
            "Best practices for database interactions",
            "Using connection pools",
          ],
        },
      ],
    },
    {
      phase: "Week 5-6: Introduction to Spring Framework",
      topics: [
        {
          title: "Spring Core and Dependency Injection",
          details: [
            "Overview of Spring Framework",
            "Understanding Dependency Injection and Inversion of Control",
          ],
        },
        {
          title: "Spring MVC",
          details: [
            "Building web applications with Spring MVC",
            "Handling requests and responses in Spring MVC",
          ],
        },
      ],
    },
    {
      phase: "Week 7-8: Introduction to Hibernate",
      topics: [
        {
          title: "Object-Relational Mapping (ORM) with Hibernate",
          details: [
            "Introduction to Hibernate and its benefits",
            "Mapping Java objects to database tables",
          ],
        },
        {
          title: "Integrating Hibernate with Spring Applications",
          details: [
            "Setting up Hibernate in Spring projects",
            "Performing CRUD operations with Hibernate",
          ],
        },
      ],
    },
    {
      phase: "Week 9-10: Introduction to Android Development",
      topics: [
        {
          title: "Setting Up Android Development Environment",
          details: [
            "Installing Android Studio",
            "Overview of Android Studio interface and tools",
          ],
        },
        {
          title: "Android UI Components and Layouts",
          details: [
            "Understanding different layout types",
            "Working with basic UI elements",
          ],
        },
      ],
    },
    {
      phase: "Week 11-12: Advanced Android Development",
      topics: [
        {
          title: "Working with RecyclerView and Adapters",
          details: [
            "Implementing RecyclerView for displaying lists",
            "Creating custom adapters",
          ],
        },
        {
          title: "Networking and Data Storage in Android",
          details: [
            "Making HTTP requests using Retrofit or Volley",
            "Using SQLite for data storage",
          ],
        },
        {
          title: "Introduction to Firebase for Real-Time Applications",
          details: [
            "Setting up Firebase in Android",
            "Using Firebase Realtime Database",
          ],
        },
      ],
    },
    {
      phase: "Week 13-14: Mobile Backend Development",
      topics: [
        {
          title: "Introduction to RESTful APIs",
          details: [
            "Understanding REST principles",
            "Creating RESTful services with Spring Boot",
          ],
        },
        {
          title: "Building Backend Services for Mobile Apps",
          details: [
            "Designing and implementing backend services",
            "Integrating mobile apps with backend services",
          ],
        },
      ],
    },
    {
      phase: "Week 15: Project Work and Deployment",
      topics: [
        {
          title: "Building and Deploying a Java-Based Web or Mobile Application",
          details: [
            "Developing a complete functional application",
            "Testing and debugging the application",
          ],
        },
        {
          title: "Best Practices in Java Web and Mobile Development",
          details: [
            "Following coding standards and conventions",
            "Ensuring application security and performance",
          ],
        },
      ],
    },
  ];
  


const JavamobilewebDevSyllabus = () => {
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
  
  export default JavamobilewebDevSyllabus;