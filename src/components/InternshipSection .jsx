import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGraduationCap, FaRegHandshake } from "react-icons/fa";
import { AiFillProject, AiFillClockCircle } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs"; // React icon for Networking Opportunities
import { AiOutlineClose } from "react-icons/ai";

// Define bounce and fade-in effect
const fadeInBounce = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60, // control bounciness
      damping: 10,  // control the smoothness
      duration: 0.6 // control how long the animation lasts
    }
  }
};

const InternshipSection = () => {
  const controls = useAnimation();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("internship-section");
      if (section) {
        const { top } = section.getBoundingClientRect();
        if (top < window.innerHeight * 0.75) {
          controls.start("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const handleOpenModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent("");
    setModalTitle("");
  };

  return (
    <section
      id="internship-section"
      className="bg-soft-blue text-gray-900 py-6 md:py-12 lg:py-20 px-4 md:px-8 lg:px-20"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={fadeInBounce}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-blue-500"
        >
          Supercharge Your Career with Divine Infotech Internships!
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={controls}
          variants={fadeInBounce}
          className="hidden md:block text-base mb-4 md:mb-6 lg:mb-8 text-gray-500"
        >
          Don't just learn, <strong>Experience</strong> the real world with our hands-on internships and exclusive certifications. Ready to make an impact!
        </motion.p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInBounce}
            className="bg-white text-black p-4 md:p-6 lg:p-8 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            onClick={() =>
              handleOpenModal(
                "Business Excellence",
                "Shape the future in Digital Marketing, HR, and more. Be the strategist!"
              )
            }
          >
            <FaGraduationCap className="text-3xl md:text-4xl lg:text-5xl mx-auto mb-4 text-[#3f51b5]" />
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Business Excellence
            </h3>
            <p className="text-sm md:text-base text-gray-600 hidden md:block">
              Shape the future in Digital Marketing, HR, and more.
            </p>
            <p className="text-sm md:text-base text-gray-600 block md:hidden">
              Discover more.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInBounce}
            className="bg-white text-black p-4 md:p-6 lg:p-8 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            onClick={() =>
              handleOpenModal(
                "Tech Innovation",
                "Build tomorrow’s web apps, design stunning UI/UX, or delve into AI/ML."
              )
            }
          >
            <AiFillProject className="text-3xl md:text-4xl lg:text-5xl mx-auto mb-4 text-[#f44336]" />
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Tech Innovation
            </h3>
            <p className="text-sm md:text-base text-gray-600 hidden md:block">
              Build tomorrow’s web apps, design stunning UI/UX, or delve into AI/ML.
            </p>
            <p className="text-sm md:text-base text-gray-600 block md:hidden">
              Discover more.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInBounce}
            className="bg-white text-black p-4 md:p-6 lg:p-8 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            onClick={() =>
              handleOpenModal(
                "Fast Track Programs",
                "Complete internships in 10-15 days with real-world projects. Speed + impact!"
              )
            }
          >
            <AiFillClockCircle className="text-3xl md:text-4xl lg:text-5xl mx-auto mb-4 text-[#ff9800]" />
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Fast Track Programs
            </h3>
            <p className="text-sm md:text-base text-gray-600 hidden md:block">
              Complete internships in 10-15 days with real-world projects.
            </p>
            <p className="text-sm md:text-base text-gray-600 block md:hidden">
              Discover more.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInBounce}
            className="bg-white text-black p-4 md:p-6 lg:p-8 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            onClick={() =>
              handleOpenModal(
                "Networking Opportunities",
                "Connect with industry leaders and peers to unlock new opportunities."
              )
            }
          >
            <BsFillPeopleFill className="text-3xl md:text-4xl lg:text-5xl mx-auto mb-4 text-[#4caf50]" />
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Networking Opportunities
            </h3>
            <p className="text-sm md:text-base text-gray-600 hidden md:block">
              Connect with industry leaders and peers.
            </p>
            <p className="text-sm md:text-base text-gray-600 block md:hidden">
              Discover more.
            </p>
          </motion.div>
        </div>
        <a
          href="https://forms.gle/hbHBBRKjnxufJTVq7"
          target="_blank"
          className="mt-6 md:mt-8 lg:mt-10 inline-block bg-blue-500 text-white py-3 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-full shadow-lg hover:bg-transparent border-2 hover:text-blue-600 border-blue-500 transition-colors font-semibold"
        >
          Apply Now & Start Your Journey!
        </a>
      </div>
      <hr className="mt-10 border-gray-300" />

      {/* Modal */}
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
          }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <AiOutlineClose className="text-xl" />
            </button>
            <h3 className="text-lg font-bold mb-4">{modalTitle}</h3>
            <p>{modalContent}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default InternshipSection;
