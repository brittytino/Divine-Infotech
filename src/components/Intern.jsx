import { useState, useEffect } from "react";
import { FaCheckCircle, FaClock } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import internImg from '../images/intern.webp';

const Intern = () => {
    // Timer state and logic - 2 hours countdown
    const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 hours in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);

    // Format time as Hours:Minutes:Seconds
    const formatTime = (time) => {
        const hours = Math.floor(time / (60 * 60));
        const minutes = Math.floor((time % (60 * 60)) / 60);
        const seconds = time % 60;
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    // Get current date and day
    const getCurrentDate = () => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString(undefined, options);
    };

    return (
        <section className="py-6 px-4 md:py-12 md:px-8 lg:py-20 lg:px-20 bg-gray-100">
            <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg">
                
                {/* Left Side - Image and Details */}
                <div className="lg:w-2/3 flex flex-col items-start mb-8 lg:mb-0">
                    <div className="flex items-center mb-4">
                        <img
                            src={internImg}
                            alt="Full Stack Internship"
                            className="rounded-full w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mr-4"
                        />
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                            Attend a Free Full Stack Internship Call Session
                        </h2>
                    </div>
                    <ul className="list-none space-y-2 text-gray-600 mb-6">
                        <li className="flex items-center">
                            <FaCheckCircle className="text-blue-600 mr-2" />
                            Learn about Full Stack Web Development in Detail
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-blue-600 mr-2" />
                            Attend the Demo & Earn a Certificate of Participation
                        </li>
                    </ul>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Internship Program Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
                        <div className="flex items-center">
                            <FaCheckCircle className="text-blue-600 mr-2" />
                            Live instructor-led session
                        </div>
                        <div className="flex items-center">
                            <FaCheckCircle className="text-blue-600 mr-2" />
                            Details on Projects & Technologies
                        </div>
                        <div className="flex items-center">
                            <FaCheckCircle className="text-blue-600 mr-2" />
                            Know Full-Stack Job Opportunities
                        </div>
                        <div className="flex items-center">
                            <FaCheckCircle className="text-blue-600 mr-2" />
                            Learn about Fees & Exciting Offers
                        </div>
                    </div>
                </div>

                {/* Right Side - Registration Info */}
                <div className="lg:w-1/3 bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-700 p-4 md:p-6 lg:p-8 rounded-lg shadow-lg text-white">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-2">
                        Register for the upcoming session now!
                    </h3>
                    <p className="text-center mb-4 text-sm md:text-base lg:text-lg">
                        {getCurrentDate()} <br /> 8:00 PM to 9:00 PM
                    </p>
                    <div className="text-center my-4 md:my-6">
                        <FaClock className="text-white text-xl md:text-2xl mb-2 inline-block" />
                        <div className="text-3xl md:text-4xl font-bold ">
                            {formatTime(timeLeft)}
                        </div>
                        <span className="text-sm md:text-base lg:text-lg text-gray-800">Time left to register!</span>
                    </div>
                    <a
                       href="https://forms.gle/hbHBBRKjnxufJTVq7" target="blank"
                        className="bg-blue-400 text-white py-2 px-4 md:py-3 md:px-6 lg:py-3 lg:px-6 rounded-full flex justify-center items-center hover:bg-blue-500 transition-colors font-bold text-sm md:text-base lg:text-xl"
                    >
                        REGISTER FOR FREE Call ? <AiOutlineArrowRight className="ml-2" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Intern;
