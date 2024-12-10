import Link from "next/link";

const Hero = () => {
    return (
        <section
            className="relative h-[80svh] flex items-center justify-center text-white overflow-x-hidden bg-cover bg-center bg-no-repeat  "
            style={{ backgroundImage: "url('/images/bg.png')" }}
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="container mx-auto text-center px-6">
                {/* Gradient Text with AOS */}
                <h1
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading leading-tight tracking-wide bg-gradient-to-r text-white bg-clip-text text-transparent animate-gradient"
                    data-aos="fade-down"
                    data-aos-delay="200"
                >
                    Hi, I’m <span className="text-primary"> Darshan Khokhariya </span>
                </h1>
                <p
                    className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl text-[#E3E4E6] max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto font-accent"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    A <span className="text-primary">Full-Stack Developer</span> and{" "}
                    <span className="text-primary">Designer</span>, bringing futuristic ideas to life with intuitive designs and seamless applications.
                </p>

                {/* Call-to-Actions */}
                <div
                    className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                >
                    <Link
                        href="/projects"
                        className="bg-primary  hover:bg-primary/90 text-[#1e1e1e] font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        View My Work
                    </Link>
                    <a
                        href="#contact"
                        className="bg-white  hover:bg-gray-200 text-[#1e1e1e] font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>



            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        </section>

    );
};

export default Hero;
