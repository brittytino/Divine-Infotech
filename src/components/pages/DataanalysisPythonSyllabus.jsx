import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
    phase: "Phase 1: Introduction to Python for Data Analysis (Days 1-7)",
    topics: [
      {
        title: "Introduction to Python",
        details: [
          "Overview of Python programming language",
          "Setting up Python environment (Anaconda, Jupyter Notebook)",
          "Basic Python syntax and data types",
        ],
      },
      {
        title: "NumPy for Numerical Computing",
        details: [
          "Introduction to NumPy arrays and operations",
          "Array manipulation and broadcasting",
          "Linear algebra with NumPy",
        ],
      },
      {
        title: "Pandas for Data Handling",
        details: [
          "Introduction to Pandas DataFrames and Series",
          "Data manipulation and cleaning with Pandas",
          "Indexing, slicing, and filtering data",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Data Visualization with Matplotlib and Seaborn (Days 8-14)",
    topics: [
      {
        title: "Introduction to Data Visualization",
        details: [
          "Importance of data visualization in analysis",
          "Overview of Matplotlib and Seaborn libraries",
          "Creating basic plots (line plots, scatter plots, bar charts)",
        ],
      },
      {
        title: "Advanced Data Visualization",
        details: [
          "Customizing plots with Matplotlib",
          "Visualizing relationships with Seaborn (scatter plots, pair plots)",
          "Plotting categorical data (bar plots, box plots)",
        ],
      },
      {
        title: "Interactive Visualization with Plotly",
        details: [
          "Introduction to Plotly for interactive plotting",
          "Creating interactive dashboards and visualizations",
          "Incorporating Plotly into Jupyter Notebooks",
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Data Analysis and Statistics (Days 15-21)",
    topics: [
      {
        title: "Descriptive Statistics",
        details: [
          "Measures of central tendency and dispersion",
          "Summarizing data distributions",
        ],
      },
      {
        title: "Statistical Testing",
        details: [
          "Introduction to hypothesis testing",
          "Performing t-tests and chi-square tests",
          "Interpreting p-values and significance",
        ],
      },
      {
        title: "Correlation and Regression Analysis",
        details: [
          "Understanding correlation between variables",
          "Linear and logistic regression models",
          "Model evaluation and interpretation",
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Data Wrangling and Advanced Techniques (Days 22-28)",
    topics: [
      {
        title: "Data Cleaning and Preprocessing",
        details: [
          "Handling missing data and outliers",
          "Data normalization and standardization",
          "Reshaping data with Pandas",
        ],
      },
      {
        title: "Time Series Analysis",
        details: [
          "Introduction to time series data",
          "Analyzing trends and seasonality",
          "Forecasting with time series models",
        ],
      },
      {
        title: "Dimensionality Reduction and Clustering",
        details: [
          "Principal Component Analysis (PCA)",
          "Clustering algorithms (K-means, hierarchical clustering)",
          "Visualizing clusters and interpreting results",
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Real-World Applications and Project Work (Days 29-35)",
    topics: [
      {
        title: "Case Studies and Project Implementation",
        details: [
          "Analyzing real-world datasets (e.g., finance, healthcare)",
          "Identifying insights and drawing conclusions",
          "Documenting and presenting findings",
        ],
      },
      {
        title: "Capstone Project",
        details: [
          "Developing a comprehensive data analysis project",
          "Applying all learned techniques and methodologies",
          "Presenting the project and receiving feedback",
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