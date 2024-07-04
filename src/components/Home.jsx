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

const Home = () => {
  return (
    <div>
      <Popup />
      <div id="content" className="relative">
        <Hero />
        <AdvantagesSection />
        <Courses />
        <WhyChooseDivineInfotech />
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
