const courseData = [
    {
        id: 1,
        name: "Full Stack Web Development",
        price: "₹15000",
        tagline: "Become the Developer Companies Need",
        description: `Struggling to get noticed by tech companies because you're <span class='text-[#fcbf07] font-medium'>missing critical skills?</span> Wondering why job offers never come despite your efforts? Unlock the door to endless career opportunities with our Full Stack Web Development course. From creating eye-catching frontends to building robust backends, you’ll become proficient in the technologies that a job needs.`,
        about: "Master the art of building modern web applications with Divine Infotech’s Full Stack Web Development course. Learn front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. This course takes you through designing responsive user interfaces to creating dynamic and scalable servers. With hands-on projects, you’ll develop real-world web solutions and gain the skills needed to become a versatile full-stack developer, ready to tackle the demands of the tech industry.",
        savings: "₹10,000",
        originalPrice: "₹25,000",
        salary: "12",
        duration: "3 Months", // Add duration
        modules: 4, // Add number of modules
        ratings: 4.38, // Add ratings
        ratingsCount: 2593, // Add ratings count
        language: "Tamil/English", // Add language
        syllabus: [ // Add syllabus data here
            {
                phase: "Phase 1: Frontend Foundations",
                topics: [
                    {
                        title: "HTML, CSS, and JavaScript basics",
                        details: [
                            "Understanding the structure of a webpage using HTML",
                            "Styling elements using CSS and building responsive designs",
                            "Introduction to JavaScript for dynamic content"
                        ]
                    },
                    {
                        title: "Responsive design with Bootstrap and Flexbox",
                        details: [
                            "Using Bootstrap for rapid design",
                            "Flexbox fundamentals for responsive layout"
                        ]
                    }
                ]
            },
            {
                phase: "Phase 2: Advanced Frontend Techniques",
                topics: [
                    {
                        title: "ReactJS, Redux, and Single-Page Applications",
                        details: [
                            "Building modular applications using ReactJS",
                            "State management with Redux",
                            "Creating dynamic Single-Page Applications (SPA)"
                        ]
                    },
                    {
                        title: "CSS Grid and Material UI",
                        details: [
                            "Using CSS Grid for complex layouts",
                            "Building component libraries with Material UI"
                        ]
                    }
                ]
            },
            {
                phase: "Phase 3: Backend Development Essentials",
                topics: [
                    {
                        title: "Node.js, Express.js, and RESTful API Development",
                        details: [
                            "Introduction to backend development with Node.js",
                            "Creating RESTful APIs using Express.js",
                            "Handling HTTP requests and responses"
                        ]
                    },
                    {
                        title: "Database integration with MongoDB",
                        details: [
                            "Storing and retrieving data using MongoDB",
                            "Connecting MongoDB with backend using Mongoose"
                        ]
                    }
                ]
            },
            {
                phase: "Phase 4: Full Stack Integration",
                topics: [
                    {
                        title: "Connecting frontend with backend",
                        details: [
                            "Using APIs to communicate between frontend and backend",
                            "Passing data using REST architecture"
                        ]
                    },
                    {
                        title: "Authentication & Authorization (JWT)",
                        details: [
                            "Securing the application with JSON Web Tokens",
                            "Implementing role-based access control"
                        ]
                    }
                ]
            },
            {
                phase: "Phase 5: Deployment & Project Showcase",
                topics: [
                    {
                        title: "Version control with Git & GitHub",
                        details: [
                            "Collaborating on projects using Git",
                            "Pushing code to GitHub and managing repositories"
                        ]
                    },
                    {
                        title: "Cloud deployment (Heroku/AWS)",
                        details: [
                            "Deploying full-stack applications to Heroku",
                            "Exploring AWS for cloud solutions"
                        ]
                    },
                    {
                        title: "Real-world project presentation & portfolio building",
                        details: [
                            "Showcasing your projects in a professional portfolio",
                            "Preparing for job interviews with a solid project"
                        ]
                    }
                ]
            }
        ],
        tools: [ // Add tools data here
            { name: "AWS", logo: require('./img/aws.webp') },
            { name: "Bootstrap", logo: require('./img/bootstrap.webp') },
            { name: "CSS", logo: require('./img/css.webp') },
            { name: "Express JS", logo: require('./img/express.webp') },
            { name: "HTML", logo: require('./img/html.webp') },
            { name: "JavaScript", logo: require('./img/js.webp') },
            { name: "MongoDB", logo: require('./img/mongodb.webp') },
            { name: "Mongoose", logo: require('./img/mongoose.webp') },
            { name: "MySQL", logo: require('./img/mysql.webp') },
            { name: "Node JS", logo: require('./img/node.webp') },
            { name: "Postman", logo: require('./img/postman.webp') },
            { name: "React", logo: require('./img/react.webp') },
            { name: "Tailwind", logo: require('./img/tailwind.webp') },
            { name: "VS Code", logo: require('./img/vscode.webp') },
        ],
        faqs: [ // Add FAQ data here
            {
                question: "Is it 100% online learning or should I come in person for any specific course?",
                answer: "It is a 100% online learning course package and there won’t be any necessity for you to be present in person."
            },
            {
                question: "Why choose Full Stack Web Development?",
                answer: "Earn an average of 6LPA in India. It offers a comprehensive skill set that is highly sought after in the job market, enabling you to work on both client and server sides."
            },
            {
                question: "Why choose Divine Infotech for Full Stack Web Development?",
                answer: "The Full Stack Web Development course offered by Divine Infotech covers all essential concepts of frontend and backend development, with a focus on real-world projects. In this certification course, you will learn about frontend technologies like HTML, CSS, JavaScript, and React, as well as backend technologies such as Node.js, Express, and databases like MongoDB. The course also covers responsive web design, API integration, version control with Git, and deployment strategies. Curated and delivered by industry experts, the course is self-paced, and you will earn a globally recognized certificate upon completion."
            },
            {
                question: "What are the prerequisites required to learn Full Stack Web Development?",
                answer: "The only prerequisite for learning Full Stack Web Development at Divine Infotech is your commitment and determination to succeed. No prior technical knowledge is required, as the course is designed to guide you from the basics to advanced topics. Anyone with a passion for web development and a desire to learn can enroll and thrive in this course."
            },
            {
                question: "What technologies will I learn in this course?",
                answer: "You will learn HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, among other required technologies for Web development."
            },
        ]
    },
    {
        id: 2,
        name: "Python for Data Science",
        price: "₹14,000",
        tagline: "Master the Data Game – Companies Need You!",
        description: `Confused by complex data and unsure how to turn numbers into actionable insights? Lacking the skills to land a <span class='text-[#9bdd12] font-semibold'>high-paying job in Data Science?</span> Data Science is more than just code—it’s about knowing how to extract valuable insights from mountains of data. Without mastering the right tools, you'll miss out on the booming opportunities this field offers.`,
        about: "Unlock the power of data with Divine Infotech’s Python Data Science course. This comprehensive program takes you from beginner to expert, covering essential tools like Pandas, Numpy, Matplotlib, and Scikit-Learn. Learn how to analyze, visualize, and draw insights from real-world data, and explore the fundamentals of machine learning. With hands-on projects and career preparation guidance, you’ll be equipped to solve real business problems and kickstart a successful career in data science.",
        savings: "₹14,000",
        originalPrice: "₹28,000",
        salary: '6',
        duration: '2 Months',
        modules: 4,
        ratings: 4.2,
        ratingsCount: 2300,
        language: 'Tamil/English',
        syllabus: [ // Add syllabus data for Python Data Science
            {
                phase: "Phase 1: Data Science Fundamentals",
                topics: [
                    {
                        title: "Introduction to Python and Jupyter Notebooks",
                        details: [
                            "Getting started with Python programming and setting up Jupyter Notebooks for data analysis.",
                            "Understanding data types, operators, and control structures in Python."
                        ]
                    }
                ]
            },
            {
                phase: "Phase 2: Data Analysis with Pandas and Numpy",
                topics: [
                    {
                        title: "Data manipulation, cleaning, and processing",
                        details: [
                            "Using Pandas for data manipulation and analysis.",
                            "Cleaning and processing real datasets to extract meaningful insights."
                        ]
                    },
                    {
                        title: "Hands-on projects with real datasets",
                        details: [
                            "Applying data analysis techniques on real-world datasets to solve practical problems."
                        ]
                    }
                ]
            },
            {
                phase: "Phase 3: Data Visualization",
                topics: [
                    {
                        title: "Using Matplotlib, Seaborn, and Plotly for visual storytelling",
                        details: [
                            "Creating informative and visually appealing charts and graphs.",
                            "Utilizing Seaborn and Plotly for advanced visualizations."
                        ]
                    },
                    {
                        title: "Creating interactive dashboards and reports",
                        details: [
                            "Building interactive dashboards to present data insights effectively."
                        ]
                    }
                ]
            },
            {
                phase: "Phase 4: Introduction to Machine Learning",
                topics: [
                    {
                        title: "Supervised vs. unsupervised learning",
                        details: [
                            "Understanding the differences between supervised and unsupervised learning techniques."
                        ]
                    },
                    {
                        title: "Building models with Scikit-Learn",
                        details: [
                            "Implementing machine learning algorithms using Scikit-Learn to make predictions."
                        ]
                    }
                ]
            },
            {
                phase: "Phase 5: Capstone Project & Career Preparation",
                topics: [
                    {
                        title: "End-to-end data science project",
                        details: [
                            "Completing a comprehensive data science project that encompasses all learned skills.",
                            "Preparing a professional portfolio to showcase your work."
                        ]
                    },
                    {
                        title: "Resume building, interview prep, and career guidance",
                        details: [
                            "Guidance on building an effective resume and preparing for job interviews in the data science field."
                        ]
                    }
                ]
            }
        ],
        tools: [
            { name: "Python", logo: require('./img/python/python.png') },
            { name: "MySql", logo: require('./img/python/mysql.webp') },
            { name: "Tableau", logo: require('./img/python/tableau.png') },
            { name: "Power BI", logo: require('./img/python/powerbi.png') },
            { name: "Jupyter Notebook", logo: require('./img/python/jupyter-notebook.png') },
            { name: "Pandas", logo: require('./img/python/pandas.png') },
            { name: "Numpy", logo: require('./img/python/numpy.png') },
            { name: "Scikit-Learn", logo: require('./img/python/scikit-learn.png') },
            { name: "Machine Learning", logo: require('./img/python/machine-learning.png') },
        ], // Add tools data if needed for this course
        faqs: [
            {
                question: "What prerequisites do I need for this course?",
                answer: "The only prerequisite for learning Python Data Science at Divine Infotech is your commitment and determination to succeed. No prior technical knowledge is required, as the course is designed to guide you from the basics to advanced topics. Anyone with a passion and a desire to learn can enroll and thrive in this course."
            },
            {
                question: "Will I receive a certificate upon completion?",
                answer: "Yes, you will receive a certificate of completion after successfully finishing the course."
            },
            {
                question: "What tools will I learn to use?",
                answer: "You will learn to use Python, Jupyter Notebooks, Pandas, Numpy, Matplotlib, and Scikit-Learn."
            },
            {
                question: "Is this course suitable for beginners?",
                answer: "Absolutely! This course is designed for beginners and will guide you through the fundamentals of data science."
            },
            {
                question: "Can I get help if I have questions during the course?",
                answer: "Yes, you will have access to our support team and community forums for assistance."
            },
        ], // Add FAQ data if needed for this course
    },

    {
        id: 3,
        name: "Mobile App Development with Flutter",
        price: "₹18,000", 
        tagline: "Design Apps that Users Love!",
        description: `Everyone has a smartphone, but how many developers can build apps that truly captivate users? Are you struggling to design and build apps that work on both Android and iOS? Are you looking for a career that offers creativity, innovation, and financial rewards? If so, Mobile App Development with Flutter is the perfect course for you!`,
        about: "With Mobile App Development using Flutter, learn to build stunning, responsive apps for both Android and iOS from a single codebase. You'll create apps that wow users and solve real-world problems. In this course, you'll learn how to build apps for iOS and Android devices using Flutter, Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
        savings: "₹4,000",
        originalPrice: "₹22,000",
        salary: "5",
        duration: "2 Months",
        modules: 4,
        ratings: 4.3,
        ratingsCount: 2300,
        language: "Tamil/English",
        syllabus: [ // Add syllabus data for Mobile App Development with Flutter
            {
                phase: "Phase 1: Introduction to Flutter & Dart Basics",
                topics: [
                    {
                        title: "Setting up Flutter and understanding Dart programming",
                        details: [
                            "Installing Flutter SDK and setting up the development environment.",
                            "Learning the fundamentals of Dart programming language."
                        ]
                    },
                    {
                        title: "Building simple user interfaces with widgets",
                        details: [
                            "Creating basic user interfaces using Flutter widgets.",
                            "Understanding the widget tree and how to manage state."
                        ]
                    }
                ]
            },
            {
                phase: "Phase 2: Advanced Flutter UI Design",
                topics: [
                    {
                        title: "Custom widgets, animations, and responsive design",
                        details: [
                            "Creating custom widgets to enhance app functionality.",
                            "Implementing animations to improve user experience."
                        ]
                    },
                    {
                        title: "Using Firebase for backend services",
                        details: [
                            "Integrating Firebase for user authentication and data storage.",
                            "Utilizing Firebase Cloud Firestore for real-time data management."
                        ]
                    }
                ]
            },
            {
                phase: "Phase 3: State Management & API Integration",
                topics: [
                    {
                        title: "Understanding state management (Provider, Riverpod)",
                        details: [
                            "Learning different state management techniques in Flutter.",
                            "Implementing Provider and Riverpod for efficient state management."
                        ]
                    },
                    {
                        title: "Integrating REST APIs and managing app data",
                        details: [
                            "Fetching data from REST APIs and displaying it in the app.",
                            "Managing app data and ensuring smooth user interactions."
                        ]
                    }
                ]
            },
            {
                phase: "Phase 4: App Deployment & Testing",
                topics: [
                    {
                        title: "Testing Flutter apps and debugging techniques",
                        details: [
                            "Writing unit tests and widget tests for Flutter applications.",
                            "Debugging common issues and optimizing app performance."
                        ]
                    },
                    {
                        title: "Publishing apps on Google Play Store and Apple App Store",
                        details: [
                            "Preparing your app for release and understanding app store guidelines.",
                            "Publishing your app on both Android and iOS platforms."
                        ]
                    }
                ]
            },
            {
                phase: "Phase 5: Capstone Project & Portfolio Building",
                topics: [
                    {
                        title: "Full app development project from scratch",
                        details: [
                            "Developing a complete mobile application using Flutter.",
                            "Applying all learned concepts to create a functional app."
                        ]
                    },
                    {
                        title: "Portfolio creation and career coaching",
                        details: [
                            "Building a professional portfolio to showcase your projects.",
                            "Receiving career coaching and interview preparation tips."
                        ]
                    }
                ]
            }
        ],
        tools: [
            { name: "Flutter", logo: require('./img/flutter/flutter.png') },
            { name: "Dart", logo: require('./img/flutter/dart.png') },
            { name: "Firebase", logo: require('./img/flutter/firebase.png') },
            { name: "Android Studio", logo: require('./img/flutter/android-studio.png') },
            { name: "Rest API", logo: require('./img/flutter/rest-api.png') },
            { name: "Google Analytics", logo: require('./img/flutter/google-analytics.png') },
            { name: "Figma", logo: require('./img/flutter/figma.png') },
        ], // Add tools data if needed for this course
        faqs: [ // Add FAQ data for Mobile App Development with Flutter
            {
                question: "What prerequisites do I need for this course?",
                answer: "The only prerequisite for learning Flutter Development at Divine Infotech is your commitment and determination to succeed. No prior technical knowledge is required, as the course is designed to guide you from the basics to advanced topics. Anyone with a passion and a desire to learn can enroll and thrive in this course."
            },
            {
                question: "Will I receive a certificate upon completion?",
                answer: "Yes, you will receive a certificate of completion after successfully finishing the course which can be shared in your resume."
            },
            {
                question: "What tools will I learn to use?",
                answer: "You will learn to use Flutter, Dart, Firebase, and various tools for app development and testing."
            },
            {
                question: "Is this course suitable for beginners?",
                answer: "Absolutely! This course is designed for beginners and will guide you through the fundamentals of mobile app development."
            },
            {
                question: "Can I get help if I have questions during the course?",
                answer: "Yes, you will have access to our support team and community forums for assistance."
            },
        ], // Add FAQ data if needed for this course
    }
    // Add more courses as needed
];

export default courseData;
