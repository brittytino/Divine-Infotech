import React from 'react';
import { FaLaptopCode, FaPython, FaGamepad, FaBullhorn, FaChartLine, FaJava, FaCode, FaRobot, FaGithub, FaArrowRight } from 'react-icons/fa';
import mern from '../images/course/mern.png';
import pythonFullstack from '../images/course/python-fullstack.png';
import gameDev from '../images/course/gamedev.jpg';
import digitalMarketing from '../images/course/digital-marketing.jpg';
import stockMarket from '../images/course/stock-market.jpg';
import Java from '../images/course/java.webp';
import fundamentals from '../images/course/fundamental.png';
import promptEngineering from '../images/course/prompt-engineering.jpeg';
import gitGithub from '../images/course/git-github.jpg';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const courses = [
    {
        img: mern, 
        icon: <FaLaptopCode className="text-4xl text-blue-500" />,
        title: "Fullstack Web Development",
        price: "₹50,000",
        description: [
            "Master both frontend and backend development.",
            "Learn HTML, CSS, JavaScript, React, Node.js, and more.",
            "Industry-relevant projects and real-world applications."
        ]
    },
    {
        img: pythonFullstack,
        icon: <FaPython className="text-4xl text-yellow-500" />,
        title: "Fullstack Python",
        price: "₹45,000",
        description: [
            "Comprehensive training in Python for web development.",
            "Focus on Django, Flask, APIs, and data-driven applications.",
            "Hands-on projects and interactive learning."
        ]
    },
    {
        img: gameDev,
        icon: <FaGamepad className="text-4xl text-green-500" />,
        title: "Game Development",
        price: "₹60,000",
        description: [
            "Dive into game design, development, and deployment.",
            "Learn Unity, Unreal Engine, C#, and game physics.",
            "Build your own games from scratch."
        ]
    },
    {
        img: digitalMarketing,
        icon: <FaBullhorn className="text-4xl text-pink-500" />,
        title: "Digital Marketing",
        price: "₹30,000",
        description: [
            "Strategies for SEO, SEM, social media, and content marketing.",
            "Real-world case studies and practical exercises.",
            "Enhance your online presence and drive business growth."
        ]
    },
    {
        img: stockMarket,
        icon: <FaChartLine className="text-4xl text-red-500" />,
        title: "Stock Market",
        price: "₹25,000",
        description: [
            "Understanding stock trading, investment strategies, and market analysis.",
            "Hands-on experience with trading tools and platforms.",
            "Learn risk management and financial planning."
        ]
    },
    {
        img: Java,
        icon: <FaJava className="text-4xl text-blue-600" />,
        title: "Java",
        price: "₹35,000",
        description: [
            "In-depth knowledge of Java programming language.",
            "Focus on OOP concepts, data structures, and algorithms.",
            "Build robust applications and software solutions."
        ]
    },
    {
        img: fundamentals, 
        icon: <FaCode className="text-4xl text-purple-500" />,
        title: "Fundamentals of Major Programming Languages",
        price: "₹20,000",
        description: [
            "Basics of C, C++, JavaScript, and Python.",
            "Essential for beginners and those looking to broaden their skills.",
            "Interactive coding sessions and projects."
        ]
    },
    {
        img: promptEngineering,
        icon: <FaRobot className="text-4xl text-teal-500" />,
        title: "Prompt Engineering",
        price: "₹40,000",
        description: [
            "Learn to design, build, and maintain interactive AI systems.",
            "Focus on NLP, ML algorithms, and AI integration.",
            "Hands-on projects with cutting-edge technology."
        ]
    },
    {
        img: gitGithub,
        icon: <FaGithub className="text-4xl text-gray-700" />,
        title: "Git and GitHub",
        price: "₹15,000",
        description: [
            "Master version control and collaborative coding.",
            "Learn branching, merging, pull requests, and more.",
            "Essential for team projects and open-source contributions."
        ]
    }
];

const Courses = () => {
    return (
        <div className="py-16 px-4 md:px-24 bg-gray-100">
            <h2 className="text-3xl font-semibold mb-8 text-center text-[#282828] underline underline-offset-8 decoration-[#453fe1]">Our Courses</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all flex flex-col"
                    >
                        <div className="mb-4 overflow-hidden rounded-t-lg" style={{height: '200px'}}>
                            <img 
                                src={course.img} 
                                alt={course.title} 
                                className="w-full h-full object-cover" 
                                style={{ borderBottomLeftRadius: '2px', borderBottomRightRadius: '2px' }}
                            />
                        </div>
                        <div className='px-4 pb-6 pt-3'>
                            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                            <p className="text-blue-500 font-semibold mb-4">{course.price}</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 flex-grow">
                                {course.description.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex items-center text-blue-500 px-4 py-2 rounded border border-blue-500 hover:bg-blue-600 hover:text-white transition-all self-start mt-4">
                                Learn more <FaArrowRight className="ml-2" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
