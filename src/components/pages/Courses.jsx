import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import mern from './img/course/mern.png';   
import frontendEssentials from './img/course/frontend-essentials.png';
import fullStack from './img/course/fullstack.png';
import htmlcssJs from './img/course/htmlcssjs.jpg';
import meanStack from './img/course/mean Stack.png';

//Mobile app dev
import introMobiledev from './img/course/intro-mobile dev.png';
import appDevScratch from './img/course/Android App Development from Scratch.webp';
import crossPlatformappDev from './img/course/Cross-Platform Mobile Apps with Flutter & React Native.jpg'

//Game Dev 
import fundamentalsofGameDev from './img/course/fundamentals of game dev.jpg'
import GamePhysicsandAI from './img/course/AI-in-Gaming.webp'
import gamedevMastery from './img/course/game dev mastery.png' 

//tally 
import tallyFundamentals from './img/course/tally fundamentals.jpg'
import tallyprimewithGst from './img/course/tallyprime with gst.webp'

const courses = [
    {
        img: frontendEssentials,
        title: "Frontend Development Essentials",
        category: "Web Development",
        price: "₹5,500",
        description: "Master Frontend Development Essentials with HTML, CSS, and JavaScript to create stunning web interfaces."
    },
    {
        img: htmlcssJs,
        title: "HTML, CSS, and JavaScript Basics",
        category: "Web Development",
        price: "₹5,000",
        description: "Learn HTML, CSS, and JavaScript Basics to create engaging and responsive web pages."
    },
    {
        img: fullStack,
        title: "Complete Full Stack Development",
        category: "Web Development",
        price: "₹15,000",
        description: "Master Complete Full Stack Development with HTML, CSS, JavaScript, and backend technologies to build dynamic web applications."
    },
    {
        img: mern,
        title: "Mastering the MERN Stack",
        category: "Web Development",
        price: "₹12,000",
        description: "Master the MERN Stack with MongoDB, Express.js, React, and Node.js to build robust, scalable web applications."
    },
    {
        img: meanStack,
        title: "Pro MEAN Stack Development",
        category: "Web Development",
        price: "₹12,000",
        description: "Excel in Pro MEAN Stack Development with MongoDB, Express.js, Angular, and Node.js to build scalable web applications."
    },

    //Mobile app dev
    {
        img: introMobiledev,
        title: "Intro to Mobile App Development",
        category: "Mobile App Development",
        price: "Free",
        description: "Dive into Mobile App Development and gain basic knowledge of App Development."
    },
    {
        img: appDevScratch,
        title: "Android App Development from Scratch",
        category: "Mobile App Development",
        price: "₹5,500",
        description: "This course teaches Android basics: UI design, navigation, data storage, networking, Firebase integration, and app publishing."
    },
    {
        img: crossPlatformappDev,
        title: "Cross-Platform Mobile Apps with Flutter & React Native",
        category: "Mobile App Development",
        price: "₹12,000",
        description: "Explore cross-platform mobile app development with Flutter and React Native to build efficient, versatile applications."
    },

    //Game Development
    {
        img: fundamentalsofGameDev,
        title: "Fundamentals of Game Development",
        category: "Game Development",
        price: "₹4,200",
        description: "Master game development essentials with Unity, Unreal Engine, and design principles, covering programming, art creation, and building functional game projects."
    },
    {
        img: GamePhysicsandAI ,
        title: "Game Physics and AI",
        category: "Game Development",
        price: "₹8,000",
        description:"Learn game physics, advanced AI, and integrate them into projects with optimization techniques for performance."
    },
    {
        img: gamedevMastery ,
        title: "Mobile Game Development Mastery",
        category: "Game Development",
        price: "₹15,000",
        description:"Master mobile game development with a focus on creating engaging and optimized gaming experiences."
    },

    //Tally
    {
        img: tallyFundamentals ,
        title: "Tally Fundamentals & Applications",
        category: "Tally",
        price: "₹7,000",
        description:"Master Tally software and accounting principles, including inventory, taxation, payroll, and project integration."
    },
    {
        img: tallyprimewithGst ,
        title: "Mastering Tally Prime with GST",
        category: "Tally",
        price: "₹12,000",
        description:"Master Tally Prime with GST, covering basic to advanced accounting, inventory management, GST implementation, payroll, and final project integration."
    },

];

const CoursesPage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        "Web Development",
        "Mobile App Development",
        "Game Development",
        "Tally",
        "Stock Market",
        "UI/UX Design",
        "Python Programming",
        "Java Programming",
        "Programming Fundamentals"
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false); // Close dropdown after selecting a category
    };

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="max-w-7xl mx-auto mb-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800">Our Courses</h2>
                <div className="relative inline-block text-left w-full md:w-auto">
                    <div>
                        <button
                            type="button"
                            className="inline-flex justify-center w-full md:w-auto rounded-md shadow-sm px-4 py-2 bg-blue-600 text-white text-sm font-medium focus:outline-none"
                            id="options-menu"
                            aria-haspopup="true"
                            aria-expanded={isDropdownOpen ? 'true' : 'false'}
                            onClick={toggleDropdown}
                        >
                            {selectedCategory === 'All' ? 'Select Courses' : selectedCategory}
                            <FaChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Dropdown panel, show/hide based on dropdown state */}
                    {isDropdownOpen && (
                        <div
                            className="origin-top w-full md:w-auto md:right-0 mt-2 md:absolute rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            <div className="py-1">
                                {categories.map((category, index) => (
                                    <button
                                        key={index}
                                        className={`block px-4 py-2 text-sm text-gray-700 hover:text-black hover:font-medium hover:bg-gray-100 w-full text-left`}
                                        role="menuitem"
                                        onClick={() => handleCategoryChange(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-8">
                {courses
                    .filter(course => selectedCategory === "All" || course.category === selectedCategory)
                    .map((course, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img className="w-full h-48 object-fill " src={course.img} alt="Course Image" />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold  mb-2">{course.title}</h2>
                                <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">{course.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold text-blue-600">{course.price}</span>
                                    <button className="bg-blue-600 text-white py-2 px-4 rounded transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default CoursesPage;
