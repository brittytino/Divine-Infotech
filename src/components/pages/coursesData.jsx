import fullStack from './img/course/fullstack.png';
import flutterImg from './img/course/flutter.png'
import digitalMarketing from './img/course/digitalMarketingFundamentals.jpeg'
import pythonImg from './img/course/Python data science.png'

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
        img: pythonImg,
        availability: true,
        title: "Python for Data Science",
        category: ["Best Selling"],
        oldFees: "₹14,000",
        price: "₹12,000",
        duration: "30 days",
        url: '/python-full-stack',
        description: "Does diving into Data Science with Python seem intimidating? Master key skills such as data manipulation, visualization, and machine learning in no time. With hands-on projects and real-world datasets."
    },
    {
        img: digitalMarketing,
        availability: true,
        title: "Digital Marketing Mastery",
        category: ["Best Selling"],
        oldFees: "₹14,999",
        price: "₹11,499",
        duration: "35 days",
        url: '/digital-marketing',
        description: " Become an expert in digital marketing with our comprehensive course. Covering SEO, SEM, social media marketing, email marketing, and more, this course equips you with the skills to effectively market products and services online.",
    },

   
    {
        img: flutterImg,
        availability: true,
        title: "Flutter Beginner",
        category: ["Other courses"],
        price: "Free",
        duration: "20 days",
        url: '',
        description: "Kickstart your mobile app development journey with Flutter. Learn to build beautiful, natively compiled applications for mobile from a single codebase."
    },
    
];

export default courses;
