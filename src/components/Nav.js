import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-900 w-full z-50 text-[#E3E4E6] shadow-lg sticky top-0">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <Link href="/">
                    <h1 className="text-2xl font-bold font-heading">Darshan Khokhariya</h1>
                </Link>
                <nav>
                    {/* Desktop Navbar */}
                    <ul className="hidden md:flex space-x-6">
                        <li><Link href="/" className="hover:text-primary text-sm uppercase">Home</Link></li>
                        <li><Link href="/projects" className="hover:text-primary text-sm uppercase">Projects</Link></li>
                    </ul>

                    {/* Mobile Navbar */}
                    {/* Mobile Navbar */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-2xl">
                            {isMenuOpen ? "✕" : "☰"}
                        </button>
                        {isMenuOpen && (
                            <ul className="absolute top-16 left-0 w-full bg-[#0f2027] text-start px-10 space-y-4 py-4 h-[100svh]">
                                <li><Link href="/" onClick={toggleMenu} className="text-base text-[#E3E4E6] uppercase">Home</Link></li>
                                <li><Link href="/projects" onClick={toggleMenu} className="text-base text-[#E3E4E6] uppercase">Projects</Link></li>



                                <div className="flex   gap-x-2">
                                    {/* Social Media Links with Icons */}
                                    <li><a href="https://www.instagram.com/darshank_dev/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="flex items-center space-x-2 text-base text-[#E3E4E6] uppercase">
                                        <FaInstagram className="text-xl" />
                                    </a></li>
                                    <li><a href="http://www.linkedin.com/in/darshan-khokhariya-78a461283" target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="flex items-center space-x-2 text-base text-[#E3E4E6] uppercase">
                                        <FaLinkedin className="text-xl" />
                                    </a></li>
                                </div>
                            </ul>
                        )}
                    </div>


                </nav>
            </div>
        </header>
    );
};

export default Navbar;
