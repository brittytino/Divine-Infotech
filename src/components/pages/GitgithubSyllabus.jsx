import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Phase 1: Introduction to Version Control (Days 1-6)",
      topics: [
        {
          title: "Understanding Version Control Systems",
          details: [
            "Introduction to version control systems",
          ],
        },
        {
          title: "Introduction to Git and GitHub",
          details: [
            "Overview of Git and GitHub",
            "Setting up Git and configuring GitHub",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Basic Git Commands (Days 7-12)",
      topics: [
        {
          title: "Initializing a Repository",
          details: [
            "Creating a new Git repository",
          ],
        },
        {
          title: "Adding and Committing Changes",
          details: [
            "Staging changes with git add",
            "Committing changes with git commit",
          ],
        },
        {
          title: "Branching and Merging",
          details: [
            "Creating and switching branches",
            "Merging branches",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Collaborating with GitHub (Days 13-18)",
      topics: [
        {
          title: "Cloning Repositories",
          details: [
            "Cloning repositories from GitHub",
          ],
        },
        {
          title: "Pushing and Pulling Changes",
          details: [
            "Pushing local changes to GitHub",
            "Pulling remote changes from GitHub",
          ],
        },
        {
          title: "Managing Branches and Pull Requests",
          details: [
            "Creating and managing pull requests",
            "Reviewing and merging pull requests",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Advanced Git Topics (Days 19-24)",
      topics: [
        {
          title: "Rebasing and Resolving Conflicts",
          details: [
            "Introduction to rebasing",
            "Handling merge conflicts",
          ],
        },
        {
          title: "Working with Tags and Releases",
          details: [
            "Creating and using tags",
            "Managing releases",
          ],
        },
        {
          title: "Git Workflows",
          details: [
            "Understanding GitFlow and other workflows",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Git in Real-World Applications (Days 25-30)",
      topics: [
        {
          title: "Integrating Git into Development Workflows",
          details: [
            "Using Git in development projects",
          ],
        },
        {
          title: "Best Practices for Team Collaboration",
          details: [
            "Effective collaboration strategies with Git",
          ],
        },
        {
          title: "Continuous Integration and Deployment (CI/CD) Concepts",
          details: [
            "Overview of CI/CD",
            "Integrating Git with CI/CD pipelines",
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