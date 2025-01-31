import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 }); // Adjust duration as needed
      }, []);
      
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section id="contact" className="bg-hero-gradient py-16 px-4 mt-0 pt-30">
      <div className="container mx-auto pt-10 text-center"  data-aos="fade-down"
    data-aos-delay="100">
        <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
        <p className="text-gray-600 mt-2">Get in touch with us for inquiries, support, or admissions—We're here to help</p>
      </div>
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"  data-aos="fade-up" data-aos-delay="100">
        {/* Contact Info */}
        <div className="bg-blue-600 text-white p-8  rounded-lg">
          <h3 className="text-2xl font-semibold">Contact Info</h3>
          <p className="mt-4 opacity-80">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-white text-blue-600 p-3 rounded-full">
                <i className="bi bi-geo-alt text-2xl"></i>
              </div>
              <div>
                <h4 className="font-semibold">Our Location</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white text-blue-600 p-3 rounded-full">
                <i className="bi bi-telephone text-2xl"></i>
              </div>
              <div>
                <h4 className="font-semibold">Phone Number</h4>
                <p>+1 5589 55488 55</p>
                <p>+1 6678 254445 41</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white text-blue-600 p-3 rounded-full">
                <i className="bi bi-envelope text-2xl"></i>
              </div>
              <div>
                <h4 className="font-semibold">Email Address</h4>
                <p>info@example.com</p>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900">Get In Touch</h3>
          <p className="text-gray-600 mt-2">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input type="text" name="subject" placeholder="Subject" required onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea name="message" rows="4" placeholder="Message" required onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;