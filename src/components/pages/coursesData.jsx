import fullStack from './img/course/fullstack.png';
import flutterImg from './img/course/flutter.png'
import digitalMarketing from './img/course/digitalMarketingFundamentals.jpeg'
import pythonImg from './img/course/Python data science.png'

const courses = [
    {
        img: fullStack,
        availability: true,
        title: "Become the Developer Companies Need",
        courseName: "Full Stack Web Development",
        category: ["Web Development", "Best Selling"],
        oldFees: "₹18,000",
        price: "₹15,000",
        duration: "90 days",
        url: '/Courses/fullStack',
        shortDesc:"Struggling to get noticed by tech companies? Our Full Stack Web Development Course covers everything from frontend to backend—HTML, CSS, JavaScript, React, Node.js, MongoDB, and more.",
        description: "Dive into the world of web development with our all-encompassing course covering HTML, CSS, JavaScript, and backend technologies. Build robust, dynamic websites and web applications from scratch.",
    }, 
    {
        img: pythonImg,
        availability: true,
        title: "Master the Data Game – Companies Need You!",
        courseName:"Python Data Science",
        category: ["Best Selling"],
        oldFees: "₹14,000",
        price: "₹12,000",
        duration: "30 days",
        url: '/courses/python-data-science',
        shortDesc:"Learn from scratch to expert level, covering Pandas, Numpy, Matplotlib, and Machine Learning. With industry-level projects and real datasets, you’ll be solving real business problems.",
        description: "Does diving into Data Science with Python seem intimidating? Master key skills such as data manipulation, visualization, and machine learning in no time. With hands-on projects and real-world datasets."
    },
    
    {
        img: flutterImg,
        availability: true,
        title: "Design Apps that Users Love!",
        courseName:"Mobile App Development with Flutter",
        category: ["Best Selling"],
        price: "₹10000",
        duration: "20 days",
        url: '/courses/flutter-developer',
        shortDesc:"learn to build stunning, responsive apps for both Android and iOS from a single codebase. You'll create apps that wow users and solve real-world problems.",
        description: "Kickstart your mobile app development journey with Flutter. Learn to build beautiful, natively compiled applications for mobile from a single codebase."
    },
    {
        img: digitalMarketing,
        availability: true,
        title: "Digital Marketing Mastery",
        category: ["Other Courses"],
        oldFees: "₹14,999",
        price: "₹11,499",
        duration: "35 days",
        url: '/digital-marketing',
        description: " Become an expert in digital marketing with our comprehensive course. Covering SEO, SEM, social media marketing, email marketing, and more, this course equips you with the skills to effectively market products and services online.",
    },

   
    
];

export default courses;
