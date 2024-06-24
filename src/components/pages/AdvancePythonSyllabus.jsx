import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Phase 1: Core Reinforcement (10 Days)",
      topics: [
        {
          title: "Object-Oriented Programming (OOP) Review",
          details: [
            "Solidify your understanding of classes, objects, inheritance, polymorphism, and encapsulation.",
          ],
        },
        {
          title: "Advanced Data Structures & Algorithms",
          details: [
            "Explore advanced data structures like sets, queues, and stacks.",
            "Delve into efficient algorithms for problem-solving.",
          ],
        },
        {
          title: "Exception Handling & Debugging",
          details: [
            "Master techniques to gracefully handle errors and effectively debug your code.",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Powerful Tools (10 Days)",
      topics: [
        {
          title: "Python Libraries & Frameworks",
          details: [
            "Dive into popular libraries like NumPy, Pandas, and Matplotlib for scientific computing, data analysis, and visualization.",
            "Explore frameworks like Django or Flask for advanced web development (if not covered earlier).",
          ],
        },
        {
          title: "Regular Expressions",
          details: [
            "Learn powerful patterns to manipulate text data efficiently.",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Concurrency & Asynchrony (5 Days)",
      topics: [
        {
          title: "Multithreading & Multiprocessing",
          details: [
            "Explore techniques to handle multiple tasks simultaneously, improving program performance.",
          ],
        },
        {
          title: "Asynchronous Programming",
          details: [
            "Learn how to write non-blocking code for efficient use of resources, particularly in network applications.",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Advanced Topics (10 Days)",
      topics: [
        {
          title: "Decorators & Metaprogramming",
          details: [
            "Master decorators to customize function behavior.",
            "Explore metaprogramming for advanced code manipulation.",
          ],
        },
        {
          title: "Unit Testing & Code Quality",
          details: [
            "Learn best practices for writing unit tests to ensure code reliability and maintainability.",
          ],
        },
        {
          title: "Memory Management",
          details: [
            "Understand memory allocation and deallocation for efficient program performance.",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Project & Portfolio Building (5 Days)",
      topics: [
        {
          title: "Advanced Project Development",
          details: [
            "Apply your acquired skills to build a complex Python project showcasing your capabilities.",
          ],
        },
        {
          title: "Portfolio Creation",
          details: [
            "Learn how to document your projects effectively.",
            "Build a portfolio to impress potential employers.",
          ],
        },
      ],
    },
  ];
  


const AdvancePythonSyllabus = () => {
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
  
  export default AdvancePythonSyllabus;