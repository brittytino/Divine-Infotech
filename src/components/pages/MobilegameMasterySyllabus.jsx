import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';


const syllabus = [
    {
      phase: "Phase 1: Introduction to Mobile Game Development (Days 1-12)",
      topics: [
        {
          title: "Overview of Mobile Game Development",
          details: [
            "Understanding the mobile gaming market",
            "Differences between mobile and other platforms",
            "Introduction to game engines (Unity, Unreal Engine, Godot)",
          ],
        },
        {
          title: "Setting Up Development Environment",
          details: [
            "Installing and configuring chosen game engine",
            "Setting up Android and iOS development environments",
            "Creating a basic project and understanding project structure",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Game Design and Prototyping (Days 13-24)",
      topics: [
        {
          title: "Fundamentals of Game Design",
          details: [
            "Game design principles and documentation",
            "Creating engaging game mechanics and gameplay loops",
            "Level design and environment creation",
          ],
        },
        {
          title: "Prototyping",
          details: [
            "Building simple prototypes to test game ideas",
            "Iterating on game design based on feedback",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Mobile Game Programming (Days 25-36)",
      topics: [
        {
          title: "Programming Basics",
          details: [
            "Introduction to programming languages used in game engines (C# for Unity, GDScript for Godot, Blueprints/C++ for Unreal Engine)",
            "Basic programming concepts: variables, loops, functions, and conditionals",
          ],
        },
        {
          title: "Core Game Mechanics",
          details: [
            "Implementing player controls and movement",
            "Collision detection and physics",
            "Creating interactive objects and environments",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Advanced Game Development Techniques (Days 37-48)",
      topics: [
        {
          title: "Advanced Programming",
          details: [
            "Implementing complex game mechanics",
            "Scripting AI behaviors for NPCs",
            "Managing game state and progression",
          ],
        },
        {
          title: "Graphics and Animation",
          details: [
            "Creating and importing 2D/3D assets",
            "Implementing animations for characters and objects",
            "Using shaders and visual effects",
          ],
        },
        {
          title: "Sound and Music",
          details: [
            "Adding sound effects and background music",
            "Implementing audio triggers and controls",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Optimization, Monetization, and Deployment (Days 49-60)",
      topics: [
        {
          title: "Performance Optimization",
          details: [
            "Optimizing game performance for mobile devices",
            "Profiling and debugging techniques",
          ],
        },
        {
          title: "Monetization Strategies",
          details: [
            "Understanding in-app purchases and ads",
            "Implementing monetization features in the game",
          ],
        },
        {
          title: "Testing and Deployment",
          details: [
            "Testing the game on various devices and platforms",
            "Preparing the game for release",
            "Publishing the game on Google Play Store and Apple App Store",
          ],
        },
        {
          title: "Final Project",
          details: [
            "Developing a complete, polished mobile game",
            "Incorporating all learned concepts",
            "Project presentation and review",
          ],
        },
      ],
    },
  ];
  



const MobilegameMasterySyllabus = () => {
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
  
  export default MobilegameMasterySyllabus;