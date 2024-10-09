import React from "react";
import { motion } from "framer-motion";
import certificate from '../images/certificate.png';
import tick from '../images/circle tick.svg';
import trending from '../images/trending_up_outline.svg';
import timeImg from '../images/access_time_outline.svg';
import Breadcrumb from "./Breadcrumb";



// Define the animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const breadcrumbItems = [
    { label: "Divine Infotech", isActive: false },
    { label: "Courses", isActive: false },
    { label: "Resume Building", isActive: true },
];
const ResumeBuildingSection = () => {
    return (
        <div className="bg-white text-black py-8 px-4 ">
            <Breadcrumb items={breadcrumbItems} />
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl font-bold mb-4 mt-10 md:mt-16 text-gray-800">Resume Building</h1>
                    <p className=" text-sm md:text-lg mb-6">
                        Enroll in our course on Resume Building today and gain the
                        knowledge and tools to craft a winning resume that will help you
                        land your dream job. Start building your career success today!
                    </p>

                    {/* Stats Section (with border and styling) */}
                    <div className="bg-white border border-gray-300 rounded-lg p-4 flex justify-between mb-6 shadow-md">
                        <div className="text-center">
                            <span className="block text-base md:text-xl font-bold">4.49 ⭐</span>
                            <span className="text-gray-500">Ratings</span>
                        </div>
                        <div className="border-r border-gray-300"></div> {/* Divider */}
                        <div className="text-center">
                            <span className="block text-base md:text-xl font-bold">Beginner</span>
                            <span className="text-gray-500">Level</span>
                        </div>
                        <div className="border-r border-gray-300"></div> {/* Divider */}
                        <div className="text-center">
                            <span className="block text-base md:text-xl font-bold">1.5 Hrs</span>
                            <span className="text-gray-500">Live Learning</span>
                        </div>
                        <div className="border-r border-gray-300"></div> {/* Divider */}
                        <div className="text-center">
                            <span className="block text-base md:text-xl font-bold">48.7K+ 🔥</span>
                            <span className="text-gray-500">Learners</span>
                        </div>
                    </div>

                    {/* Price CTA */}
                    <div className="mb-6 bg-gray-100 p-4 rounded-lg">
                        <h1 className="text-yellow-600 text-xl font-semibold">Start Building Your Winning Resume</h1>
                        <p className="text-red-600 font-bold text-2xl mt-2">
                            Just ₹<span className="font-extrabold">1499</span>
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-center items-center md:justify-normal">
                        <button className="bg-red-600 transition-all text-xl hover:bg-red-500 font-medium text-white px-6 py-2 rounded">
                            Enroll Now
                        </button>
                        <a href="">
                            <button className="border border-red-600 text-xl transition-all hover:bg-red-600 hover:text-white font-medium text-red-600 px-6 py-2 rounded">
                                Contact Us !
                            </button>
                        </a>
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }} // Add a delay for staggered effect
                    className="p-4 rounded-2xl"
                >
                    <div className="bg-white shadow-lg rounded-xl p-4 text-center">
                        <img
                            src={certificate}
                            alt="Certificate Placeholder"
                            className="mx-auto mb-4"
                        />
                    </div>

                    {/* Upskill Information */}
                    <div className="mt-6 text-center">
                        <h4 className="text-lg font-bold mb-4">Why upskill with us?</h4>
                        <div className="bg-white border border-gray-200 rounded-lg p-3 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 shadow-md mt-6">

                            {/* First Icon with green background and green icon */}
                            <div className="text-center">
                                <div className="bg-[#e8f8ea] w-16 h-16 flex items-center justify-center rounded-full mx-auto">
                                    <img src={tick} alt="" className="w-8 h-8" />
                                </div>
                                <p className="text-gray-600 mt-2">1000+ Happy Students</p>
                            </div>

                            {/* Second Icon with orange background and orange icon */}
                            <div className="text-center">
                                <div className="bg-[#fbe9e7] w-16 h-16 flex items-center justify-center rounded-full mx-auto">
                                    <img src={trending} alt="" className="w-8 h-8" />
                                </div>
                                <p className="text-gray-600 mt-2">In-demand skills & tools</p>
                            </div>

                            {/* Third Icon with purple background and purple icon */}
                            <div className="text-center">
                                <div className="bg-[#ede7f6] w-16 h-16 flex items-center justify-center rounded-full mx-auto">
                                    <img src={timeImg} alt="" className="w-8 h-8" />
                                </div>
                                <p className="text-gray-600 mt-2">Free lifetime access</p>
                            </div>

                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default ResumeBuildingSection;
