import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaCss3Alt,
    FaHtml5,
    FaAws,
    FaChevronLeft,
    FaChevronRight,
    FaNode,
} from "react-icons/fa";
import { SiTailwindcss, SiGraphql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
const Technologies = () => {
    // Initialize AOS animations
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Duration set to 1s for smooth animations
    }, []);

    const technologies = [
        {
            title: "React.js",
            description: "A JavaScript library for building user interfaces.",
            icon: <FaReact className="text-6xl text-white" />,
        },
        {
            title: "Next.js",
            description: "A React framework for server-side rendering and building web applications.",
            icon: <RiNextjsFill className="text-6xl text-white" />,
        },
        {
            title: "Node.js",
            description: "A runtime environment to build scalable network applications.",
            icon: <FaNode className="text-6xl text-white" />,
        },
        {
            title: "Databases",
            description: "Proficient in MongoDB, MySQL, and PostgreSQL.",
            icon: <FaDatabase className="text-6xl text-white" />,
        },
        {
            title: "HTML5",
            description: "The standard markup language for web applications.",
            icon: <FaHtml5 className="text-6xl text-white" />,
        },
        {
            title: "Tailwind CSS",
            description: "Styling modern web applications with CSS and frameworks like Tailwind CSS.",
            icon: <SiTailwindcss className="text-6xl text-white" />,
        },
        {
            title: "AWS",
            description: "Cloud computing services for scalable applications.",
            icon: <FaAws className="text-6xl text-white" />,
        },
        {
            title: "GraphQL",
            description: "A query language for APIs and a runtime for executing those queries with your data.",
            icon: <SiGraphql className="text-6xl text-white" />,
        },
    ];



    return (
        <section id="technologies" className="py-20 text-white bg-gradient-to-b from-gray-900 to-[#1E293B]">
            <div className="container mx-auto text-center px-6">
                {/* Section Heading */}
                <h2
                    className="text-3xl md:text-5xl font-bold font-heading text-primary text-start md:text-center"
                    data-aos="fade-up"
                >
                    Technologies I Work With
                </h2>
                <p
                    className="mt-4 text-lg md:text-xl text-gray-300 font-accent"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Explore the cutting-edge technologies I use to build innovative solutions.
                </p>

                {/* Swiper Section */}
                <div className="relative mt-12" data-aos="fade-up" data-aos-delay="500">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        loop={true}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 100,
                            slideShadows: true,
                        }}
                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}
                        modules={[EffectCoverflow, Navigation, Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                    >
                        {technologies.map((tech, index) => (
                            <SwiperSlide key={index} className="max-w-xs">
                                <div
                                    className={`p-8 rounded-xl shadow-xl bg-gradient-to-r from-[#60A5FA] to-[#2563EB] text-center`}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100 + 300}
                                >
                                    <div className="flex justify-center">
                                        <div className="mb-6  text-center">{tech.icon}</div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 font-heading">{tech.title}</h3>
                                    <p className="text-gray-100 font-accent">{tech.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button
                        className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-primary to-blue-500 text-white p-2 md:p-3 rounded-full shadow-lg hover:scale-110 transition"
                        aria-label="Previous"
                    >
                        <FaChevronLeft className="text-base md:text-2xl" />
                    </button>
                    <button
                        className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-blue-500 to-primary text-white p-2 md:p-3 rounded-full shadow-lg hover:scale-110 transition"
                        aria-label="Next"
                    >
                        <FaChevronRight className="text-base md:text-2xl" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
