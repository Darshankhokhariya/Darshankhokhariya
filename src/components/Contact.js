import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email.";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Use EmailJS to send the email
            emailjs
                .send(
                    "service_4hxsect", // Replace with your EmailJS Service ID
                    "template_kcxmhpf", // Replace with your EmailJS Template ID
                    formData,
                    "K4uZSTd7X71NUzKsW" // Replace with your EmailJS Public Key
                )
                .then(
                    (response) => {
                        console.log("SUCCESS!", response.status, response.text);
                        toast.success("Message sent successfully!");  // Success Toast
                        setFormData({ name: "", email: "", message: "" });
                        setErrors({});
                    },
                    (error) => {
                        console.error("FAILED...", error);
                        toast.error("Failed to send message. Please try again later.");  // Error Toast
                    }
                );
        }
    };

    return (
        <section id="contact" className="py-10 md:py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="text-center">
                    <h2
                        className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-500"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        Get in Touch
                    </h2>
                    <p
                        className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        I’d love to hear from you! Fill out the form, and I’ll get back to you as soon as possible.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10" data-aos="fade-up" data-aos-delay="500">
                    {/* Contact Info Section */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                        <ul className="space-y-4">
                            <li>
                                <span className="text-primary font-semibold">Email:</span>{" "}
                                <a href="mailto:darshankhokhariya26@gmail.com" className="text-gray-300 hover:text-white">
                                    darshankhokhariya26@gmail.com
                                </a>
                            </li>
                            {/* <li>
                                <span className="text-primary font-semibold">Phone:</span>{" "}
                                <a href="tel:+91 70960 02862" className="text-gray-300 hover:text-white">
                                    +91 70960 02862
                                </a>
                            </li> */}
                            <li>
                                <span className="text-primary font-semibold">Location:</span>{" "}
                                <span className="text-gray-300">Surat,Gujarat,India</span>
                            </li>
                        </ul>
                        <div className="mt-6 flex items-center gap-x-2 ">
                            <h4 className="text-lg font-semibold text-primary">Follow Me :</h4>
                            <div className=" flex space-x-2">
                                <a href="https://www.instagram.com/darshank_dev/" target='_blank' className="hover:text-primary">
                                    <FaInstagram className='text-xl' />
                                </a>
                                <a href="http://www.linkedin.com/in/darshan-khokhariya-78a461283" target='_blank' className="hover:text-primary">
                                    <FaLinkedin className='text-xl' />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form
                        className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow space-y-6"
                        data-aos="fade-left"
                        onSubmit={handleSubmit}
                    >
                        {/* Name Input */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full py-3 px-5 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                            )}
                        </div>

                        {/* Email Input */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full py-3 px-5 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                            )}
                        </div>

                        {/* Message Input */}
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full py-3 px-5 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-l from-primary via-green-400 to-blue-500 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform"
                        >
                            <FaPaperPlane />
                            Send Message
                        </button>

                        {successMessage && (
                            <p className="text-green-500 text-sm mt-4 text-center">{successMessage}</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
