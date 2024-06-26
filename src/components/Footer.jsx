import React from 'react';
import { FaTwitter, FaFacebookSquare, FaGithub, FaLinkedin,FaDribbble } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'Twitter', icon: <FaXTwitter className="text-gray-800 hover:text-black transform hover:scale-110 transition-transform duration-300" />, href: 'https://twitter.com' },
        { name: 'Facebook', icon: <FaFacebookSquare className="text-blue-700 hover:text-blue-800 transform hover:scale-110 transition-transform duration-300" />, href: 'https://facebook.com' },
        { name: 'Dribbble', icon: <FaLinkedin className="text-blue-500 hover:text-blue-600 transform hover:scale-110 transition-transform duration-300" />, href: 'https://dribbble.com' },
        { name: 'GitHub', icon: <FaDribbble className="text-pink-600 hover:text-pink-700 transform hover:scale-110 transition-transform duration-300" />, href: 'https://github.com' },
    ];

    const usefulLinks = [
        { name: 'About Us', href: '#' },
        { name: 'Support', href: '#' },
        { name: 'Courses', href: '/courses' },
        { name: 'Services', href: '#' },
    ];

    const otherResources = [
        { name: 'Faculty', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Contact Us', href: '#' },
    ];

    return (
        <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-8 md:pt-20 px-4 md:px-12">
            <div className="container mx-auto">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-20">
                        <h4 className="text-3xl font-semibold text-gray-200 mb-4">Let's keep in touch!</h4>
                        <h5 className="text-lg mb-6 text-gray-300">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="flex space-x-4">
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
                    <div className="w-full lg:w-6/12 mt-8 lg:mt-0">
                        <div className="flex flex-wrap items-top">
                            <div className="w-full lg:w-6/12 mb-8 lg:mb-0">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    {usefulLinks.map((link, index) => (
                                        <li key={index} className='pt-2'>
                                            <a
                                                href={link.href}
                                                className="text-blue-300 hover:text-white font-semibold block text-sm transition-colors duration-300 hover:underline"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full lg:w-6/12">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">Other Resources</span>
                                <ul className="list-unstyled">
                                    {otherResources.map((link, index) => (
                                        <li key={index} className='pt-2'>
                                            <a
                                                href={link.href}
                                                className="text-blue-300 hover:text-white font-semibold block text-sm transition-colors duration-300 hover:underline"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-blue-400" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full text-center">
                        <div className="text-sm text-blue-300 font-semibold py-1">
                            Copyright © {currentYear}  Divine Infotech.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
