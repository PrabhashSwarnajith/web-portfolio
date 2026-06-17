import React, { useState, useRef } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactPage = () => {
  const formRef = useRef(null);
  const [formData, setFormData]     = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      Swal.fire({
        title: "Configuration Missing",
        html: "EmailJS keys are not set.<br/>Add <code>VITE_EMAILJS_*</code> variables to your <code>.env</code> file.",
        icon: "warning",
        confirmButtonColor: "#6366f1",
        background: "#0d0d1f",
        color: "#fff",
      });
      return;
    }

    setIsSubmitting(true);
    Swal.fire({
      title: "Sending…",
      html: "Please wait while your message is delivered.",
      allowOutsideClick: false,
      background: "#0d0d1f",
      color: "#fff",
      didOpen: () => Swal.showLoading(),
    });

    try {
      // @emailjs/browser v4 — publicKey must be passed as an options object
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      Swal.fire({
        title: "Message Sent!",
        text: "Thanks for reaching out — I'll get back to you soon.",
        icon: "success",
        confirmButtonColor: "#6366f1",
        background: "#0d0d1f",
        color: "#fff",
        timer: 3000,
        timerProgressBar: true,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again or email me directly.",
        icon: "error",
        confirmButtonColor: "#6366f1",
        background: "#0d0d1f",
        color: "#fff",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-[5%] lg:px-[10%] bg-[#030014]" id="Contact">
      {/* Section header */}
      <div className="text-center mb-14">
        <span
          className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-3 block"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          06 — Get in Touch
        </span>
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Contact
          </span>{" "}
          <span className="text-white">Me</span>
        </h2>
        <p
          className="text-gray-500 max-w-xl mx-auto text-sm md:text-[15px] leading-relaxed"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* ── Form card ─────────────────────────────── */}
        <div
          className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.07] p-7 sm:p-10 hover:border-indigo-500/20 transition-colors duration-300"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="flex items-start justify-between mb-7">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
              <p className="text-gray-500 text-sm">I'll reply as soon as possible.</p>
            </div>
            <Share2 className="w-8 h-8 text-indigo-500/40 flex-shrink-0" />
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Name */}
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-indigo-400 transition-colors" />
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                disabled={isSubmitting}
                required
                className="w-full py-3.5 pl-11 pr-4 bg-white/[0.04] rounded-xl border border-white/[0.08] placeholder-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/30 hover:border-white/15 transition-all duration-200 disabled:opacity-50"
              />
            </div>

            {/* Email */}
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-indigo-400 transition-colors" />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                disabled={isSubmitting}
                required
                className="w-full py-3.5 pl-11 pr-4 bg-white/[0.04] rounded-xl border border-white/[0.08] placeholder-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/30 hover:border-white/15 transition-all duration-200 disabled:opacity-50"
              />
            </div>

            {/* Message */}
            <div className="relative group">
              <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-600 group-focus-within:text-indigo-400 transition-colors" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                disabled={isSubmitting}
                required
                rows={5}
                className="w-full resize-none py-3.5 pl-11 pr-4 bg-white/[0.04] rounded-xl border border-white/[0.08] placeholder-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/30 hover:border-white/15 transition-all duration-200 disabled:opacity-50"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-indigo-600 disabled:hover:to-purple-600"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>

        {/* ── Social links card ──────────────────────── */}
        <div
          className="h-full"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
