import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Phase 1: Introduction to Game Physics (Days 1-7)",
      topics: [
        {
          title: "Basics of Game Physics",
          details: [
            "Understanding physics principles in games",
            "Coordinate systems and transformations",
            "Introduction to physics engines (e.g., Unity Physics, Box2D, Bullet)",
          ],
        },
        {
          title: "Rigid Body Dynamics",
          details: [
            "Concepts of mass, force, velocity, and acceleration",
            "Newton's laws of motion",
            "Implementing rigid body physics in the game engine",
          ],
        },
        {
          title: "Collision Detection and Response",
          details: [
            "Types of collisions (AABB, sphere, raycasting)",
            "Collision detection algorithms",
            "Handling collision response and resolution",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Advanced Physics Topics (Days 8-14)",
      topics: [
        {
          title: "Particle Systems",
          details: [
            "Creating and managing particle systems",
            "Implementing effects like fire, smoke, and explosions",
          ],
        },
        {
          title: "Ragdoll Physics",
          details: [
            "Introduction to ragdoll physics",
            "Setting up ragdoll simulations for characters",
          ],
        },
        {
          title: "Soft Body Physics",
          details: [
            "Basics of soft body dynamics",
            "Implementing soft body physics for objects like cloth and jelly",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Introduction to Game AI (Days 15-21)",
      topics: [
        {
          title: "Basics of Game AI",
          details: [
            "Understanding AI concepts in games",
            "AI vs. traditional programming",
            "Introduction to state machines and decision trees",
          ],
        },
        {
          title: "Pathfinding Algorithms",
          details: [
            "Introduction to pathfinding",
            "Implementing A* and Dijkstra's algorithms",
            "NavMesh generation and navigation",
          ],
        },
        {
          title: "Steering Behaviors",
          details: [
            "Basic steering behaviors (seek, flee, arrive)",
            "Combining steering behaviors for complex movements",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Advanced AI Techniques (Days 22-28)",
      topics: [
        {
          title: "Finite State Machines (FSM)",
          details: [
            "Implementing FSM for AI behavior control",
            "Transition conditions and actions",
          ],
        },
        {
          title: "Behavior Trees",
          details: [
            "Introduction to behavior trees",
            "Creating and managing complex AI behaviors with behavior trees",
          ],
        },
        {
          title: "Machine Learning in Games (Optional)",
          details: [
            "Basics of machine learning concepts",
            "Implementing simple machine learning models for AI",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Integrating Physics and AI in Game Projects (Days 29-35)",
      topics: [
        {
          title: "Combining Physics and AI",
          details: [
            "Creating realistic AI characters with physics-based movements",
            "Implementing AI behaviors that interact with the game world using physics",
          ],
        },
        {
          title: "Optimization Techniques",
          details: [
            "Optimizing physics calculations for performance",
            "Profiling and debugging AI and physics in games",
          ],
        },
        {
          title: "Final Project",
          details: [
            "Developing a game project incorporating both physics and AI",
            "Testing, debugging, and optimizing the project",
            "Presenting and reviewing the final project",
          ],
        },
      ],
    },
  ];
  
  const GamephysicAiSyllabus = () => {
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
  
  export default GamephysicAiSyllabus;