import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';


const syllabus = [
    {
      phase: "Phase 1: Introduction to Digital Marketing",
      topics: [
        {
          title: "Overview of Digital Marketing Landscape",
          details: [
            "Introduction to digital marketing landscape",
            "Importance of digital presence for businesses",
            "Introduction to key digital marketing channels",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Website and Content Strategy",
      topics: [
        {
          title: "Basics of Website Planning and Design",
          details: [
            "Basics of website planning and design",
          ],
        },
        {
          title: "Content Creation and Optimization",
          details: [
            "Content creation and optimization",
          ],
        },
        {
          title: "SEO Fundamentals",
          details: [
            "SEO fundamentals",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Social Media Marketing",
      topics: [
        {
          title: "Understanding Major Social Media Platforms",
          details: [
            "Understanding major social media platforms",
          ],
        },
        {
          title: "Creating Effective Social Media Campaigns",
          details: [
            "Creating effective social media campaigns",
          ],
        },
        {
          title: "Engagement and Analytics",
          details: [
            "Engagement and analytics",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Paid Advertising",
      topics: [
        {
          title: "Introduction to PPC (Pay-Per-Click) Advertising",
          details: [
            "Introduction to PPC (Pay-Per-Click) advertising",
          ],
        },
        {
          title: "Display Advertising Fundamentals",
          details: [
            "Display advertising fundamentals",
          ],
        },
        {
          title: "Campaign Setup and Optimization",
          details: [
            "Campaign setup and optimization",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Analytics and Optimization",
      topics: [
        {
          title: "Web Analytics Tools and Metrics",
          details: [
            "Web analytics tools and metrics",
          ],
        },
        {
          title: "Conversion Rate Optimization (CRO)",
          details: [
            "Conversion rate optimization (CRO)",
          ],
        },
        {
          title: "Reporting and Performance Measurement",
          details: [
            "Reporting and performance measurement",
          ],
        },
      ],
    },
  ];
  

const DigitalmarketingSyllabus = () => {
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
  
  export default DigitalmarketingSyllabus;