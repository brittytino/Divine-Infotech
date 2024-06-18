import Hero from '../components/Hero'
import Courses from './Courses'
import AdvantagesSection from './Advantage'
import AboutUs from './AboutUs'
import WhyChooseDivineInfotech from './WhyChoose'
import Footer from './Footer'
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
      <Footer/>
      
      
        </div>
    )
}

export default Home