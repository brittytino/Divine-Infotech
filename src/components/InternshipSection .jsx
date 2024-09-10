import { FaGraduationCap, FaRegHandshake } from "react-icons/fa";
import { AiFillProject, AiFillClockCircle } from "react-icons/ai";

const InternshipSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-700 text-white py-6 md:py-12 lg:py-20 px-4 md:px-8 lg:px-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 lg:mb-8">
          Supercharge Your Career with Divine Infotech Internships!
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6 lg:mb-8">
          Don't just learn—**experience** the real world with our hands-on internships and exclusive certifications. 
          Dive into business or tech, and make an impact!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <div className="bg-white text-black p-4 md:p-6 lg:p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <FaGraduationCap className="text-3xl md:text-4xl lg:text-5xl mx-auto mb-4 text-indigo-600" />
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Business Excellence</h3>
            <p className="text-sm md:text-base">Shape the future in Digital Marketing, HR, and more. Be the strategist!</p>
          </div>
          <div className="bg-white text-black p-4 md:p-6 lg:p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <AiFillProject className="text-3xl md:text-4xl lg:text-5xl mx-auto mb-4 text-indigo-600" />
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Tech Innovation</h3>
            <p className="text-sm md:text-base">Build tomorrow’s web apps, design stunning UI/UX, or delve into AI/ML.</p>
          </div>
          <div className="bg-white text-black p-4 md:p-6 lg:p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <AiFillClockCircle className="text-3xl md:text-4xl lg:text-5xl mx-auto mb-4 text-indigo-600" />
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Fast Track Programs</h3>
            <p className="text-sm md:text-base">Complete internships in 10-15 days with real-world projects. Speed + impact!</p>
          </div>
        </div>
        <a
          href="https://forms.gle/hbHBBRKjnxufJTVq7" target="blank"
          className="mt-6 md:mt-8 lg:mt-10 inline-block bg-yellow-500 text-black py-3 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-full shadow-lg hover:bg-yellow-600 transition-colors font-semibold"
        >
          Apply Now & Start Your Journey!
        </a>
      </div>
    </section>
  );
};

export default InternshipSection;
