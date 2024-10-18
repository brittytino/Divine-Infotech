import React, { useEffect, useRef } from 'react';
import CourseForm from './CourseForm'; // Import the reusable form component
import Breadcrumb from '../Breadcrumb';
import bgImg from "./img/blue-bg.svg";
import CourseInfo from './CourseInfo';
import CourseNavbar from './CourseNavbar';
import AboutCourse from './AboutCourse';
import SyllabusAccordion from './SyllabusAccordion';
import CertificateSection from './CertificateSection';
import DidYouKnow from './DidYouKnow';

import FAQ from './FAQ';
import ToolsCovered from './ToolsCovered';

const Fullstack = () => {
    const breadcrumbItems = [
        { label: "Divine Infotech", isActive: false, link: '/' },
        { label: "Courses", isActive: false, link: '/courses' },
        { label: "Fullstack Development", isActive: true, link: '#' },
    ];

    const formRef = useRef(null);
    const didYouKnowRef = useRef(null);
    const footerRef = useRef(null);

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
                        <h1 className="text-xl lg:text-5xl font-bold text-[#fcbf07] leading-tight mb-2 md:mb-4">Full Stack Web Development</h1>
                        <p className="md:text-lg text-sm font-semibold text-gray-300 mb-6">Become the Developer Companies Need</p>
                        <p className="text-gray-200 mb-8 text-base md:text-2xl md:w-[90%]">
                            Struggling to get noticed by tech companies because you're <span className='text-[#9bdd12] font-medium'>missing critical skills?</span> Wondering why job offers never come despite your efforts? Unlock the door to endless career opportunities with our Full Stack Web Development course. From creating eye-catching frontends to building robust backends, you’ll become proficient in the technologies what a job needs.
                        </p>

                        <h1 className='text-white text-xl md:text-2xl font-semibold'>Buy this course @</h1>
                        <div className='text-xl md:text-2xl font-semibold flex gap-2 md:gap-4'>
                            <h1 className='line-through'>₹45,000 </h1><span className='text-yellow-500'>₹12,000</span>
                            <button className='bg-[#fef7cd] text-[#cf9203] rounded-full text-xs md:text-base p-2 md:py-2 md:px-4'>
                                You save ₹33,000!
                            </button>
                        </div>
                        <CourseInfo />
                    </div>
                </div>
            </div>

            {/* Sticky Form Outside the Section */}
            <div className="lg:w-1/4 w-full lg:ml-16 mt-12 md:mt-32 z-30  lg:fixed top-16 right-0 lg:right-10">
                <CourseForm courseName="Full Stack Web Development" coursePrice="₹12000" />
            </div>

            {/* Second Section: Other Components with White Background */}
            <div className="bg-white ">
                <CourseNavbar />
                <AboutCourse />

                <SyllabusAccordion />
                <CertificateSection />
                <div className='md:w-3/4'>
                    <DidYouKnow />
                    <ToolsCovered/>
                </div>
             
               
                <FAQ/>

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
