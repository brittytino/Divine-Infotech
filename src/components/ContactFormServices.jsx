import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        topic: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validatePhoneNumber = (number) => {
        const regex = /^[6-9]\d{9}$/; // Indian mobile number validation
        return regex.test(number);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validatePhoneNumber(formData.phone)) {
            setErrorMessage('Please enter a valid 10-digit Indian phone number.');
            return;
        }
        setErrorMessage('');

        // Sending WhatsApp message
        const whatsappNumber = '9042621178';
        const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nTopic: ${formData.topic}\nMessage: ${formData.message}`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL);

        // Call the Web3Form API to send the email
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                access_key: '5203fa70-07f3-4c97-9ede-b414c14b7e68', // Add your access key
            }),
        });
        
        if (response.ok) {
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', topic: '', message: '' }); // Reset form
        } else {
            console.error('Error sending message:', response);
        }
    };

    return (
        <div className={`container mx-auto py-12 lg:py-20 px-6 md:px-6 lg:px-40 ${bgColor}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                    className="text-left"
                    ref={ref1}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl lg:text-5xl font-semibold text-gray-800">Contact Us!</h1>
                    <div className="mt-4 mb-8 h-1 w-24 md:w-32 bg-blue-500 rounded"></div>
                    <p className="lg:text-base text-sm text-gray-700">
                        Have questions about our courses, promotions, or discounts? 
                        Reach out to us for personalized guidance and support! 
                        Whether you have doubts about our curriculum or want to know about ongoing offers, 
                        we’re here to assist you!
                    </p>
                    <h2 className="mt-8 text-2xl font-semibold text-gray-800">We Value Your Queries!</h2>
                    <p className="lg:text-base text-sm mt-2 text-gray-700">
                        Contact us today to discover how we can help you achieve your educational goals. 
                        Your journey to success begins with a simple message!
                    </p>
                    <motion.button
                        className="mt-6 bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition-all flex items-center"
                        whileHover={{ scale: 1.05 }}
                    >
                    <a href="#" className='flex items-center justify-center'>Contact Us <FaArrowRight className="ml-2"/></a> 
                    </motion.button>
                </motion.div>
                <motion.div
                    className="bg-white p-6 rounded-lg shadow-lg"
                    ref={ref2}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : -50 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Contact Form</h2>
                    {isSubmitted && <p className="text-green-500 mb-4 text-center">Your message has been sent!</p>}
                    {errorMessage && <p className="text-red-500 font-medium  text-lg mb-4 text-center">{errorMessage}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                            <input
                            placeholder='Enter your name'
                                className="w-full p-2 border border-gray-300 rounded"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                            <input
                            placeholder='Enter your mail'
                                className="w-full p-2 border border-gray-300 rounded"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                            <input
                            placeholder='Enter valid 10 digit Phone number'
                                className="w-full p-2 border border-gray-300 rounded"
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="topic">Related To</label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded"
                                name="topic"
                                value={formData.topic}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select a topic</option>
                                <option value="resume building">Resume Building</option>
                                <option value="CodeMaster Bootcamp">CodeMaster Bootcamp</option>
                                <option value="full stack">Full Stack development</option>
                                <option value="python">Python for Data Science</option>
                                <option value="digital marketing">Digital Marketing Mastery</option>
                                <option value="other">Other (specify in message)</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                            <textarea
                            placeholder='Write your message here !'
                                className="w-full p-2 border border-gray-300 rounded"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button 
                            type="submit"
                            className="mt-4 w-full bg-red-600 text-white font-bold py-3 rounded-full hover:bg-red-700 transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                    
                </motion.div>
            </div>
        </div>
    );
};

export default ContactServices;
