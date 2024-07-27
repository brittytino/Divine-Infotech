import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { HiOutlineBriefcase, HiOutlineColorSwatch, HiOutlineSparkles } from 'react-icons/hi';

Modal.setAppElement('#root'); // Set the root element for accessibility

const ServiceModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 15000); // Show modal after 15 seconds

        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Service Modal"
            className="modal"
            overlayClassName="overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
            <div className="bg-blue-600 border-2 border-gray-400 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg mx-4 md:mx-auto p-8 md:max-w-lg w-11/12 md:w-full shadow-xl">
                <div className="flex justify-end">
                    <button onClick={closeModal} className="text-gray-300 transition-all bg-blue-700 rounded-full p-1 hover:text-white focus:outline-none">
                        <FiX className="h-6 w-6" />
                    </button>
                </div>
                <div className="text-center mt-4">
                    <h2 className="text-3xl font-bold text-white mb-4">Explore Our Services</h2>
                    <p className="text-lg text-white mb-6">
                        Discover a range of premium services tailored for your needs.
                    </p>
                    <div className="flex justify-center space-x-6 mb-6">
                        <div className="flex flex-col items-center">
                            <HiOutlineBriefcase className="text-blue-200 h-12 w-12 mb-2" />
                            <span className="text-lg font-semibold text-white">Web Development</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <HiOutlineColorSwatch className="text-blue-200 h-12 w-12 mb-2" />
                            <span className="text-lg font-semibold text-white">UI/UX Design</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <HiOutlineSparkles className="text-blue-200 h-12 w-12 mb-2" />
                            <span className="text-lg font-semibold text-white">Digital Marketing</span>
                        </div>
                    </div>
                    <a
                        href="/services"
                        className="block bg-white font-medium text-blue-600 py-3 px-8 rounded-full transition-all duration-300 hover:bg-transparent border-2 border-white hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-6"
                        onClick={closeModal}
                    >
                        View All Services
                    </a>
                </div>
            </div>
        </Modal>
    );
};

export default ServiceModal;
