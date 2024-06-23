import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';



const syllabus = [
    {
      phase: "Phase 1: Introduction to Tally and Basic Accounting Principles (Days 1-5)",
      topics: [
        {
          title: "Introduction to Tally",
          details: [
            "Overview of Tally software and its features",
            "Installation and setup of Tally",
            "Navigating the Tally interface",
          ],
        },
        {
          title: "Basic Accounting Principles",
          details: [
            "Understanding accounting fundamentals",
            "Double-entry system of accounting",
            "Types of accounts and accounting rules",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Creating and Managing Company Accounts (Days 6-10)",
      topics: [
        {
          title: "Company Creation in Tally",
          details: [
            "Creating a new company in Tally",
            "Configuring company settings",
            "Setting up financial year and security controls",
          ],
        },
        {
          title: "Managing Accounts in Tally",
          details: [
            "Creating and managing ledgers and groups",
            "Configuring chart of accounts",
            "Recording transactions and vouchers",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Inventory Management (Days 11-15)",
      topics: [
        {
          title: "Introduction to Inventory in Tally",
          details: [
            "Creating and managing stock groups, categories, and items",
            "Configuring units of measure and stock valuation methods",
          ],
        },
        {
          title: "Inventory Transactions",
          details: [
            "Recording inventory transactions (inward and outward)",
            "Managing stock transfers, adjustments, and reorders",
            "Generating inventory reports and analysis",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Advanced Features and Taxation (Days 16-20)",
      topics: [
        {
          title: "Advanced Accounting Features",
          details: [
            "Managing multiple currencies",
            "Implementing cost centers and cost categories",
            "Budgeting and variance analysis",
          ],
        },
        {
          title: "Taxation in Tally",
          details: [
            "Configuring GST in Tally",
            "Recording GST-compliant transactions",
            "Generating GST returns and reports",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Payroll, Reporting, and Final Project (Days 21-25)",
      topics: [
        {
          title: "Payroll Management",
          details: [
            "Setting up payroll in Tally",
            "Creating employee records and salary structures",
            "Processing payroll and generating payslips",
          ],
        },
        {
          title: "Reporting and Analysis",
          details: [
            "Generating financial statements (Balance Sheet, Profit & Loss Account)",
            "Creating and customizing management reports",
            "Analyzing financial performance",
          ],
        },
        {
          title: "Final Project",
          details: [
            "Developing a comprehensive project incorporating all learned concepts",
            "Simulating real-world accounting and inventory scenarios",
            "Project presentation and review",
          ],
        },
      ],
    },
  ];
  






const TallyfundamentalsSyllabus = () => {
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
  
  export default TallyfundamentalsSyllabus;