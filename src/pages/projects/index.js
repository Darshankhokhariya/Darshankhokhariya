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
            title: "Vendor management",
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
        <div>
            {/* Total Projects Section */}
            <section className="py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white">
                        Total Projects Completed: {projects.length}
                    </h2>
                </div>
            </section>

            {/* Projects Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {projects.map((project, index) => (
                    <section
                        key={index}
                        className="mb-12 rounded-lg shadow-lg overflow-hidden bg-gray-800"
                    >
                        <div className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 ${index % 2 === 0 ? 'order-1 md:order-1' : 'order-2 md:order-2'}`}>
                            {/* Project Details */}
                            <div className={`p-6 text-white space-y-4 ${index % 2 === 0 ? ' md:order-2' : '  md:order-1'}`}>
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className="text-gray-300">{project.description}</p>
                                <Link
                                    href={`/projects/${project.title
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                    className="inline-block bg-gradient-to-r from-primary to-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
                                >
                                    View Details
                                </Link>
                            </div>

                            {/* Image Slider */}
                            <div className={`p-4 ${index % 2 === 0 ? ' md:order-1' : 'md:order-2'}`}>
                                <div className="swiper-container rounded-lg overflow-hidden">
                                    <div className="swiper-wrapper">
                                        {project.images.map((img, i) => (
                                            <div
                                                key={i}
                                                className="swiper-slide h-[300px] md:h-[400px]"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Slide ${i + 1}`}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
