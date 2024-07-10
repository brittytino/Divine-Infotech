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
    company: "Batch - JUNE 2024",
    avatar: avatar1,
  },
  {
    name: "Sudharshini P",
    review: "A very comprehensive course. I am now working with one of the leading firms in the industry.",
    company: "Batch - FEB 2024",
    avatar: avatar2,
  },
  {
    name: "Sruthi K",
    review: "This course was a game-changer for my career. I landed a job in a reputed organization thanks to the skills I gained.",
    company: "Batch - FEB 2024",
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
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16 lg:px-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Don't just take our word for it...
            </h2>
            <p className="mt-4 text-gray-700">
              Hear from our successful students who have landed their dream jobs. Join them and enhance your career with our comprehensive Tally Prime with GST course.
            </p>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                onClick={handlePrevClick}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <FaChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next slide"
                onClick={handleNextClick}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <FaChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div id="keen-slider" className="keen-slider mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white border border-blue-600 rounded-md p-6 shadow-sm sm:p-8 lg:p-12">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full"
                      />
                      <div>
                        <p className="text-lg font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-700">{testimonial.review}</p>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="flex lg:hidden mt-8 justify-center">
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
