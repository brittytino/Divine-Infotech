import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaClock } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import internImg from '../images/intern.webp';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Intern = () => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };

    const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 hours in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => {
        const hours = Math.floor(time / (60 * 60));
        const minutes = Math.floor((time % (60 * 60)) / 60);
        const seconds = time % 60;
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    const getNextDayDate = () => {
        const nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + 1);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return nextDay.toLocaleDateString(undefined, options);
    };

    // Framer Motion InView hook
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="py-6 px-4 md:py-12 md:px-8 lg:py-20 lg:px-20 bg-gray-100">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg"
            >
                {/* Left Side - Image and Details */}
                <div className="lg:w-2/3 flex flex-col items-start mb-8 lg:mb-0">
                    <div className="flex items-center mb-4">
                        <img
                            src={internImg}
                            alt="Career Guidance"
                            className="rounded-full w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mr-4"
                        />
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                            Attend a Free Career Guidance Call Session
                        </h2>
                    </div>
                    <ul className="list-none space-y-2 text-gray-600 mb-6">
                        <li className="flex items-center">
                            <FaCheckCircle className="text-blue-600 mr-2" />
                            Get Personalized Career Guidance
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-blue-600 mr-2" />
                            Understand Career Paths and Opportunities
                        </li>
                    </ul>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Guidance Program Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                        <div className="flex items-center">
                            <FaCheckCircle className="text-blue-600 mr-2" />
                            One-on-one career consultation
                        </div>
                        <div className="flex items-center">
                            <FaCheckCircle className="text-blue-600 mr-2" />
                            Explore various career options
                        </div>
                        <div className="flex items-center">
                            <FaCheckCircle className="text-blue-600 mr-2" />
                            Get advice on career growth strategies
                        </div>
                        <div className="flex items-center">
                            <FaCheckCircle className="text-blue-600 mr-2" />
                            Learn about industry trends and demands
                        </div>
                    </div>
                </div>

                {/* Right Side - Registration Info */}
                <div className="lg:w-1/3 bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-700 p-4 md:p-6 lg:p-8 rounded-lg shadow-lg text-white">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-2">
                        Register for the upcoming session now!
                    </h3>
                    <p className="text-center mb-4 text-sm md:text-base lg:text-lg">
                        {getNextDayDate()} <br /> 8:00 PM to 9:00 PM
                    </p>
                    <div className="text-center my-4 md:my-6">
                        <FaClock className="text-white text-xl md:text-2xl mb-2 inline-block" />
                        <div className="text-3xl md:text-4xl font-bold">
                            {formatTime(timeLeft)}
                        </div>
                        <span className="text-sm md:text-base lg:text-lg text-gray-200">Time left to register!</span>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => handleNavigation('/contactform')}
                            className="bg-white text-blue-500 py-2 px-4 md:py-3 md:px-6 lg:py-3 lg:px-6 rounded-full flex justify-center items-center hover:bg-transparent border-2 border-white hover:text-white transition-colors font-bold text-sm md:text-base lg:text-xl"
                        >
                            REGISTER FOR FREE CALL <AiOutlineArrowRight className="ml-2" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Intern;
