import { useInView } from "framer-motion";
import { useRef } from "react";
import resumeCTA from '../components/pages/img/resume-pain.jpg';
import { useNavigate } from 'react-router-dom';

const ResumeCourseCTA = () => {
    const navigate = useNavigate(); // Move useNavigate inside the component
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 }); // Only trigger once when 20% of the section is visible

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <section ref={ref} className="bg-white text-black py-6 md:py-8 px-4 md:px-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

                {/* Left Side - Text Content */}
                <div className="md:w-1/2 md:pl-8">
                    <h2
                        className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-red-600 transform transition-transform duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        Want to Stand Out in Your Job Hunt?
                    </h2>
                    <p
                        className={`text-base md:text-lg lg:text-xl mb-4 md:mb-6 text-gray-700 transform transition-transform duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        Struggling to get interviews? It's time to upgrade your resume. Join our Resume Building Course and make sure your resume grabs recruiters' attention.
                    </p>
                    <h1 className={`text-xl font-medium transform transition-transform duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        Are You Tired of Sending Resumes and <span className="text-red-500 font-semibold"> Never Hearing Back?</span>
                    </h1>
                        
                    <button
                        onClick={() => handleNavigation('/resume-building')}
                        className="inline-block bg-yellow-500 font-medium text-black py-3 px-6 mt-6 rounded-full hover:bg-transparent border border-yellow-500 transition-colors"
                    >
                        Start Building Your Resume Now!
                    </button>

                </div>

                {/* Right Side - Image */}
                <div
                    className={`md:w-1/2 mt-6 md:mt-0 transform transition-transform duration-700 delay-400 ${isInView ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={resumeCTA}
                        alt="Resume Building Course"
                        className=""
                    />
                </div>
            </div>
        </section>
    );
};


export default ResumeCourseCTA;
