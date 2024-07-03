import React from 'react';
import { MdStar } from 'react-icons/md';
import { FaLinkedin, FaGoogle, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SocialServicespage = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation once
        threshold: 0.5 // Trigger animation when 50% of the element is in view
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-16 md:mt-20 text-center pb-14 md:pb-10"
        >
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">We are awarded by people's support through social medias</h2>
            <div className="flex justify-center items-center space-x-8">
                <div className="flex flex-col items-center">
                    <FaLinkedin className="text-6xl text-blue-700" />
                    <p className="text-base md:text-lg mt-2">LinkedIn</p>
                    <p className="text-gray-600 text-sm">Top Startup India 2023</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaGoogle className="text-6xl text-red-600" />
                    <p className="text-base md:text-lg mt-2">Google Reviews</p>
                    <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <MdStar key={i} className={`text-xl ${i < 4 ? 'text-yellow-500' : 'text-gray-300'}`} />
                        ))}
                    </div>
                    <p className="text-gray-600 text-sm">Rated 4.7/5 500+ Reviews</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaInstagram className="text-6xl text-pink-500" />
                    <p className="text-base md:text-lg mt-2">Instagram</p>
                    <p className="text-gray-600 text-sm">35k+ Followers (Family)</p>
                </div>
            </div>
        </motion.div>
    );
};

export default SocialServicespage;
