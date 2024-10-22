import React from "react";
import courseData from './courseData'; // Import the course data

const AboutCourse = ({ courseId }) => { // Accept courseId as a prop
    const course = courseData.find(course => course.id === courseId); // Find the course by ID

    return (
        <div id="about" className="mt-5 py-8 px-4 text-justify md:text-left md:px-5 lg:pl-40">
            <div className="lg:w-3/5">
                <h1 className="font-bold text-black text-3xl md:text-4xl leading-tight mt-10">Course Overview</h1>
                <p className="mt-4">{course.about}</p> {/* Use course overview from courseData */}
            </div>
        </div>
    );
}

export default AboutCourse;
