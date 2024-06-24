import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Phase 1: Advanced User Research and Persona Development (Days 1-5)",
      topics: [
        {
          title: "Advanced User Research Methods",
          details: [
            "Conducting contextual inquiries and ethnographic studies",
            "Analyzing qualitative and quantitative data",
          ],
        },
        {
          title: "Persona Development",
          details: [
            "Creating detailed user personas based on research findings",
            "Mapping user journeys and identifying pain points",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Information Architecture and Interaction Design (Days 6-10)",
      topics: [
        {
          title: "Advanced Information Architecture",
          details: [
            "Creating complex information structures and taxonomies",
            "Hierarchical organization of content and navigation",
          ],
        },
        {
          title: "Advanced Interaction Design",
          details: [
            "Designing complex interactions and micro-interactions",
            "Using advanced prototyping tools for interaction design",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Advanced Visual Design Principles (Days 11-15)",
      topics: [
        {
          title: "Advanced Typography and Visual Hierarchy",
          details: [
            "Experimenting with typography styles and combinations",
            "Creating sophisticated visual hierarchies",
          ],
        },
        {
          title: "Advanced Color Theory and Application",
          details: [
            "Using color palettes effectively for branding and accessibility",
            "Creating harmonious and impactful color schemes",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Motion Design and Animated UI (Days 16-20)",
      topics: [
        {
          title: "Principles of Motion Design",
          details: [
            "Understanding principles of animation: timing, easing, and physics-based motion",
            "Creating animated UI elements and transitions",
          ],
        },
        {
          title: "Prototyping Advanced Interactions",
          details: [
            "Using prototyping tools to simulate complex interactions and animations",
            "Integrating motion design into interactive prototypes",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Usability Testing and Iterative Design (Days 21-25)",
      topics: [
        {
          title: "Advanced Usability Testing",
          details: [
            "Conducting remote and moderated usability tests",
            "Analyzing usability metrics and qualitative feedback",
          ],
        },
        {
          title: "Iterative Design Process",
          details: [
            "Implementing iterative design cycles based on user feedback",
            "Collaborating with stakeholders and developers for design implementation",
          ],
        },
        {
          title: "Final Project and Portfolio Development",
          details: [
            "Applying advanced UI/UX design techniques to solve a real-world design challenge",
            "Presenting the final project with detailed documentation and rationale",
          ],
        },
      ],
    },
  ];
  

const AdvanceuiuxSyllabus = () => {
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
  
  export default AdvanceuiuxSyllabus;