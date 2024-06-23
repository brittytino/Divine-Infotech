import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Phase 1: Introduction to Investment Analysis (Days 1-5)",
      topics: [
        {
          title: "Overview of Investment Analysis",
          details: [
            "Importance of analysis in investment decisions",
            "Fundamental vs. technical analysis: differences and similarities",
            "Role of analysis in risk management and portfolio optimization",
          ],
        },
        {
          title: "Economic and Market Environment",
          details: [
            "Understanding macroeconomic factors affecting investments",
            "Impact of economic indicators on financial markets",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Fundamental Analysis (Days 6-12)",
      topics: [
        {
          title: "Financial Statements",
          details: [
            "Understanding balance sheet, income statement, and cash flow statement",
            "Key financial ratios for analysis: P/E ratio, ROE, debt-to-equity ratio",
          ],
        },
        {
          title: "Company Analysis",
          details: [
            "Evaluating company fundamentals and financial health",
            "Assessing management quality and corporate governance",
          ],
        },
        {
          title: "Valuation Techniques",
          details: [
            "Methods for valuing stocks: DCF (Discounted Cash Flow), P/E ratio, P/B ratio",
            "Estimating intrinsic value and fair market value",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Technical Analysis (Days 13-19)",
      topics: [
        {
          title: "Introduction to Technical Analysis",
          details: [
            "Basic concepts: trends, support, resistance, and volume",
            "Difference between technical and fundamental analysis",
          ],
        },
        {
          title: "Chart Patterns and Indicators",
          details: [
            "Recognizing and interpreting chart patterns: head and shoulders, double top/bottom, triangles",
            "Using technical indicators: moving averages, RSI (Relative Strength Index), MACD (Moving Average Convergence Divergence)",
          ],
        },
        {
          title: "Applying Technical Analysis",
          details: [
            "Building trading strategies based on technical signals",
            "Timing entry and exit points using technical analysis tools",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Portfolio Management (Days 20-26)",
      topics: [
        {
          title: "Portfolio Construction",
          details: [
            "Diversification and asset allocation strategies",
            "Building a balanced investment portfolio",
          ],
        },
        {
          title: "Risk Management",
          details: [
            "Understanding and managing investment risks",
            "Hedging techniques and portfolio insurance",
          ],
        },
        {
          title: "Performance Evaluation",
          details: [
            "Monitoring and reviewing portfolio performance",
            "Adjusting investment strategies based on analysis results",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Practical Applications and Case Studies (Days 27-30)",
      topics: [
        {
          title: "Real-world Applications",
          details: [
            "Applying fundamental and technical analysis in real-life scenarios",
            "Case studies of successful investment strategies",
          ],
        },
        {
          title: "Investment Planning",
          details: [
            "Setting investment goals and objectives",
            "Creating a personalized investment plan based on analysis",
          ],
        },
        {
          title: "Final Project",
          details: [
            "Conducting a comprehensive analysis of selected stocks or markets",
            "Presenting investment recommendations based on findings",
          ],
        },
      ],
    },
  ];
  
  
const AnalysisforInvestorSyllabus = () => {
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
  
  export default AnalysisforInvestorSyllabus;