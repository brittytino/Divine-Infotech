import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';


const syllabus = [
  {
    phase: "Phase 1: Introduction to Tally Prime (Days 1-5)",
    topics: [
      {
        title: "Objective: Gain familiarity with Tally Prime software and its basic functionalities.",
        details: [
          "Overview of Tally Prime",
          "Introduction to Tally Prime interface and navigation",
          "Setting up a company in Tally Prime",
          "Basics of creating and managing ledgers, groups, and vouchers",
        ],
      },
      {
        title: "Advanced Company Operations",
        details: [
          "Configuring company settings in Tally Prime",
          "Managing multiple companies and data security",
          "Backup and restore operations in Tally Prime",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Tally Prime Features and Customization (Days 6-15)",
    topics: [
      {
        title: "Objective: Explore advanced features and customization options in Tally Prime.",
        details: [
          "Advanced Voucher Entries",
          "Creating complex voucher entries (contra, payment, receipt, etc.)",
          "Understanding voucher classes and types in Tally Prime",
          "Customizing voucher formats and printing options",
        ],
      },
      {
        title: "Financial Reporting and Analysis",
        details: [
          "Generating and customizing financial reports (balance sheet, profit & loss statement)",
          "Analyzing financial data using Tally Prime's reporting tools",
          "Exporting reports and data integration with other software",
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Goods and Services Tax (GST) Implementation (Days 16-25)",
    topics: [
      {
        title: "Objective: Learn GST concepts and implementation using Tally Prime.",
        details: [
          "Introduction to GST",
          "Overview of Goods and Services Tax (GST) in India",
          "GST registration process and compliance requirements",
          "GST rates and classification of goods and services",
        ],
      },
      {
        title: "GST Accounting in Tally Prime",
        details: [
          "Configuring GST in Tally Prime and GSTIN setup",
          "Recording GST transactions (sales, purchases, reverse charge mechanism)",
          "GST reconciliation and filing GST returns using Tally Prime",
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Inventory Management (Days 26-35)",
    topics: [
      {
        title: "Objective: Understand inventory management and control using Tally Prime.",
        details: [
          "Inventory Setup and Configuration",
          "Creating and managing stock items in Tally Prime",
          "Stock groups, units of measurement (UOM), and stock categories",
          "Stock valuation methods and inventory tracking",
        ],
      },
      {
        title: "Advanced Inventory Features",
        details: [
          "Handling batch-wise and expiry management in Tally Prime",
          "Stock transfer and physical stock verification processes",
          "Inventory reports and analysis tools in Tally Prime",
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Practical Application and Project Work (Days 36-45)",
    topics: [
      {
        title: "Objective: Apply learned concepts through practical exercises and project work.",
        details: [
          "Practical Exercises",
          "Hands-on practice with Tally Prime software",
          "Real-world scenarios and case studies",
          "Troubleshooting common issues in Tally Prime",
        ],
      },
      {
        title: "Capstone Project",
        details: [
          "Developing and implementing a comprehensive accounting and GST compliance project",
          "Integration of advanced Tally Prime features and techniques",
          "Presentation and evaluation of the project",
        ],
      },
    ],
  },
];

  

const MasteringtallyprimewithGstSyllabus = () => {
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
  
  export default MasteringtallyprimewithGstSyllabus;