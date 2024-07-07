import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import { useInView } from 'react-intersection-observer';
// import ServiceImg1 from '../images/service img1.png';
import ServiceImg1 from '../images/service 1.webp'
import ServiceImg2 from '../images/service img 2.png';
import ServiceImg3 from '../images/responsive img.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ServicesHero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation once
        threshold: 0.3 // Trigger animation when 30% of the element is in view
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-green-50 flex items-center pt-20 pb-32 px-6 lg:px-24"
        >
            <div className="container mx-auto flex flex-col lg:flex-row pb-10 items-center justify-between">
                <div className="lg:w-1/2 md:mb-5 lg:mb-0">
                    <h3 className="text-gray-700 text-sm md:text-base">Web Development and Digital Marketing Firm</h3>
                    <h1 className=" text-4xl md:text-5xl font-bold text-gray-900 mt-4" style={{ lineHeight: '1.2' }}>
                        Grow your Business with <span className=' text-yellow-600'> Divine Infotech</span>
                    </h1>
                    <p className="text-gray-700 mt-4">Get a professional website and digital marketing support for your business within your budget.</p>
                    <button className="mt-6 px-6 py-3 text-lg bg-black hover:text-white font-medium flex items-center space-x-2 bg-transparent hover:bg-black border-2 text-black border-black transition-all rounded-full">
                      <a href="/contact">  <span>Let's Talk</span></a>
                        <FaArrowRight />
                    </button>
                </div>
                <div className="lg:w-1/2 w-full">
                    <Slider {...settings}>
                        {[ServiceImg1, ServiceImg2, ServiceImg3].map((img, index) => (
                            <div key={index} className="relative h-96 overflow-hidden rounded-lg">
                                <img src={img} alt={`Service ${index + 1}`} className="absolute inset-0 w-full h-full object-contain lg:object-fill" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </motion.div>
    );
};

export default ServicesHero;
