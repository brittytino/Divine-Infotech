// Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Courses from './CoursesSection';
import AdvantagesSection from './Advantage';
import AboutUs from './AboutUs';
import WhyChooseDivineInfotech from './WhyChoose';
import Testimonial from './Testimonial';
import Stats from './Stats';
import FaqServices from './FaqServices';
import ContactServices from './ContactFormServices';
import SocialServicespage from './SocialServicespage';
import Popup from './Popup';
import SEO from './SEO';
import InternshipSection from './InternshipSection ';
import Intern from './Intern';
import ResumeCourseCTA from './ResumeCourseCTA';
import MentorshipSessions from './MentorshipSessions';
import CTAcodemaster from './CTAcodemaster';

const Home = () => {
  return (
    <div>
      <SEO
        title="Divine Infotech - Premier EdTech and Web Development Services"
        description="Divine Infotech offers premier offline and online internships and courses in Full Stack Web Development, Python, Stock Market, Cloud Computing Azure, Digital Marketing, and Advanced Tally. Join us for valuable training and services in web development and digital marketing. Visit divineinfotech.org."
        keywords="Full Stack Web Development, Python Programming, Stock Market Course, Cloud Computing Azure, Digital Marketing Course, Advanced Tally, Offline Internship, Online Internship, Web Development Services, Digital Marketing Services, Divine Infotech"
      />
      <Popup />
      <div id="content" className="relative">
        <Hero />
        <ResumeCourseCTA/>
        <MentorshipSessions/>
       
        <Intern/>
        <AdvantagesSection />
        <Courses />
        <CTAcodemaster/>
        <WhyChooseDivineInfotech />
        <InternshipSection/>
        <Stats />
        <AboutUs />
        <FaqServices />
        <Testimonial />
        <ContactServices bgColor="bg-gray-50" />
        <SocialServicespage />
      </div>
    </div>
  );
};

export default Home;
