import React, { useState } from 'react';
import { FaHtml5, FaNodeJs, FaDatabase, FaCloud, FaGithub, FaHandsHelping, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import videoFile from './videos/MERN.mp4';
import ClassRating from '../classRating';
import FullstackSyllabusFAQ from './FullstackSyllabus';
import sideImg from './img/side.png';

const Fullstack = () => {
    const [activeTab, setActiveTab] = useState('learningOutcomes');

    return (
        <div className="bg-gray-200 text-gray-900">
            <div className="bg-gray-50 text-gray-900">
                {/* Header Section */}
                <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold mb-2">Full-Stack Development</h1>
                        <p className="text-lg">Become a proficient Full-stack web developer</p>
                    </div>
                </header>

                {/* Video Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                        <video controls className="absolute top-0 left-0 w-full h-full">
                            <source src={videoFile} type="video/mp4" />
                        </video>
                    </div>
                </section>

                {/* Syllabus FAQ */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <FullstackSyllabusFAQ />
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
                                    <FaHtml5 className="text-2xl text-blue-600 mr-4" />
                                    <p>Build and style responsive websites using HTML, CSS, and JavaScript.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaNodeJs className="text-2xl text-green-600 mr-4" />
                                    <p>Develop server-side applications with Node.js and Express.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaDatabase className="text-2xl text-yellow-600 mr-4" />
                                    <p>Manage databases using MongoDB and Mongoose.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaCloud className="text-2xl text-teal-600 mr-4" />
                                    <p>Implement RESTful APIs for seamless communication between front-end and back-end.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaGithub className="text-2xl text-gray-800 mr-4" />
                                    <p>Utilize version control with Git and collaborate on projects using GitHub.</p>
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
                                    <FaHandsHelping className="text-2xl text-blue-600 mr-4" />
                                    <p>Real-world projects to build your portfolio.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaHandsHelping className="text-2xl text-blue-600 mr-4" />
                                    <p>Comprehensive modules covering both front-end and back-end development.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaHandsHelping className="text-2xl text-blue-600 mr-4" />
                                    <p>In-depth tutorials on deploying web applications to cloud servers.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaHandsHelping className="text-2xl text-blue-600 mr-4" />
                                    <p>Guidance on industry best practices and coding standards.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaHandsHelping className="text-2xl text-blue-600 mr-4" />
                                    <p>Access to a community of learners and professional mentors.</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                )}

                <ClassRating />

                {/* Contact Section */}
                <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
                        <p className="text-lg mb-6">For more information or support, contact us 24/7.</p>
                        <div className="flex items-center space-x-4">
                            <FaPhoneAlt className="text-2xl" />
                            <span>+123 456 7890</span>
                        </div>
                        <div className="flex items-center space-x-4 mt-4">
                            <FaEnvelope className="text-2xl" />
                            <span>support@divineinfotech.com</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Fullstack;
