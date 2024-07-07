import React from 'react';
import { FaLaptopCode, FaShoppingCart, FaWrench, FaRedo } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WebDevComp = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="py-16 px-8 bg-[#edfbe2] text-left"
        >
            <div className="mx-auto max-w-6xl">
                <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                    Website Design and Development
                </h2>
                <p className=" text-base lg:text-lg text-gray-700 mb-12">
                    Our experienced team of designers crafts custom web designs that reflect your brand identity and resonate with your target customers. We prioritize user experience, ensuring seamless navigation and responsiveness across all devices, from desktops to mobiles.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-10 mx-auto max-w-6xl">
                <div className="bg-white shadow-lg p-6 rounded-md flex items-center space-x-4">
                    <FaLaptopCode className="text-6xl text-blue-600" />
                    <div className="text-left">
                        <h3 className=" text-xl lg:text-2xl font-medium mb-2">Website Development & Design</h3>
                        <p className="text-gray-600 text-sm lg:text-base">We specialize in crafting user-friendly websites that cater to businesses of all sizes.</p>
                    </div>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-md flex items-center space-x-4">
                    <FaShoppingCart className="text-6xl text-blue-600" />
                    <div className="text-left">
                        <h3 className=" text-xl lg:text-2xl font-medium mb-2">Ecommerce Solutions</h3>
                        <p className="text-gray-600 text-sm lg:text-base">Take your online store to the next level with our comprehensive ecommerce solutions.</p>
                    </div>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-md flex items-center space-x-4">
                    <FaWrench className="text-6xl text-blue-600" />
                    <div className="text-left">
                        <h3 className=" text-xl lg:text-2xl font-medium mb-2">Website Maintenance</h3>
                        <p className="text-gray-600 text-sm lg:text-base">Our website maintenance services ensure that your website remains up-to-date and secure.</p>
                    </div>
                </div>
                <div className="bg-white shadow-lg p-6 rounded-md flex items-center space-x-4">
                    <FaRedo className="text-6xl text-blue-600" />
                    <div className="text-left">
                        <h3 className=" text-xl lg:text-2xl font-medium mb-2">Website Revamp</h3>
                        <p className="text-gray-600 text-sm lg:text-base">Our website revamp services are designed to breathe new life into outdated websites.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default WebDevComp;
