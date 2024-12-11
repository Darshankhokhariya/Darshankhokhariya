import { FaCode, FaBrush, FaLaptopCode } from "react-icons/fa";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="relative py-4 md:py-20  text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Left Side Content */}
                <div className="space-y-6">
                    <h2
                        className="text-3xl md:text-5xl font-bold text-primary"
                        data-aos="fade-down"
                        data-aos-delay="200"
                    >
                        About Me
                    </h2>
                    <p
                        className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed font-accent"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        Hi, I’m <span className="text-primary font-semibold">Darshan Khokhariya</span>, a
                        passionate <span className="text-primary">Full-Stack Developer</span> and{" "}
                        <span className="text-primary">UI/UX Designer</span>. I specialize in crafting
                        intuitive, scalable, and visually striking digital experiences that captivate
                        users and solve real-world challenges.
                    </p>

                    {/* Highlighted Skills */}
                    <div className="mt-8 space-y-6 font-body">
                        <div
                            className="flex items-center gap-4"
                            data-aos="fade-right"
                            data-aos-delay="500"
                        >
                            <FaCode className="text-primary text-2xl" />
                            <span className="text-lg">Full-Stack Development</span>
                        </div>
                        <div
                            className="flex items-center gap-4"
                            data-aos="fade-right"
                            data-aos-delay="600"
                        >
                            <FaBrush className="text-primary text-2xl" />
                            <span className="text-lg">Creative UI/UX Design</span>
                        </div>
                        <div
                            className="flex items-center gap-4"
                            data-aos="fade-right"
                            data-aos-delay="700"
                        >
                            <FaLaptopCode className="text-primary text-2xl" />
                            <span className="text-lg">Seamless Application Integration</span>
                        </div>
                    </div>
                </div>

                {/* Right Side Decorative and Image */}
                <div className="relative flex items-center justify-center">
                    <div
                        className="absolute w-40 h-40 sm:w-72 sm:h-72 bg-gradient-to-tr from-primary via-[#83b1e9] to-white rounded-full blur-2xl sm:blur-3xl opacity-20"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    ></div>
                    <div
                        className="relative w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-primary via-[#427cc2] to-primary rounded-full border border-gray-500 flex items-center justify-center shadow-lg"
                        data-aos="zoom-in"
                        data-aos-delay="600"
                    >
                        <div className="w-44 h-44 sm:w-64 sm:h-64 bg-gradient-to-tr from-primary to-[#79a2d4] rounded-full flex items-center border border-gray-400 justify-center">
                            <p className="text-sm sm:text-lg md:text-xl font-heading font-semibold text-center px-2 sm:px-4">
                                “Code, Design, and Creativity are the tools I use to shape ideas into
                                reality.”
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
