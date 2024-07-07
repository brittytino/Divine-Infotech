import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Social Media Marketing',
    description: 'Boost engagement and reach with targeted social media.',
    imgUrl: 'https://nexusinfo.in/wp-content/uploads/2024/04/campaign.png',
  },
  {
    title: 'Social Media Management',
    description: 'Efficiently handle social media platforms for maximum impact.',
    imgUrl: 'https://nexusinfo.in/wp-content/uploads/2024/04/channel.png',
  },
  {
    title: 'Personal Branding',
    description: 'Founders use personal branding on social media to promote their brands.',
    imgUrl: 'https://nexusinfo.in/wp-content/uploads/2024/06/vip.png',
  },
  {
    title: 'Content Marketing',
    description: 'Engage audiences with compelling and valuable content strategies.',
    imgUrl: 'https://nexusinfo.in/wp-content/uploads/2024/04/infographic.png',
  },
  {
    title: 'Email Marketing',
    description: 'Reach customers directly with personalized email campaigns.',
    imgUrl: 'https://nexusinfo.in/wp-content/uploads/2024/04/platform.png',
  },
  {
    title: 'SEO Service',
    description: 'Increase online visibility and attract more organic traffic.',
    imgUrl: 'https://nexusinfo.in/wp-content/uploads/2024/04/exploration.png',
  },
];

const DigitalMarketingSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="bg-[#edfbe2] py-16 px-10 md:px-28 mb-10">
      <div className="text-left mb-12">
        <h2 className="text-4xl font-semibold text-gray-800">Unlock Your Digital Potential</h2>
        <p className="text-lg text-gray-600 mt-4">
          Elevate your online presence with our strategic digital marketing solutions tailored to your business needs.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-6 py-8 shadow-md hover:shadow-lg md:hover:shadow-xl flex items-start border border-gray-300 hover:border-black transition-all"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img src={service.imgUrl} alt={service.title} className="w-12 h-12 mr-4" />
            <div>
              <h3 className="text-base md:text-lg font-medium text-black mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DigitalMarketingSection;
