import React, { useEffect } from 'react';
import './Testimonial.css'; // Import the custom CSS file

const Testimonial = () => {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  // }, []);

  return (
    <div id='testimonial' className="testimonials-container bg-white text-blue-700 py-12">
  
  <div class="elfsight-app-012d44d5-cf12-4b33-ba02-f18edd9bc0e1" data-elfsight-app-lazy></div>
    </div>
  );
};

export default Testimonial;
