import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaChevronRight } from "react-icons/fa";

const Portfolio = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
    }, []);

    const projects = [
        {
            title: "Traveldate",
            description: "Connect travelers looking to share journeys",
            image: "./images/traveldate/1.jfif",
        },
        {
            title: "Adopus recruitment portal",
            description:
                "Discover the latest job opportunities tailored for your skills and aspirations. Our user-friendly platform connects job seekers with employers looking for talent.",
            image: "./images/adopus2.jpg",
        },
    ];

    return (
        <div className="bg-gray-900 text-white">
            {/* Header Section */}
            <header className="text-center py-7">
                <h1 className="text-4xl font-bold">Recent Projects</h1>
            </header>

            {/* Projects Section */}
            {projects.map((project, index) => (
                <section key={index} className="py-10">
                    <div
                        className="container mx-auto px-4 sm:px-6 lg:px-8"
                        data-aos="fade-up" // AOS Animation
                    >
                        <div
                            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 ${index % 2 === 0
                                ? "order-1"
                                : "order-2"
                                }`}
                        >
                            <div
                                className={`mt-12 md:mt-0 md:h-[500px] w-full ${index % 2 === 0
                                    ? "order-1"
                                    : "order-1 md:order-2"
                                    }`}
                                data-aos="fade-right" // AOS Animation
                            >
                                <img
                                    src={project?.image}
                                    alt={project?.title}
                                    className="object-cover object-top rounded-lg shadow-md h-full w-full"
                                />
                            </div>
                            <div
                                className={`max-w-lg ${index % 2 === 0
                                    ? "order-2"
                                    : "order-1"
                                    }`}
                                data-aos="fade-left" // AOS Animation
                            >
                                <h2 className="text-3xl font-extrabold sm:text-4xl">
                                    {project?.title}
                                </h2>
                                <p className="mt-4 text-gray-300 text-lg">
                                    {project?.description}
                                </p>
                                <div className="flex items-center justify-start mt-8">
                                    <button className="relative group inline-block px-6 py-3 font-semibold leading-6 text-white bg-gray-800 shadow-2xl rounded-xl transition-transform duration-300 hover:scale-105 active:scale-95">
                                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 opacity-0 p-[2px] group-hover:opacity-100 transition-opacity duration-500"></span>
                                        <span className="relative z-10 bg-gray-950 rounded-xl">
                                            <span className="flex items-center space-x-2">
                                                <span className="transition-transform duration-500 group-hover:translate-x-1">
                                                    Let's get started
                                                </span>
                                                <FaChevronRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" />
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Portfolio;
