import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
    phase: "Phase 1: Understanding User-Centered Design (Days 1-6)",
    topics: [
      {
        title: "Introduction to UI/UX Design",
        details: [
          "Overview of UI and UX design roles and responsibilities",
          "Importance of user-centered design in product development",
          "Differences between UI and UX design",
        ],
      },
      {
        title: "User Research and Analysis",
        details: [
          "Conducting user research (interviews, surveys, usability testing)",
          "Analyzing user feedback and requirements",
          "Creating user personas and user journey maps",
        ],
      },
      {
        title: "Information Architecture",
        details: [
          "Structuring information effectively for intuitive navigation",
          "Card sorting and hierarchical organization",
          "Creating sitemaps and flow diagrams",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Advanced UI Design Techniques (Days 7-12)",
    topics: [
      {
        title: "Visual Design Principles",
        details: [
          "Color theory and psychology in UI design",
          "Typography fundamentals and font pairing",
          "Applying Gestalt principles for visual hierarchy",
        ],
      },
      {
        title: "UI Design Tools",
        details: [
          "Introduction to industry-standard tools (Sketch, Adobe XD, Figma)",
          "Creating UI elements and components",
          "Prototyping interactions and animations",
        ],
      },
      {
        title: "Responsive and Adaptive Design",
        details: [
          "Designing for different screen sizes and resolutions",
          "Mobile-first and responsive design strategies",
          "Using media queries and flexible grids",
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Advanced UX Design Techniques (Days 13-18)",
    topics: [
      {
        title: "Interaction Design",
        details: [
          "Principles of interaction design (affordance, feedback, constraints)",
          "Designing intuitive user interactions and micro-interactions",
          "Prototyping interactions with motion and animation",
        ],
      },
      {
        title: "Usability Testing and Feedback",
        details: [
          "Conducting usability tests and heuristic evaluations",
          "Iterative design based on user feedback",
          "A/B testing and multivariate testing",
        ],
      },
      {
        title: "Accessibility in Design",
        details: [
          "Designing for accessibility (WCAG guidelines)",
          "Creating inclusive designs for users with disabilities",
          "Tools and resources for accessibility testing",
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Designing for Emerging Technologies (Days 19-24)",
    topics: [
      {
        title: "Designing for Virtual and Augmented Reality",
        details: [
          "Principles of VR/AR interaction design",
          "Creating immersive experiences and environments",
          "UX challenges and considerations in VR/AR",
        ],
      },
      {
        title: "Designing for Voice Interfaces and AI",
        details: [
          "UX principles for voice interaction design",
          "Designing conversational interfaces (chatbots, voice assistants)",
          "Integrating AI and machine learning in UX design",
        ],
      },
      {
        title: "Designing for Cross-Platform Experiences",
        details: [
          "Strategies for consistent user experience across devices",
          "Designing for web, mobile, and desktop applications",
          "Using design systems for scalable and cohesive designs",
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Advanced Topics and Career Development (Days 25-30)",
    topics: [
      {
        title: "Portfolio Development",
        details: [
          "Showcasing projects and case studies effectively",
          "Creating a personal brand as a UI/UX designer",
          "Networking and job search strategies",
        ],
      },
      {
        title: "Industry Trends and Future of UI/UX",
        details: [
          "Current trends in UI/UX design (dark mode, micro-interactions)",
          "Predicting future trends and technologies",
          "Continuing education and professional development",
        ],
      },
      {
        title: "Capstone Project",
        details: [
          "Applying all learned concepts to a final UI/UX design project",
          "Presenting the project and receiving feedback",
          "Refining the project for inclusion in a professional portfolio",
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