import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
    {
      phase: "Phase 1: Introduction to Cross-Platform Development (Days 1-5)",
      topics: [
        {
          title: "Overview of Cross-Platform Development",
          details: [
            "Understanding the benefits of cross-platform development",
            "Comparison between Flutter and React Native",
          ],
        },
        {
          title: "Setting up development environments for Flutter and React Native",
          details: [
            "Installing necessary software for Flutter (Flutter SDK, Android Studio/Xcode)",
            "Setting up development environment for React Native (Node.js, npm, React Native CLI)",
          ],
        },
      ],
    },
    {
      phase: "Phase 2: Basics of Flutter (Days 6-15)",
      topics: [
        {
          title: "Introduction to Dart",
          details: [
            "Dart language basics: syntax, variables, data types, and control structures",
            "Functions, classes, and asynchronous programming in Dart",
          ],
        },
        {
          title: "Flutter Basics",
          details: [
            "Setting up a Flutter project",
            "Understanding the widget tree in Flutter",
            "Stateless and Stateful widgets in Flutter",
            "Building UI components in Flutter: Text, Image, Icon, Button",
            "Layouts in Flutter: Row, Column, Container, Stack",
            "Handling user input with forms and gesture detectors in Flutter",
          ],
        },
      ],
    },
    {
      phase: "Phase 3: Basics of React Native (Days 16-25)",
      topics: [
        {
          title: "Introduction to JavaScript and ES6",
          details: [
            "JavaScript basics: syntax, variables, data types, and control structures",
            "ES6 features: arrow functions, destructuring, modules, and classes",
          ],
        },
        {
          title: "React Native Basics",
          details: [
            "Setting up a React Native project",
            "Understanding components, props, and state in React Native",
            "Building UI components in React Native: Text, Image, Touchable, Button",
            "Layouts in React Native: View, ScrollView, Flexbox",
            "Handling user input with TextInput and touchable elements in React Native",
          ],
        },
      ],
    },
    {
      phase: "Phase 4: Advanced Features and State Management (Days 26-35)",
      topics: [
        {
          title: "Flutter Advanced Features",
          details: [
            "Navigation and routing in Flutter",
            "State management with Provider or Riverpod in Flutter",
            "Animations and transitions in Flutter",
          ],
        },
        {
          title: "React Native Advanced Features",
          details: [
            "Navigation with React Navigation",
            "State management with Context API and Redux in React Native",
            "Animations with Animated API and Reanimated in React Native",
          ],
        },
      ],
    },
    {
      phase: "Phase 5: Backend Integration, Deployment, and Final Project (Days 36-45)",
      topics: [
        {
          title: "Backend Integration",
          details: [
            "Making HTTP requests in Flutter using http or Dio package",
            "Making HTTP requests in React Native using fetch or Axios",
            "Parsing JSON data and displaying it in the app",
          ],
        },
        {
          title: "Firebase Integration",
          details: [
            "Introduction to Firebase and its services",
            "Implementing Firebase Authentication",
            "Using Firebase Firestore for data storage",
          ],
        },
        {
          title: "Deployment and Publishing",
          details: [
            "Preparing Flutter and React Native apps for release",
            "Deploying apps to Google Play Store and Apple App Store",
          ],
        },
        {
          title: "Final Project",
          details: [
            "Developing a complete functional cross-platform app using either Flutter or React Native",
            "Project presentation and review",
          ],
        },
      ],
    },
  ];
  
  const CrossplatformappdevSyllabus = () => {
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
  
  export default CrossplatformappdevSyllabus;
  
  