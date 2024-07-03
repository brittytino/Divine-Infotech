import React, { useState } from 'react';
import { FaLightbulb, FaLaptopCode, FaUserFriends, FaMapSigns } from 'react-icons/fa';

import videoFile from './videos/common.mp4';
import ClassRating from '../classRating';

import AdvanceuiuxSyllabus from './AdvanceuiuxSyllabus';

const AdvanceUiux = () => {
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
            { label: 'Somewhat', percentage: '20%' },
            { label: 'Not Really', percentage: '0%' },
        ],
    };

    return (
        <div className="bg-gray-200 text-gray-900">
            <div className="bg-gray-50 text-gray-900">
                {/* Header Section */}
                <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold mb-2">Advanced UI/UX Design Techniques</h1>
                        <p className="md:text-lg text-sm text-gray-300">Master advanced UI/UX design skills</p>
                    </div>
                </header>

                {/* Video Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 gap-5 md:gap-10">
                        <div className="relative lg:w-2/3">
                            <div style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}>
                                <video controls className="absolute top-0 left-0 w-full h-full object-cover border-2 border-blue-400 rounded-md shadow-lg">
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
                                        <FaLightbulb className="text-2xl text-blue-600 mr-3" />
                                        <p>Master advanced user research techniques.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaLaptopCode className="text-2xl text-blue-600 mr-3" />
                                        <p>Comprehensive curriculum covering advanced UI/UX design techniques                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaUserFriends className="text-2xl text-blue-600 mr-3" />
                                        <p>Design complex interactions and visual hierarchies.</p>
                                    </li>
                                    <li className="flex items-start">
                                        <FaMapSigns className="text-2xl text-blue-600 mr-3" />
                                        <p>Preparation of a UI/UX design portfolio.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                <div className="flex flex-col pl-6 md:pl-60 gap-3">
                    <span className="text-xl font-semibold text-yellow-500">Fee: ₹8,000</span>
                    <span className="text-xl font-semibold">Duration: 30 days</span>
                </div>

                <div className='md:pl-60 pl-6 flex flex-col'>
                    <a href="https://forms.gle/ygY2fAGq8XWDm3ZT6" target='blank'>
                        <button className='font-medium py-2 px-4 rounded-md text-2xl bg-blue-500 transition-all text-white border hover:border-blue-700 hover:bg-white hover:text-blue-700 mt-5'>Enroll Now</button>
                    </a>
                </div>

                {/* Syllabus FAQ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <AdvanceuiuxSyllabus />
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
                            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Learning Outcomes</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaLightbulb className="text-2xl text-green-600 mr-4" />
                                    <p>Conduct advanced user research and persona development.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaLightbulb className="text-2xl text-green-600 mr-4" />
                                    <p>Design complex information architectures and interactions.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaLightbulb className="text-2xl text-green-600 mr-4" />
                                    <p>Apply advanced visual design principles.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaLightbulb className="text-2xl text-green-600 mr-4" />
                                    <p>Create motion designs and animated UI elements.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaLightbulb className="text-2xl text-green-600 mr-4" />
                                    <p>Implement usability testing and iterative design processes.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                )}

                {/* Key Features Section */}
                {activeTab === 'keyFeatures' && (
                    <section className="bg-gray-100 py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Key Features</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Hands-on projects for practical learning.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Comprehensive coverage of advanced UI/UX techniques.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Guidance on deploying user-centric designs.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Insights into industry standards and best practices.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaLightbulb className="text-2xl text-blue-600 mr-4" />
                                    <p>Access to a community of learners and mentors.</p>
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

export default AdvanceUiux;
