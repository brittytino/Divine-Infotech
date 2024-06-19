import React, { useState } from 'react';
import { FaBullhorn, FaSearch, FaChartLine, FaRegNewspaper, FaFacebook, FaTasks } from 'react-icons/fa';
import videoFile from './videos/digital-marketing.mp4';
import ClassRating from '../classRating';
import DigitalMarketingSyllabus from './DigitalMarketingSyllabus';

const DigitalMarketing = () => {
    const [activeTab, setActiveTab] = useState('learningOutcomes');

    const courseData = {
        mostLiked: [
            { count: 300, text: 'Comprehensive content' },
            { count: 350, text: '24x7 Mentor Support' },
            { count: 200, text: 'Hands-on projects' },
        ],
        expectationsMet: [
            { label: 'Exceeded', percentage: '90%' },
            { label: 'Yes', percentage: '80%' },
            { label: 'Somewhat', percentage: '10%' },
            { label: 'Not Really', percentage: '0%' },
        ],
    };

    return (
        <div className="bg-gray-200 text-gray-900">
            <div className="bg-gray-50 text-gray-900">
                {/* Header Section */}
                <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold mb-2">Digital Marketing</h1>
                        <p className="text-lg">Master the art of digital marketing to drive business growth</p>
                    </div>
                </header>

                {/* Video Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                        <video controls className="absolute top-0 left-0 w-full h-full border-2 md:border-4 border-blue-500 rounded-md shadow-lg ">
                            <source src={videoFile} type="video/mp4" />
                        </video>
                    </div>
                </section>

                <div className=' flex flex-col items-center justify-center gap-3'>
                    <a href="https://forms.gle/ygY2fAGq8XWDm3ZT6" target='blank'> <button className=' font-medium py-2 px-4 rounded-md text-2xl bg-blue-500 transition-all text-white border hover:border-blue-700 hover:bg-white hover:text-blue-700 mt-5'>Enroll Now</button></a>
                    <button className=' font-medium py-2 px-4 rounded-md text-2xl  transition-all text-blue-500 mt-5 hover:text-blue-700 underline underline-offset-4 decoration-blue-600'>Contact Us ?</button>
                </div>

                {/* Syllabus FAQ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <DigitalMarketingSyllabus />
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
                            <h2 className="text-3xl font-semibold mb-6">Learning Outcomes</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaBullhorn className="text-2xl text-blue-600 mr-4" />
                                    <p>Master the fundamentals of digital marketing, including SEO, SEM, social media, and content marketing.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaSearch className="text-2xl text-yellow-600 mr-4" />
                                    <p>Learn strategies for optimizing search engine results to enhance online presence.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaChartLine className="text-2xl text-teal-600 mr-4" />
                                    <p>Analyze and measure the effectiveness of marketing campaigns using analytical tools.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaFacebook className="text-2xl text-blue-800 mr-4" />
                                    <p>Develop and execute social media strategies to engage and grow your audience.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaRegNewspaper className="text-2xl text-purple-600 mr-4" />
                                    <p>Utilize content marketing to attract and retain customers.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                )}

                {/* Key Features Section */}
                {activeTab === 'keyFeatures' && (
                    <section className="bg-gray-100 py-12 transition-all">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaTasks className="text-2xl text-blue-600 mr-4" />
                                    <p>Strategies for SEO, SEM, social media, and content marketing.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaTasks className="text-2xl text-blue-600 mr-4" />
                                    <p>Real-world case studies and practical exercises.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaTasks className="text-2xl text-blue-600 mr-4" />
                                    <p>Enhance your online presence and drive business growth.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaTasks className="text-2xl text-blue-600 mr-4" />
                                    <p>In-depth tutorials on industry best practices and trends.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaTasks className="text-2xl text-blue-600 mr-4" />
                                    <p>Access to a network of industry professionals and mentors.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                )}

                {/* Class rating  */}
                <ClassRating mostLiked={courseData.mostLiked} expectationsMet={courseData.expectationsMet} />

                <div className=' flex flex-col items-center justify-center gap-3'>
                    <a href="https://forms.gle/ygY2fAGq8XWDm3ZT6" target='blank'> <button className=' font-medium py-2 px-4 rounded-md text-2xl bg-blue-500 transition-all text-white border hover:border-blue-700 hover:bg-white hover:text-blue-700 mt-5'>Enroll Now</button></a>
                    <button className=' font-medium py-2 px-4 rounded-md text-2xl  transition-all text-blue-500 mt-5 hover:text-blue-700 underline underline-offset-4 decoration-blue-600'>Contact Us ?</button>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketing;
