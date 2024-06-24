import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Phase 1: Introduction to Data Analysis (Days 1-5)",
      topics: [
        {
          title: "Introduction to Data Analysis",
          details: [
            "Overview of data analysis process",
            "Importance of Python in data analysis",
          ],
        },
        {
          title: "Setting Up Python Environment",
          details: [
            "Installing Anaconda distribution",
            "Introduction to Jupyter Notebooks",
          ],
        },
        {
          title: "Python Basics Review",
          details: [
            "Quick review of Python programming fundamentals relevant to data analysis",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Data Manipulation with Pandas (Days 6-10)",
      topics: [
        {
          title: "Introduction to Pandas",
          details: [
            "Series and DataFrame objects",
            "Indexing, slicing, and subsetting data",
          ],
        },
        {
          title: "Data Cleaning and Preparation",
          details: [
            "Handling missing data",
            "Data transformation: merging, joining, and reshaping",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Data Visualization with Matplotlib and Seaborn (Days 11-15)",
      topics: [
        {
          title: "Introduction to Data Visualization",
          details: [
            "Importance of data visualization in analysis",
          ],
        },
        {
          title: "Matplotlib",
          details: [
            "Basic plots: line plots, bar plots, scatter plots",
            "Customizing plots: labels, legends, colors",
          ],
        },
        {
          title: "Seaborn",
          details: [
            "Statistical data visualization",
            "Seaborn plots: histograms, box plots, pair plots",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Exploratory Data Analysis (EDA) (Days 16-20)",
      topics: [
        {
          title: "Exploratory Data Analysis",
          details: [
            "Summary statistics and descriptive analysis",
            "Distribution analysis and outlier detection",
          ],
        },
        {
          title: "Correlation and Heatmaps",
          details: [
            "Correlation analysis between variables",
            "Visualizing correlations using heatmaps",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Statistical Analysis with Python (Days 21-25)",
      topics: [
        {
          title: "Statistical Tests and Hypothesis Testing",
          details: [
            "Introduction to statistical tests: t-tests, chi-square tests",
            "Conducting hypothesis tests using Python",
          ],
        },
        {
          title: "Advanced Visualization Techniques",
          details: [
            "Advanced plotting techniques with Matplotlib and Seaborn",
            "Interactive visualization with Plotly",
          ],
        },
      ],
    },
    {
      phase: "Phase 6: Time Series Analysis (Days 26-30)",
      topics: [
        {
          title: "Introduction to Time Series Data",
          details: [
            "Handling time series data in Python",
            "Time series visualization and analysis",
          ],
        },
        {
          title: "Forecasting Techniques",
          details: [
            "Introduction to forecasting methods",
            "Implementing basic forecasting models in Python",
          ],
        },
        {
          title: "Final Project and Review",
          details: [
            "Final Data Analysis Project",
            "Applying learned concepts to analyze a real-world dataset",
            "Presenting findings and insights from the analysis",
          ],
        },
      ],
    },
  ];
  

    

const DataanalysisPythonSyllabus = () => {
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
  
  export default DataanalysisPythonSyllabus;