const Footer = () => {
    return (
        <footer className="relative bg-gray-900 text-gray-300 py-16">
            {/* Wave Decoration */}

            {/* Content */}
            <div className="container mx-auto px-6 lg:px-20 relative z-10">
                {/* Glass Effect Section */}
                <div className="bg-white bg-opacity-5 backdrop-blur-lg p-10 rounded-2xl shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* About Me */}
                        <div className="text-center md:text-left">
                            <h4 className="text-2xl font-bold text-white mb-4">
                                About Me
                            </h4>
                            <p className="text-sm">
                                I’m a creative full-stack developer passionate about building engaging
                                and modern web experiences. Let’s collaborate!
                            </p>
                        </div>

                        {/* Quick Links */}
                        {/* <div className="text-center">
                            <h4 className="text-2xl font-bold text-white mb-4">
                                Explore
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#about" className="hover:text-primary transition duration-300">
                                        About Me
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects" className="hover:text-primary transition duration-300">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-primary transition duration-300">
                                        Contact Me
                                    </a>
                                </li>
                            </ul>
                        </div> */}

                        {/* Contact Info */}
                        <div className="text-center md:text-right">
                            <h4 className="text-2xl font-bold text-white mb-4">
                                Get in Touch
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <span>Email : </span>
                                    <a href="mailto:darshan@example.com" className="hover:text-primary transition duration-300">
                                        darshankhokhariya26@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <span>Phone : </span>
                                    <a href="tel:+1234567890" className="hover:text-primary transition duration-300">
                                        +91 70960 02862
                                    </a>
                                </li>
                                <li>
                                    <span>Location : </span> Surat,Gujarat,India
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 text-center border-t border-gray-700 pt-6">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} <span className="text-primary font-bold">Darshan Khokhariya</span>. All rights reserved.
                    </p>
                    <p className="text-sm mt-2">
                        Designed with passion and creativity. 🚀
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
