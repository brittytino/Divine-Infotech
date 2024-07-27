import React, { useState } from 'react';
import { FiUserCheck, FiCode, FiDollarSign, FiBriefcase, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const WhyChooseDivineInfotech = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState(null);
    
    const navigate = useNavigate();
  
    const handleNavigation = (path) => {
      navigate(path);
    }

    const features = [
        {
            Icon: FiUserCheck,
            color: 'text-blue-500',
            title: 'Expert Faculty',
            description: 'Learn from industry professionals with hands-on experience.',
            brief: 'Our expert faculty includes industry professionals who provide practical insights and hands-on training to ensure you gain the skills needed for your career.',
        },
        {
            Icon: FiCode,
            color: 'text-green-500',
            title: 'Practical Training',
            description: 'Hands-on projects and real-world applications.',
            brief: 'Engage in hands-on projects and real-world applications that help you develop practical skills and a deep understanding of the subject matter.',
        },
        {
            Icon: FiDollarSign,
            color: 'text-yellow-500',
            title: 'Affordable Pricing',
            description: 'Competitive rates and flexible payment options.',
            brief: 'We offer competitive rates and flexible payment options to make our courses accessible to everyone, without compromising on quality.',
        },
        {
            Icon: FiBriefcase,
            color: 'text-purple-500',
            title: 'Career Support',
            description: 'Job placement assistance and career counseling.',
            brief: 'Our career support services include job placement assistance and career counseling to help you successfully transition into the tech industry.',
        },
    ];

    const openModal = (feature) => {
        setSelectedFeature(feature);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedFeature(null);
    };

    return (
        <div className="bg-gray-100 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-gray-900">
                        Why Choose <span className="text-yellow-600">Divine Infotech?</span>
                    </h2>
                    <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-600">
                    At Divine Infotech, we are committed to providing comprehensive and practical training that bridges the gap between academic knowledge and real-world application. Our experienced instructors and hands-on approach ensure that you gain valuable insights and skills that are in high demand.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} onClick={() => openModal(feature)} />
                    ))}
                </div>
                <div className="mt-8 md:mt-12 text-center">
                <a href="/courses">  <button  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg mr-4">
                        Enroll Now
                    </button></a>
               <a href="/contact">     <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg">
                        Contact Us
                    </button></a>
                </div>
            </div>

            {/* Modal for mobile view */}
            <div className="md:hidden">
                {modalIsOpen && selectedFeature && (
                    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 px-6">
                        <div className="bg-white backdrop-filter backdrop-blur-lg border border-white border-opacity-30 rounded-lg shadow-lg p-6 max-w-lg w-full relative">
                            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={closeModal}>
                                <FiX className="text-2xl" />
                            </button>
                            <div className="flex flex-col items-center">
                                <div className={`flex items-center justify-center h-16 w-16 rounded-full ${selectedFeature.color} bg-${selectedFeature.color.split('-')[1]}-100 mb-4`}>
                                    <selectedFeature.Icon className="text-3xl md:text-4xl" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-3">{selectedFeature.title}</h3>
                                <p className="text-gray-600 text-sm text-center">{selectedFeature.brief}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const FeatureCard = ({ feature, onClick }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2 // Adjust threshold as needed
    });

    return (
        <motion.div
            ref={ref}
            className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            onClick={onClick}
        >
            <div className={`flex items-center justify-center h-16 w-16 rounded-full ${feature.color} bg-${feature.color.split('-')[1]}-100 mb-4`}>
                <feature.Icon className="text-3xl md:text-4xl" />
            </div>
            <h3 className="text-sm md:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm md:text-base hidden md:block text-gray-600 text-center">
                {feature.description}
            </p>
        </motion.div>
    );
};

export default WhyChooseDivineInfotech;
