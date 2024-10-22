import React from 'react';
import { motion } from 'framer-motion';
import courseData from './courseData'; // Import the course data

const CourseInfo = ({ courseId }) => { // Accept courseId as a prop
  const course = courseData.find(course => course.id === courseId); // Find the course by ID

  return (
    <motion.div 
      className="course-info bg-[#112087] rounded-md mt-5 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Modules Info */}
        <div className="flex flex-col items-center space-y-1 relative">
          <p className="text-lg font-semibold course-info-head">{course.modules} Modules</p>
          <p className="text-sm text-gray-300">with Certifications</p>
          <div className="block absolute right-0 top-0 bottom-0 w-[1px] bg-gray-400 "></div>
        </div>

        {/* Duration Info */}
        <div className="flex flex-col items-center space-y-1 relative">
          <p className="text-lg font-semibold course-info-head">{course.duration}</p>
          <p className="text-sm text-gray-300">of Live Learning</p>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-gray-400 "></div>
        </div>

        {/* Ratings Info */}
        <div className="flex flex-col items-center space-y-1 relative">
          <p className="text-lg font-semibold course-info-head">{course.ratings} Ratings</p>
          <p className="text-sm text-gray-300">by {course.ratingsCount} Learners</p>
          <div className="block absolute right-0 top-0 bottom-0 w-[1px] bg-gray-400 "></div>
        </div>

        {/* Language Info */}
        <div className="flex flex-col items-center space-y-1">
          <p className="text-lg font-semibold course-info-head">{course.language}</p>
          <p className="text-sm text-gray-300">Language</p>
        </div>

      </div>
    </motion.div>
  );
};

export default CourseInfo;
