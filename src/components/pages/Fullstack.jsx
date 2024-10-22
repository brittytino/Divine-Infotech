import React from 'react';
import CourseForm from './CourseForm'; // Import the reusable form component
import Breadcrumb from '../Breadcrumb';
import bgImg from "./img/blue-bg.svg";
import CourseInfo from './CourseInfo';
import CourseNavbar from './CourseNavbar';
import AboutCourse from './AboutCourse';
import SyllabusAccordion from './SyllabusAccordion'; // Import the SyllabusAccordion
import CertificateSection from './CertificateSection';
import DidYouKnow from './DidYouKnow';
import FAQ from './FAQ'; // Import the FAQ component
import ToolsCovered from './ToolsCovered';
import CourseTestimonial from './CourseTestimonial';
import Benefits from './Benefits';
import courseData from './courseData'; // Import the course data

const Fullstack = () => {
    const courseId = 1; // Directly specify the course ID
    const course = courseData.find(course => course.id === courseId); // Find the course by ID

    console.log(courseId); // Log the courseId
    console.log(course); // Log the found course

    if (!course) {
        return <div className='text-center text-2xl font-semibold py-8'>Course not found - go to <a href="/">Home Page </a></div>; // Handle case where course is not found
    }

    const breadcrumbItems = [
        { label: "Divine Infotech", isActive: false, link: '/' },
        { label: "Courses", isActive: false, link: '/courses' },
        { label: course.name, isActive: true, link: '#' },
    ];

    return (
        <div id='hero' className="flex flex-col">
            {/* First Section with Background Image */}
            <div
                style={{ backgroundImage: `url(${bgImg})` }}
                className='bg-cover bg-[#112087] px-6 py-12 lg:pt-16 lg:px-28 text-white'
            >
                {/* Breadcrumb */}
                <Breadcrumb items={breadcrumbItems} color="text-white" marginX='md:mx-10' />

                <div className="flex flex-col lg:flex-row items-start justify-between">

                    {/* Left: Course Content */}
                    <div className="lg:w-3/4 w-full md:px-10 lg:pt-8">
                        <h1 className="text-xl lg:text-5xl font-bold text-[#fcbf07] leading-tight mb-2 md:mb-4">{course.name}</h1>
                        <p className="md:text-lg text-sm font-semibold text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: course.tagline }}></p>
                        <p className="text-gray-200 mb-8 text-base md:text-2xl md:w-[90%]" dangerouslySetInnerHTML={{ __html: course.description }}></p>

                        <h1 className='text-white text-xl md:text-2xl font-semibold'>Buy this course @</h1>
                        <div className='text-xl md:text-2xl font-semibold flex gap-2 md:gap-4'>
                            <h1 className='line-through'>{course.originalPrice}</h1>
                            <span className='text-yellow-500'>{course.price}</span>
                            <button className='bg-[#fef7cd] text-[#cf9203] rounded-full text-xs md:text-base p-2 md:py-2 md:px-4'>
                                You save  {course.savings}!
                            </button>
                        </div>
                        <CourseInfo courseId={courseId} /> {/* Pass courseId as a prop */}
                    </div>
                </div>
            </div>

            {/* Sticky Form Outside the Section */}
            <div className="lg:w-1/4 w-full lg:ml-16 mt-12 md:mt-32 z-30 lg:fixed top-16 right-0 lg:right-10">
                <CourseForm courseName={course.name} coursePrice={course.price} />
            </div>

            {/* Second Section: Other Components with White Background */}
            <div className="bg-white ">
                <CourseNavbar />
                <AboutCourse courseId={courseId} />
                <SyllabusAccordion courseId={courseId} /> {/* Pass courseId as a prop */}
                <CertificateSection />

                <div className='lg:w-3/4'>
                    <Benefits />
                    <DidYouKnow salary={course.salary} />
                    <ToolsCovered courseId={courseId} /> {/* Pass courseId to ToolsCovered */}
                </div>

                <div className='bg-gray-50'>
                    <div id='testimony' className='lg:w-3/4'>
                        <CourseTestimonial />
                    </div>
                </div>

                <FAQ courseId={courseId} /> {/* Pass courseId to FAQ */}

                <div className='flex justify-center items-center py-4 lg:w-3/4 gap-2'>
                    <button
                        onClick={() => {
                            if (window.innerWidth >= 1024) {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            } else {
                                const enrollElement = document.getElementById('enroll');
                                if (enrollElement) {
                                    enrollElement.scrollIntoView({ behavior: 'smooth' });
                                }
                            }
                        }}
                        className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-all duration-300 rounded-md'
                    >
                        Enroll Now
                    </button>
                    <a href="/contactform">
                        <button className='bg-transparent text-blue-600 border transition-all duration-300 border-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md'>
                            Request a Callback ?
                        </button>
                    </a>
                </div>
                {/* Add your other components like Syllabus, Testimonies, etc. here */}
            </div>
        </div>
    );
};

export default Fullstack;
