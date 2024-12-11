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
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Validation function
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

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            // Ensure formData properties match your EmailJS template placeholders
            const templateParams = {
                to_name: "Recipient's Name",   // You can replace this with a dynamic recipient if needed
                from_name: formData.name,      // Sender's name (from the form data)
                from_email: formData.email,    // Sender's email (from the form data)
                message: formData.message,     // Message content (from the form data)
            };

            const response = await emailjs.send(
                "service_8g0v81a", // Your Service ID
                "template_2f2kot7", // Your Template ID
                templateParams, // The mapped data
                "K4uZSTd7X71NUzKsW" // Your Public Key
            );
            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
        } catch (error) {
            toast.error("Failed to send message. Please try again later.");
            console.error("Email sending failed:", error);
        } finally {
            setIsSubmitting(false);
        }
    };


    // Dynamic onChange handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        if (errors[name]) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
        }
    };

    return (
        <section id="contact" className="py-10 md:py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="text-center">
                    <h2
                        className="text-4xl md:text-5xl font-extrabold text-primary"
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
                                <span className="text-primary font-semibold">Email : </span>{" "}
                                <a href="mailto:darshankhokhariya26@gmail.com" className="text-gray-300 hover:text-white">
                                    darshankhokhariya26@gmail.com
                                </a>
                            </li>
                            <li>
                                <span className="text-primary font-semibold">Location : </span>{" "}
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

                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? "border-red-500" : "border-gray-300"
                                    }`}
                                aria-invalid={!!errors.name}
                                aria-describedby="name-error"
                            />
                            {errors.name && (
                                <p
                                    id="name-error"
                                    className="text-red-500 text-sm mt-1"
                                >
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? "border-red-500" : "border-gray-300"
                                    }`}
                                aria-invalid={!!errors.email}
                                aria-describedby="email-error"
                            />
                            {errors.email && (
                                <p
                                    id="email-error"
                                    className="text-red-500 text-sm mt-1"
                                >
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? "border-red-500" : "border-gray-300"
                                    }`}
                                rows="5"
                                aria-invalid={!!errors.message}
                                aria-describedby="message-error"
                            ></textarea>
                            {errors.message && (
                                <p
                                    id="message-error"
                                    className="text-red-500 text-sm mt-1"
                                >
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-400"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
