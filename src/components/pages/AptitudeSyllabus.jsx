import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Phase 1: Introduction and Foundation (Days 1-6)",
      topics: [
        {
          title: "Course Introduction",
          details: [
            "Overview of Aptitude Skills",
            "Importance of Aptitude in Personal and Professional Development",
          ],
        },
        {
          title: "Basic Arithmetic",
          details: [
            "Addition, Subtraction, Multiplication, Division",
            "Practice Problems",
          ],
        },
        {
          title: "Number Systems",
          details: [
            "Integers, Fractions, Decimals",
            "Practice Problems",
          ],
        },
        {
          title: "Percentages and Ratios",
          details: [
            "Practice Problems",
          ],
        },
        {
          title: "Averages and Mean",
          details: [
            "Practice Problems",
          ],
        },
        {
          title: "Basic Algebra",
          details: [
            "Simple Equations and Expressions",
            "Practice Problems",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Analytical and Logical Reasoning (Days 7-12)",
      topics: [
        {
          title: "Introduction to Logical Reasoning",
          details: [
            "Types of Logical Puzzles",
          ],
        },
        {
          title: "Series and Sequences",
          details: [
            "Practice Problems",
          ],
        },
        {
          title: "Analogies and Classifications",
          details: [
            "Practice Problems",
          ],
        },
        {
          title: "Coding-Decoding",
          details: [
            "Practice Problems",
          ],
        },
        {
          title: "Blood Relations and Family Trees",
          details: [
            "Practice Problems",
          ],
        },
        {
          title: "Direction Sense and Seating Arrangements",
          details: [
            "Practice Problems",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Advanced Quantitative Skills (Days 13-18)",
      topics: [
        {
          title: "Advanced Algebra",
          details: [
            "Quadratic Equations",
            "Practice Problems",
          ],
        },
        {
          title: "Geometry",
          details: [
            "Basic Concepts and Formulas",
            "Practice Problems",
          ],
        },
        {
          title: "Mensuration",
          details: [
            "Area and Volume Calculations",
            "Practice Problems",
          ],
        },
        {
          title: "Trigonometry",
          details: [
            "Basic Ratios and Applications",
            "Practice Problems",
          ],
        },
        {
          title: "Data Interpretation",
          details: [
            "Tables, Graphs, and Charts",
            "Practice Problems",
          ],
        },
        {
          title: "Permutations and Combinations",
          details: [
            "Practice Problems",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Verbal Ability and Reading Comprehension (Days 19-24)",
      topics: [
        {
          title: "Introduction to Verbal Ability",
          details: [
            "Vocabulary Building Techniques",
          ],
        },
        {
          title: "Synonyms and Antonyms",
          details: [
            "Practice Problems",
          ],
        },
        {
          title: "Sentence Correction and Completion",
          details: [
            "Practice Problems",
          ],
        },
        {
          title: "Para Jumbles and Ordering Sentences",
          details: [
            "Practice Problems",
          ],
        },
        {
          title: "Reading Comprehension Techniques",
          details: [
            "Practice Passages",
          ],
        },
        {
          title: "Critical Reasoning",
          details: [
            "Practice Problems",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Mock Tests and Revision (Days 25-30)",
      topics: [
        {
          title: "Full-Length Mock Test 1",
          details: [
            "Review and Analysis",
          ],
        },
        {
          title: "Full-Length Mock Test 2",
          details: [
            "Review and Analysis",
          ],
        },
        {
          title: "Topic-wise Revision: Arithmetic and Algebra",
          details: [
            "Practice Problems",
          ],
        },
        {
          title: "Topic-wise Revision: Logical Reasoning and Data Interpretation",
          details: [
            "Practice Problems",
          ],
        },
        {
          title: "Topic-wise Revision: Verbal Ability and Reading Comprehension",
          details: [
            "Practice Problems",
          ],
        },
        {
          title: "Final Full-Length Mock Test",
          details: [
            "Review and Course Wrap-Up",
          ],
        },
      ],
    },
  ];
  
  
  

const AptitudeSyllabus = () => {
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
  
  export default AptitudeSyllabus;