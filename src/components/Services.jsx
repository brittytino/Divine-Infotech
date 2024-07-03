import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaCode, FaChartLine, FaChalkboardTeacher } from 'react-icons/fa';

import Stats from './Stats';
import FAQ from './FaqServices';
import SocialServicespage from './SocialServicespage';
import ServicesHero from './ServicesHero';
import WhyPeopleLoveUs from './WhyPeopleLoveus';
import ContactServices from './ContactFormServices';

import webDev from '../images/webDev.jpg';
import uiUx from '../images/uiUx.png';
import dataAnalytics from '../images/data Analytics.png';
import lmsDev from '../images/lms dev.jpg';

const services = [
    {
        icon: <FaPaintBrush className="text-4xl text-blue-500" />,
        title: 'UI/UX Design',
        description: 'Creating visually appealing and user-friendly interfaces to enhance user experience. Our designs not only look good but also perform well. Get designs that engage and convert your users.',
        image: uiUx
    },
    {
        icon: <FaCode className="text-4xl text-green-500" />,
        title: 'Web Development',
        description: 'Developing robust and scalable web applications tailored to your business needs. We ensure high performance and security in all our web solutions. Transform your ideas into a fully functional website.',
        image: webDev
    },
    {
        icon: <FaChartLine className="text-4xl text-red-500" />,
        title: 'Data Analytics',
        description: 'Providing insights and analytics to drive data-driven decision making. Understand your data better with our comprehensive analytics solutions. Empower your business with actionable insights.',
        image: dataAnalytics
    },
    {
        icon: <FaChalkboardTeacher className="text-4xl text-yellow-500" />,
        title: 'LMS Development',
        description: 'Developing Learning Management Systems to facilitate effective online education. Our LMS solutions are designed to enhance the learning experience. Provide your students with a seamless learning environment.',
        image: lmsDev
    }
];

const Services = () => {
    return (
        <div className="bg-green-50 min-h-screen">
            <ServicesHero />
            <div className="container mx-auto py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-6 md:px-8 lg:px-36">
                    {services.map((service, index) => (
                        <ServiceItem key={index} service={service} />
                    ))}
                </div>
                <Stats />
                <WhyPeopleLoveUs />
                <FAQ />
                <ContactServices />
                <SocialServicespage />
            </div>
        </div>
    );
};

const ServiceItem = ({ service }) => {
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
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            style={{ minHeight: '300px' }} // Ensure a minimum height to see the animation effect
        >
            <img src={service.image} alt={service.title} className="w-full h-40 md:h-48 lg:h-64 object-cover" />
            <div className="p-4 md:p-6">
                <div className="flex items-center justify-center mb-4">
                    {service.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-4">{service.title}</h2>
                <p className="text-center text-gray-600 text-sm md:text-base">{service.description}</p>
            </div>
        </motion.div>
    );
};

export default Services;
