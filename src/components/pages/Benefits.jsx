import React from 'react';
import Github from './img/github.svg';
import Linkedin from './img/linkedin.svg';
import Resume from './img/resume.svg';
import SoftSkills from './img/soft.svg';
import Interview from './img/interview.svg';

const benefits = [
    {
        icon: <img src={Github} alt="Github Profile" className="w-12 h-12" />,
        title: "Github profile",
        description: "Showcase your projects and contributions."
    },
    {
        icon: <img src={Linkedin} alt="LinkedIn" className="w-12 h-12" />,
        title: "LinkedIn profile",
        description: "Build your professional network."
    },
    {
        icon: <img src={Resume} alt="Resume Writing" className="w-12 h-12" />,
        title: "Resume writing",
        description: "Craft a compelling resume."
    },
    {
        icon: <img src={SoftSkills} alt="Soft Skills" className="w-12 h-12" />,
        title: "Soft skills",
        description: "Master communication and salary negotiation skills."
    },
    {
        icon: <img src={Interview} alt="Interview Preparation" className="w-12 h-12" />,
        title: "Interview preparation",
        description: "Mock interviews and expert sessions."
    },
];

const Benefits = () => {
    return (
        <div id='benefits' className="px-2 lg:px-32 py-8">
            <h2 className="md:text-3xl text-2xl font-bold text-gray-700 text-center">Benefits</h2>
            <p className="text-center text-sm text-blue-600 underline underline-offset-4 mb-6">Beyond Learning</p>
            <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-6 px-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="bg-gray-100  hover:text-white transition-all duration-300 py-3 md:p-4 rounded-lg shadow-md flex flex-col items-center mb-4">
                        <div className="mb-2 ">{benefit.icon}</div>
                        <h3 className="md:text-lg text-center text-xs font-semibold text-gray-800 ">{benefit.title}</h3>
                        <p className="text-center hidden md:block text-sm text-gray-600">{benefit.description}</p>
                    </div>
                ))}
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-6 px-4">
                {benefits.slice(3).map((benefit, index) => (
                    <div key={index} className="bg-gray-100 p-3 md:p-4 rounded-lg shadow-md flex flex-col items-center mb-4">
                        <div className="mb-2">{benefit.icon}</div>
                        <h3 className="md:text-lg text-center text-sm font-semibold text-gray-800">{benefit.title}</h3>
                        <p className="text-center text-sm text-gray-600">{benefit.description}</p>
                    </div>
                ))}
            </div>
            <p className='text-center text-[10px] text-gray-600'>Any one of benefits - <a href="/terms" className='text-blue-600'> *T&C Applied </a></p>
        </div>
    );
};

export default Benefits;
