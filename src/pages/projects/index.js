import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Web", "Landing Pages", "Applications"];

    const projects = [
        {
            title: "Traveldate",
            category: "Web Application",
            description: "Connect travelers looking to share journeys.",
            images: ["/images/traveldate/traveldate.png", "/images/traveldate/1.jpg", "/images/traveldate/2.jpg"],
        },
        {
            title: "Adopus Recruitment Portal",
            category: "Web",
            description:
                "Discover the latest job opportunities tailored for your skills and aspirations.",
            images: ["/images/adopus/adopus.png", "/images/adopus/adopus2.jpg", "/images/adopus/adopus1.jpg"],
        },
        {
            title: "Vendor Management",
            category: "Web",
            description:
                "Comprehensive Vendor Management System with role-based access, user authentication, and features to manage vendors, blogs, and events seamlessly.",
            images: ["/images/canconnect/canconnect.png", "/images/canconnect/1.png", "/images/canconnect/2.png"],
        },
        {
            title: "Pharmaceutical Website",
            category: "Web",
            description:
                "Designed and developed a user-friendly pharmaceutical website with responsive UI for seamless navigation and efficient product management.",
            images: ["/images/stepmed/stepmed.png", "/images/stepmed/1.png", "/images/stepmed/2.png"],
        },
        {
            title: "Vianee Jewels",
            category: "Web",
            description:
                "Elegant jewelry management platform with responsive UI for showcasing collections.",
            images: ["/images/vianee/vianne.png", "/images/vianee/vianee1.png", "/images/vianee/vianee2.png"],
        },
        {
            title: "Application Overview",
            category: "Landing Pages",
            description:
                "A beautifully crafted landing page that provides a comprehensive overview of the application. Designed with a responsive and visually appealing layout, it effectively highlights the application's features and functionality, offering an engaging user experience.",
            images: ["/images/landing.png"],
        },
    ];

    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <div className="bg-gray-900 min-h-screen text-white px-2 md:px-10">
            {/* Header Section */}

            <section className="py-8">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold">Your Vision, Perfected in Code</h2>
                    <p className="text-gray-400 mt-2">
                        Explore my completed projects across various categories.
                    </p>
                </div>
            </section>

            {/* Category Tabs */}

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {categories?.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-lg text-sm md:text-base ${activeCategory === category
                                ? "bg-primary text-white"
                                : "bg-gray-800 text-gray-400"
                                } hover:bg-primary hover:text-white transition`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Project Cards */}

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative bg-gray-800 p-2 rounded-lg shadow-lg overflow-hidden"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-80 overflow-hidden rounded-lg">
                            <Image
                                src={project?.images[0]}
                                alt={project?.title}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                layout="fill"
                            />
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                            <p className="text-gray-200 mt-2 px-3">{project.description}</p>
                            {/* Button Section */}
                            <Link
                                href={`/projects/${project.title
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                            >
                                <button className="text-white bg-primary px-4 rounded py-1.5 mt-4 inline-block">
                                    View Details
                                </button>
                            </Link>
                        </div>

                        {/* Before-After Effect */}
                        <div className="absolute inset-0">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Portfolio;
