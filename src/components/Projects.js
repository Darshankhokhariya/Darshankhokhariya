import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

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
        <div className="bg-gray-900 text-white overflow-hidden ">
            {/* Header Section */}
            {/* Header Section */}
            <header className="flex justify-between items-center py-3 md:py-7 container mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-bold font-heading text-primary">
                    Recent Projects
                </h1>

                <button
                    className="px-6 py-2 text-sm md:text-base font-medium text-white bg-primary rounded-lg hover:bg-green-500 transition duration-300 ease-in-out flex items-center  gap-x-3"
                >
                    View All
                    <FaChevronRight />
                </button>

            </header>


            {/* Projects Section */}
            {projects.map((project, index) => (
                <section key={index} className="py-3 md:py-10">
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
                                <h2 className="text-3xl font-extrabold sm:text-4xl font-heading">
                                    {project?.title}
                                </h2>
                                <p className="my-4 text-gray-300 text-lg font-accent">
                                    {project?.description}
                                </p>
                                <Link
                                    href={`/projects/${project.title
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                    className="inline-block bg-gradient-to-r from-primary to-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Portfolio;
