import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaCode, FaChartLine, FaChalkboardTeacher } from 'react-icons/fa';

import Stats from './Stats';
import ServicesHero from './ServicesHero';

// import webDev from '../images/webDev.jpg';
// import uiUx from '../images/uiUx.png';
// import dataAnalytics from '../images/data Analytics.png';
// import lmsDev from '../images/lms dev.jpg';
import Eyecatch from './Eyecatch';
import WebDevComp from './WebandDevComp';
import WebDesignSection from './WebDesignSection ';
import DigitalMarketingSection from './DigitalMarketingSection ';
import SocialMediaMarketing from './SocialMediaMarketing ';
import EmailMarketingServices from './EmailMarketingServices ';
import SEOSection from './pages/SEOSection ';

const Services = () => {
  return (
    <div className="bg-green-50 min-h-screen">

      {/* web dev  */}
      <ServicesHero />
      <Eyecatch />
      <WebDevComp />
      <WebDesignSection />
      <hr className=' shadow-lg py-1' />

      {/* digital marketing  */}
      <EmailMarketingServices/>
      <DigitalMarketingSection/>
      <SEOSection/>
      <SocialMediaMarketing/>

      <a href="/contact" className=' flex justify-center items-center my-5'><button className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-transparent transition-all border-2 hover:border-black hover:text-black ">
          Get a Quote →
        </button></a> 
      {/* <Stats /> */}
    </div>

  );
};



export default Services;
