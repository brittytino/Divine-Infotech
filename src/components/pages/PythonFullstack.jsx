import React, { useState } from 'react';
import { FaPython, FaProjectDiagram, FaDatabase, FaCloud, FaGithub, FaTasks, } from 'react-icons/fa';
import videoFile from './videos/python-fullstack.mp4';
import ClassRating from '../classRating';
import PythonSyllabus from './PythonSyllabus';

const PythonFullstack = () => {
    const [activeTab, setActiveTab] = useState('learningOutcomes');

    const courseData = {
        mostLiked: [
            { count: 200, text: 'Detailed explanations' },
            { count: 290, text: '24x7 Mentor Support' },
            { count: 150, text: 'Project-based learning' },
        ],
        expectationsMet: [
            { label: 'Exceeded', percentage: '85%' },
            { label: 'Yes', percentage: '75%' },
            { label: 'Somewhat', percentage: '15%' },
            { label: 'Not Really', percentage: '5%' },
        ],
    };


    return (
        <div className="bg-gray-200 text-gray-900">
            <div className="bg-gray-50 text-gray-900">
                {/* Header Section */}
                <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold mb-2">Python Full-Stack</h1>
                        <p className="text-lg">Become a proficient Python Full-stack developer</p>
                    </div>
                </header>

                {/* Video Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                        <video controls className="absolute top-0 left-0 w-full h-full border-2 md:border-4 border-blue-500 rounded-md shadow-lg">
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
                    <PythonSyllabus />
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
                                    <FaPython className="text-2xl text-blue-600 mr-4" />
                                    <p>Understand the fundamentals of Python programming and its core concepts.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaDatabase className="text-2xl text-yellow-600 mr-4" />
                                    <p>Manage databases using SQLite and SQLAlchemy.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaCloud className="text-2xl text-teal-600 mr-4" />
                                    <p>Implement RESTful APIs using Flask for backend communication.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaGithub className="text-2xl text-gray-800 mr-4" />
                                    <p>Utilize version control with Git and collaborate on projects using GitHub.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaProjectDiagram className="text-2xl text-purple-600 mr-4" />
                                    <p>Develop full-stack web applications with Flask and deploy them to the cloud.</p>
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
                                    <p>Real-world projects to build your portfolio.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaTasks className="text-2xl text-blue-600 mr-4" />
                                    <p>Comprehensive modules covering both front-end and back-end development with Python.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaTasks className="text-2xl text-blue-600 mr-4" />
                                    <p>In-depth tutorials on deploying web applications to cloud servers.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaTasks className="text-2xl text-blue-600 mr-4" />
                                    <p>Guidance on industry best practices and coding standards.</p>
                                </li>
                                <li className="flex items-start">
                                    <FaTasks className="text-2xl text-blue-600 mr-4" />
                                    <p>Access to a community of learners and professional mentors.</p>
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

export default PythonFullstack;
