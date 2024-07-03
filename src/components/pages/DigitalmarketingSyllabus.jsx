import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';


const syllabus = [
  {
    phase: "Phase 1: Introduction to Digital Marketing (Days 1-5)",
    topics: [
      {
        title: "Overview of Digital Marketing",
        details: [
          "Evolution of digital marketing and its importance",
          "Key digital marketing channels and platforms",
          "Understanding the digital marketing ecosystem"
        ],
      },
      {
        title: "Digital Marketing Strategy",
        details: [
          "Setting SMART goals for digital marketing campaigns",
          "Understanding buyer personas and target audience segmentation",
          "Creating effective digital marketing strategies"
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Website Planning and Development (Days 6-10)",
    topics: [
      {
        title: "Website Basics",
        details: [
          "Essential elements of a successful website",
          "User experience (UX) and user interface (UI) considerations",
          "Mobile responsiveness and website speed optimization"
        ],
      },
      {
        title: "Content Management Systems (CMS)",
        details: [
          "Introduction to popular CMS platforms (e.g., WordPress)",
          "Content planning and creation strategies",
          "SEO-friendly content writing and optimization"
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Search Engine Optimization (SEO) (Days 11-20)",
    topics: [
      {
        title: "SEO Fundamentals",
        details: [
          "Understanding search engine algorithms",
          "On-page SEO techniques (meta tags, keyword optimization)",
          "Off-page SEO strategies (link building, social media signals)"
        ],
      },
      {
        title: "SEO Tools and Analytics",
        details: [
          "Using Google Analytics for SEO insights",
          "Keyword research and competitive analysis tools",
          "Monitoring and reporting SEO performance"
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Social Media Marketing (Days 21-28)",
    topics: [
      {
        title: "Social Media Landscape",
        details: [
          "Overview of major social media platforms (Facebook, Instagram, Twitter, LinkedIn)",
          "Developing a social media marketing plan",
          "Creating engaging content and managing social media campaigns"
        ],
      },
      {
        title: "Paid Advertising on Social Media",
        details: [
          "Introduction to social media advertising platforms (Facebook Ads, Instagram Ads)",
          "Setting up and optimizing paid ad campaigns",
          "Budgeting, targeting, and measuring ad performance"
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Email Marketing and Digital Analytics (Days 29-35)",
    topics: [
      {
        title: "Email Marketing Fundamentals",
        details: [
          "Building an email list and segmentation strategies",
          "Designing effective email campaigns",
          "Email automation and A/B testing"
        ],
      },
      {
        title: "Digital Marketing Analytics",
        details: [
          "Introduction to digital marketing analytics tools (Google Analytics, HubSpot)",
          "Interpreting key metrics and KPIs",
          "Data-driven decision-making and campaign optimization"
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