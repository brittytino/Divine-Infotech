import mern from './img/course/mern.png';   
import frontendEssentials from './img/course/frontend-essentials.png';
import fullStack from './img/course/fullstack.png';
import htmlcssJs from './img/course/htmlcssjs.jpg';
import meanStack from './img/course/mean Stack.png';

// Mobile app dev
import introMobiledev from './img/course/intro-mobile dev.png';
import appDevScratch from './img/course/Android App Development from Scratch.webp';
import crossPlatformappDev from './img/course/Cross-Platform Mobile Apps with Flutter & React Native.jpg';

// Game Dev 
import fundamentalsofGameDev from './img/course/fundamentals of game dev.jpg';
import GamePhysicsandAI from './img/course/AI-in-Gaming.webp';
import gamedevMastery from './img/course/game dev mastery.png';

// Tally 
import tallyFundamentals from './img/course/tally fundamentals.jpg';
import tallyprimewithGst from './img/course/tallyprime with gst.webp';

// Stock Market 
import introtoStockMarket from './img/course/Introduction to Stock Market Investing.webp'; 
import FundamentalTechnicalAnalysisforInvestors from './img/course/Fundamental & Technical Analysis for Investors.jpg';
import AdvancedStockTradingTechniques from './img/course/Advanced Stock Trading Techniques.jpeg';

// UI/UX
import IntroductiontoUIUXDesignPrinciples from './img/course/Introduction to UIUX Design Principles.png';
import advanceuiuxTechniques from './img/course/advance ui ux techniques.jpg';

// Python Programming
import PythonProgrammingforBeginners from './img/course/python for beginners.webp';
import DataAnalysiswithPython from './img/course/Data Analysis with Python.webp';
import webdevusingPython from './img/course/Web Development using Python.jpg';
import AdvancedPythonProgramming from './img/course/Advanced Python Programming.png';
import pythonFullstack from './img/course/python-fullstack.png';

// Java Programming 
import JavaProgrammingforBeginners from './img/course/Java Programming for Beginners.jpg';
import JavaforWebMobileDev from './img/course/Java for Web & Mobile Development.png';
import advanceJava from './img/course/Advanced Java Programming.png';

// Fundamentals
import fundamentalsofLang from './img/course/Programming_Fundamentals.jpg';
import digitalMarketingFundamentals from './img/course/digitalMarketingFundamentals.jpeg';

import promptEngineering from './img/course/Prompt Engineering - Introduction to Programming.webp';
import gitGithubEssentials from './img/course/Git and GitHub Essentials.jpg';

