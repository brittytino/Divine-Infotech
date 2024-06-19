import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FiInstagram, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';
import Logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
      <div className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section: Logo and Company Name */}
          <div className="flex items-center mb-4 md:mb-0">
            <img src={Logo} alt="Divine Infotech Logo" className="h-12 md:h-16 mr-2 border-2 border-yellow-400 rounded-full" />
            <h1 className="text-xl md:text-2xl font-semibold underline underline-offset-4 decoration-yellow-500">Divine Infotech</h1>
          </div>
          
          {/* Center Section: Contact Information */}
          <div className="text-left md:text-left">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-100 mb-2">Have questions or need more information? We're here to help!</p>
            <div className="flex items-center justify-left md:justify-start space-x-4 mb-4">
              <FaEnvelope className="text-gray-100 text-lg" />
              <a href="mailto:info@divineinfotech.com" className="text-gray-100 hover:underline">divineinfotech.edu@gmail.com</a>
            </div>
            <div className="flex items-center justify-start md:justify-start space-x-4 mb-4">
              <FaPhone className="text-gray-100 text-lg" />
              <span className="text-gray-100">+91 9042621178</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
              <FaMapMarkerAlt className="text-gray-100 text-lg" />
              <span className="text-gray-100">123 Tech Park, Silicon Valley, Bangalore, India</span>
            </div>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-blue-500 hover:to-blue-900 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
            >
              Contact Form
            </a>
          </div>
          
          {/* Right Section: Social Media Links */}
          <div className="flex items-center justify-center md:justify-end mt-16 md:mt-0">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-100 hover:text-yellow-500 transition-all">
                <FiInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-100 hover:text-yellow-500 transition-all">
                <FiLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-gray-100 hover:text-yellow-500 transition-all">
                <FiTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-100 hover:text-yellow-500 transition-all">
                <FiFacebook className="text-2xl" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </footer>

  
//     <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
//         <p className="text-lg mb-6">For more information or support, contact us 24/7.</p>
//         <div className="flex items-center space-x-4">
//             <FaPhoneAlt className="text-2xl" />
//             <span>+91 9042621178</span>
//         </div>
//         <div className="flex items-center space-x-4 mt-4">
//             <FaEnvelope className="text-2xl" />
//             <span>divineinfotech.edu@gmail.com</span>
//         </div>
//     </div>
// </section>
  );
};

export default Footer;
