import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
    phase: "Phase 1: HTML Basics (Days 1-6)",
    topics: [
      "Introduction to HTML",
      "Understanding the structure of HTML documents",
      "Basic HTML tags: headings, paragraphs, links, lists",
      "HTML Elements and Attributes",
      "Working with attributes and elements",
      "Creating tables and forms",
      "Multimedia in HTML",
      "Embedding images, audio, and video"
    ]
  },
  {
    phase: "Phase 2: CSS Fundamentals (Days 7-12)",
    topics: [
      "Introduction to CSS",
      "Understanding CSS syntax and selectors",
      "Applying styles to HTML elements",
      "CSS Box Model",
      "Margins, borders, padding, and content",
      "Layout Techniques",
      "Using float, flexbox, and grid layout",
      "Responsive Design",
      "Media queries and responsive web design principles"
    ]
  },
  {
    phase: "Phase 3: Advanced CSS Techniques (Days 13-18)",
    topics: [
      "CSS3 Enhancements",
      "Transitions, transformations, and animations",
      "CSS Preprocessors",
      "Introduction to SASS/SCSS",
      "Variables, nesting, and mixins",
      "Design Patterns",
      "Implementing common design patterns"
    ]
  },
  {
    phase: "Phase 4: JavaScript Basics (Days 19-24)",
    topics: [
      "Introduction to JavaScript",
      "JavaScript syntax and variables",
      "Data types and operators",
      "Control Structures",
      "Conditionals, loops, and functions",
      "DOM Manipulation",
      "Selecting and modifying DOM elements",
      "Event handling and listeners"
    ]
  },
  {
    phase: "Phase 5: Integrating HTML, CSS, and JavaScript (Days 25-30)",
    topics: [
      "Building Interactive Web Pages",
      "Combining HTML, CSS, and JavaScript to create interactive web pages",
      "Project Development",
      "Developing a small project from scratch",
      "Implementing responsive design and interactivity",
      "Best Practices",
      "Code organization and version control with Git",
      "Debugging and troubleshooting common issues"
    ]
  }
];

const FrontendSyllabus = () => {
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
                <ul className="list-disc list-inside space-y-2">
                  {phase.topics.map((topic, idx) => (
                    <li key={idx} className="text-gray-700">{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontendSyllabus;
