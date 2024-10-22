import React, { useEffect } from 'react';
import BootcampJourney from './BootcampJourney';
import BootcampDetails from './BootcampDetails';
import WhyJoinBootcamp from './WhyJoinBootcamp';
import CodemasterHero from './codemasterHero';
import LimitedOffer from './codemasterLast';
import PainAgitateSolution from './PainAgitateSolution';



const CodeMasterBootcamp = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);

  return (
    <div className='bg-[#fafafc]  '>

      <CodemasterHero />
      <BootcampDetails />
      <PainAgitateSolution />
      <BootcampJourney />
      <div className=' bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]  bg-slate-950'>
        <WhyJoinBootcamp />
        <LimitedOffer />
      </div>
    </div>
  );
};

export default CodeMasterBootcamp;
