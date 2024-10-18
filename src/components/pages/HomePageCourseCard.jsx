import React from 'react';

const HomePageCourseCard = ({ course }) => {
    if (!course) {
        return null; // Return nothing if course is undefined
    }

    const { title, courseName, shortDesc, img } = course;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden duration-300 p-4">
            {/* Image with rounded corners */}
            <img
                className="w-full h-48 object-fit rounded-md"
                src={img || '/default-course-image.jpg'}
                alt={title || 'Course Image'}
            />

            {/* Course Details */}
            <div className="py-4">
                {/* Course Title */}
                <h3 className="text-left text-lg font-semibold text-blue-600 mb-1">
                    {title || 'Untitled Course'}
                </h3>

                {/* Course Name */}
                <p className="text-left text-xs text-gray-600 mb-2">
                    {courseName || 'Course Name'}
                </p>

                {/* Short Description */}
                <p className="text-left text-sm text-gray-700 leading-relaxed">
                    {shortDesc || 'No description available for this course.'}
                </p>
            </div>

            {/* Know More Button */}
            <div className=" py-6 flex justify-start items-center gap-4">
                <button className=" bg-blue-600 text-white border rounded-sm font-semibold transition-all duration-300 py-2 px-4 hover:bg-white hover:text-blue-600 hover:border-blue-500">
                    <a href={course.url} className="block">
                        Learn More
                    </a>
                    
                </button>
                <button className='hover:bg-green-600 text-green-600 hover:text-white border rounded-sm font-semibold transition-all duration-300 py-2 px-4 bg-white  border-green-600'>
                <a href="/contactform" className=' text-sm'>Contact Us</a>
                </button>
            </div>
        </div>
    );
};

export default HomePageCourseCard;
