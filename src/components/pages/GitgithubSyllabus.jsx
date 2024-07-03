import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
    phase: "Phase 1: Introduction to Version Control (Days 1-3)",
    topics: [
      {
        title: "Understanding Version Control Systems",
        details: [
          "Importance of version control in software development",
          "Overview of distributed version control systems (DVCS)",
          "Git vs. other version control systems",
        ],
      },
      {
        title: "Getting Started with Git",
        details: [
          "Installing Git and setting up Git configuration",
          "Initializing a Git repository (git init)",
          "Basic Git commands (git add, git commit, git status)",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Working with Git (Days 4-7)",
    topics: [
      {
        title: "Git Branching and Merging",
        details: [
          "Creating and managing branches in Git",
          "Merging branches and resolving conflicts",
          "Best practices for branching strategies",
        ],
      },
      {
        title: "Collaboration with Remote Repositories (GitHub)",
        details: [
          "Introduction to GitHub and its features",
          "Cloning repositories (git clone)",
          "Pushing and pulling changes to/from remote repositories",
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Advanced Git Features (Days 8-10)",
    topics: [
      {
        title: "Git Rebase and Interactive Rebase",
        details: [
          "Understanding Git rebase and its uses",
          "Performing interactive rebase for history rewriting",
          "Using rebase to manage feature branches",
        ],
      },
      {
        title: "Git Workflow Best Practices",
        details: [
          "Git workflow models (Gitflow, GitHub flow)",
          "Integrating Git with CI/CD pipelines",
          "Resolving merge conflicts and handling Git mistakes",
        ],
      },
    ],
  },
];



const GitgithubSyllabus = () => {
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
  
  export default GitgithubSyllabus;