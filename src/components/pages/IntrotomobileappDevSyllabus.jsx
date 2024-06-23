import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
    phase: "Phase 1: Introduction to Mobile App Development (Days 1-3)",
    topics: [
      {
        title: "Overview of Mobile App Development",
        details: [
          "Understanding different types of mobile apps: native, hybrid, and web apps",
          "Platforms: iOS vs. Android",
          "Development tools and environments",
        ],
      },
      {
        title: "Setting Up Development Environment",
        details: [
          "Installing necessary software (Android Studio, Xcode, etc.)",
          "Introduction to Integrated Development Environments (IDEs)",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Basics of Mobile UI/UX Design (Days 4-6)",
    topics: [
      {
        title: "Mobile Design Principles",
        details: [
          "Introduction to mobile UI/UX design principles",
          "Designing for different screen sizes and resolutions",
          "Understanding touch interactions and gestures",
        ],
      },
      {
        title: "Prototyping Tools",
        details: [
          "Introduction to prototyping tools (Figma, Sketch, Adobe XD)",
          "Creating simple mobile app prototypes",
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Introduction to Programming Languages (Days 7-9)",
    topics: [
      {
        title: "JavaScript Basics",
        details: [
          "Basic syntax, variables, and data types",
          "Functions, loops, and conditionals",
          "Introduction to ES6 features",
        ],
      },
      {
        title: "Introduction to Dart (for Flutter) or Swift (for iOS)",
        details: [
          "Basic syntax and structure",
          "Writing simple programs",
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Building Simple Mobile Apps (Days 10-12)",
    topics: [
      {
        title: "Using Frameworks",
        details: [
          "Introduction to popular frameworks (React Native, Flutter)",
          "Setting up a new project in chosen framework",
        ],
      },
      {
        title: "Creating Simple Applications",
        details: [
          "Building a 'Hello World' app",
          "Understanding the project structure",
          "Basic navigation and user interface elements",
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Testing and Debugging (Days 13-15)",
    topics: [
      {
        title: "Testing Mobile Apps",
        details: [
          "Introduction to testing methodologies",
          "Writing and running unit tests",
        ],
      },
      {
        title: "Debugging Techniques",
        details: [
          "Using debugging tools in IDEs",
          "Common issues and troubleshooting tips",
        ],
      },
    ],
  },
  {
    phase: "Final Project",
    topics: [
      {
        title: "Developing a small, functional mobile app incorporating all learned concepts",
        details: [
          "Presenting and reviewing the project",
        ],
      },
    ],
  },
];

const IntrotomobileappDevSyllabus = () => {
  const [openSections, setOpenSections] = useState([false, false, false, false, false, false]);
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

export default IntrotomobileappDevSyllabus;
