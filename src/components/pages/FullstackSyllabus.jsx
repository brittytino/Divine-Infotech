import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const syllabus = [
  {
    module: "MODULE 1: INTRODUCTION TO WEB DEVELOPMENT (Days 1-3)",
    days: [
      {
        day: "Day 1: Overview of Web Development",
        topics: [
          "How the Internet Works",
          "How Websites Work",
          "Overview of Frontend and Backend Development",
        ],
      },
      {
        day: "Day 2: Setting Up Your Development Environment",
        topics: [
          "Installing Necessary Software and Tools",
          "Text Editors (VS Code, Sublime Text)",
          "Browsers (Chrome, Firefox)",
          "Version Control (Git, GitHub)",
        ],
      },
      {
        day: "Day 3: Basics of HTML",
        topics: [
          "What is HTML?",
          "Heading and Paragraph Elements",
          "Self-Closing Tags",
          "List Elements",
          "Anchor Elements",
          "Image Elements",
          "Semantic Elements",
          "Absolute and Relative Paths",
          "The HTML Boilerplate",
        ],
      },
    ],
  },
  {
    module: "MODULE 2: FRONT-END DEVELOPMENT (Days 4-12)",
    days: [
      {
        day: "HTML Fundamentals (Days 4-5)",
        topics: [
          "Deep Dive into HTML Elements",
          "Creating Forms and Tables",
          "HTML5 New Elements and Attributes",
        ],
      },
      {
        day: "CSS at its Core (Days 6-9)",
        topics: [
          "Introduction to CSS",
          "Why and What is CSS?",
          "How to Add CSS?",
          "CSS Selectors",
          "CSS Colors",
          "Font Properties",
          "Inspecting CSS",
          "Box Model",
          "Cascade: Specificity and Inheritance",
          "Combining CSS Selectors",
          "CSS Positioning",
          "CSS Display",
          "CSS Float",
          "Responsive Website and Media Queries",
          "Flexbox",
          "Grid",
          "Bootstrap, Tailwind, SCSS",
        ],
      },
      {
        day: "JavaScript for Web Development (Days 10-12)",
        topics: [
          "Introduction to JavaScript",
          "Alerts",
          "Data Types",
          "Variables and Naming Conventions",
          "String Operations (Concatenation, Slicing, Length)",
          "Arithmetic, Modulo, Increment, and Decrement Operators",
          "Creating and Calling Functions",
          "Parameters and Arguments",
          "Outputs and Return Values",
          "Control Statements",
          "Comparators and Equality",
          "Collections: Working with Arrays",
          "Array Techniques",
          "Loops: While and For Loops",
        ],
      },
    ],
  },
  {
    module: "MODULE 3: ADVANCED JAVASCRIPT (Days 13-17)",
    days: [
      {
        day: "DOM Manipulation (Days 13-14)",
        topics: [
          "Adding JavaScript to Websites",
          "Introduction to DOM",
          "Selecting HTML Elements with JavaScript",
          "Manipulating and Changing Styles, Text, and Attributes using JavaScript",
        ],
      },
      {
        day: "Advanced JS and DOM Manipulation (Days 15-16)",
        topics: [
          "Adding Event Listeners to Buttons",
          "Higher-Order Functions and Passing Functions as Arguments",
          "Playing Sounds on a Website",
          "JavaScript Objects",
          "Switch Statements",
          "Keyboard Event Listeners",
          "Callback Functions",
          "Higher-Order Functions vs Callback Functions",
          "Adding Animations",
        ],
      },
      {
        day: "Unix Command Line (Day 17)",
        topics: [
          "Basic Unix Commands",
          "Navigating the File System",
          "File and Directory Operations",
          "Permissions and Processes",
        ],
      },
    ],
  },
  {
    module: "MODULE 4: BACK-END DEVELOPMENT (Days 18-25)",
    days: [
      {
        day: "Introduction to Backend Development (Day 18)",
        topics: [
          "What is Backend Development?",
          "Technologies Used in Backend Development",
        ],
      },
      {
        day: "Node.js and Express.js (Days 19-21)",
        topics: [
          "Introduction to Node.js",
          "What is Node.js?",
          "Using Node.js",
          "Native Node Modules and npm Package Manager",
          "Introduction to Express.js",
          "What is Express?",
          "First Server with Express",
          "HTTP Requests",
          "Postman",
          "Middleware",
          "Custom Middleware",
        ],
      },
      {
        day: "Databases (Days 22-25)",
        topics: [
          "SQL vs NoSQL",
          "SQL",
          "Creating Tables and Inserting Data",
          "Reading Data: SELECT and WHERE Clause",
          "Updating Single Values and Adding Columns",
          "Deleting Data",
          "SQL Relationships, Foreign Keys, and Inner Joins",
          "PostgreSQL",
          "Introduction to PostgreSQL",
          "pgAdmin",
          "Using Keys, PostgreSQL Types, and Keywords",
          "Creating Tables with pgAdmin",
          "Reading Data from PostgreSQL",
          "Querying Data: SELECT, WHERE, LIKE",
          "Understanding Relationships",
        ],
      },
    ],
  },
  {
    module: "MODULE 5: HOSTING AND DEPLOYMENT (Days 26-30)",
    days: [
      {
        day: "Deployment Strategies (Days 26-27)",
        topics: [
          "Continuous Integration and Continuous Deployment (CI/CD)",
          "Environment Variables and Configuration",
          "Managing Different Environments (Development, Staging, Production)",
        ],
      },
      {
        day: "Hosting Options (Days 28-29)",
        topics: [
          "Hosting on Platforms (Heroku, Netlify, Vercel)",
          "Setting Up a Domain Name",
          "SSL Certificates and HTTPS",
        ],
      },
      {
        day: "Final Project and Review (Day 30)",
        topics: [
          "Full Stack Web Application Project",
          "Review of Key Concepts",
          "Q&A Session",
          "Course Conclusion and Next Steps",
        ],
      },
    ],
  },
];

const FullstackSyllabusFAQ = () => {
  const [openModule, setOpenModule] = useState(null);

  const handleToggle = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold underline underline-offset-4 decoration-blue-700 mb-8 text-center">Course Syllabus</h1>
      {syllabus.map((module, index) => (
        <div key={index} className="mb-6 border-b border-gray-300 pb-4">
          <button
            onClick={() => handleToggle(index)}
            className="flex items-center justify-between w-full text-left text-sm md:text-base font-medium text-gray-700 hover:text-[#453fe1] transition-all"
          >
            {module.module}
            <ChevronDownIcon className={`h-6 w-6 transition-transform ${openModule === index ? 'rotate-180' : ''}`} />
          </button>
          {openModule === index && (
            <div className="mt-4">
              {module.days.map((day, idx) => (
                <div key={idx} className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-700">{day.day}</h2>
                  <ul className="list-disc list-inside pl-4 mt-2">
                    {day.topics.map((topic, i) => (
                      <li key={i} className="text-gray-600">{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FullstackSyllabusFAQ;
