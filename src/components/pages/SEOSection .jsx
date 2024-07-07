import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import seoImg from './img/seo img.png'

const SEOSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="flex flex-col lg:flex-row items-center bg-[#f6f6f6] py-10 px-5 md:px-10 lg:px-24"
    >
      <div className="w-full lg:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600">Professional SEO Services</h2>
        <div className="w-20 h-1 bg-blue-700 my-4"></div>
        <p className="text-gray-700 mb-6 text-xs md:text-base">
          Elevate your online presence with our professional SEO services. We employ strategic tactics
          including keyword research, on-page optimization, and link building to improve your website’s
          visibility and attract more qualified leads. Let our team of experts optimize your digital presence
          and drive success in the digital realm.
        </p>
      
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={seoImg}
          alt="SEO"
          className="w-full h-auto"
        />
      </div>
      
      
    </motion.div>
      <div className="flex flex-wrap gap-2 px-4 md:gap-5 md:px-24 bg-[#f6f6f6] py-10">
      {['CODE', 'DEVELOPMENT', 'INNOVATION', 'APP', 'NETWORKING', 'SUPPORT', 'INFRASTRUCTURE', 'SEM', 'CYBERSECURITY', 'DESIGN', 'UX/UI', 'DOMAINS', 'HOSTING', 'SEO', 'SOCIAL MEDIA', 'AI', 'ANALYTICS', 'CONTENT', 'KEYWORDS', 'TRAFFIC'].map((item, index) => (
        <div key={index} className="border-2 border-blue-700 text-xs md:text-xl text-blue-700 px-4 py-2 rounded hover:bg-blue-700 hover:text-white transition">
          {item}
        </div>
      ))}
    </div>
    </>
  );
};

export default SEOSection;
