import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import courses from './coursesData';

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
        "Programming Fundamentals",
        "Digital Marketing Fundamentals",
        "Prompt Engineering",
        "Git and GitHub",
        "Aptitude"
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
                <h2 className="text-3xl font-semibold text-center text-gray-800 underline underline-offset-4 decoration-blue-500">Our Courses</h2>
                <div className="relative inline-block text-left w-full md:w-auto">
                    <div className='flex items-center justify-center pt-10'>
                        <button
                            type="button"
                            className="inline-flex justify-center w-auto md:w-auto rounded-md shadow-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm font-medium focus:outline-none"
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
                                        className={`block px-4 py-2 text-sm text-gray-700 hover:text-black transition-all hover:font-medium hover:bg-blue-100 w-full text-left`}
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

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
                {courses
                    .filter(course => {
                        if (selectedCategory === "All") {
                            return true;
                        }
                        if (Array.isArray(course.category)) {
                            return course.category.includes(selectedCategory);
                        }
                        return course.category === selectedCategory;
                    })
                    .map((course, index) => (
                        <CourseCard key={index} course={course} index={index} />
                    ))}
            </div>
        </section>
    );
};

const CourseCard = ({ course, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2 // Adjust threshold as needed
    });

    return (
        <motion.div
            ref={ref}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
        >
            <img className="w-full h-48 object-fill object-center" src={course.img} alt="Course Image" />
            <div className="p-6">
                <h2 className="md:text-xl text-lg font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-700 mb-4 text-xs md:text-base leading-relaxed">{course.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600">{course.price}</span>
                    <a href={course.url}>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-md transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Enroll Now
                        </button>
                    </a>
                </div>
                <p className="text-gray-700 mt-2 text-sm md:text-base font-medium">Duration: {course.duration}</p>
            </div>
        </motion.div>
    );
};

export default CoursesPage;
