import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FaqServices = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What is Divine Infotech, and what does it do?',
            answer: 'Divine Infotech is a pioneering career education startup specializing in developing innovative solutions in Web applications, Android applications, and Data Science projects. Our programs offer advanced training, hands-on practice, and expert guidance to help individuals and businesses grow.'
        },
        {
            question: 'What types of training programs does we offer?',
            answer: 'We offer comprehensive training programs in Web development, Android application development, and Data Science. Our programs include hands-on practice, industry-based learning, and expert-led sessions to ensure you gain practical and valuable skills.'
        },
        {
            question: 'How can Divine Infotech technologies help my business?',
            answer: 'We streamline your operations, enhance security, boost your online presence, and increase productivity, driving business growth.'
        },
        {
            question: 'What kind of support does Divine Infotech technologies provide?',
            answer: 'We offer 24/7 premium support to ensure seamless integration and continuous assistance for all our services.'
        },
        {
            question: 'How experienced is the Divine Infotech technologies team?',
            answer: 'Our team consists of certified experts with extensive experience in various IT domains, ensuring top-notch service delivery.'
        },
        {
            question: 'What makes us different from other Service providers?',
            answer: 'Our comprehensive offerings, experienced solutions, and commitment to excellence set us apart from other providers.'
        }
    ];

    return (
        <div className=" py-12">
            <div className=" flex flex-col justify-center items-center ">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8  underline underline-offset-4 md:underline-offset-8 decoration-green-600">Frequently Asked Questions</h2>
                <div className="space-y-4 px-6 md:px-8 lg:w-2/3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div
                                className="flex justify-between items-center p-4 cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3 className=" text-base md:text-lg lg:text-xl font-semibold text-gray-700">{faq.question}</h3>
                                <span className="text-gray-500">
                                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </div>
                            <div
                                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
                            >
                                <p className="p-4 text-xs md:text-base text-gray-600">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FaqServices;
