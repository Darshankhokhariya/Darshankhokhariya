const Hero = () => {
    return (
        <section
            className="relative md:h-[100svh] flex items-center justify-center text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="container mx-auto text-center px-6">
                {/* Gradient Text with AOS */}
                <h1
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide bg-gradient-to-r from-primary via-green-300 to-blue-500 bg-clip-text text-transparent animate-gradient"
                    data-aos="fade-down"
                    data-aos-delay="200"
                >
                    Hi, I’m Darshan Khokhariya
                </h1>
                <p
                    className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl text-[#E3E4E6] max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    A <span className="text-primary">Full-Stack Developer</span> and <span className="text-primary">Designer</span>,
                    bringing futuristic ideas to life with intuitive designs and seamless applications.
                </p>

                {/* Call-to-Actions */}
                <div
                    className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                >
                    <a
                        href="#portfolio"
                        className="bg-primary hover:bg-[#50e47d] text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="bg-white hover:bg-gray-200 text-gray-900 font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Decorative Elements */}
            <div
                className="absolute top-10 left-5 sm:left-9 w-40 h-40 sm:w-60 sm:h-60  bg-gradient-to-r from-blue-500 via-primary to-green-400 rounded-full opacity-20 animate-gradient blur-lg sm:blur-2xl"
                data-aos="fade-right"
                data-aos-delay="800"
            ></div>
            <div
                className="absolute bottom-10 right-5 sm:right-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-500 via-primary to-green-400 rounded-full opacity-20 animate-gradient blur-lg sm:blur-2xl"
                data-aos="fade-right"
                data-aos-delay="800"
            ></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        </section>
    );
};

export default Hero;
