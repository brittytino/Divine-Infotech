import React from 'react';
import { motion } from 'framer-motion';

const CurriculumSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg my-8">
      <h2 className="text-3xl font-semibold mb-4 text-center">Course Curriculum</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold">Module 1: Introduction to Programming</h3>
          <p>Understand the basic concepts of programming and get familiar with coding environments.</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold">Module 2: C Programming Basics</h3>
          <p>Learn the syntax and structure of the C programming language.</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold">Module 3: Advanced C Concepts</h3>
          <p>Dive deeper into pointers, arrays, and data structures in C.</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold">Module 4: C++ Fundamentals</h3>
          <p>Explore the object-oriented programming features of C++.</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold">Module 5: Java Essentials</h3>
          <p>Get to know the Java programming language and its applications.</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold">Module 6: Python Programming</h3>
          <p>Learn Python syntax and how to apply it to real-world problems.</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold">Module 7: Final Project</h3>
          <p>Integrate everything you've learned to complete a comprehensive coding project.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CurriculumSection;
