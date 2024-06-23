import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';


const syllabus = [
    {
      phase: "Phase 1: Introduction to Tally Prime and Basic Accounting (Days 1-8)",
      topics: [
        {
          title: "Introduction to Tally Prime",
          details: [
            "Overview of Tally Prime features",
            "Installation and initial setup",
            "Navigating the Tally Prime interface",
          ],
        },
        {
          title: "Basic Accounting Principles",
          details: [
            "Understanding fundamental accounting concepts",
            "Double-entry system of accounting",
            "Types of accounts and their rules",
          ],
        },
        {
          title: "Creating and Configuring Company Accounts",
          details: [
            "Creating a new company in Tally Prime",
            "Configuring company settings and security controls",
            "Setting up financial years",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Advanced Accounting in Tally Prime (Days 9-16)",
      topics: [
        {
          title: "Managing Ledgers and Groups",
          details: [
            "Creating and managing ledgers and groups",
            "Configuring chart of accounts",
            "Recording various types of vouchers (sales, purchase, receipt, payment)",
          ],
        },
        {
          title: "Banking and Reconciliation",
          details: [
            "Managing bank accounts and transactions",
            "Performing bank reconciliation",
            "Configuring and generating cheque printing",
          ],
        },
        {
          title: "Cost Centers and Cost Categories",
          details: [
            "Setting up cost centers and categories",
            "Allocating costs and analyzing expenditures",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Inventory Management (Days 17-24)",
      topics: [
        {
          title: "Inventory Configuration",
          details: [
            "Creating stock groups, categories, items, and units of measure",
            "Configuring stock valuation methods",
          ],
        },
        {
          title: "Inventory Transactions",
          details: [
            "Recording inventory transactions (inward and outward)",
            "Managing stock transfers, adjustments, and reorders",
          ],
        },
        {
          title: "Inventory Reporting",
          details: [
            "Generating inventory reports",
            "Analyzing stock movement and valuation",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: GST Implementation in Tally Prime (Days 25-32)",
      topics: [
        {
          title: "Introduction to GST",
          details: [
            "Overview of GST and its components",
            "Understanding GST compliance requirements",
          ],
        },
        {
          title: "Configuring GST in Tally Prime",
          details: [
            "Setting up GST details for the company",
            "Creating GST-compliant ledgers and stock items",
          ],
        },
        {
          title: "Recording GST Transactions",
          details: [
            "Recording sales and purchase transactions with GST",
            "Managing advance receipts and payments under GST",
          ],
        },
        {
          title: "Generating GST Returns and Reports",
          details: [
            "Generating GSTR-1, GSTR-2, and GSTR-3B",
            "Reconciling GST returns with books of accounts",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Payroll, Reporting, and Final Project (Days 33-40)",
      topics: [
        {
          title: "Payroll Management",
          details: [
            "Setting up payroll in Tally Prime",
            "Creating employee records and salary structures",
            "Processing payroll and generating payslips",
          ],
        },
        {
          title: "Financial Reporting and Analysis",
          details: [
            "Generating financial statements (Balance Sheet, Profit & Loss Account)",
            "Creating and customizing management reports",
            "Analyzing financial performance and ratios",
          ],
        },
        {
          title: "Final Project",
          details: [
            "Developing a comprehensive project incorporating all learned concepts",
            "Simulating real-world accounting, inventory, and GST scenarios",
            "Project presentation and review",
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