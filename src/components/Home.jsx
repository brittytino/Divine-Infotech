import Hero from '../components/Hero'
import Courses from './CoursesSection'
import AdvantagesSection from './Advantage'
import AboutUs from './AboutUs'
import WhyChooseDivineInfotech from './WhyChoose'
import Testimonial from './Testimonial'
import Stats from './Stats'
import FaqServices from './FaqServices'
import ContactServices from './ContactFormServices'
import SocialServicespage from './SocialServicespage'



const Home=()=>{
    return ( 
        <div>
    
      <Hero/>
      <AdvantagesSection/> 
      <Courses/> 
      <WhyChooseDivineInfotech/>
      <Stats/>
      <AboutUs/>
      <FaqServices/>
      <Testimonial/>
      
      <ContactServices bgColor="bg-gray-50" />
      <SocialServicespage/>
      
      
      
        </div>
    )
}

export default Home