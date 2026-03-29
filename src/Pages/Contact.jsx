import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

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
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        setSuccess(result.message || "Failed to send message.");
      }
    } catch (error) {
      setSuccess("Something went wrong.");
    }
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "admin@registration.com",
      href: "mailto:admin@registration.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+1 (0) 0124 - 4039",
      href: null,
    },
    {
      icon: <MapPin size={20} />,
      label: "Address",
      value: "Office Street, City, Country",
      href: null,
    },
  ];

  const inputClass =
    "w-full bg-[#111111] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-400/60 focus:ring-1 focus:ring-yellow-400/30 transition-all duration-200 text-sm";
  const labelClass = "block text-gray-400 text-sm mb-2 font-medium";

  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen font-sans">
      {/* grid texture */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Hero ── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(250,204,21,0.07) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-4">
              Let's Talk
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-5">
              CONTACT <span className="text-yellow-400">US</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team for instant service and support
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Info & Form ── */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-3">
              Reach Us
            </p>
            <h2 className="text-3xl font-extrabold uppercase mb-10">Get in Touch</h2>

            <div className="space-y-6">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/20 rounded-xl flex items-center justify-center text-yellow-400 flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors duration-200">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-1">{label}</h3>
                    {href ? (
                      <a href={href} className="text-white font-medium hover:text-yellow-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* decorative card */}
            <div className="mt-12 bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{ background: "radial-gradient(circle at 100% 100%, rgba(250,204,21,0.06) 0%, transparent 60%)" }}
              />
              <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                We're ready to build, design, and grow with you. Whether it's tech, branding, or strategy — we've got you covered.
              </p>
              <div className="mt-4 flex items-center gap-2 text-yellow-400 text-sm font-semibold relative z-10">
                Learn more <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 overflow-hidden"
          >
            {/* glow */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{ background: "radial-gradient(circle at 100% 0%, rgba(250,204,21,0.05) 0%, transparent 60%)" }}
            />

            <h2 className="text-2xl font-extrabold uppercase mb-8 relative z-10">Send Us a Message</h2>

            <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className={labelClass}>Your Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Enter your name" />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>Your Phone</label>
                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="Enter your phone number" />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Your Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="Enter your email address" />
              </div>

              <div>
                <label htmlFor="service" className={labelClass}>Select a Service</label>
                <select id="service" value={formData.service} onChange={handleChange} required className={inputClass}>
                  <option value="" className="bg-[#111] text-gray-500">-- Select a Service --</option>
                  <option value="Branding & Design" className="bg-[#111] text-white">Branding & Design</option>
                  <option value="Website Development" className="bg-[#111] text-white">Website Development</option>
                  <option value="SEO & Digital Marketing" className="bg-[#111] text-white">SEO & Digital Marketing</option>
                  <option value="Resource Outsourcing" className="bg-[#111] text-white">Resource Outsourcing</option>
                  <option value="DevOps" className="bg-[#111] text-white">DevOps</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea id="message" value={formData.message} onChange={handleChange} required rows="4" className={inputClass} placeholder="Enter your message" />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-yellow-400/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} />
              </motion.button>

              {success && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center mt-2 text-sm font-medium ${success.includes("successfully") ? "text-emerald-400" : "text-red-400"}`}
                >
                  {success}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 relative z-10">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(250,204,21,0.04) 0%, transparent 70%)" }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-5">
              Reach Us For <span className="text-yellow-400">Instant Service</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We're ready to build, design, and grow with you. Whether it's tech, branding, or strategy — we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;