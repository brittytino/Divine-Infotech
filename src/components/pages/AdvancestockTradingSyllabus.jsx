import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
    phase: "Phase 1: Introduction to Stock Market Fundamentals (Days 1-5)",
    topics: [
      {
        title: "Objective: Gain a foundational understanding of the stock market and its operations.",
        details: [
          "Introduction to Financial Markets",
          "Overview of stock exchanges and trading mechanisms",
          "Understanding market participants (investors, brokers, institutions)",
          "Basics of equity markets and trading terminology",
        ],
      },
      {
        title: "Market Analysis Approaches",
        details: [
          "Fundamental vs. technical analysis",
          "Economic indicators and their impact on stock prices",
          "Introduction to quantitative analysis techniques",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Fundamental Analysis (Days 6-15)",
    topics: [
      {
        title: "Objective: Learn how to analyze stocks based on fundamental factors.",
        details: [
          "Financial Statement Analysis",
          "Analyzing income statements, balance sheets, and cash flow statements",
          "Ratios for financial health assessment (e.g., P/E ratio, debt-to-equity ratio)",
          "Evaluating company management and governance",
        ],
      },
      {
        title: "Valuation Methods",
        details: [
          "Discounted cash flow (DCF) analysis",
          "Comparable company analysis (comps)",
          "Estimating intrinsic stock value",
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Technical Analysis (Days 16-25)",
    topics: [
      {
        title: "Objective: Explore technical analysis techniques for predicting stock price movements.",
        details: [
          "Chart Patterns and Trends",
          "Recognizing and interpreting common chart patterns (e.g., head and shoulders, double tops/bottoms)",
          "Identifying trendlines and support/resistance levels",
          "Candlestick chart analysis and its applications",
        ],
      },
      {
        title: "Technical Indicators",
        details: [
          "Using moving averages and oscillators (e.g., RSI, MACD)",
          "Volume analysis and its significance",
          "Building trading strategies based on technical indicators",
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Trading Strategies (Days 26-35)",
    topics: [
      {
        title: "Objective: Develop and implement advanced trading strategies.",
        details: [
          "Risk Management",
          "Importance of risk management in trading",
          "Setting stop-loss orders and position sizing strategies",
          "Portfolio diversification and asset allocation",
        ],
      },
      {
        title: "Advanced Trading Techniques",
        details: [
          "Momentum trading and swing trading strategies",
          "Options trading strategies (basic overview)",
          "Algorithmic trading and automated trading systems",
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Practical Application and Simulation (Days 36-45)",
    topics: [
      {
        title: "Objective: Apply learned techniques through practical trading simulations.",
        details: [
          "Simulated Trading Exercises",
          "Using trading platforms for simulated trading",
          "Implementing trading strategies in real-time scenarios",
          "Analyzing performance and refining trading techniques",
        ],
      },
      {
        title: "Case Studies and Real-world Examples",
        details: [
          "Reviewing historical trades and outcomes",
          "Learning from successful and unsuccessful trading scenarios",
          "Developing a personalized trading plan and strategy",
        ],
      },
    ],
  },
];



const AdvancestockTradingSyllabus = () => {
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
  
  export default AdvancestockTradingSyllabus;
    