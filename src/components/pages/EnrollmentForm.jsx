import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const EnrollmentForm = ({ courseName, price, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: courseName,
        background: '',
        fee: price,
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
            });
        } else {
            console.log('Error sending your response, try here directly - divineinfotech.edu@gmail.com', data);
            setResult(data.message);
        }
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="relative bg-white w-full max-w-lg mx-auto p-8 rounded-md shadow-lg border-2 border-blue-400">
                    <button
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                        onClick={onClose}
                    >
                        <FaTimes className="text-xl" />
                    </button>
                    <h2 className="text-2xl font-semibold mb-6">Enroll in {courseName}</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="background" className="block text-gray-700">Background:</label>
                            <select
                                id="background"
                                name="background"
                                value={formData.background}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            >
                                <option value="">Select</option>
                                <option value="college">College</option>
                                <option value="work">Work</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="course" className="block text-gray-700">Course:</label>
                            <input
                                type="text"
                                id="course"
                                name="course"
                                value={formData.course}
                                className="w-full px-3 py-2 border rounded-md"
                                readOnly
                            />
                        </div>
                        <div>
                            <label htmlFor="fee" className="block text-gray-700">Fee:</label>
                            <input
                                type="text"
                                id="fee"
                                name="fee"
                                value={`₹${formData.fee}`}
                                className="w-full px-3 py-2 border rounded-md"
                                readOnly
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                        >
                            Enroll Now
                        </button>
                    </form>
                    {result && (
                        <div className="mt-4 text-center text-green-600">
                            {result}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EnrollmentForm;
