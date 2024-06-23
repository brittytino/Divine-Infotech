import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
    phase: "Phase 1: Introduction to HTML (Days 1-5)",
    topics: [
      {
        title: "HTML Structure and Syntax",
        details: [
          "Basic HTML document structure",
          "Common HTML tags: headings, paragraphs, lists, links",
        ],
      },
      {
        title: "Working with HTML Elements",
        details: [
          "Images, tables, and forms",
          "Semantic HTML tags",
        ],
      },
      {
        title: "HTML5 Features",
        details: [
          "New elements and attributes in HTML5",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Fundamentals of CSS (Days 6-10)",
    topics: [
      {
        title: "CSS Syntax and Selectors",
        details: [
          "Basic CSS syntax",
          "Different types of selectors: class, ID, element",
        ],
      },
      {
        title: "Styling HTML Elements",
        details: [
          "Applying styles: color, font, and text properties",
          "Box model: margin, border, padding, and content",
        ],
      },
      {
        title: "Layout and Positioning",
        details: [
          "Understanding display properties",
          "Introduction to flexbox and grid layout",
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Advanced CSS Techniques (Days 11-15)",
    topics: [
      {
        title: "Responsive Design",
        details: [
          "Media queries for different screen sizes",
          "Mobile-first design principles",
        ],
      },
      {
        title: "CSS3 Features",
        details: [
          "Transitions and transformations",
          "Animations and keyframes",
        ],
      },
      {
        title: "CSS Preprocessors (Optional)",
        details: [
          "Introduction to SASS/SCSS basics",
        ],
      },
    ],
  },
  {
    phase: "Phase 4: JavaScript Basics (Days 16-20)",
    topics: [
      {
        title: "JavaScript Syntax and Basics",
        details: [
          "Variables, data types, and operators",
          "Control structures: conditionals and loops",
        ],
      },
      {
        title: "Functions and Scope",
        details: [
          "Defining and invoking functions",
          "Understanding scope and closures",
        ],
      },
      {
        title: "DOM Manipulation",
        details: [
          "Selecting and modifying DOM elements",
          "Event handling and event listeners",
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Integrating HTML, CSS, and JavaScript (Days 21-25)",
    topics: [
      {
        title: "Combining HTML, CSS, and JavaScript",
        details: [
          "Building interactive web pages",
          "Adding dynamic content with JavaScript",
        ],
      },
      {
        title: "Project Development",
        details: [
          "Developing a small project incorporating all three technologies",
        ],
      },
      {
        title: "Best Practices and Debugging",
        details: [
          "Writing clean and maintainable code",
          "Debugging techniques and tools",
        ],
      },
    ],
  },
];

const HtmlcssJsSyllabus = () => {
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

export default HtmlcssJsSyllabus;
