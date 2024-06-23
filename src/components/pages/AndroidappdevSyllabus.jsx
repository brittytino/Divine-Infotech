import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
    phase: "Phase 1: Introduction to Android Development (Days 1-6)",
    topics: [
      {
        title: "Overview of Android",
        details: [
          "Introduction to Android platform and ecosystem",
          "Understanding different Android versions and API levels",
        ],
      },
      {
        title: "Setting Up Development Environment",
        details: [
          "Installing Android Studio",
          "Overview of Android Studio interface and tools",
          "Creating and running a 'Hello World' app",
        ],
      },
      {
        title: "Basic Concepts",
        details: [
          "Android project structure and components",
          "Introduction to XML for UI design",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Android User Interface Design (Days 7-12)",
    topics: [
      {
        title: "Layouts and Views",
        details: [
          "Understanding different layout types: LinearLayout, RelativeLayout, ConstraintLayout",
          "Working with basic UI elements: TextView, EditText, Button, ImageView",
        ],
      },
      {
        title: "Advanced UI Components",
        details: [
          "RecyclerView and ListView for displaying lists",
          "Handling user inputs and events",
          "Styling and Themes: Applying styles and themes to Android apps, Using drawable resources for images and shapes"
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Android Components and Navigation (Days 13-18)",
    topics: [
      {
        title: "Activities and Intents",
        details: [
          "Understanding the activity lifecycle",
          "Navigating between activities using intents",
        ],
      },
      {
        title: "Fragments",
        details: [
          "Introduction to fragments and fragment lifecycle",
          "Implementing fragments for flexible UI design",
        ],
      },
      {
        title: "Navigation Components",
        details: [
          "Using the Navigation component for app navigation",
          "Setting up navigation graphs and handling fragment transactions",
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Data Storage and Management (Days 19-24)",
    topics: [
      {
        title: "SharedPreferences",
        details: [
          "Storing simple data using SharedPreferences",
        ],
      },
      {
        title: "SQLite Database",
        details: [
          "Introduction to SQLite database in Android",
          "CRUD operations with SQLiteOpenHelper",
        ],
      },
      {
        title: "Room Persistence Library",
        details: [
          "Using Room for database management",
          "Implementing DAO (Data Access Object) and entities",
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Advanced Topics and Final Project (Days 25-30)",
    topics: [
      {
        title: "Networking",
        details: [
          "Making HTTP requests using Retrofit or Volley",
          "Parsing JSON data and displaying it in the app",
        ],
      },
      {
        title: "Firebase Integration",
        details: [
          "Introduction to Firebase and its features",
          "Implementing Firebase Authentication",
          "Using Firebase Realtime Database or Firestore",
        ],
      },
      {
        title: "Publishing the App",
        details: [
          "Preparing the app for release",
          "Publishing the app on Google Play Store",
        ],
      },
      {
        title: "Final Project",
        details: [
          "Developing a complete functional Android app incorporating all learned concepts",
          "Project presentation and review",
        ],
      },
    ],
  },
];

const AndroidappdevSyllabus = () => {
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

export default AndroidappdevSyllabus;
