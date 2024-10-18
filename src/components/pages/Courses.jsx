import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CourseCard from './CourseCard';
import courses from './coursesData';

const CoursesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("Best Selling");
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const categories = [
        "Best Selling",
        "Other Courses"
    ];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredCourses = selectedCategory === "Best Selling"
        ? courses.filter(course => course.category.includes("Best Selling"))
        : courses.filter(course => course.category.includes(selectedCategory));

    return (
        <section id='courses' className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-100 via-white to-blue-100" ref={sectionRef}>
            <div className="max-w-7xl mx-auto mb-8">
                <motion.h2
                    className="md:text-4xl text-2xl font-bold text-center text-blue-900 md:underline  md:underline-offset-8 decoration-wavy decoration-pink-500"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
                    transition={{ duration: 0.6 }}
                >
                    Boost Your Career with Our Premium Courses
                </motion.h2>
                <motion.p
                    className="text-lg text-center text-gray-700 mt-4 font-medium italic"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
                    transition={{ duration: 0.8 }}
                >
                    Unlock your future potential! Invest in yourself today.
                </motion.p>
                <div className="flex flex-wrap items-center justify-center pt-6 md:pt-10 gap-4 md:gap-6">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`md:px-5 px-4 py-2 rounded-full text-sm md:text-md font-bold transition-all shadow-md hover:scale-105 ${
                                selectedCategory === category
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                                    : 'bg-white text-gray-800 border-2 border-blue-300 hover:bg-blue-200'
                            }`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course, index) => (
                    <CourseCard key={index} course={course} index={index} selectedCategory={selectedCategory} />
                ))}
            </div>
        </section>
    );
};

export default CoursesPage;
