import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import aboutImg from '../images/about.png';

const AboutUs = () => {
    const fadeAnimation = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="about" className="py-16 px-4 pt-14 md:pt-20 md:px-24 bg-[#1e40af] text-[#fafafc] grid grid-cols-1 md:grid-cols-2">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl md:text-4xl font-semibold mb-4 md:mb-8 text-left"
                >
                    About Divine Infotech
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xs md:text-lg leading-relaxed mb-8 text-left text-gray-300"
                >
                    Divine Infotech is a premier tech education institute committed to providing high-quality education
                    and training in various tech disciplines. Our mission is to empower individuals with the skills and
                    knowledge needed to excel in the digital age. With a focus on practical learning and industry
                    relevance, we strive to create a transformative educational experience for our students.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-left"
                >
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-semibold tracking-wide shadow-lg hover:bg-blue-800 hover:text-white hover:border-white border transition-all duration-300"
                    >
                        Learn More
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="md:ml-14 mt-10"
            >
                <img src={aboutImg} alt="" className="rounded-md md:h-[400px]" />
            </motion.div>
        </section>
    );
};

export default AboutUs;
