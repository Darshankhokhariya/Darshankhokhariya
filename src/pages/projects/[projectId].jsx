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
            "/images/traveldate/1.jpg",
            "/images/traveldate/2.jpg",
        ],
    },
    "adopus-recruitment-portal": {
        title: "Adopus Recruitment Portal",
        description:
            "Discover the latest job opportunities tailored for your skills and aspirations.",
        images: [
            "/images/adopus/adopus2.jpg",
            "/images/adopus/adopus1.jpg",
        ],
    },
    "vendor-management": {
        title: "Vendor Management",
        description:
            "Comprehensive Vendor Management System with role-based access, user authentication, and features to manage vendors, blogs, and events seamlessly.",
        images: [
            "/images/canconnect/1.png",
            "/images/canconnect/2.png",
        ],
    },
    "pharmaceutical-website": {
        title: "Pharmaceutical Website",
        description:
            "Designed and developed a user-friendly pharmaceutical website with responsive UI for seamless navigation and efficient product management.",
        images: [
            "/images/stepmed/1.png",
            "/images/stepmed/2.png",
        ],
    },
    "vianee-jewels": {
        title: "Vianee Jewels",
        description:
            "Elegant jewelry management platform with responsive UI for showcasing collections.",
        images: [
            "/images/vianee/vianee1.png",
            "/images/vianee/vianee2.png",
        ],
    },
    "a  pplication-overview": {
        title: "Application Overview",
        description:
            "A beautifully crafted landing page that provides a comprehensive overview of the application. Designed with a responsive and visually appealing layout, it effectively highlights the application's features and functionality, offering an engaging user experience.",
        images: [
            "/images/landing.png"
        ]
    }

};


const ProjectDetails = () => {
    const router = useRouter();
    const { projectId } = router?.query;
    const project = projectData[projectId];

    if (!project) return <p className="text-center py-20 text-gray-500">Loading...</p>;

    return (
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-center text-white mb-6 font-heading">
                {project?.title}
            </h1>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                loop={true}
                slidesPerView={1}
                className="max-w-4xl mx-auto rounded-lg shadow-lg"
            >
                {project?.images?.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img
                                src={image}  // Use the correct path
                                alt={`${project?.title} Image ${index + 1}`}
                                className="object-contain w-full h-64 md:h-[70vh] rounded-lg"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <p className="text-center text-gray-400 text-lg mt-10 font-accent">{project?.description}</p>
        </div>
    );
};

export default ProjectDetails;
