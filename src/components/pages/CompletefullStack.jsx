import React, { useState } from 'react';
import { FaDatabase, FaNodeJs, FaReact, FaCloud, FaTools, FaBook, FaProjectDiagram, FaUsers, FaLightbulb } from 'react-icons/fa';
import videoFile from './videos/Completefullstack.mp4';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ClassRating from '../classRating';
import CompletefullStackSyllabus from './CompletefullStackSyllabus';

const CompletefullStack = () => {
    const [activeTab, setActiveTab] = useState('learningOutcomes');

    const courseData = {
        mostLiked: [
            { count: 142, text: 'Clear explanations' },
            { count: 233, text: 'Dedicated Mentor Support' },
            { count: 110, text: 'Project-based learning' },
        ],
        expectationsMet: [
            { label: 'Exceeded', percentage: '85%' },
            { label: 'Yes', percentage: '75%' },
            { label: 'Somewhat', percentage: '10%' },
            { label: 'Not Really', percentage: '0%' },
        ],
    };

    // UseInView hook for animation triggers
    const { ref: introRef, inView: introInView } = useInView({
        triggerOnce: true,
        threshold: 0.2 // Adjust threshold as needed
    });

    const { ref: highlightsRef, inView: highlightsInView } = useInView({
        triggerOnce: true,
        threshold: 0.2 // Adjust threshold as needed
    });

    const { ref: tabsRef, inView: tabsInView } = useInView({
        triggerOnce: true,
        threshold: 0.2 // Adjust threshold as needed
    });

    return (
        <div className="bg-gray-200 text-gray-900">
            <div className="bg-gray-50 text-gray-900">
                {/* Header Section */}
                <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.h1
                            className="text-4xl font-bold mb-2"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: introInView ? 1 : 0, y: introInView ? 0 : 50 }}
                            transition={{ duration: 0.6 }}
                            ref={introRef}
                        >
                            Complete Full Stack Development
                        </motion.h1>
                        <motion.p
                            className="md:text-lg text-sm text-gray-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: introInView ? 1 : 0, y: introInView ? 0 : 50 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            ref={introRef}
                        >
                            Become a proficient full stack developer
                        </motion.p>
                    </div>
                </header>

                {/* Video Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.h2
                        className="text-3xl font-semibold mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: highlightsInView ? 1 : 0, y: highlightsInView ? 0 : 50 }}
                        transition={{ duration: 0.6 }}
                        ref={highlightsRef}
                    >
                        Introduction
                    </motion.h2>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 gap-5 md:gap-10">
                        <div className="relative lg:w-2/3">
                            <motion.div
                                style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: highlightsInView ? 1 : 0, y: highlightsInView ? 0 : 50 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                ref={highlightsRef}
                            >
                                <video controls className="absolute top-0 left-0 w-full h-full object-cover border-2 border-blue-400 rounded-md shadow-lg">
                                    <source src={videoFile} type="video/mp4" />
                                </video>
                            </motion.div>
                        </div>

                        {/* Course Highlights */}
                        <motion.div
                            className="mt-8 lg:mt-0 lg:w-1/3 flex flex-col justify-between bg-white p-8 rounded-md shadow-lg border border-blue-400"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: highlightsInView ? 1 : 0, y: highlightsInView ? 0 : 50 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            ref={highlightsRef}
                        >
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Course Highlights</h3>
                                <ul className="space-y-4 text-gray-800">
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: highlightsInView ? 1 : 0, x: highlightsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                        ref={highlightsRef}
                                    >
                                        <FaLightbulb className="text-2xl text-blue-600 mr-3" />
                                        <p>Comprehensive curriculum from basics to advanced concepts</p>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: highlightsInView ? 1 : 0, x: highlightsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                        ref={highlightsRef}
                                    >
                                        <FaProjectDiagram className="text-2xl text-blue-600 mr-3" />
                                        <p>Hands-on projects and real-world application development</p>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: highlightsInView ? 1 : 0, x: highlightsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 1.0 }}
                                        ref={highlightsRef}
                                    >
                                        <FaUsers className="text-2xl text-blue-600 mr-3" />
                                        <p>Expert guidance and support</p>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: highlightsInView ? 1 : 0, x: highlightsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 1.2 }}
                                        ref={highlightsRef}
                                    >
                                        <FaUsers className="text-2xl text-blue-600 mr-3" />
                                        <p>Access to a community of fellow learners and professionals</p>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: highlightsInView ? 1 : 0, x: highlightsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 1.4 }}
                                        ref={highlightsRef}
                                    >
                                        <FaTools className="text-2xl text-blue-600 mr-3" />
                                        <p>Career advice and portfolio building</p>
                                    </motion.li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Additional Sections with Framer Motion */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: tabsInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                    ref={tabsRef}
                >
                    {/* Buttons for switching content */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center space-x-4">
                        <motion.button
                            onClick={() => setActiveTab('learningOutcomes')}
                            className={`px-4 py-2 font-semibold rounded-lg transition-all ${activeTab === 'learningOutcomes' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border border-blue-700'}`}
                            whileHover={{ scale: 1.05 }}
                        >
                            Learning Outcomes
                        </motion.button>
                        <motion.button
                            onClick={() => setActiveTab('keyFeatures')}
                            className={`px-4 py-2 font-semibold rounded-lg transition-all ${activeTab === 'keyFeatures' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border border-blue-700'}`}
                            whileHover={{ scale: 1.05 }}
                        >
                            Key Features
                        </motion.button>
                    </div>

                    {/* Learning Outcomes Section */}
                    {activeTab === 'learningOutcomes' && (
                        <motion.section
                            className="bg-gray-100 py-12"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: tabsInView ? 1 : 0, y: tabsInView ? 0 : 50 }}
                            transition={{ duration: 0.6 }}
                            ref={tabsRef}
                        >
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Learning Outcomes</h2>
                                <ul className="space-y-4">
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: tabsInView ? 1 : 0, x: tabsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        ref={tabsRef}
                                    >
                                        <FaBook className="text-2xl text-green-600 mr-4" />
                                        <p>Establish a strong foundation in web development essentials.</p>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: tabsInView ? 1 : 0, x: tabsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        ref={tabsRef}
                                    >
                                        <FaBook className="text-2xl text-green-600 mr-4" />
                                        <p>Develop proficiency in creating dynamic and responsive front-end interfaces.</p>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: tabsInView ? 1 : 0, x: tabsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                        ref={tabsRef}
                                    >
                                        <FaBook className="text-2xl text-blue-600 mr-4" />
                                        <p>Gain expertise in server-side programming and database management.</p>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: tabsInView ? 1 : 0, x: tabsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                        ref={tabsRef}
                                    >
                                        <FaBook className="text-2xl text-teal-600 mr-4" />
                                        <p>Integrate front-end and back-end to build complete web applications.</p>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: tabsInView ? 1 : 0, x: tabsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 1.0 }}
                                        ref={tabsRef}
                                    >
                                        <FaBook className="text-2xl text-gray-800 mr-4" />
                                        <p>Master advanced concepts and deploy your applications.</p>
                                    </motion.li>
                                </ul>
                            </div>
                        </motion.section>
                    )}

                    {/* Key Features Section */}
                    {activeTab === 'keyFeatures' && (
                        <motion.section
                            className="bg-gray-100 py-12"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: tabsInView ? 1 : 0, y: tabsInView ? 0 : 50 }}
                            transition={{ duration: 0.6 }}
                            ref={tabsRef}
                        >
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Key Features</h2>
                                <ul className="space-y-4">
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: tabsInView ? 1 : 0, x: tabsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        ref={tabsRef}
                                    >
                                        <FaBook className="text-2xl text-blue-600 mr-4" />
                                        <p>Comprehensive coverage of frontend and backend development.</p>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: tabsInView ? 1 : 0, x: tabsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        ref={tabsRef}
                                    >
                                        <FaBook className="text-2xl text-blue-600 mr-4" />
                                        <p>Hands-on real-world projects to build your portfolio.</p>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: tabsInView ? 1 : 0, x: tabsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                        ref={tabsRef}
                                    >
                                        <FaBook className="text-2xl text-blue-600 mr-4" />
                                        <p>In-depth tutorials on deploying applications to cloud servers.</p>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: tabsInView ? 1 : 0, x: tabsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                        ref={tabsRef}
                                    >
                                        <FaBook className="text-2xl text-blue-600 mr-4" />
                                        <p>Guidance on industry best practices and coding standards.</p>
                                    </motion.li>
                                    <motion.li
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: tabsInView ? 1 : 0, x: tabsInView ? 0 : -20 }}
                                        transition={{ duration: 0.6, delay: 1.0 }}
                                        ref={tabsRef}
                                    >
                                        <FaBook className="text-2xl text-blue-600 mr-4" />
                                        <p>Access to a supportive learning community and expert mentors.</p>
                                    </motion.li>
                                </ul>
                            </div>
                        </motion.section>
                    )}
                </motion.div>

                {/* Class Rating */}
                <ClassRating mostLiked={courseData.mostLiked} expectationsMet={courseData.expectationsMet} />

                <div className='flex flex-col items-center justify-center gap-3'>
                    <a href="https://forms.gle/ygY2fAGq8XWDm3ZT6" target='_blank' rel='noreferrer'>
                        <motion.button
                            className='font-medium py-2 px-4 rounded-md text-2xl mb-10 bg-blue-500 transition-all text-white border hover:border-blue-700 hover:bg-white hover:text-blue-700 mt-5'
                            whileHover={{ scale: 1.05 }}
                        >
                            Enroll Now
                        </motion.button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CompletefullStack;
