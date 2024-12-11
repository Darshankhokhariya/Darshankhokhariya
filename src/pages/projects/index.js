import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Web Application", "Landing Pages", "Applications"];

    const projects = [
        {
            title: "Traveldate",
            category: "Web Application",
            description: "Connect travelers looking to share journeys.",
            images: ["/images/traveldate/1.jfif", "/images/traveldate/2.jfif"],
        },
        {
            title: "Adopus Recruitment Portal",
            category: "Landing Pages",
            description:
                "Discover the latest job opportunities tailored for your skills and aspirations.",
            images: ["/images/adopus/adopus2.jpg", "/images/adopus/adopus1.jpg"],
        },
        {
            title: "Vendor Management",
            category: "Web Application",
            description:
                "Comprehensive Vendor Management System with role-based access, user authentication, and features to manage vendors, blogs, and events seamlessly.",
            images: ["/images/canconnect/1.png", "/images/canconnect/2.png"],
        },
        {
            title: "Pharmaceutical Website",
            category: "Landing Pages",
            description:
                "Designed and developed a user-friendly pharmaceutical website with responsive UI for seamless navigation and efficient product management.",
            images: ["/images/stepmed/1.png", "/images/stepmed/2.png"],
        },
        {
            title: "Vianee Jewels",
            category: "Web Application",
            description:
                "Elegant jewelry management platform with responsive UI for showcasing collections.",
            images: ["/images/vianee/vianee1.png", "/images/vianee/vianee2.png"],
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
                    {categories.map((category, index) => (
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
                        className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transform transition-transform"
                    >
                        <div className="relative w-full h-64">
                            <Image
                                src={project.images[0]}
                                alt={project.title}
                                className="object-cover rounded-lg"
                                layout="fill"
                            />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <p className="text-gray-400 mt-2 truncate">{project.description}</p>
                            <Link
                                href={`/projects/${project.title
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                            >
                                <button className="text-primary mt-4 inline-block">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
