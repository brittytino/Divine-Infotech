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
    <div className='bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'>

      <CodemasterHero />
      <BootcampDetails />
      <PainAgitateSolution />
      <BootcampJourney />
      <div className='[background:radial-gradient(125%_125%_at_50%_30%,#000_40%,#63e_100%)]'>
        <WhyJoinBootcamp />
        <LimitedOffer />
      </div>
    </div>
  );
};

export default CodeMasterBootcamp;
