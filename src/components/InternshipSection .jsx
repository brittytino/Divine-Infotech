import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaGraduationCap, FaRegHandshake } from "react-icons/fa";
import { AiFillProject, AiFillClockCircle } from "react-icons/ai";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const InternshipSection = () => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('internship-section');
            if (section) {
                const { top } = section.getBoundingClientRect();
                if (top < window.innerHeight * 0.75) {
                    controls.start("visible");
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        <section
            id="internship-section"
            className="bg-soft-blue text-gray-900 py-6 md:py-12 lg:py-20 px-4 md:px-8 lg:px-20"
        >
            <div className="container mx-auto text-center">
                <motion.h2
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 lg:mb-8 text-[#d32f2f]"
                >
                    Supercharge Your Career with Divine Infotech Internships!
                </motion.h2>
                <motion.p
                    initial="hidden"
                    animate={controls}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8 text-muted-gray"
                >
                    Don't just learn—<strong>experience</strong> the real world with our hands-on internships and exclusive certifications.
                    Dive into business or tech, and make an impact!
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white text-black p-4 md:p-6 lg:p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
                    >
                        <FaGraduationCap className="text-3xl md:text-4xl lg:text-5xl mx-auto mb-4 text-[#8bc34a]" />
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Business Excellence</h3>
                        <p className="text-sm md:text-base text-gray-600">Shape the future in Digital Marketing, HR, and more. Be the strategist!</p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-white text-black p-4 md:p-6 lg:p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
                    >
                        <AiFillProject className="text-3xl md:text-4xl lg:text-5xl mx-auto mb-4 text-[#8bc34a]" />
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Tech Innovation</h3>
                        <p className="text-sm md:text-base text-gray-600">Build tomorrow’s web apps, design stunning UI/UX, or delve into AI/ML.</p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="bg-white text-black p-4 md:p-6 lg:p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
                    >
                        <AiFillClockCircle className="text-3xl md:text-4xl lg:text-5xl mx-auto mb-4 text-[#8bc34a]" />
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Fast Track Programs</h3>
                        <p className="text-sm md:text-base text-gray-600">Complete internships in 10-15 days with real-world projects. Speed + impact!</p>
                    </motion.div>
                </div>
                <a
                    href="https://forms.gle/hbHBBRKjnxufJTVq7" target="_blank"
                    className="mt-6 md:mt-8 lg:mt-10 inline-block bg-[#d32f2f] text-white py-3 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-full shadow-lg hover:bg-[#b71c1c] transition-colors font-semibold"
                >
                    Apply Now & Start Your Journey!
                </a>
            </div>
            <hr className="mt-10 border-gray-300" />
        </section>
    );
};

export default InternshipSection;
