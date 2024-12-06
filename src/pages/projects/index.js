import Link from "next/link";

const Portfolio = () => {
    const projects = [
        {
            title: "Traveldate",
            description: "Connect travelers looking to share journeys.",
            images: [
                "./images/traveldate/1.jfif",
            ],
        },
        {
            title: "Adopus Recruitment Portal",
            description:
                "Discover the latest job opportunities tailored for your skills and aspirations. Our user-friendly platform connects job seekers with employers looking for talent.",
            images: [
                "./images/adopus2.jpg",
            ],
        },
        {
            title: "Vendor Management",
            description: "Comprehensive Vendor Management System with role-based access, user authentication, and features to manage vendors, blogs, and events seamlessly.",
            images: [
                "./images/canconnect/2.png",
            ],
        },
        {
            title: "Comprehensive Pharmaceutical Website Development",
            description:
                "Designed and developed a user-friendly pharmaceutical website with responsive UI for seamless navigation, efficient product management, and dynamic blog content updates, supported by a robust backend.",
            images: [
                "./images/stepmed/3.png",
            ],
        },
    ];

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            {/* Total Projects Section */}
            <section className="py-8">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold">
                        Completed Projects
                    </h2>
                </div>
            </section>

            {/* Projects Section */}
            <div className="container mx-auto px-4 py-8 md:py-12 grid gap-12">
                {projects.map((project, index) => (
                    <section
                        key={index}
                        className="rounded-lg shadow-lg overflow-hidden bg-gray-800 grid grid-cols-1 md:grid-cols-2"
                    >
                        {/* Image */}
                        <div className="p-4 order-1 ">
                            <img
                                src={project.images[0]}
                                alt={project.title}
                                className="object-cover w-full h-64 md:h-[700px] rounded-lg"
                            />
                        </div>

                        {/* Details */}
                        <div className="p-6 order-2 space-y-4 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold">{project.title}</h2>
                            <p className="text-gray-300">{project.description}</p>
                            <Link
                                href={`/projects/${project.title
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                className="inline-block bg-gradient-to-r from-primary to-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform w-max"
                            >
                                View Details
                            </Link>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
