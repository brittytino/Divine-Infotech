import mern from './img/course/mern.png';
import fullStack from './img/course/fullstack.png';

import aptitude from './img/course/aptitude.webp'

// Mobile app dev
import appDevScratch from './img/course/Android App Development from Scratch.webp';

// Game Dev 
import fundamentalsofGameDev from './img/course/fundamentals of game dev.jpg';

// Tally 
import tallyprimewithGst from './img/course/tallyprime with gst.webp';

// Stock Market 
import AdvancedStockTradingTechniques from './img/course/Advanced Stock Trading Techniques.jpeg';

// UI/UX
import advanceuiuxTechniques from './img/course/advance ui ux techniques.jpg';

// Python Programming
import DataAnalysiswithPython from './img/course/Data Analysis with Python.webp';
import pythonFullstack from './img/course/python-fullstack.png';

// Java Programming 
import advanceJava from './img/course/Advanced Java Programming.png';

// Fundamentals
import fundamentalsofLang from './img/course/Programming_Fundamentals.jpg';
import digitalMarketingFundamentals from './img/course/digitalMarketingFundamentals.jpeg';

import promptEngineering from './img/course/Prompt Engineering - Introduction to Programming.webp';
import gitGithubEssentials from './img/course/Git and GitHub Essentials.jpg';

import comingSoon from './img/coming soon.jpeg'
import azureCloud from './img/course/azure cloud.png'

