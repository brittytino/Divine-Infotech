import React, { useEffect } from 'react';
import './Testimonial.css'; // Import the custom CSS file

const Testimonial = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="testimonials-container bg-white text-blue-700 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className=" text-2xl md:text-3xl font-semibold mb-6 text-center text-blue-600">Discover What Our <span className='text-blue-600'>Customers Say !</span> </h2>
        <div className="sk-ww-google-reviews" data-embed-id="25426757"></div>
      </div>
    </div>
  );
};

export default Testimonial;
