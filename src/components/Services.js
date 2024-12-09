import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight, FaCloud, FaCode, FaMobileAlt, FaPalette, FaRocket, FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

const Services = () => {
    const services = [
        {
            title: "Full-Stack Development",
            description: "Building modern, scalable, and secure web applications with seamless user experience.",
            icon: <FaCode className="text-6xl text-white" />,
        },
        {
            title: "UI/UX Design",
            description: "Crafting visually stunning and intuitive interfaces that elevate user satisfaction.",
            icon: <FaPalette className="text-6xl text-white" />,
        },
        {
            title: "Mobile App Development",
            description: "Developing feature-rich mobile applications with smooth performance for iOS and Android.",
            icon: <FaMobileAlt className="text-6xl text-white" />,
        },
        {
            title: "Cloud Integration",
            description: "Optimizing workflows with cloud-based solutions for improved scalability and efficiency.",
            icon: <FaCloud className="text-6xl text-white" />,
        },
        {
            title: "SEO Optimization",
            description: "Enhancing website visibility and performance to rank higher in search engine results.",
            icon: <FaSearch className="text-6xl text-white" />,
        },
        {
            title: "Startup Launch Support",
            description: "Helping startups get off the ground with technology solutions and consulting services.",
            icon: <FaRocket className="text-6xl text-white" />,
        },
    ];

    return (
        <section id="services" className="py-20 text-white bg-gradient-to-b from-gray-900 to-[#1E293B]">
            <div className="container mx-auto text-center px-6">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary text-start md:text-center" data-aos="fade-up">
                    My Services
                </h2>
                <p className="mt-4 text-lg md:text-xl text-gray-300 font-accent" data-aos="fade-up" data-aos-delay="300">
                    Explore a range of services tailored to your needs, blending innovation and expertise.
                </p>

                {/* Swiper Section */}
                <div className="relative mt-12">
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
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index} className="max-w-xs">
                                <div
                                    className={`p-8 rounded-xl shadow-xl bg-gradient-to-r from-[#60A5FA] to-[#2563EB] text-center`}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100 + 300}
                                >
                                    <div className="mb-6">{service.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4 font-heading">{service.title}</h3>
                                    <p className="text-gray-100 font-accent">{service.description}</p>
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

export default Services;
