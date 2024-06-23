import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
        phase: "Phase 1: Understanding the Stock Market (Days 1-3)",
        topics: [
            {
                title: "Introduction to Stock Markets",
                details: [
                    "Overview of financial markets",
                    "Types of financial markets: equity, debt, derivatives, and commodities",
                    "Key stock market indices: Nifty, Sensex, NASDAQ, Dow Jones",
                ],
            },
            {
                title: "Stock Market Participants",
                details: [
                    "Retail investors, institutional investors, and market makers",
                    "Roles of brokers and regulators",
                ],
            },
            {
                title: "Types of Securities",
                details: [
                    "Stocks, bonds, mutual funds, ETFs",
                    "Primary vs. secondary markets",
                ],
            },
        ],
    },
    {
        phase: "Phase 2: Basics of Stock Investing (Days 4-6)",
        topics: [
            {
                title: "Investment Strategies",
                details: [
                    "Value investing, growth investing, and income investing",
                    "Understanding risk and return",
                ],
            },
            {
                title: "Stock Selection",
                details: [
                    "Criteria for selecting stocks",
                    "Introduction to blue-chip, mid-cap, and small-cap stocks",
                ],
            },
            {
                title: "Investment Vehicles",
                details: [
                    "Direct stock purchase",
                    "Mutual funds and ETFs",
                    "SIPs (Systematic Investment Plans)",
                ],
            },
        ],
    },
    {
        phase: "Phase 3: Fundamental Analysis (Days 7-9)",
        topics: [
            {
                title: "Financial Statements",
                details: [
                    "Understanding balance sheet, income statement, and cash flow statement",
                    "Key financial ratios: P/E ratio, ROE, debt-to-equity ratio",
                ],
            },
            {
                title: "Company Analysis",
                details: [
                    "Analyzing company performance",
                    "Assessing management and corporate governance",
                ],
            },
            {
                title: "Industry and Economic Analysis",
                details: [
                    "Understanding industry trends and cycles",
                    "Impact of economic indicators on stock performance",
                ],
            },
        ],
    },
    {
        phase: "Phase 4: Technical Analysis (Days 10-12)",
        topics: [
            {
                title: "Introduction to Technical Analysis",
                details: [
                    "Difference between fundamental and technical analysis",
                    "Basic concepts: trends, support, and resistance",
                ],
            },
            {
                title: "Technical Indicators",
                details: [
                    "Moving averages, RSI, MACD",
                    "Chart patterns: head and shoulders, double top/bottom, triangles",
                ],
            },
            {
                title: "Using Charts and Tools",
                details: [
                    "Introduction to stock charting tools",
                    "Analyzing stock charts for making investment decisions",
                ],
            },
        ],
    },
    {
        phase: "Phase 5: Practical Investing and Portfolio Management (Days 13-15)",
        topics: [
            {
                title: "Creating an Investment Portfolio",
                details: [
                    "Diversification and asset allocation",
                    "Balancing risk and return in a portfolio",
                ],
            },
            {
                title: "Trading Strategies",
                details: [
                    "Long-term vs. short-term investing",
                    "Introduction to trading techniques: day trading, swing trading",
                ],
            },
            {
                title: "Investment Planning and Review",
                details: [
                    "Setting investment goals and timelines",
                    "Monitoring and reviewing investment performance",
                ],
            },
            {
                title: "Final Project",
                details: [
                    "Simulating stock market investments",
                    "Creating and presenting a mock investment portfolio",
                ],
            },
        ],
    },
];




const IntrotoStockmarketinvestingSyllabus = () => {
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
  
  export default IntrotoStockmarketinvestingSyllabus;