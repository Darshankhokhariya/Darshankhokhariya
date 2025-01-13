import { useEffect, useRef } from "react";
import Link from "next/link";

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const beams = [];
        const numBeams = 20;

        class Beam {
            constructor(x, y, dx, dy, color) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.color = color; // Beam color
                this.radius = Math.random() * 5 + 3; // Dot size
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.closePath();
            }

            update() {
                if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                    this.dx = -this.dx;
                }

                if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                    this.dy = -this.dy;
                }

                this.x += this.dx;
                this.y += this.dy;

                this.draw();
            }
        }

        function initBeams() {
            for (let i = 0; i < numBeams; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const dx = Math.random() * 2 - 1; // Random speed X
                const dy = Math.random() * 2 - 1; // Random speed Y

                // Randomly assign color to be either white or primary color
                const color = Math.random() < 0.5 ? "#ffffff" : "#60A5FA";

                beams.push(new Beam(x, y, dx, dy, color));
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            beams.forEach((beam) => beam.update());
            requestAnimationFrame(animate);
        }

        initBeams();
        animate();

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            beams.length = 0;
            initBeams();
        });

        return () => {
            window.removeEventListener("resize", () => { });
        };
    }, []);

    return (
        <section
            className="relative flex flex-col h-full items-center justify-center text-white bg-cover bg-center bg-no-repeat overflow-x-hidden overflow-y-hidden"
            style={{ backgroundImage: "url('/images/bg.png')" }}
            data-aos-duration="1000"
        >
            {/* Canvas for Background Animation */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
            ></canvas>

            <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] relative z-10">
                <img src="/images/Darshan.png" className="w-full h-full object-cover" alt="Darshan" />
            </div>

            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Gradient Text with AOS */}
                <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight tracking-wide bg-gradient-to-r text-white bg-clip-text text-transparent animate-gradient"
                    data-aos="fade-down"
                    data-aos-delay="200"
                >
                    Hi, I’m <span className="text-primary">Darshan Khokhariya</span>
                </h1>
                <p
                    className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-[#E3E4E6] max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto font-accent"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    A <span className="text-primary">Full-Stack Developer</span> and <span className="text-primary">Designer</span>, bringing futuristic ideas to life with intuitive designs and seamless applications.
                </p>

                {/* Call-to-Actions */}
                <div
                    className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
                >
                    <Link
                        href="/projects"
                        className="bg-primary hover:bg-primary/90 text-[#1e1e1e] font-medium py-2 px-5 sm:py-3 sm:px-7 md:py-4 md:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        View My Work
                    </Link>
                    <a
                        href="#contact"
                        className="bg-white hover:bg-gray-200 text-[#1e1e1e] font-medium py-2 px-5 sm:py-3 sm:px-7 md:py-4 md:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
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
