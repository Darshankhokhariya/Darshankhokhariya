import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const projectData = {
    traveldate: {
        title: "Traveldate",
        description: "Connect travelers looking to share journeys.",
        images: [
            "/images/traveldate/1.jfif",
            "/images/traveldate/2.jfif",
        ],
    },
    "adopus-recruitment-portal": {
        title: "Adopus Recruitment Portal",
        description:
            "Discover the latest job opportunities tailored for your skills and aspirations. Our user-friendly platform connects job seekers with employers looking for talent.",
        images: [
            "/images/adopus2.jpg",
            "/images/adopus1.jpg",
        ],
    },
    "vendor-management": {
        title: "Vendor management",
        description: "Comprehensive Vendor Management System with role-based access, user authentication, and features to manage vendors, blogs, and events seamlessly.",
        images: [
            "/images/canconnect/2.png",
            "/images/canconnect/1.png",
        ],
    },
    "comprehensive-pharmaceutical-website-development": {
        title: "Comprehensive Pharmaceutical Website Development",
        description:
            "Designed and developed a user-friendly pharmaceutical website with responsive UI for seamless navigation, efficient product management, and dynamic blog content updates, supported by a robust backend.",
        images: [
            "/images/stepmed/3.png",
            "/images/stepmed/2.png",
        ],
    },
};

const ProjectDetails = () => {
    const router = useRouter();
    const { projectId } = router.query;
    const project = projectData[projectId];

    if (!project) return <p className="text-center py-20 text-gray-500">Loading...</p>;

    return (
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center text-white mb-6">
                {project.title}
            </h1>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                className="max-w-4xl mx-auto rounded-lg shadow-lg"
            >
                {project.images.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img
                                src={image}  // Use the correct path
                                alt={`${project.title} Image ${index + 1}`}
                                className="object-cover w-full h-64 md:h-full rounded-lg"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <p className="text-center text-gray-400 text-lg mt-10">{project.description}</p>
        </div>
    );
};

export default ProjectDetails;
