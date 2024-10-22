import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HomePageCourseCard from './pages/HomePageCourseCard'; // Adjust path as necessary
import courses from '../components/pages/coursesData'; // Assuming you have course data

const CoursesSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("Best Selling");
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const categories = [
        "Best Selling",
        "Other Courses",
        "Free Courses"
    ];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredCourses = courses.filter(course =>
        course.category.includes(selectedCategory)
    );

    return (
        <section id='courses' className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" ref={sectionRef}>
            <div className="max-w-7xl mx-auto mb-8">
                <motion.h2
                    className="text-4xl font-bold text-center text-gray-800 mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
                    transition={{ duration: 0.6 }}
                >
                    Explore Our Courses
                </motion.h2>
                <div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-4">
                    {categories.map((category, index) => (
                        <motion.button
                            key={index}
                            className={`md:px-4 px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                                selectedCategory === category
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-200'
                            }`}
                            onClick={() => handleCategoryChange(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course, index) => (
                        <HomePageCourseCard key={index} course={course} index={index} />
                    ))
                ) : (
                    <p className="text-center text-gray-600 col-span-3">
                        No courses available in this category.
                    </p>
                )}
            </div>
        </section>
    );
};

export default CoursesSection;
