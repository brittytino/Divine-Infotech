import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
      phase: "Phase 1: Introduction to Game Development (Days 1-5)",
      topics: [
          {
              title: "Overview of Game Development",
              details: [
                  "Introduction to different types of games and genres",
                  "Understanding the game development process",
                  "Roles and responsibilities in game development teams",
              ],
          },
          {
              title: "Game Design Fundamentals",
              details: [
                  "Principles of game design (rules, mechanics, dynamics)",
                  "Game loops and player interaction",
                  "Creating compelling game narratives",
              ],
          },
          {
              title: "Game Engines and Tools",
              details: [
                  "Introduction to game engines (Unity, Unreal Engine)",
                  "Setting up a development environment",
                  "Overview of Unity interface and basic tools",
              ],
          },
      ],
  },
  {
      phase: "Phase 2: Game Development Basics (Days 6-10)",
      topics: [
          {
              title: "Unity Basics",
              details: [
                  "Understanding Unity's GameObjects and components",
                  "Working with scenes and assets",
                  "Scripting basics with C# in Unity",
              ],
          },
          {
              title: "2D Game Development",
              details: [
                  "Creating 2D sprites and animations",
                  "Using Unity's 2D physics system",
                  "Implementing basic gameplay mechanics (movement, collisions)",
              ],
          },
          {
              title: "Introduction to Game Art and Animation",
              details: [
                  "Basics of creating game assets (sprites, textures)",
                  "Animation principles and techniques",
                  "Using Unity's animation system",
              ],
          },
      ],
  },
  {
      phase: "Phase 3: Intermediate Game Development (Days 11-15)",
      topics: [
          {
              title: "Unity Scripting and Gameplay Mechanics",
              details: [
                  "Intermediate scripting techniques in C#",
                  "Implementing more complex gameplay mechanics (AI, UI interactions)",
                  "Managing game state and transitions",
              ],
          },
          {
              title: "Advanced Unity Features",
              details: [
                  "Using Unity's particle system for effects",
                  "Audio implementation and sound design",
                  "Integrating third-party assets and plugins",
              ],
          },
          {
              title: "Game Optimization and Performance",
              details: [
                  "Understanding performance bottlenecks",
                  "Optimization techniques for graphics and scripts",
                  "Testing and profiling games for performance",
              ],
          },
      ],
  },
  {
      phase: "Phase 4: Game Development Projects (Days 16-20)",
      topics: [
          {
              title: "Project Planning and Prototyping",
              details: [
                  "Defining game concepts and objectives",
                  "Creating game design documents and wireframes",
                  "Prototyping gameplay mechanics and features",
              ],
          },
          {
              title: "Developing Game Projects",
              details: [
                  "Implementing project milestones and timelines",
                  "Collaborating in game development teams (if applicable)",
                  "Iterative development and playtesting",
              ],
          },
      ],
  },
  {
      phase: "Phase 5: Final Project and Showcase (Days 21-25)",
      topics: [
          {
              title: "Final Game Development",
              details: [
                  "Refining and polishing the game project",
                  "Adding finishing touches (sound, visual effects)",
                  "Debugging and testing for final release",
              ],
          },
          {
              title: "Game Showcase and Feedback",
              details: [
                  "Presenting the final game project to peers and instructors",
                  "Gathering feedback and evaluating project success",
                  "Creating a portfolio and showcasing the game",
              ],
          },
      ],
  },
];

  



const FundamentalsofgameDevSyllabus = () => {
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
  
  export default FundamentalsofgameDevSyllabus;
  