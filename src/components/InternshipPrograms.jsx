import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaChartLine, FaRegListAlt, FaLaptopCode, FaRobot } from 'react-icons/fa';

const InternshipProgramsTabs = () => {
    const [activeTab, setActiveTab] = useState('technical');
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <section className="py-12 px-6 md:py-20 md:px-20 bg-gray-100">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Explore Our Internship Programs
                </h2>
                <p className="text-lg md:text-xl text-gray-600">
                    Choose a domain to explore the programs we offer.
                </p>
            </div>

            <div ref={ref} className={`flex flex-col md:flex-row ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
                {/* Tabs */}
                <div className="flex flex-col md:w-1/4 bg-white rounded-3xl md:rounded-xl shadow-lg mb-6 md:mb-0 md:mr-6">
                    <button
                        className={`py-3 px-6 text-lg font-semibold transition-colors ${activeTab === 'technical' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => setActiveTab('technical')}
                    >
                        Technical Domains
                    </button>
                    <button
                        className={`py-3 px-6 text-lg font-semibold transition-colors ${activeTab === 'business' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => setActiveTab('business')}
                    >
                        Business Domains
                    </button>
                </div>

                {/* Content */}
                <motion.div
                    className="md:w-3/4 bg-white p-6 rounded-lg shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {activeTab === 'technical' && (
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Technical Domains</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-800">
                                <li className="flex items-center hover:bg-blue-100 hover:scale-105 transition-transform duration-300 p-2 rounded-md">
                                    <FaLaptopCode className="text-blue-500 mr-2" /> Web Development
                                </li>
                                <li className="flex items-center hover:bg-blue-100 hover:scale-105 transition-transform duration-300 p-2 rounded-md">
                                    <FaLaptopCode className="text-blue-500 mr-2" /> App Development
                                </li>
                                <li className="flex items-center hover:bg-blue-100 hover:scale-105 transition-transform duration-300 p-2 rounded-md">
                                    <FaLaptopCode className="text-blue-500 mr-2" /> UI/UX Design
                                </li>
                                <li className="flex items-center hover:bg-blue-100 hover:scale-105 transition-transform duration-300 p-2 rounded-md">
                                    <FaRobot className="text-blue-500 mr-2" /> AI & ML
                                </li>
                                <li className="flex items-center hover:bg-blue-100 hover:scale-105 transition-transform duration-300 p-2 rounded-md">
                                    <FaLaptopCode className="text-blue-500 mr-2" /> Data Analysis
                                </li>
                            </ul>
                        </div>
                    )}

                    {activeTab === 'business' && (
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Business Domains</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-800">
                                <li className="flex items-center hover:bg-blue-100 hover:scale-105 transition-transform duration-300 p-2 rounded-md">
                                    <FaChartLine className="text-blue-500 mr-2" /> Digital Marketing
                                </li>
                                <li className="flex items-center hover:bg-blue-100 hover:scale-105 transition-transform duration-300 p-2 rounded-md">
                                    <FaRegListAlt className="text-blue-500 mr-2" /> Market Research
                                </li>
                                <li className="flex items-center hover:bg-blue-100 hover:scale-105 transition-transform duration-300 p-2 rounded-md">
                                    <FaRegListAlt className="text-blue-500 mr-2" /> Recruitment (HR)
                                </li>
                                <li className="flex items-center hover:bg-blue-100 hover:scale-105 transition-transform duration-300 p-2 rounded-md">
                                    <FaRegListAlt className="text-blue-500 mr-2" /> Business Development
                                </li>
                                <li className="flex items-center hover:bg-blue-100 hover:scale-105 transition-transform duration-300 p-2 rounded-md">
                                    <FaRegListAlt className="text-blue-500 mr-2" /> Data Analysis
                                </li>
                                <li className="flex items-center hover:bg-blue-100 hover:scale-105 transition-transform duration-300 p-2 rounded-md">
                                    <FaRegListAlt className="text-blue-500 mr-2" /> Supply Chain Management
                                </li>
                            </ul>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default InternshipProgramsTabs;
