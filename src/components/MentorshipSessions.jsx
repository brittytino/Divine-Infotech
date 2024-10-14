import React from 'react';
import Slider from 'react-slick'; // Importing react-slick
import { useNavigate } from 'react-router-dom';

// images
import mockInterview from '../images/mock-interview-32171.webp';
import profileReview from '../images/profile-review-32172.webp';
import projectGuidance from '../images/project-guidance-32173.jpg';

const MentorshipSessions = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/resume-building');
    }

    const sessions = [
        {
            title: 'Mock interview',
            description: [
                'Nail coding assessments and technical challenges.',
                'Gain insights into problem-solving and algorithmic thinking.'
            ],
            image: mockInterview,
        },
        {
            title: 'Profile review',
            description: [
                'Get your profile & resume reviewed by industry leaders.',
                'Focus on different aspects of your job search.'
            ],
            image: profileReview,
        },
        {
            title: 'Project guidance',
            description: [
                'Career counselling with industry experts.',
                'Get assistance on how to build real-time projects.'
            ],
            image: projectGuidance,
        },
    ];

    // Slider settings for mobile view
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true, // Ensures the centered card is fully visible
        centerPadding: '40px', // Shows part of the next/previous card
        responsive: [
            {
                breakpoint: 768, // Apply this on mobile screens only
                settings: {
                    slidesToShow: 1,
                    centerPadding: '30px', // Adjust padding for smaller screens
                },
            },
        ],
    };

    return (
        <div className="bg-white py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">
                        1:1 Mentorship sessions
                    </h2>
                    <p className="mt-2 text-xl md:text-3xl leading-8 font-extrabold text-gray-900">
                        Personalized guidance to prepare you for your interview needs
                    </p>
                </div>

                {/* Carousel for mobile view, grid layout for larger screens */}
                <div className="md:hidden max-w-full">
                    {/* Slider for mobile screens */}
                    <Slider {...settings}>
                        {sessions.map((session, index) => (
                            <div key={index} className="px-4">
                                <div className="flex flex-col items-center text-left rounded-lg shadow-lg ">
                                    <img
                                        src={session.image}
                                        alt={session.title}
                                        className="w-full object-contain rounded-t-lg"
                                    />
                                    <div className='p-4'>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {session.title}
                                        </h3>
                                        <div className="mt-2 text-gray-500">
                                            {session.description.map((sentence, i) => (
                                                <p key={i} className="mb-2 text-sm">
                                                    {sentence}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Default grid layout for medium and larger screens */}
                <div className="hidden md:flex justify-center space-x-8">
                    {sessions.map((session, index) => (
                        <div key={index} className="flex flex-col items-start text-left rounded-lg shadow-lg ">
                            <img
                                src={session.image}
                                alt={session.title}
                                className="w-full object-contain"
                            />
                            <div className='p-4'>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {session.title}
                                </h3>
                                <div className="mt-2 text-gray-500">
                                    {session.description.map((sentence, i) => (
                                        <p key={i} className="mb-2 text-base">
                                            {sentence}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className='flex justify-center items-center mt-4' onClick={handleNavigate}>
                    <button className='p-2 px-4 font-semibold mt-6 text-base md:text-lg rounded-full hover:bg-orange-600 hover:text-white border-2 border-orange-600 bg-transparent text-orange-600 transition-all'>
                        Start Now !
                    </button>
                </div>

                {/* Text at the bottom */}
                <p className='text-gray-800 text-center mt-4 text-base font-semibold'>
                    If not <span className='text-orange-500 font-bold ml-1 mr-1'>now</span> then
                    <span className='text-orange-500 font-bold ml-1'>when? </span>
                </p>
            </div>
        </div>
    );
};

export default MentorshipSessions;
