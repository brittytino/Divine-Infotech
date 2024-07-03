import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import courses from '../components/pages/coursesData';

const CoursesSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("Best Selling");
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.2 // Adjust threshold as needed
    });

    const categories = [
        "Best Selling",
        "UI/UX Design",
        "Web Development",
        "Mobile App Development",
        "Game Development",
        "Prompt Engineering",
        "Tally",
        "Stock Market",
        "Python Programming",
        "Java Programming",
        "Programming Fundamentals",
        "Digital Marketing Fundamentals",
        "Git and GitHub",
        "Aptitude"
    ];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredCourses = selectedCategory === "Best Selling"
        ? courses.filter(course => course.category.includes("Best Selling"))
        : courses.filter(course => course.category.includes(selectedCategory));

    // Adjust max categories to show in mobile and larger screens
    const maxCategoriesToShow = window.innerWidth < 768 ? 6 : categories.length;

    return (
        <section id='courses' className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100" ref={sectionRef}>
            <div className="max-w-7xl mx-auto mb-8">
                <motion.h2
                    className="text-3xl font-semibold text-center text-gray-800 underline underline-offset-4 decoration-blue-500"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Courses
                </motion.h2>
                <div className="flex flex-wrap pt-6 md:pt-10 gap-2 md:gap-4">
                    {categories.slice(0, maxCategoriesToShow).map((category, index) => (
                        <button
                            key={index}
                            className={`md:px-4 px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                                selectedCategory === category
                                    ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg'
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
                {filteredCourses.map((course, index) => (
                    <CourseCard key={index} course={course} index={index} />
                ))}
            </div>

            <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
                transition={{ duration: 0.6 }}
            >
                <a
                    href="/courses"
                    className="inline-flex items-center bg-transparent border border-blue-600 duration-300 font-medium text-blue-800 hover:bg-blue-600 hover:text-white py-2 px-2 text-sm md:text-lg md:px-4 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Explore more
                    <FaArrowRight className="ml-2" />
                </a>
            </motion.div>
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
            <img className="w-full md:h-48 h-40 object-fill object-center" src={course.img} alt="Course Image" />
            <div className="p-6">
                <h2 className="md:text-xl text-lg font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-700 mb-4 text-xs md:text-base leading-relaxed">{course.description}</p>
                <div className="flex justify-between items-center">
                    <div className=' flex gap-4'>
                        <span className="md:text-lg text-base font-semibold text-blue-600 decoration-red-700 line-through">{course.oldFees}</span>
                        <span className="md:text-lg text-base font-semibold text-blue-600">{course.price}</span>
                    </div>
                    <a href={course.url}>
                        <button className="bg-blue-600 text-white py-2 px-2 md:py-2 md:px-4 rounded-md transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Enroll Now
                        </button>
                    </a>
                </div>
                <p className="text-gray-700 mt-2 text-sm md:text-base font-medium">Duration: {course.duration}</p>
            </div>
        </motion.div>
    );
};

export default CoursesSection;
