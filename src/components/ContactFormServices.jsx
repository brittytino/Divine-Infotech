import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import ContactWeb from './WebContact';
import { useInView } from 'react-intersection-observer';

const ContactServices = ({ bgColor }) => {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className={`container mx-auto py-12 lg:py-20 px-6 md:px-20 lg:px-40 ${bgColor}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    className="text-left"
                    ref={ref1}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">Startup and Online Growth Consultation</h1>
                    <div className="mt-4 mb-8 h-1 w-24 md:w-32 bg-blue-500 rounded"></div>
                    <p className="md:text-base text-sm text-gray-700">
                        In this one-on-one session, our founder will personally connect with you to share his expert insights on growing your business through website development, UI/UX design, and data analytics. We’ll conduct special research tailored to your niche and offer tips that can propel your business forward. This isn’t just generic advice – it’s actionable, personalized strategies to help you succeed.
                    </p>
                    <h2 className="mt-8 text-2xl font-semibold text-gray-800">Increase Your Profit from ₹10,000 to ₹10 Lakhs</h2>
                    <p className="md:text-base text-sm mt-2 text-gray-700">
                        Ready to take your business to the next level? We’ll show you how to scale your profits from ₹10,000 to ₹10 Lakhs. With our expert guidance, proven strategies, and personalized advice in website development, UI/UX design, and data analytics, you’ll be equipped to grow your revenue and achieve your financial goals. Let’s turn your vision into reality!
                    </p>
                    <motion.button
                        className="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-all flex items-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        Consulting Service <FaArrowRight className="ml-2"/>
                    </motion.button>
                </motion.div>
                <motion.div
                    className="bg-white p-6 rounded-lg shadow-lg"
                    ref={ref2}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : -50 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Contact Us</h2>
                    <ContactWeb />
                </motion.div>
            </div>
        </div>
    );
};

export default ContactServices;
