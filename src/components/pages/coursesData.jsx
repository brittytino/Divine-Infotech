
import fullStack from './img/course/fullstack.png';



// Tally 
import tallyprimewithGst from './img//course/tally fundamentals.jpg';

// Stock Market 
import AdvancedStockTradingTechniques from './img/course/Advanced Stock Trading Techniques.jpeg';


// Fundamentals
import fundamentalsofLang from './img/course/Programming_Fundamentals.jpg';

import comingSoon from './img/coming soon.jpeg'
import azureCloud from './img/course/azure cloud.png'

const courses = [
     // Tally

     {
        img: tallyprimewithGst,
        availability : true,
        title: "Mastering Tally Prime with GST",
        category: ["Tally" , "Best Selling"],
        oldFees: "₹28,000",
        price: "₹20,000",
        duration: "45 days",
        url: 'tally',
        description: "Master Tally Prime with GST, covering basic to advanced accounting, inventory management, GST implementation, payroll, and final project integration."
    },

     // Stock Market

     {
        img: AdvancedStockTradingTechniques,
        availability : false,
        title: "Advanced Stock Trading Techniques",
        category: ["Stock Market", "Best Selling"], 
        oldFees: "₹20,000",
        price: "₹15,000",
        duration: "45 days",
        url: '/AdvancestockTrading',
        description: "Master stock trading with advanced technical analysis, quantitative techniques, derivatives, and risk management in this comprehensive course."
    },

    {
        img: azureCloud,
        availability : false,
        title: "Mastering Azure: Cloud Computing Excellence",
        category: ["Cloud", "Best Selling"],
        oldFees: "₹25,000",
        price: "₹18,000",
        duration: "30 days",
        url: '/azurecloud',  
        description: "Master Azure Cloud and enhance your IT skills by learning to deploy, manage, and scale applications seamlessly.",

    },


    {
        img: fullStack,
        availability : false,
        title: "Complete Full Stack Development",
        category: ["Web Development", "Best Selling"],
        oldFees: "₹40,000",
        price: "₹30,000",
        duration: "65 days",
        url: '/CompletefullStack',
        description: "Master Complete Full Stack Development with HTML, CSS, JavaScript, and backend technologies to build dynamic web applications.",

    },

     //Programming Fundamentals 
     {
        img: fundamentalsofLang,
        availability : false,
        title: "Fundamentals of C, C++, Python, and Java",
        category: ["Programming Fundamentals" , "Best Selling"],
        oldFees: "₹25,000",
        price: "₹20,000",
        duration: "30 days",
        url: '/ProgrammingFundamentals',
        description: "Master programming basics and advanced concepts in C, C++, Python, and Java with a final integrated project in this 25-day course."
    },

   
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