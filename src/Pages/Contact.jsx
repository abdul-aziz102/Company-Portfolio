 import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    try {
      const response = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          Number: formData.phone,
          email: formData.email,
          selector: formData.service,
          message: formData.message
        })
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: ""
        });
      } else {
        setSuccess(result.message || "Failed to send message.");
      }
    } catch (error) {
      setSuccess("Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#d5fff7] text-[#23194f] min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#d5fff7] to-[#b8e8dd] py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            CONTACT <span className="text-sky-700">US</span>
          </motion.h1>
          <p className="text-xl text-[#23194f]/80 max-w-2xl mx-auto">
            Get in touch with our team for instant service and support
          </p>
        </div>
      </section>

      {/* Info & Form */}
      <section className="py-16 px-6 bg-[#d5fff7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-sky-700">Get in Touch</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  <Mail className="text-sky-700" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <a href="mailto:admin@registration.com" className="text-[#23194f]/80 hover:text-sky-700 transition">
                    admin@registration.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  <Phone className="text-sky-700" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-[#23194f]/80">+1 (0) 0124 - 4039</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  <MapPin className="text-sky-700" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Address</h3>
                  <p className="text-[#23194f]/80">Office Street, City, Country</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl border border-[#23194f]/20 shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Send Us a Message</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-[#23194f]/80 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#d5fff7] border border-[#23194f]/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-700"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#23194f]/80 mb-2">Your Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#d5fff7] border border-[#23194f]/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-700"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#23194f]/80 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#d5fff7] border border-[#23194f]/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-700"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-[#23194f]/80 mb-2">Select a Service</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#d5fff7] border border-[#23194f]/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-700"
                >
                  <option value="">-- Select a Service --</option>
                  <option value="Branding & Design">Branding & Design</option>
                  <option value="Website Development">Website Development</option>
                  <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                  <option value="Resource Outsourcing">Resource Outsourcing</option>
                  <option value="DevOps">DevOps</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#23194f]/80 mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-[#d5fff7] border border-[#23194f]/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-700"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-800 transition flex items-center justify-center w-full"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2" size={18} />
              </button>

              {success && (
                <p className="text-center mt-4 text-green-600 font-medium">{success}</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA / Footer */}
      <section className="py-20 px-6 bg-[#d5fff7] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Reach Us For Instant Service</h2>
          <p className="text-lg text-[#23194f]/80">
            We’re ready to build, design, and grow with you. Whether it’s tech, branding, or strategy — we’ve got you covered.
          </p>
        </div>
      </section>
    </div>
  );
};
export default ContactPage;