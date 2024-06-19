import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const syllabus = [
    {
        module: "MODULE 1: INTRODUCTION TO DIGITAL MARKETING (Days 1-5)",
        days: [
            {
                day: "Day 1: Overview of Digital Marketing",
                topics: [
                    "What is Digital Marketing?",
                    "Importance of Digital Marketing",
                    "Key Concepts and Terminology",
                    "Digital Marketing vs. Traditional Marketing",
                ],
            },
            {
                day: "Day 2: Understanding the Digital Marketing Landscape",
                topics: [
                    "Components of Digital Marketing",
                    "Digital Marketing Channels",
                    "Current Trends in Digital Marketing",
                ],
            },
            {
                day: "Day 3: Setting Up Your Digital Marketing Tools",
                topics: [
                    "Essential Tools and Software",
                    "Google Analytics and Google Tag Manager",
                    "Keyword Research Tools (e.g., Google Keyword Planner, SEMrush)",
                    "Social Media Management Tools (e.g., Hootsuite, Buffer)",
                ],
            },
            {
                day: "Day 4: Market Research and Audience Analysis",
                topics: [
                    "Understanding Your Target Audience",
                    "Creating Buyer Personas",
                    "Competitive Analysis",
                    "SWOT Analysis",
                ],
            },
            {
                day: "Day 5: Building a Digital Marketing Strategy",
                topics: [
                    "Setting SMART Goals",
                    "Developing a Marketing Plan",
                    "Budgeting for Digital Marketing",
                    "Key Performance Indicators (KPIs)",
                ],
            },
        ],
    },
    {
        module: "MODULE 2: CONTENT MARKETING (Days 6-10)",
        days: [
            {
                day: "Day 6: Introduction to Content Marketing",
                topics: [
                    "What is Content Marketing?",
                    "Importance of Content Marketing",
                    "Types of Content",
                ],
            },
            {
                day: "Day 7: Creating Effective Content",
                topics: [
                    "Content Creation Process",
                    "Writing High-Quality Blog Posts",
                    "Crafting Engaging Social Media Content",
                    "Creating Visual Content (Infographics, Videos)",
                ],
            },
            {
                day: "Day 8: Content Marketing Strategy",
                topics: [
                    "Content Planning and Scheduling",
                    "Content Distribution Channels",
                    "Repurposing Content",
                    "User-Generated Content",
                ],
            },
            {
                day: "Day 9: SEO Fundamentals",
                topics: [
                    "What is SEO?",
                    "On-Page SEO",
                    "Off-Page SEO",
                    "Technical SEO",
                ],
            },
            {
                day: "Day 10: Content Optimization and SEO",
                topics: [
                    "Keyword Research and Optimization",
                    "SEO Best Practices for Content",
                    "Link Building Strategies",
                    "Measuring Content Performance with SEO Tools",
                ],
            },
        ],
    },
    {
        module: "MODULE 3: SOCIAL MEDIA MARKETING (Days 11-15)",
        days: [
            {
                day: "Day 11: Introduction to Social Media Marketing",
                topics: [
                    "Overview of Social Media Platforms",
                    "Importance of Social Media Marketing",
                    "Choosing the Right Platforms",
                ],
            },
            {
                day: "Day 12: Building a Social Media Strategy",
                topics: [
                    "Setting Goals and Objectives",
                    "Creating a Content Calendar",
                    "Social Media Best Practices",
                    "Social Media KPIs",
                ],
            },
            {
                day: "Day 13: Facebook Marketing",
                topics: [
                    "Setting Up a Facebook Business Page",
                    "Facebook Content Strategies",
                    "Facebook Ads and Campaigns",
                    "Analyzing Facebook Insights",
                ],
            },
            {
                day: "Day 14: Instagram Marketing",
                topics: [
                    "Setting Up an Instagram Business Account",
                    "Instagram Content Strategies",
                    "Instagram Stories and Reels",
                    "Instagram Ads and Analytics",
                ],
            },
            {
                day: "Day 15: LinkedIn and Twitter Marketing",
                topics: [
                    "LinkedIn Marketing Strategies",
                    "LinkedIn Ads and Analytics",
                    "Twitter Marketing Strategies",
                    "Twitter Ads and Analytics",
                ],
            },
        ],
    },
    {
        module: "MODULE 4: EMAIL MARKETING (Days 16-20)",
        days: [
            {
                day: "Day 16: Introduction to Email Marketing",
                topics: [
                    "What is Email Marketing?",
                    "Importance of Email Marketing",
                    "Types of Email Campaigns",
                ],
            },
            {
                day: "Day 17: Building an Email List",
                topics: [
                    "Strategies for Growing Your Email List",
                    "Lead Magnets and Opt-In Forms",
                    "Segmentation and Targeting",
                ],
            },
            {
                day: "Day 18: Crafting Effective Emails",
                topics: [
                    "Email Design and Layout",
                    "Writing Compelling Subject Lines and Copy",
                    "Personalization and Automation",
                ],
            },
            {
                day: "Day 19: Email Marketing Tools",
                topics: [
                    "Overview of Email Marketing Platforms (e.g., Mailchimp, Constant Contact)",
                    "Setting Up and Managing Campaigns",
                    "A/B Testing and Optimization",
                ],
            },
            {
                day: "Day 20: Analyzing Email Marketing Performance",
                topics: [
                    "Key Email Marketing Metrics",
                    "Analyzing Email Campaigns",
                    "Improving Open Rates and Click-Through Rates",
                    "Managing Unsubscribes and Bounces",
                ],
            },
        ],
    },
    {
        module: "MODULE 5: PAID ADVERTISING (Days 21-25)",
        days: [
            {
                day: "Day 21: Introduction to Paid Advertising",
                topics: [
                    "What is Paid Advertising?",
                    "Types of Paid Advertising (PPC, Display Ads, Social Media Ads)",
                    "Setting Advertising Budgets",
                ],
            },
            {
                day: "Day 22: Google Ads",
                topics: [
                    "Introduction to Google Ads",
                    "Setting Up Google Ads Campaigns",
                    "Keyword Bidding Strategies",
                    "Analyzing Google Ads Performance",
                ],
            },
            {
                day: "Day 23: Social Media Advertising",
                topics: [
                    "Facebook and Instagram Ads",
                    "LinkedIn Ads",
                    "Twitter Ads",
                    "Targeting and Retargeting Strategies",
                ],
            },
            {
                day: "Day 24: Display and Video Advertising",
                topics: [
                    "Overview of Display Advertising",
                    "Creating Effective Display Ads",
                    "Introduction to YouTube Advertising",
                    "Creating and Managing Video Ads",
                ],
            },
            {
                day: "Day 25: Advertising Analytics and Optimization",
                topics: [
                    "Key Advertising Metrics",
                    "Analyzing Ad Performance",
                    "Optimizing Ad Campaigns for Better Results",
                    "A/B Testing Ads",
                ],
            },
        ],
    },
    {
        module: "MODULE 6: ADVANCED DIGITAL MARKETING CONCEPTS (Days 26-30)",
        days: [
            {
                day: "Day 26: Affiliate Marketing",
                topics: [
                    "What is Affiliate Marketing?",
                    "Setting Up an Affiliate Program",
                    "Finding and Managing Affiliates",
                    "Measuring Affiliate Performance",
                ],
            },
            {
                day: "Day 27: Influencer Marketing",
                topics: [
                    "Introduction to Influencer Marketing",
                    "Finding the Right Influencers",
                    "Creating Influencer Campaigns",
                    "Measuring Influencer Impact",
                ],
            },
            {
                day: "Day 28: Conversion Rate Optimization (CRO)",
                topics: [
                    "What is CRO?",
                    "Analyzing the Customer Journey",
                    "A/B Testing for CRO",
                    "Improving Landing Pages",
                ],
            },
            {
                day: "Day 29: Marketing Automation",
                topics: [
                    "Introduction to Marketing Automation",
                    "Tools for Marketing Automation",
                    "Creating Automated Workflows",
                    "Benefits of Marketing Automation",
                ],
            },
            {
                day: "Day 30: Final Project and Review",
                topics: [
                    "Developing a Comprehensive Digital Marketing Plan",
                    "Review of Key Concepts",
                    "Q&A Session",
                    "Course Conclusion and Next Steps",
                ],
            },
        ],
    },
];

const DigitalMarketingSyllabus = () => {
    const [openModule, setOpenModule] = useState(null);

    const handleToggle = (index) => {
        setOpenModule(openModule === index ? null : index);
    };

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold underline underline-offset-4 decoration-blue-700 mb-8 text-center">Course Syllabus</h1>
            {syllabus.map((module, index) => (
                <div key={index} className="mb-6 border-b border-gray-300 pb-4">
                    <button
                        onClick={() => handleToggle(index)}
                        className="flex items-center justify-between w-full text-left text-sm md:text-base font-medium text-gray-700 hover:text-[#453fe1] transition-all"
                    >
                        {module.module}
                        <ChevronDownIcon className={`h-6 w-6 transition-transform ${openModule === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openModule === index && (
                        <div className="mt-4">
                            {module.days.map((day, idx) => (
                                <div key={idx} className="mb-4">
                                    <h2 className="text-lg font-semibold text-gray-700">{day.day}</h2>
                                    <ul className="list-disc list-inside pl-4 mt-2">
                                        {day.topics.map((topic, i) => (
                                            <li key={i} className="text-gray-600">{topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DigitalMarketingSyllabus;
