import fullStack from './img/course/fullstack.png';
import tallyprimewithGst from './img/course/tally fundamentals.jpg';
import AdvancedStockTradingTechniques from './img/course/Advanced Stock Trading Techniques.jpeg';
import fundamentalsofLang from './img/course/Programming_Fundamentals.jpg';
import comingSoon from './img/coming soon.jpeg';
import azureCloud from './img/course/azure cloud.png';
import aptitude from './img/course/aptitude.webp'
import digitalMarketing from './img/course/digitalMarketingFundamentals.jpeg'
import pythonImg from './img/course/python for beginners.webp'

const courses = [
    {
        img: fullStack,
        availability: true,
        title: "Complete Full Stack Development",
        category: ["Web Development", "Best Selling"],
        oldFees: "₹18,000",
        price: "₹15,000",
        duration: "65 days",
        url: '/CompletefullStack',
        description: "Dive into the world of web development with our all-encompassing course covering HTML, CSS, JavaScript, and backend technologies. Build robust, dynamic websites and web applications from scratch.",
    }, 
    {
        img: AdvancedStockTradingTechniques,
        availability: true,
        title: "Advanced Stock Trading Techniques",
        category: ["Stock Market", "Best Selling"], 
        oldFees: "₹12,000",
        price: "₹10,000",
        duration: "45 days",
        url: '/AdvancestockTrading',
        description: "Understand the intricacies of the stock market and become proficient in trading strategies. Our course offers deep insights into market analysis, investment strategies, and risk management."
    },
    {
        img: pythonImg,
        availability: true,
        title: "Python for Beginners",
        category: ["Best Selling"], 
        oldFees: "₹14,000",
        price: "₹12,000",
        duration: "50 days",
        url: '/python',
        description: "Learn Python, one of the most versatile and in-demand programming languages. Our course covers everything from basic syntax to advanced topics, enabling you to build complex applications and automate tasks."
    },
    
    {
        img: azureCloud,
        availability: false,
        title: "Mastering Azure: Cloud Computing Excellence",
        category: ["Upcoming courses"],
        oldFees: "₹18,500",
        price: "₹15,000",
        duration: "30 days",
        // url: '/azurecloud',
        description: " Master the essentials of cloud computing with Microsoft Azure. Learn to design, deploy, and manage cloud-based applications and services, preparing you for a career in this rapidly growing field.",
    },
    {
        img: digitalMarketing,
        availability: true,
        title: "Digital Marketing Fundamentals",
        category: ["Upcoming courses"],
        oldFees: "₹14,999",
        price: "₹11,499",
        duration: "35 days",
        // url: '/digital-marketing',
        description: " Become an expert in digital marketing with our comprehensive course. Covering SEO, SEM, social media marketing, email marketing, and more, this course equips you with the skills to effectively market products and services online.",
    },
    {
        img: tallyprimewithGst,
        availability: true,
        title: "Mastering Tally Prime with GST",
        category:["Upcoming courses"],
        oldFees: "₹20,000",
        price: "₹18,000",
        duration: "45 days",
        // url: 'tally',
        description: "Enhance your accounting skills with our advanced Tally course. Learn to efficiently manage financial transactions, generate reports, and maintain accurate records."
    },
    {
        img: fundamentalsofLang,
        availability: true,
        title: "Fundamentals of C, C++, Python, and Java",
        category: ["Upcoming courses"],
        oldFees: "₹14,000",
        price: "₹12,000",
        duration: "30 days",
        // url: '/ProgrammingFundamentals',
        description: "Master programming basics and advanced concepts in C, C++, Python, and Java with a final integrated project in this 25-day course."
    },
     
    {
        img: aptitude,
        availability: true,
        title: "Comprehensive Aptitude Training",
        category: ["Upcoming courses"],
        oldFees: "₹15,000",
        price: "₹12,000",
        duration: "30 days",
        // url: '/aptitude',
        description: "Enhance your problem-solving skills with our Comprehensive Aptitude Training. Master key concepts and techniques to excel in competitive exams.",
    },  
    
   
    
    {
        img: comingSoon,
        availability: true,
        title: "Flutter Beginner",
        category: ["Upcoming courses"],
        price: "Free",
        duration: "20 days",
        url: '',
        description: "Kickstart your mobile app development journey with Flutter. Learn to build beautiful, natively compiled applications for mobile from a single codebase."
    },
    {
        img: comingSoon,
        availability: true,
        title: "Ethical Hacking",
        category: ["Upcoming courses"],
        price: "Free",
        duration: "25 days",
        url: '',
        description: "Uncover the secrets of cybersecurity by learning ethical hacking techniques. Gain the skills to protect systems and networks from malicious attacks."
    },
    {
        img: comingSoon,
        availability: true,
        title: "Web scrapping",
        category: ["Upcoming courses"],
        price: "Free",
        duration: "30 days",
        url: '',
        description: "Learn to extract valuable data from websites efficiently using modern web scraping techniques. Ideal for anyone looking to enhance their data collection and analysis skills."
    }
];

export default courses;
