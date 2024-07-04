import React from 'react';
import {  FaFacebookSquare, FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'Twitter', icon: <FaXTwitter className="text-gray-800 hover:text-black transform hover:scale-110 transition-transform duration-300" />, href: 'https://twitter.com' },
        { name: 'Facebook', icon: <FaFacebookSquare className="text-blue-700 hover:text-blue-800 transform hover:scale-110 transition-transform duration-300" />, href: 'https://facebook.com' },
        { name: 'LinkedIn', icon: <FaLinkedin className="text-blue-500 hover:text-blue-600 transform hover:scale-110 transition-transform duration-300" />, href: 'https://www.linkedin.com/company/divineinfotech-edu/' },
        { name: 'Dribbble', icon: <FaDribbble className="text-pink-600 hover:text-pink-700 transform hover:scale-110 transition-transform duration-300" />, href: 'https://dribbble.com' },
        { name: 'GitHub', icon: <FaGithub className="text-gray-600 hover:text-gray-700 transform hover:scale-110 transition-transform duration-300" />, href: 'https://github.com' },
    ];

    const usefulLinks = [
        { name: 'About Us', href: '#' },
        { name: 'Courses', href: '/courses' },
        { name: 'Services', href: '/services' },
        { name: 'Contact Us', href: '/contact' },
    ];
 
    const otherResources = [
        { name: 'Faculty', href: '#' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacypolicy' },
        { name: 'Refund Policy', href: '/refundpolicy' },
    ];

    return (
        <>
        
        
        <footer id='footer' className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-8 px-5 md:pt-20 md:px-20 ">
            
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between lg:justify-evenly">
                    <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
                        <h4 className="md:text-3xl text-2xl font-semibold text-gray-200 mb-4 ">Let's keep in touch!</h4>
                        <h5 className="md:text-lg text-sm mb-6 text-gray-300 ">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                      <a href=" mailto: divineinfotech.edu@gmail.com">  <h5 className='font-medium hover:underline underline-offset-4 decoration-white hover:cursor-pointer transition-all'>Mail : divineinfotech.edu@gmail.com </h5></a>
                        <div className="flex mt-5 space-x-4 ">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none transform hover:scale-110 transition-transform duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex  lg:flex-nowrap flex-row justify-between w-full lg:w-auto px-5  gap-5 lg:gap-20">
                        <div className="w-full lg:w-auto mb-8 lg:mb-0">
                            <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                            <ul className="list-unstyled">
                                {usefulLinks.map((link, index) => (
                                    <li key={index} className='pt-2'>
                                        <a
                                            href={link.href}
                                            className="text-blue-300 hover:text-white font-semibold block text-sm md:text-base underline-offset-4 transition-colors duration-300 hover:underline"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-auto">
                            <span className="block uppercase text-white text-sm font-semibold mb-2">Other</span>
                            <ul className="list-unstyled">
                                {otherResources.map((link, index) => (
                                    <li key={index} className='pt-2'>
                                        <a
                                            href={link.href}
                                            className="text-blue-300 hover:text-white font-semibold block text-sm md:text-base underline-offset-4 transition-colors duration-300 hover:underline"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-blue-400 " />
                <div className="flex flex-wrap items-center  justify-center md:justify-between">
                    <div className="w-full text-center">
                        <div className="text-sm text-blue-300 font-semibold py-1">
                            Copyright © {currentYear} Divine Infotech.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
