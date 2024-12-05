import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Companies = () => {
    // Example list of company logos or names (replace with actual logos)
    const companies = [
        { name: "Traveldate", logo: "./images/Traveldate.png" },
        { name: "Stepmade", logo: "./images/stepmade.png" },
        { name: "AdOpus", logo: "./images/adopuslogo.png" },
        { name: "Satadhar", logo: "./images/satadhar.png" },
    ];

    return (
        <section
            id="companies"
            className="py-8 md:py-20 text-white bg-gray-900"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="container mx-auto px-6 text-center">
                {/* Section Heading */}
                <h2
                    className="text-4xl md:text-5xl font-bold text-start text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400"
                    data-aos="fade-down"
                >
                    Companies I've Worked With
                </h2>
                <p
                    className="mt-4 text-lg text-start md:text-xl text-gray-300"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    A few of the incredible brands I’ve had the privilege to collaborate with.
                </p>

                {/* Swiper Slider */}
                <div
                    className="mt-12"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                >
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={2}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        className="w-full"
                    >
                        {companies.map((company, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="w-full h-full object-contain p-4 rounded-lg shadow-md"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Companies;
