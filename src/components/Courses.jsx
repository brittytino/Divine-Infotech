import React from 'react';
import mern from '../images/course/mern.png';
import pythonFullstack from '../images/course/python-fullstack.png';
import gameDev from '../images/course/gamedev.jpg';
import digitalMarketing from '../images/course/digital-marketing.jpg';
import stockMarket from '../images/course/stock-market.jpg';
import Java from '../images/course/java.webp';
import fundamentals from '../images/course/fundamental.png';
import promptEngineering from '../images/course/prompt-engineering.jpeg';
import gitGithub from '../images/course/git-github.jpg';

const courses = [
    {
        img: mern,
        title: "Fullstack Web Development",
        price: "₹50,000",
        description: "Master frontend and backend development with HTML, CSS, JavaScript, React, Node.js, and more. Includes industry-relevant projects."
    },
    {
        img: pythonFullstack,
        title: "Fullstack Python",
        price: "₹45,000",
        description: "Comprehensive Python training for web development focusing on Django, Flask, APIs, and data-driven applications. Hands-on projects."
    },
    {
        img: gameDev,
        title: "Game Development",
        price: "₹60,000",
        description: "Explore game design, development, and deployment with Unity, Unreal Engine, C#, and game physics. Build your own games."
    },
    {
        img: digitalMarketing,
        title: "Digital Marketing",
        price: "₹30,000",
        description: "Strategies for SEO, SEM, social media, and content marketing with real-world case studies and practical exercises. Enhance your online presence."
    },
    {
        img: stockMarket,
        title: "Stock Market",
        price: "₹25,000",
        description: "Understand stock trading, investment strategies, and market analysis with hands-on experience using trading tools and platforms. Learn risk management."
    },
    {
        img: Java,
        title: "Java",
        price: "₹35,000",
        description: "Gain in-depth knowledge of Java programming language focusing on OOP concepts, data structures, and algorithms. Build robust applications."
    },
    {
        img: fundamentals,
        title: "Fundamentals of Major Programming Languages",
        price: "₹20,000",
        description: "Explore basics of C, C++, JavaScript, and Python essential for beginners and skill broadening. Includes interactive coding sessions."
    },
    {
        img: promptEngineering,
        title: "Prompt Engineering",
        price: "₹40,000",
        description: "Learn to design, build, and maintain interactive AI systems with focus on NLP, ML algorithms, and AI integration. Hands-on projects."
    },
    {
        img: gitGithub,
        title: "Git and GitHub",
        price: "₹15,000",
        description: "Master version control and collaborative coding, including branching, merging, pull requests, and more. Essential for team projects."
    }
];

const Courses = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Our Courses</h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-48 object-cover" src={course.img} alt="Course Image" />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">{course.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold text-blue-600">{course.price}</span>
                                <button className="bg-blue-600 text-white py-2 px-4 rounded transition-all hover:bg-blue-700  ">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses;
