import React, { useState, useRef } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const syllabus = [
  {
    phase: "Phase 1: Introduction to Android Development (Days 1-7)",
    topics: [
      {
        title: "Overview of Android Development",
        details: [
          "Introduction to Android platform and ecosystem",
          "Setting up the development environment (Android Studio)",
          "Understanding the Android project structure",
        ],
      },
      {
        title: "Android Components and Architecture",
        details: [
          "Activities and their lifecycle",
          "Intents and intent filters",
          "Fragments and their lifecycle",
          "Understanding Android Manifest",
        ],
      },
      {
        title: "UI Design and Layouts",
        details: [
          "Basic UI components (TextView, EditText, Button, etc.)",
          "Layouts (LinearLayout, RelativeLayout, ConstraintLayout)",
          "Creating adaptive layouts for different screen sizes",
        ],
      },
      {
        title: "Basic Navigation",
        details: [
          "Navigating between activities",
          "Passing data between activities",
          "Introduction to Android Navigation Component",
        ],
      },
    ],
  },
  {
    phase: "Phase 2: Intermediate Android Development (Days 8-14)",
    topics: [
      {
        title: "Advanced UI Components",
        details: [
          "RecyclerView and Adapters",
          "CardView for material design",
          "Handling user inputs with forms",
        ],
      },
      {
        title: "Data Storage and Persistence",
        details: [
          "SharedPreferences for simple data storage",
          "SQLite database for structured data",
          "Room persistence library",
        ],
      },
      {
        title: "Networking and APIs",
        details: [
          "Introduction to RESTful APIs",
          "Making network requests with Retrofit",
          "Parsing JSON data",
        ],
      },
      {
        title: "Multithreading and Async Tasks",
        details: [
          "Understanding threads and handlers",
          "Using AsyncTask for background operations",
          "Introduction to Kotlin Coroutines",
        ],
      },
    ],
  },
  {
    phase: "Phase 3: Advanced Android Development (Days 15-21)",
    topics: [
      {
        title: "MVVM Architecture",
        details: [
          "Introduction to Model-View-ViewModel (MVVM)",
          "Data binding and LiveData",
          "ViewModel and its lifecycle",
        ],
      },
      {
        title: "Advanced Navigation",
        details: [
          "Deep linking and navigation graphs",
          "Navigation with bottom navigation and side drawers",
          "Handling backstack and up navigation",
        ],
      },
      {
        title: "Working with Sensors and Location",
        details: [
          "Accessing device sensors (accelerometer, gyroscope)",
          "Working with GPS and location services",
          "Using Google Maps API",
        ],
      },
      {
        title: "Notifications and Background Tasks",
        details: [
          "Creating and managing notifications",
          "Background tasks with WorkManager",
          "AlarmManager and JobScheduler",
        ],
      },
    ],
  },
  {
    phase: "Phase 4: Full App Development (Days 22-28)",
    topics: [
      {
        title: "Planning and Designing the App",
        details: [
          "Defining app requirements and features",
          "Creating wireframes and mockups",
          "Setting up project structure and resources",
        ],
      },
      {
        title: "Building the App",
        details: [
          "Implementing UI and navigation",
          "Integrating data storage and networking",
          "Handling user interactions and input",
        ],
      },
      {
        title: "Testing and Debugging",
        details: [
          "Writing unit and instrumentation tests",
          "Debugging with Android Studio tools",
          "Handling crashes and ANRs (Application Not Responding)",
        ],
      },
      {
        title: "Optimization and Performance Tuning",
        details: [
          "Memory management and leak detection",
          "Performance profiling and optimization",
          "Best practices for efficient coding",
        ],
      },
    ],
  },
  {
    phase: "Phase 5: Deployment and Advanced Topics (Days 29-35)",
    topics: [
      {
        title: "Publishing the App",
        details: [
          "Preparing the app for release",
          "Signing and building APKs",
          "Publishing on Google Play Store",
        ],
      },
      {
        title: "Firebase Integration",
        details: [
          "Using Firebase Authentication",
          "Cloud Firestore for real-time databases",
          "Firebase Cloud Messaging for push notifications",
        ],
      },
      {
        title: "Advanced UI and Animations",
        details: [
          "Creating custom views and animations",
          "Using MotionLayout for complex animations",
          "Implementing transitions and shared element animations",
        ],
      },
      {
        title: "Capstone Project",
        details: [
          "Developing a comprehensive final project",
          "Applying all learned concepts in a real-world scenario",
          "Project presentation and feedback",
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
