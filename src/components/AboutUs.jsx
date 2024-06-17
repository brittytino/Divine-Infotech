import React from 'react';
import { Link } from 'react-scroll';
import aboutImg from '../images/about.png';

const AboutUs = () => {
    return (
        <section id="about" className="py-16 px-4 pt-14 md:pt-20 md:px-24 bg-[#1e40af] text-[#fafafc] grid grid-cols-1 md:grid-cols-2">
            <div className="max-w-6xl mx-auto">
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
            </div>

            <div className="md:ml-14 mt-10">
                <img src={aboutImg} alt="About Us" className="rounded-md md:h-[400px]" />
            </div>
        </section>
    );
};

export default AboutUs;
