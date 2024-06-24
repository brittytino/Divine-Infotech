import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';


const syllabus = [
    {
      phase: "Phase 1: Introduction to UI/UX Design (Days 1-6)",
      topics: [
        {
          title: "Introduction to UI/UX Design",
          details: [
            "Understanding UI vs. UX",
            "Overview of User Interface (UI) design and User Experience (UX) design",
            "Importance of UI/UX in product development",
          ],
        },
        {
          title: "User Research and Analysis",
          details: [
            "User Research",
            "Conducting user interviews and surveys",
            "Analyzing user behavior and needs",
          ],
        },
        {
          title: "Information Architecture",
          details: [
            "Structuring Information",
            "Organizing content and navigation",
            "Creating user flows and sitemaps",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Wireframing and Prototyping (Days 7-12)",
      topics: [
        {
          title: "Wireframing",
          details: [
            "Creating low-fidelity wireframes",
            "Importance of wireframes in design iteration",
          ],
        },
        {
          title: "Visual Design Principles",
          details: [
            "Typography and Color Theory",
            "Choosing fonts and creating typographic hierarchy",
            "Understanding color psychology and applying color theory in design",
          ],
        },
        {
          title: "UI Design Tools",
          details: [
            "Introduction to Design Tools",
            "Overview of popular UI design tools (e.g., Sketch, Figma, Adobe XD)",
            "Getting started with a chosen design tool",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Interaction Design and Usability Testing (Days 13-18)",
      topics: [
        {
          title: "Designing Interactions",
          details: [
            "Principles of interaction design",
            "Creating meaningful animations and transitions",
          ],
        },
        {
          title: "Usability Testing",
          details: [
            "Conducting usability tests with prototypes",
            "Iterating based on user feedback",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Designing for Different Platforms (Days 19-24)",
      topics: [
        {
          title: "Responsive and Adaptive Design",
          details: [
            "Design considerations for web, mobile, and other platforms",
            "Ensuring consistent user experience across devices",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Final Project and Review (Days 25-30)",
      topics: [
        {
          title: "Final Project",
          details: [
            "Applying learned principles to design a UI/UX project",
            "Presenting and receiving feedback on the project",
          ],
        },
      ],
    },
  ];
     

const IntrotoUiuxSyllabus = () => {
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
  
  export default IntrotoUiuxSyllabus;