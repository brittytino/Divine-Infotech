import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Phase 1: Foundations of Stock Trading (Days 1-5)",
      topics: [
        {
          title: "Introduction to Stock Trading",
          details: [
            "Overview of financial markets and trading",
            "Understanding different types of trading: day trading, swing trading, position trading",
            "Role of stock exchanges and market participants",
          ],
        },
        {
          title: "Trading Psychology",
          details: [
            "Emotions and biases in trading",
            "Developing a disciplined trading mindset",
            "Importance of risk management in trading",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Technical Analysis (Days 6-15)",
      topics: [
        {
          title: "Advanced Charting Techniques",
          details: [
            "Advanced chart patterns: Fibonacci retracements, Elliott Wave Theory",
            "Using advanced technical indicators: Bollinger Bands, Ichimoku Cloud, Volume Profile",
          ],
        },
        {
          title: "Candlestick Patterns",
          details: [
            "Identifying and interpreting complex candlestick patterns",
            "Applying candlestick patterns in trading decisions",
          ],
        },
        {
          title: "Advanced Trading Strategies",
          details: [
            "Momentum trading strategies",
            "Breakout and breakdown strategies",
            "Pullback and retracement strategies",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Quantitative Trading Techniques (Days 16-25)",
      topics: [
        {
          title: "Introduction to Quantitative Trading",
          details: [
            "Basics of algorithmic trading",
            "Developing trading strategies based on quantitative analysis",
          ],
        },
        {
          title: "Backtesting and Optimization",
          details: [
            "Testing trading strategies using historical data",
            "Optimizing strategies for performance and risk management",
          ],
        },
        {
          title: "Automated Trading Systems",
          details: [
            "Building and deploying automated trading systems",
            "Understanding API integration and execution platforms",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Derivatives and Advanced Instruments (Days 26-35)",
      topics: [
        {
          title: "Introduction to Derivatives",
          details: [
            "Types of derivatives: futures, options, swaps",
            "Strategies using derivatives for hedging and speculation",
          ],
        },
        {
          title: "Option Trading Strategies",
          details: [
            "Basic and advanced option trading strategies",
            "Greeks: Delta, Gamma, Theta, Vega, and their applications",
          ],
        },
        {
          title: "Risk Management in Derivatives Trading",
          details: [
            "Managing risks associated with derivatives trading",
            "Using derivatives to manage portfolio risk",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Trading Psychology, Risk Management, and Final Project (Days 36-40)",
      topics: [
        {
          title: "Advanced Trading Psychology",
          details: [
            "Dealing with stress and emotions in high-stakes trading",
            "Psychological aspects of risk-taking and decision-making",
          ],
        },
        {
          title: "Risk Management Strategies",
          details: [
            "Advanced risk management techniques for traders",
            "Position sizing and money management principles",
          ],
        },
        {
          title: "Final Project",
          details: [
            "Developing and presenting a comprehensive trading plan",
            "Implementing advanced trading techniques in simulated trading scenarios",
            "Review and feedback on the trading plan",
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
    