const courses = [
     // Tally

     {
        img: tallyprimewithGst,
        title: "Mastering Tally Prime with GST",
        category: ["Tally" , "Best Selling"],
        oldFees: "₹13,000",
        price: "₹11,500",
        duration: "45 days",
        url: 'tally',
        description: "Master Tally Prime with GST, covering basic to advanced accounting, inventory management, GST implementation, payroll, and final project integration."
    },

     // Stock Market

     {
        img: AdvancedStockTradingTechniques,
        title: "Advanced Stock Trading Techniques",
        category: ["Stock Market", "Best Selling"], 
        oldFees: "₹13,000",
        price: "₹11,500",
        duration: "45 days",
        url: '/AdvancestockTrading',
        description: "Master stock trading with advanced technical analysis, quantitative techniques, derivatives, and risk management in this comprehensive course."
    },

    {
        img: azureCloud,
        title: "Mastering Azure: Cloud Computing Excellence",
        category: ["Cloud", "Best Selling"],
        oldFees: "₹10,000",
        price: "₹10,000",
        duration: "30 days",
        url: '/azurecloud',  
        description: "Master Azure Cloud and enhance your IT skills by learning to deploy, manage, and scale applications seamlessly.",

    },


    {
        img: fullStack,
        title: "Complete Full Stack Development",
        category: ["Web Development", "Best Selling"],
        oldFees: "₹16,000",
        price: "₹14,500",
        duration: "65 days",
        url: '/CompletefullStack',
        description: "Master Complete Full Stack Development with HTML, CSS, JavaScript, and backend technologies to build dynamic web applications.",

    },

     //Programming Fundamentals 
     {
        img: fundamentalsofLang,
        title: "Fundamentals of C, C++, Python, and Java",
        category: ["Programming Fundamentals" , "Best Selling"],
        oldFees: "₹7,000",
        price: "₹6,000",
        duration: "30 days",
        url: '/ProgrammingFundamentals',
        description: "Master programming basics and advanced concepts in C, C++, Python, and Java with a final integrated project in this 25-day course."
    },

   

    // {
    //     img: advanceuiuxTechniques,
    //     title: "Advanced UI/UX Design Techniques",
    //     category: ["UI/UX Design", "Best Selling"],
    //     oldFees: "₹9,000",
    //     price: "₹8,000",
    //     duration: "30 days",
    //     url: '/AdvanceUiux',
    //     description: "Master advanced UI/UX design techniques, from user research to motion design, and complete a real-world project in this comprehensive course."
    // },
    // //aptitude
    // {
    //     img: aptitude,
    //     title: "Mastering Aptitude: Comprehensive Skill Development",
    //     category: ["Aptitude", "Best Selling"],
    //     oldFees: "₹16,000",
    //     price: "₹7,500",
    //     duration: "30 days",
    //     url: '/aptitude',
    //     description: "Enhance your problem-solving abilities and excel in competitive exams with our Mastering Aptitude: Comprehensive Skill Development course."
    // },
    // {
    //     img: pythonFullstack,
    //     title: "Full Stack Python Development",
    //     category: ["Python Programming", "Best Selling"],
    //     oldFees: "₹16,000",
    //     price: "₹14,500",
    //     duration: "50 days",
    //     url: '/FullstackPython',
    //     description: "Learn Full Stack development with Python and JavaScript in a comprehensive 10-week course, covering backend basics, Flask, React.js, and advanced topics."
    // },
   

    // {
    //     img: mern,
    //     title: "Mastering the MERN Stack",
    //     category: "Web Development",
    //     oldFees: "₹13,000",
    //     price: "₹11,500",
    //     duration: "55 days",
    //     description: "Master the MERN Stack with MongoDB, Express.js, React, and Node.js to build robust, scalable web applications.",
    //     url: '/mernstack'
    // },



    // // Mobile app dev  

    // {
    //     img: appDevScratch,
    //     title: "Android App Development Bootcamp",
    //     category: "Mobile App Development",
    //     oldFees: "₹13,000",
    //     price: "₹11,500",
    //     duration: "35 days",
    //     url: '/Androidappdev',
    //     description: "This course teaches Android basics: UI design, navigation, data storage, networking, Firebase integration, and app publishing."
    // },

    // // Game Development
    // {
    //     img: fundamentalsofGameDev,
    //     title: "Fundamentals of Game Development",
    //     category: "Game Development",
    //     oldFees: "₹4,500",
    //     price: "₹4,000",
    //     duration: "25 days",
    //     url: '/FundamentalsofgameDev',
    //     description: "Master game development essentials with Unity, Unreal Engine, and design principles, covering programming, art creation, and building functional game projects."
    // },
    // // UI/UX Design 


    // // Python Programming

    // {
    //     img: DataAnalysiswithPython,
    //     title: "Data Analysis with Python",
    //     category: "Python Programming",
    //     oldFees: "₹8,000",
    //     price: "₹7,000",
    //     duration: "35 days",
    //     url: '/DataanalysisPython',
    //     description: "Master data analysis with Python, from data manipulation to visualization and statistical analysis, in this comprehensive 30-day course."
    // },





    // //Java Programming 

    // {
    //     img: advanceJava,
    //     title: "Advanced Java Programming",
    //     category: "Java Programming",
    //     oldFees: "₹11,000",
    //     price: "₹10,000",
    //     duration: "40 days",
    //     url: '/AdvanceJava',
    //     description: "Master advanced Java programming in 35 days, covering design patterns, concurrency, JPA, Java EE, web services, Spring, performance tuning, and a final project."
    // },


   

    // //Digital Marketing Fundamentals
    // {
    //     img: digitalMarketingFundamentals,
    //     title: "Digital Marketing Essentials",
    //     category: "Digital Marketing Fundamentals",
    //     oldFees: "₹13,000",
    //     price: "₹11,500",
    //     duration: "35 days",
    //     url: '/Digitalmarketing',
    //     description: "Explore digital marketing essentials including website strategy, content creation, social media tactics, paid advertising, and analytics in this comprehensive course."
    // },

    // //Prompt engineering

    // {
    //     img: promptEngineering,
    //     title: "Prompt Engineering - Introduction to Programming",
    //     category: "Prompt Engineering",
    //     oldFees: "₹7,000",
    //     price: "₹6,000",
    //     duration: "20 days",
    //     url: '/PromptEngineering',
    //     description: "Learn programming basics, functions, data structures, OOP principles, and project development with Git in this comprehensive course."
    // },


    // //.Git and GitHub Essentials
    // {
    //     img: gitGithubEssentials,
    //     title: "Git and GitHub Essentials",
    //     category: "Git and GitHub",
    //     oldFees: "₹3,000",
    //     price: "₹2,500",
    //     duration: "10 days",
    //     url: '/Gitgithub',
    //     description: "Explore Git and GitHub: Includes setup, essential commands, teamwork basics, advanced topics like conflict resolution and workflows, and real-world application in development."
    // },





   
    

    //  {
    //     img: comingSoon,
    //     title: "Frontend Development Essentials",
    //     category: "Free courses",
    //     oldFees: "₹2,999",
    //     price: "Free",
    //     duration: "30 days",
    //     url: '',
    //     description: "Master the art of creating stunning, responsive websites with essential frontend technologies. Perfect for beginners and intermediates looking to enhance their web development skills"
    // }, 
     {
        img: comingSoon,
        title: "Flutter Beginner",
        category: "Free courses",
        oldFees: "₹1,999",
        price: "Free",
        duration: "20 days",
        url: '',
        description: "Kickstart your mobile app development journey with Flutter. Learn to build beautiful, natively compiled applications for mobile from a single codebase. "
    }, 
     {
        img: comingSoon,
        title: "Ethical Hacking",
        category: "Free courses",
        oldFees: "₹1,999",
        price: "Free",
        duration: "25 days",
        url: '',
        description: "Uncover the secrets of cybersecurity by learning ethical hacking techniques. Gain the skills to protect systems and networks from malicious attacks."
    }, 
     {
        img: comingSoon,
        title: "Web scrapping",
        category: "Free courses",
        oldFees: "₹2,999",
        price: "Free",
        duration: "30 days",
        url: '',
        description: "Learn to extract valuable data from websites efficiently using modern web scraping techniques. Ideal for anyone looking to enhance their data collection and analysis skills."
    }, 















];

export default courses