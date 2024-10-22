import React from 'react';
import { motion } from 'framer-motion';
import { FaHeadset, FaHeart, FaChartLine } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const features = [
    {
        icon: FaHeadset,
        title: "Support System",
        description: "Our dedicated support team provides prompt assistance, guidance, and solutions, ensuring our clients feel supported every step of the way."
    },
    {
        icon: FaHeart,
        title: "Friendly Relationship",
        description: "We prioritize building genuine connections, fostering trust, and creating a welcoming atmosphere where clients feel valued and understood."
    },
    {
        icon: FaChartLine,
        title: "Business Strategies",
        description: "We offer innovative, tailored strategies that drive growth and success, empowering businesses to thrive in today's dynamic marketplace with confidence and clarity."
    }
];

const WhyPeopleLoveUs = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation once
        threshold: 0.3 // Trigger animation when 30% of the element is in view
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-blue-50 py-16 px-8 lg:px-24"
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className="text-4xl font-bold text-gray-800">Why People Love Us</h2>
                    <hr className="mt-4 w-20 border-t-4 border-blue-600" />
                    <p className="text-gray-600 mt-4">
                        At Divine Infotech, it’s all about growing together. We’re a startup that prioritizes the growth of our clients over profit. We believe in creating real value and building lasting relationships. Our dedicated team goes the extra mile to ensure your success. Join us, and let’s achieve amazing things together!
                    </p>
                </div>
                <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                    <div className="bg-blue-100 p-4 rounded-lg">
                        {features.map((feature, index) => {
                            const FeatureIcon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
                                    className="flex items-start lg:items-center space-x-4 mb-6"
                                >
                                    <FeatureIcon className="text-blue-600 text-5xl mt-1" />
                                    <div>
                                        <h3 className="text-base md:text-lg font-semibold text-gray-800">{feature.title}</h3>
                                        <p className="text-xs sm:text-base text-gray-600">{feature.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default WhyPeopleLoveUs;
