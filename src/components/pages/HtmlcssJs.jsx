import React, { useState, useRef } from 'react';

import { FaPlay, FaPause } from 'react-icons/fa';
import { FaProjectDiagram, FaTools,FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

import videoFile from './videos/HtmlCssJs.mp4';
import ClassRating from '../classRating';
import HtmlCssJsSyllabus from './HtmlcssJsSyllabus';

const HtmlCssJs = () => {
    const [activeTab, setActiveTab] = useState('learningOutcomes');

    const courseData = {
        mostLiked: [
            { count: 350, text: 'Clear explanations' },
            { count: 312, text: 'Dedicated Mentor Support' },
            { count: 150, text: 'Project-based learning' },
        ],
        expectationsMet: [
            { label: 'Exceeded', percentage: '85%' },
            { label: 'Yes', percentage: '75%' },
            { label: 'Somewhat', percentage: '7%' },
            { label: 'Not Really', percentage: '0%' },
        ],
    };

    //video 
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="bg-gray-200 text-gray-900">
            <div className="bg-gray-50 text-gray-900">
                {/* Header Section */}
                <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold mb-2">HTML, CSS, and JavaScript Basics</h1>
                        <p className="md:text-lg text-sm text-gray-300">Learn the foundational skills of web development</p>
                    </div>
                </header>

                {/* Video Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 gap-5 md:gap-10">
                        <div className="relative lg:w-2/3">
                            <div className="relative w-full overflow-hidden rounded-md shadow-lg">
                                <div
                                    className="absolute inset-0 z-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50 cursor-pointer"
                                    onClick={handlePlayPause}
                                >
                                    {isPlaying ? (
                                        <FaPause className="text-white text-3xl" />
                                    ) : (
                                        <FaPlay className="text-white text-3xl" />
                                    )}
                                </div>
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover border-2 border-blue-500 rounded-md"
                                    controls
                                    controlsList="nodownload"
                                >
                                    <source src={videoFile} type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        {/* Course Highlights */}
                        <div className="mt-8 lg:mt-0 lg:w-1/3 flex flex-col justify-between bg-white p-8 rounded-md shadow-lg border border-blue-400">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Course Highlights</h3>
                                <ul className="space-y-4 text-gray-800">
                                    <li className="flex items-start">
                                        <FaHtml5 className="text-2xl text-blue-600 mr-3" />
                                        <p>Master the basics of HTML structure and syntax.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaCss3Alt className="text-2xl text-blue-600 mr-3" />
                                        <p>Learn fundamental CSS styling and layout techniques.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaJsSquare className="text-2xl text-blue-600 mr-3" />
                                        <p>Get hands-on experience with JavaScript for dynamic content.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaProjectDiagram className="text-2xl text-blue-600 mr-3" />
                                        <p>Build a small project incorporating HTML, CSS, and JavaScript.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaTools className="text-2xl text-blue-600 mr-3" />
                                        <p>Learn best practices and debugging techniques.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex flex-col pl-6 md:pl-60 gap-3">
                    <span className="text-xl font-semibold text-yellow-500">Fee: ₹5,000</span>
                    <span className="text-xl font-semibold">Duration: 25 days</span>
                </div>

                <div className='md:pl-60 pl-6 flex flex-col'>
                    <a href="https://forms.gle/ygY2fAGq8XWDm3ZT6" target='blank'>
                        <button className='font-medium py-2 px-4 rounded-md text-2xl bg-blue-500 transition-all text-white border hover:border-blue-700 hover:bg-white hover:text-blue-700 mt-5'>Enroll Now</button>
                    </a>
                </div>

                {/* Syllabus FAQ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <HtmlCssJsSyllabus />
                </section>

                {/* Dynamic content */}
                {/* Buttons for switching content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center space-x-4">
                    <button
                        onClick={() => setActiveTab('learningOutcomes')}
                        className={`px-4 py-2 font-semibold rounded-lg transition-all ${activeTab === 'learningOutcomes' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border border-blue-700'}`}
                    >
                        Learning Outcomes
                    </button>
                    <button
                        onClick={() => setActiveTab('keyFeatures')}
                        className={`px-4 py-2 font-semibold rounded-lg transition-all ${activeTab === 'keyFeatures' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border border-blue-700'}`}
                    >
                        Key Features
                    </button>
                </div>

                {/* Learning Outcomes Section */}
                {activeTab === 'learningOutcomes' && (
                    <section className="bg-gray-100 py-12 transition-all">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className=" text-2xl md:text-3xl font-semibold mb-6">Learning Outcomes</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaHtml5 className="text-2xl text-orange-600 mr-4" />
                                    <p>Understand the structure and syntax of HTML for creating web pages.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaCss3Alt className="text-2xl text-blue-600 mr-4" />
                                    <p>Apply CSS styles to enhance the appearance of web pages.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaJsSquare className="text-2xl text-yellow-600 mr-4" />
                                    <p>Use JavaScript to add interactivity and dynamic content to web pages.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaProjectDiagram className="text-2xl text-green-600 mr-4" />
                                    <p>Develop a small project incorporating HTML, CSS, and JavaScript.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaTools className="text-2xl text-gray-800 mr-4" />
                                    <p>Learn best practices and debugging techniques for web development.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                )}

                {/* Key Features Section */}
                {activeTab === 'keyFeatures' && (
                    <section className="bg-gray-100 py-12 transition-all">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Key Features</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaHtml5 className="text-2xl text-orange-600 mr-4" />
                                    <p>In-depth coverage of HTML5 features and semantic elements.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaCss3Alt className="text-2xl text-blue-600 mr-4" />
                                    <p>Comprehensive understanding of CSS3 features and responsive design principles.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaJsSquare className="text-2xl text-yellow-600 mr-4" />
                                    <p>Hands-on experience with JavaScript for dynamic web development.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaProjectDiagram className="text-2xl text-green-600 mr-4" />
                                    <p>Practical projects to build a strong portfolio.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaTools className="text-2xl text-gray-800 mr-4" />
                                    <p>Access to professional mentors and community support.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                )}

                {/* Class Rating */}
                <ClassRating mostLiked={courseData.mostLiked} expectationsMet={courseData.expectationsMet} />

                <div className='flex flex-col items-center justify-center gap-3'>
                    <a href="https://forms.gle/ygY2fAGq8XWDm3ZT6" target='blank'>
                        <button className='font-medium py-2 px-4 rounded-md text-2xl mb-10 bg-blue-500 transition-all text-white border hover:border-blue-700 hover:bg-white hover:text-blue-700 mt-5'>Enroll Now</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HtmlCssJs;
