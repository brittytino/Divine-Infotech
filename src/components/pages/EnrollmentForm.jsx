import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const EnrollmentForm = ({ courseName, price, appliedCoupon, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: courseName,
        background: '',
        fee: price,
        coupon: appliedCoupon,
    });
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult('Sending....');

        const submissionData = new FormData();
        submissionData.append('name', formData.name);
        submissionData.append('email', formData.email);
        submissionData.append('phone', formData.phone);
        submissionData.append('course', formData.course);
        submissionData.append('background', formData.background);
        submissionData.append('fee', formData.fee);
        submissionData.append('coupon', formData.coupon);
        submissionData.append('access_key', '5203fa70-07f3-4c97-9ede-b414c14b7e68');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: submissionData,
        });

        const data = await response.json();

        if (data.success) {
            setResult('You will be contacted soon! Thank you for your message.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                course: courseName,
                background: '',
                fee: price,
                coupon: appliedCoupon,
            });
        } else {
            console.log('Error sending your response, try here directly - divineinfotech.edu@gmail.com', data);
            setResult(data.message);
        }
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto text-gray-800">
            <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-md shadow-lg max-w-lg mx-auto w-full relative">
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        <FaTimes className="text-2xl" />
                    </button>
                    <h2 className="text-2xl font-semibold mb-4 text-center text-white rounded-md p-2 bg-blue-600">Enroll in {courseName}</h2>
                   
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                                Full Name
                            </label>
                            <input
                            placeholder='Enter your name'
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-blue-400 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder='Enter your Mail'
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-blue-400 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder='Enter your Valid 10 digit Phone number'
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-blue-400 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="background">
                                Tell us about your background
                            </label>
                            <textarea
                                id="background"
                                placeholder='For eg: UG,PG , Year of study , Passed out etc..'
                                name="background"
                                value={formData.background}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-blue-400 rounded-md"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Course Fee
                            </label>
                            <input
                                type="text"
                                name="fee"
                                value={`₹${formData.fee}`}
                                readOnly
                                className="w-full text-red-500 font-semibold  px-3 py-2 border border-blue-400 rounded-md bg-gray-100"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Applied Coupon Code
                            </label>
                            <input
                                type="text"
                                name="coupon"
                                value={formData.coupon}
                                readOnly
                                className="w-full text-gray-900 font-semibold px-3 py-2 border border-blue-400 rounded-md bg-gray-100"
                            />
                        </div>
                        <p className='text-gray-700 text-xs'><span className='text-gray-900 font-medium'>Disclaimer : </span>You are going to just submit the details and not going to pay now ! Our Team will contact you soon ! </p><br />
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    {result && (
                        <div className="mt-4 text-center text-green-600">
                            <p>{result}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EnrollmentForm;
