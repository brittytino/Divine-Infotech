import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaChartLine, FaRegListAlt, FaLaptopCode, FaRobot } from 'react-icons/fa';

const InternshipPrograms = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    const programs = [
        {
            category: 'Technical Domains',
            domains: [
                { title: 'Web Development', icon: FaLaptopCode },
                { title: 'App Development', icon: FaLaptopCode },
                { title: 'UI/UX Design', icon: FaLaptopCode },
                { title: 'AI & ML', icon: FaRobot },
                { title: 'Data Analysis', icon: FaLaptopCode },
            ],
        },
        {
            category: 'Business Domains',
            domains: [
                { title: 'Digital Marketing', icon: FaChartLine },
                { title: 'Market Research', icon: FaRegListAlt },
                { title: 'Recruitment (HR)', icon: FaRegListAlt },
                { title: 'Business Development', icon: FaRegListAlt },
                { title: 'Supply Chain Management', icon: FaRegListAlt },
            ],
        },
    ];

    return (
        <section className="py-12 px-6 md:py-20 md:px-20 bg-gray-100">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">
                    Explore Our Internship Programs
                </h2>
                <p className="text-lg md:text-xl text-gray-600">
                    Choose a domain that suits your career path.
                </p>
            </div>

            <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
                {programs.map((program, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transform transition-all duration-500 hover:bg-yellow-50"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                        transition={{ delay: idx * 0.2, duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-red-600">{program.category}</h3>
                        <ul className="space-y-4">
                            {program.domains.map((domain, i) => (
                                <li key={i} className="flex items-center hover:bg-yellow-100 p-2 hover:rounded-md hover:shadow-md hover:text-red-600">
                                    <domain.icon className="text-red-500 mr-3" />
                                    <span className="text-lg">{domain.title}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
            <div className='justify-center items-center flex'>
            <a
                    href="https://forms.gle/hbHBBRKjnxufJTVq7" target="_blank"
                    className="mt-6 md:mt-8 lg:mt-10 inline-block bg-transparent text-red-600 border border-red-600  hover:text-white py-3 px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-full shadow-lg hover:bg-[#c50900] transition-colors font-semibold"
                >
                    Apply Now & Start Your Journey!
                </a></div>
        </section>
    );
};

export default InternshipPrograms;
