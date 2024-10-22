import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import avatar1 from './img/avatar1.jpg';
import avatar2 from './img/avatar 2.png';
import avatar3 from './img/avatar 3.jpg';

const testimonials = [
  {
    name: "Pravin B",
    review: "The course was extremely useful. It helped me get placed in a top company.",
    Batch: "Batch - JUNE 2024",
    avatar: avatar1,
  },
  {
    name: "Sudharshini P",
    review: "A very comprehensive course. I am now working with one of the leading firms in the industry.",
    Batch: "Batch - FEB 2024",
    avatar: avatar2,
  },
  {
    name: "Sruthi K",
    review: "This course was a game-changer for my career. I landed a job in a reputed organization thanks to the skills I gained.",
    Batch: "Batch - FEB 2024",
    avatar: avatar3,
  },
];


const CourseTestimonial = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    sliderRef.current = new KeenSlider("#keen-slider", {
      loop: true,
      slides: {
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });
  }, []);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.prev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.next();
    }
  };

  return (
    <section className=" py-10 px-8 lg:px-32 ">
      <div className=" ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-1 lg:items-center lg:gap-16">
          <div  className=" text-center sm:text-left">
            <h2 className="md:text-3xl text-xl font-bold tracking-tight text-gray-900 ">
              Don't just take our word for it...
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-700">
              Hear from our successful students who have landed their dream jobs. Become a person who stands out from the crowd !!!
            </p>
           
          </div>

          <div className="lg:col-span-2">
            <div id="keen-slider" className="keen-slider mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white border-2 border-blue-500 rounded-md p-3 md:p-6 shadow-sm ">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full"
                      />
                      <div>
                        <p className="text-lg font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.Batch}</p>
                      </div>
                    </div>
                    <p className="md:mt-4 text-sm md:text-base text-gray-700">{testimonial.review}</p>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              aria-label="Previous slide"
              onClick={handlePrevClick}
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white mx-2"
            >
              <FaChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next slide"
              onClick={handleNextClick}
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white mx-2"
            >
              <FaChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseTestimonial;