const courses = [
    {
        img: frontendEssentials,
        title: "Frontend Development Essentials",
        category: ["Web Development", "Best Selling"],
        price: "₹5,500",
        duration: "30 days",
        description: "Master Frontend Development Essentials with HTML, CSS, and JavaScript to create stunning web interfaces.",
        url:'/frontendEssentials'
    },
    {
        img: htmlcssJs,
        title: "HTML, CSS, and JavaScript Basics",
        category: "Web Development",
        price: "₹5,000",
        duration: "25 days",
        description: "Learn HTML, CSS, and JavaScript Basics to create engaging and responsive web pages.",
        url:'/HtmlCssJs'
    },
    {
        img: fullStack,
        title: "Complete Full Stack Development",
        category:["Web Development", "Best Selling"],
        price: "₹15,000",
        duration: "60 days",
        url:'/CompletefullStack',
        description: "Master Complete Full Stack Development with HTML, CSS, JavaScript, and backend technologies to build dynamic web applications.",
       
    },
    {
        img: mern,
        title: "Mastering the MERN Stack",
        category: "Web Development",
        price: "₹12,000",
        duration: "50 days",
        description: "Master the MERN Stack with MongoDB, Express.js, React, and Node.js to build robust, scalable web applications.",
        url:'/mernstack'
    },
    {
        img: meanStack,
        title: "Pro MEAN Stack Development",
        category: "Web Development",
        price: "₹12,000",
        duration: "50 days",
        url:'/MeanStack',
        description: "Excel in Pro MEAN Stack Development with MongoDB, Express.js, Angular, and Node.js to build scalable web applications."
    },

    // Mobile app dev
    {
        img: introMobiledev,
        title: "Intro to Mobile App Development",
        category: "Mobile App Development",
        price: " FREE (Online)",
        duration: "15 days",
        url:'/IntrotomobileappDev',
        description: "Dive into Mobile App Development and gain basic knowledge of App Development."
    },
    {
        img: appDevScratch,
        title: "Android App Development from Scratch",
        category: "Mobile App Development",
        price: "₹5,500",
        duration: "30 days",
        url:'/Androidappdev',
        description: "This course teaches Android basics: UI design, navigation, data storage, networking, Firebase integration, and app publishing."
    },
    {
        img: crossPlatformappDev,
        title: "Cross-Platform Mobile Apps with Flutter & React Native",
        category: "Mobile App Development",
        price: "₹12,000",
        duration: "45 days",
        url:'/CrossplatformappDev',
        description: "Explore cross-platform mobile app development with Flutter and React Native to build efficient, versatile applications."
    },

    // Game Development
    {
        img: fundamentalsofGameDev,
        title: "Fundamentals of Game Development",
        category: "Game Development",
        price: "₹4,200",
        duration: "20 days",
        url:'/FundamentalsofgameDev',
        description: "Master game development essentials with Unity, Unreal Engine, and design principles, covering programming, art creation, and building functional game projects."
    },
    {
        img: GamePhysicsandAI,
        title: "Game Physics and AI",
        category: ["Game Development"],
        price: "₹8,000",
        duration: "35 days",
        url:'/GamePhysicsAI',
        description: "Learn game physics, advanced AI, and integrate them into projects with optimization techniques for performance."
    },
    {
        img: gamedevMastery,
        title: "Mobile Game Development Mastery",
        category: "Game Development",
        price: "₹15,000",
        duration: "60 days",
        url:'/MobilegamedevMastery',
        description: "Master mobile game development with a focus on creating engaging and optimized gaming experiences."
    },

    // Tally
    {
        img: tallyFundamentals,
        title: "Tally Fundamentals & Applications",
        category: "Tally",
        price: "₹7,000",
        duration: "25 days",
        url:'/Tallyfundamentals',
        description: "Master Tally software and accounting principles, including inventory, taxation, payroll, and project integration."
    },
    {
        img: tallyprimewithGst,
        title: "Mastering Tally Prime with GST",
        category: "Tally",
        price: "₹12,000",
        duration: "40 days",
        url:'MasteringtallyprimewithGst',
        description: "Master Tally Prime with GST, covering basic to advanced accounting, inventory management, GST implementation, payroll, and final project integration."
    },

    // Stock Market
    {
        img: introtoStockMarket,
        title: "Introduction to Stock Market Investing",
        category: "Stock Market",
        price: "₹3,800",
        duration: "15 days",
        url:'/IntrotoStockmarketinvesting',
        description: "Learn the essentials of stock market investing, from fundamental and technical analysis to practical portfolio management."
    },
    {
        img: FundamentalTechnicalAnalysisforInvestors,
        title: "Fundamental & Technical Analysis for Investors",
        category: "Stock Market",
        price: "₹7,200",
        duration: "30 days",
        url:'/AnalysisforInvestor',
        description: "Master investment analysis, portfolio management, and real-world applications in this comprehensive course."
    },
    {
        img: AdvancedStockTradingTechniques,
        title: "Advanced Stock Trading Techniques",
        category: "Stock Market",
        price: "₹12,000",
        duration: "40 days",
        url:'/AdvancestockTrading',
        description: "Master stock trading with advanced technical analysis, quantitative techniques, derivatives, and risk management in this comprehensive course."
    },

    // UI/UX Design 
    {
        img: IntroductiontoUIUXDesignPrinciples,
        title: "Introduction to UI/UX Design Principles",
        category:[ "UI/UX Design","Best Selling"],
        price: " FREE (Online)",
        duration: "10 days",
        url:'/IntrotoUiux',
        description: "Learn UI/UX design fundamentals, from user research to prototyping, and create a final project in this comprehensive course."
    },
    {
        img: advanceuiuxTechniques,
        title: "Advanced UI/UX Design Techniques",
        category: "UI/UX Design",
        price: "₹8,000",
        duration: "25 days",
        url:'/AdvanceUiux',
        description: "Master advanced UI/UX design techniques, from user research to motion design, and complete a real-world project in this comprehensive course."
    },

    // Python Programming
    {
        img: PythonProgrammingforBeginners,
        title: "Python Programming for Beginners",
        category: "Python Programming",
        price: "FREE (Online)",
        duration: "15 days",
        url:'/PythonBeginner',
        description: "Learn Python programming from basics to data analysis, culminating in a final project in this comprehensive course."
    },
    {
        img: DataAnalysiswithPython,
        title: "Data Analysis with Python",
        category: ["Python Programming", "Best Selling"],
        price: "₹7,000",
        duration: "30 days",
        url:'/DataanalysisPython',
        description: "Master data analysis with Python, from data manipulation to visualization and statistical analysis, in this comprehensive 30-day course."
    },

    {
        img:webdevusingPython,
        title: "Web Development using Python",
        category:"Python Programming",
        price: "₹10,000",
        duration: "35 days",
        url:'/WebdevPython',
        description:"Learn web development from Python fundamentals to building and deploying web applications in this comprehensive course."
    },
    {
        img:AdvancedPythonProgramming   ,
        title: "Advanced Python Programming",
        category:"Python Programming",
        price: "₹12,000",
        duration:"40 days",
        url:'/AdvancePython',
        description:"Enhance your Python skills with advanced OOP, data structures, libraries, concurrency, and a final project in this comprehensive course."
    },
    {
        img:pythonFullstack   ,
        title: "Full Stack Python Development",
        category:["Python Programming"],
        price: "₹15,000",
        duration:"60 days",
        url:'/FullstackPython',
        description:"Learn Full Stack development with Python and JavaScript in a comprehensive 10-week course, covering backend basics, Flask, React.js, and advanced topics."
    },

    //Java Programming for Beginners
    {
        img:JavaProgrammingforBeginners        ,
        title: "Java Programming for Beginners",
        category:"Java Programming",
        price: "FREE (Online)",
        duration:"15 days",
        url:'/JavaBeginner',
        description:"Learn Java basics and object-oriented programming, including file handling, GUI programming with Swing, and basic data structures/algorithms in a 15-day course."
    },
    {
        img:JavaforWebMobileDev ,
        title: "Java for Web & Mobile Development",
        category:"Java Programming",
        price: "₹8,000",
        duration:"30 days",
        url:'/JavamobilewebDev',
        description:"Master Java for web and mobile development in 30 days: from basics and servlets/JSP to Spring, Hibernate, Android, and project deployment."
    },
    {
        img:advanceJava ,
        title: "Advanced Java Programming",
        category:"Java Programming",
        price: "₹10,000",
        duration:"35 days",
        url:'/AdvanceJava',
        description:"Master advanced Java programming in 35 days, covering design patterns, concurrency, JPA, Java EE, web services, Spring, performance tuning, and a final project."
    },

    //Programming Fundamentals 
    {
        img:fundamentalsofLang ,
        title: "Fundamentals of C, C++, Python, and Java",
        category:"Programming Fundamentals",
        price: "₹6,000",
        duration:"25 days",
        url:'/ProgrammingFundamentals',
        description:"Master programming basics and advanced concepts in C, C++, Python, and Java with a final integrated project in this 25-day course."
    },

    //Digital Marketing Fundamentals
    {
        img:digitalMarketingFundamentals ,
        title: "Digital Marketing Fundamentals",
        category:"Digital Marketing Fundamentals",
        price: "₹12,000",
        duration:"30 days",
        url:'/Digitalmarketing',
        description:"Explore digital marketing essentials including website strategy, content creation, social media tactics, paid advertising, and analytics in this comprehensive course."
    },
    {
        img:promptEngineering ,
        title: "Prompt Engineering - Introduction to Programming",
        category:["Prompt Engineering", "Best Selling"],
        price: "₹6,000",
        duration:"20 days",
        url:'/PromptEngineering',
        description:"Learn programming basics, functions, data structures, OOP principles, and project development with Git in this comprehensive course."
    },

    //.Git and GitHub Essentials
    {
        img:gitGithubEssentials ,
        title: "Git and GitHub Essentials",
        category:["Git and GitHub", "Best Selling"],
        price: "₹2,500",
        duration:"7 days",
        url:'/Gitgithub',
        description:"Explore Git and GitHub: Includes setup, essential commands, teamwork basics, advanced topics like conflict resolution and workflows, and real-world application in development."
    },



];

export default courses