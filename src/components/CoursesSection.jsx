// CoursesSection.jsx or wherever CourseCard is used
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CourseCard from '../components/pages/CourseCard'; // Adjust path as necessary
import courses from '../components/pages/coursesData'; // Assuming you have course data

const CoursesSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("Best Selling");
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const categories = [
        "Best Selling",
        "Other courses"
    ];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredCourses = selectedCategory === "Best Selling"
        ? courses.filter(course => course.category.includes("Best Selling"))
        : courses.filter(course => course.category.includes(selectedCategory));

    return (
        <section id='courses' className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100" ref={sectionRef}>
            <div className="max-w-7xl mx-auto mb-8">
                <motion.h2
                    className="text-3xl font-semibold text-center text-gray-800 underline underline-offset-4 decoration-red-500"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Premium Courses
                </motion.h2>
                <div className="flex flex-wrap items-center justify-center pt-6 md:pt-10 gap-2 md:gap-4">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`md:px-4 px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                                selectedCategory === category
                                    ? 'bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg'
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
                    <CourseCard key={index} course={course} index={index} selectedCategory={selectedCategory} />
                ))}
            </div>
        </section>
    );
};

export default CoursesSection;
