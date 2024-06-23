import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Phase 1: Introduction to Game Development (Days 1-4)",
      topics: [
        {
          title: "Overview of Game Development",
          details: [
            "History and evolution of video games",
            "Different types of games (2D, 3D, AR, VR)",
            "Introduction to game development roles (designer, programmer, artist, etc.)",
          ],
        },
        {
          title: "Game Development Tools and Engines",
          details: [
            "Overview of popular game engines (Unity, Unreal Engine, Godot)",
            "Setting up the development environment",
            "Basic interface and features of chosen game engine",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Game Design Principles (Days 5-8)",
      topics: [
        {
          title: "Fundamentals of Game Design",
          details: [
            "Game design documents and planning",
            "Core mechanics, gameplay loops, and game flow",
            "Designing levels and environments",
          ],
        },
        {
          title: "Prototyping and Iteration",
          details: [
            "Creating simple game prototypes",
            "Playtesting and iterating on game design",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Basic Game Programming (Days 9-12)",
      topics: [
        {
          title: "Introduction to Programming for Games",
          details: [
            "Basic programming concepts (variables, loops, functions, and conditionals)",
            "Scripting languages used in game development (C# for Unity, GDScript for Godot, Blueprints for Unreal Engine)",
          ],
        },
        {
          title: "Creating Game Mechanics",
          details: [
            "Implementing player controls and movement",
            "Collision detection and physics",
            "Adding basic gameplay elements (collectibles, enemies, etc.)",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Game Art and Animation (Days 13-16)",
      topics: [
        {
          title: "Creating Game Assets",
          details: [
            "Introduction to 2D and 3D art creation",
            "Tools for creating game assets (Photoshop, Blender, etc.)",
            "Importing and using assets in the game engine",
          ],
        },
        {
          title: "Basic Animation",
          details: [
            "Creating and importing animations",
            "Animating characters and objects",
            "Using animation controllers and state machines",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Building and Testing a Simple Game (Days 17-20)",
      topics: [
        {
          title: "Integrating Components",
          details: [
            "Bringing together game design, programming, and art",
            "Building a simple, functional game",
          ],
        },
        {
          title: "Game Testing and Debugging",
          details: [
            "Testing the game for bugs and performance issues",
            "Debugging common issues",
            "Getting feedback and making improvements",
          ],
        },
        {
          title: "Project Presentation",
          details: [
            "Finalizing and polishing the game",
            "Presenting the game project",
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
  