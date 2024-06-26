import Hero from '../components/Hero'
import Courses from './CoursesSection'
import AdvantagesSection from './Advantage'
import AboutUs from './AboutUs'
import WhyChooseDivineInfotech from './WhyChoose'
import Testimonial from './Testimonial'


const Home=()=>{
    return ( 
        <div>
    
      <Hero/>
      <AdvantagesSection/> 
      <Courses/> 
      <WhyChooseDivineInfotech/>
      <AboutUs/>
      <Testimonial/>
      
      
        </div>
    )
}

export default Home