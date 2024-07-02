import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ContactServices = () => {
    return (
        <div className="container mx-auto py-12 px-6 md:px-20 lg:px-40 bg-green-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                    <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">Startup and Online Growth Consultation</h1>
                    <div className="mt-4 mb-8 h-1 w-24 md:w-32 bg-green-500 rounded"></div>
                    <p className="md:text-base  text-sm text-gray-700">
                        In this one-on-one session, our founder will personally connect with you to share his expert insights on growing your business through website development, UI/UX design, and data analytics. 
                        We’ll conduct special research tailored to your niche and offer tips that can propel your business forward. This isn’t just generic advice – it’s actionable, personalized strategies to help you succeed.
                    </p>
                    <h2 className="mt-8 text-2xl font-semibold text-gray-800">Increase Your Profit from ₹10,000 to ₹10 Lakhs</h2>
                    <p className="md:text-base  text-sm mt-2  text-gray-700">
                        Ready to take your business to the next level? We’ll show you how to scale your profits from ₹10,000 to ₹10 Lakhs. With our expert guidance, proven strategies, and personalized advice in website development, UI/UX design, and data analytics, you’ll be equipped to grow your revenue and achieve your financial goals. Let’s turn your vision into reality!
                    </p>
                    <button className="mt-6 bg-green-600 text-white font-bold py-3 px-6 rounded-full hover:bg-green-700 transition-all flex items-center">
                        Consulting Service <FaArrowRight className="ml-2"/>
                    </button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Contact Us</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name *</label>
                            <input type="text" id="name" className="w-full p-3 border rounded-lg" placeholder="Your Name" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email *</label>
                            <input type="email" id="email" className="w-full p-3 border rounded-lg" placeholder="Your Email" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-gray-700">Subject *</label>
                            <input type="text" id="subject" className="w-full p-3 border rounded-lg" placeholder="Subject" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700">Comment or Message *</label>
                            <textarea id="message" className="w-full p-3 border rounded-lg" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg font-bold">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactServices;
