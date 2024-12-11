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
            title: "Vendor Management",
            description:
                "Comprehensive Vendor Management System with role-based access, user authentication, and features to manage vendors, blogs, and events seamlessly.",
            image: "./images/canconnect/1.png",
        },
    ];

    return (
        <div className="bg-gray-900 text-white overflow-hidden md:px-10 ">
            {/* Header Section */}
            {/* Header Section */}
            <header className="flex justify-between items-center py-3 md:py-7 container mx-auto px-3 md:px-2 lg:px-4">
                <h1 className="text-3xl md:text-4xl font-bold font-heading text-primary ">
                    Recent <br className="block md:hidden" /> Projects
                </h1>

                <Link href="/projects" className="">
                    <button className="px-6 py-2 text-sm md:text-base font-medium text-white bg-primary rounded-lg hover:bg-green-500 transition duration-300 ease-in-out flex items-center gap-x-3">
                        View All
                        <FaChevronRight className="hidden md:block" />
                    </button>
                </Link>

            </header>


            {/* Projects Section */}
            {projects.map((project, index) => (
                <section key={index} className="py-3 md:py-10">
                    <div
                        className="container mx-auto px-4 sm:px-6 lg:px-8"
                        data-aos="fade-up" // AOS Animation
                    >
                        <div
                            className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-8 ${index % 2 === 0
                                ? "order-1"
                                : "order-2"
                                }`}
                        >
                            <div
                                className={`mt-12 md:mt-0 md:h-[500px] w-full ${index % 2 === 0
                                    ? "order-1"
                                    : "order-1 lg:order-2"
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
