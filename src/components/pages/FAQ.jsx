import React, { useState, useRef } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([]);

    const faqs = [
        {
            question: "Is it 100% online learning or should I come in person for any specific course?",
            answer: "It is a 100% online learning course package and there won’t be any necessity for you to be present in person. "
        },
        {
            question: "Why choose Full Stack Web Development?",
            answer: "Earn an average of 6LPA in India.It offers a comprehensive skill set that is highly sought after in the job market, enabling you to work on both client and server sides."
        },
        {
            question: "Why choose Divine Infotech for Full Stack Web Development?",
            answer: "The Full Stack Web Development course offered by Divine Infotech covers all essential concepts of frontend and backend development, with a focus on real-world projects. In this certification course, you will learn about frontend technologies like HTML, CSS, JavaScript, and React, as well as backend technologies such as Node.js, Express, and databases like MongoDB. The course also covers responsive web design, API integration, version control with Git, and deployment strategies. Curated and delivered by industry experts, the course is self-paced, and you will earn a globally recognized certificate upon completion."
        },
        {
            question: "What are the prerequisites required to learn Full Stack Web Development?",
            answer: "The only prerequisite for learning Full Stack Web Development at Divine Infotech is your commitment and determination to succeed. No prior technical knowledge is required, as the course is designed to guide you from the basics to advanced topics. Anyone with a passion for web development and a desire to learn can enroll and thrive in this course."
        },
        {
            question: "What technologies will I learn in this course?",
            answer: "You will learn HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, among other required technologies for Web development."
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id='faq' className="bg-[#f6f7f8]">
            <div className='lg:w-3/4 py-8 px-4 md:px-8 lg:px-40'>
                <h2 className="text-3xl text-center font-bold mb-4">
                    Still Having 
                    <span className="relative inline-block ml-2">
                        <span className="relative z-10 text-blue-600 mr-2">Doubts?</span>
                        <span className="absolute inset-0 z-0 bg-blue-100 h-4 transform translate-y-4"></span>
                    </span>
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b-2">
                            <div
                                className="flex justify-between items-center p-2 md:p-4 cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="md:text-lg text-sm font-medium text-gray-800">{faq.question}</h3>
                                <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
                            </div>
                            <div
                                ref={el => contentRefs.current[index] = el}
                                className={`overflow-hidden transition-all duration-300 ease-in-out`}
                                style={{
                                    height: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                                }}
                            >
                                <div className="p-4 text-sm md:text-base text-gray-600">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
