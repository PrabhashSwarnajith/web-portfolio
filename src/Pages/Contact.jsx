import React, { useState } from "react";
import { User, Mail, MessageSquare, Send, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending…",
      html: "Delivering your message",
      allowOutsideClick: false,
      background: "#0d0d1a",
      color: "#e2e8f0",
      didOpen: () => Swal.showLoading(),
    });

    try {
      const form = e.target;
      const data = new FormData(form);
      await fetch(form.action, { method: "POST", body: data });

      Swal.fire({
        title: "Message sent!",
        text: "I'll get back to you as soon as possible.",
        icon: "success",
        background: "#0d0d1a",
        color: "#e2e8f0",
        confirmButtonColor: "#6366f1",
        timer: 3000,
        timerProgressBar: true,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please email me directly.",
        icon: "error",
        background: "#0d0d1a",
        color: "#e2e8f0",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls =
    "w-full px-4 py-3 pl-11 bg-white/[0.04] rounded-xl border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all duration-200 disabled:opacity-50";

  return (
    <section className="py-24 px-5 sm:px-8 lg:px-[10%] bg-[#030014]" id="Contact">
      {/* Section header */}
      <div className="text-center mb-16">
        <motion.span
          className="text-xs font-mono text-indigo-400 tracking-[0.2em] uppercase mb-3 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          05 — Get in touch
        </motion.span>
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Me
          </span>
        </motion.h2>
        <motion.p
          className="text-gray-500 max-w-xl mx-auto text-sm md:text-[15px] leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Open to new opportunities, collaborations, or just a conversation. Drop me a line.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8">

        {/* Form */}
        <motion.div
          className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
              <p className="text-sm text-gray-500">I typically respond within 24 hours.</p>
            </div>
          </div>

          {/* Quick info pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 text-xs text-gray-500 bg-white/[0.04] border border-white/[0.07] rounded-lg px-3 py-1.5">
              <MapPin className="w-3.5 h-3.5" /> Sri Lanka
            </span>
            <span className="inline-flex items-center gap-2 text-xs text-gray-500 bg-white/[0.04] border border-white/[0.07] rounded-lg px-3 py-1.5">
              <Clock className="w-3.5 h-3.5" /> GMT+5:30
            </span>
            <span className="inline-flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/[0.07] border border-emerald-500/20 rounded-lg px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </span>
          </div>

          <form
            action="https://formsubmit.co/prabhashswarnajith@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="relative">
              <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-600" />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className={inputCls}
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-600" />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className={inputCls}
                required
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-600" />
              <textarea
                name="message"
                placeholder="Your message…"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`${inputCls} h-36 resize-none pt-3`}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Social links panel */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
