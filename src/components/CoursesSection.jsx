import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import courses from '../components/pages/coursesData';

const CoursesSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("Best Selling");

    const categories = [
        "Best Selling",
        "Web Development",
        "Mobile App Development",
        "Game Development",
        "Tally",
        "Stock Market",
        "UI/UX Design",
        "Python Programming",
        "Java Programming",
        "Programming Fundamentals",
        "Digital Marketing Fundamentals",
        "Prompt Engineering",
        "Git and GitHub"
    ];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredCourses = selectedCategory === "Best Selling" 
        ? courses.filter(course => course.category.includes("Best Selling"))
        : courses.filter(course => course.category.includes(selectedCategory));

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="max-w-7xl mx-auto mb-8">
                <h2 className="text-3xl font-semibold text-center text-gray-800 underline underline-offset-4 decoration-blue-500">Our Courses</h2>
                <div className="flex flex-wrap justify-stretch pt-6 md:pt-10 gap-1 md:gap-4">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`md:px-4 px-2 py-2 rounded-md text-xs md:text-sm font-normal md:font-medium transition-all ${
                                selectedCategory === category 
                                    ? 'bg-blue-600 text-white font-medium' 
                                    : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-200'
                            }`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-8">
                {filteredCourses.slice(0, 6).map((course, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full md:h-48 h-40 object-fill object-center" src={course.img} alt="Course Image" />
                        <div className="p-6">
                            <h2 className="md:text-xl text-lg font-semibold mb-2">{course.title}</h2>
                            <p className="text-gray-700 mb-4 text-xs md:text-base leading-relaxed">{course.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="md:text-lg text-base font-semibold text-blue-600">{course.price}</span>
                                <a href={course.url}>
                                    <button className="bg-blue-600 text-white py-1 px-2 md:py-2 md:px-4 rounded-md transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                        Enroll Now
                                    </button>
                                </a>
                            </div>
                            <p className="text-gray-700 mt-2 text-sm md:text-base font-medium">Duration: {course.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <a 
                    href="/courses" 
                    className="inline-flex items-center bg-transparent border border-blue-600 duration-300 font-medium text-blue-800 hover:bg-blue-600 hover:text-white py-2 px-2 text-sm md:text-lg md:px-4 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Explore more
                    <FaArrowRight className="ml-2" />
                </a>
            </div>
        </section>
    );
};

export default CoursesSection;
