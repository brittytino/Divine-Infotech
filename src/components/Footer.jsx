import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FiInstagram, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section: Logo and Company Name */}
          <div className="flex items-center mb-4 md:mb-0">
            <img src={Logo} alt="Divine Infotech Logo" className="h-12 md:h-16 mr-2" />
            <h1 className="text-xl md:text-2xl font-semibold">Divine Infotech</h1>
          </div>
          
          {/* Center Section: Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left md:text-left"
          >
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-2">Have questions or need more information? We're here to help!</p>
            <div className="flex items-center justify-left md:justify-start space-x-4 mb-4">
              <FaEnvelope className="text-gray-600 text-lg" />
              <a href="mailto:info@divineinfotech.com" className="text-blue-500 hover:underline">info@divineinfotech.com</a>
            </div>
            <div className="flex items-center justify-start md:justify-start space-x-4 mb-4">
              <FaPhone className="text-gray-600 text-lg" />
              <span className="text-gray-600">+91-123-456-7890</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
              <FaMapMarkerAlt className="text-gray-600 text-lg" />
              <span className="text-gray-600">123 Tech Park, Silicon Valley, Bangalore, India</span>
            </div>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-blue-500 hover:to-blue-900 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
            >
              Contact Form
            </a>
          </motion.div>
          
          {/* Right Section: Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center md:justify-end mt-16 md:mt-0"
          >
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-all">
                <FiInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-all">
                <FiLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-all">
                <FiTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500 transition-all">
                <FiFacebook className="text-2xl" />
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
