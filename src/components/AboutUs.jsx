import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import aboutImg from '../images/about us.png';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2 // Adjust threshold as needed
    });

    return (
        <section id="about" className="py-16 px-4 pt-14 md:pt-20 md:px-10 lg:px-24 bg-[#1e40af] text-[#fafafc] grid grid-cols-1 lg:grid-cols-2">
            <motion.div
                ref={ref}
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-8 text-left">
                    About Divine Infotech
                </h2>
                <p className="text-xs md:text-lg leading-relaxed mb-8 text-left text-gray-300">
                    Divine Infotech is a premier tech education institute committed to providing high-quality education
                    and training in various tech disciplines. Our mission is to empower individuals with the skills and
                    knowledge needed to excel in the digital age. With a focus on practical learning and industry
                    relevance, we strive to create a transformative educational experience for our students.
                </p>
                <div className="text-left">
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-semibold tracking-wide shadow-lg hover:bg-blue-800 hover:text-white hover:border-white border transition-all duration-300"
                    >
                        Learn More
                    </Link>
                </div>
            </motion.div>

            <motion.div
                ref={ref}
                className="lg:ml-14 md:flex justify-center items-center mt-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                transition={{ duration: 0.8 }}
            >
                <img src={aboutImg} alt="About Us" className="rounded-md md:h-[400px] md:w-[500px] border-4 border-[#c0a0ff]" />
            </motion.div>
        </section>
    );
};

export default AboutUs;
