"use client";
import { motion } from "framer-motion";
import {
  Send,
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

export default function CallToActionSection() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      description: "hello@company.com",
      action: "Send Email",
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      description: "+1 (555) 123-4567",
      action: "Start Call",
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Live Chat",
      description: "Available 24/7",
      action: "Start Chat",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 px-6 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#fd5001]/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[#fd5001]/5 to-[#ff8c00]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Main CTA Content */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          {/* Floating icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={40} className="text-[#fd5001]" />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Create
            <br />
            <motion.span
              style={{
                background: "linear-gradient(45deg, #fd5001, #ff8c00, #fd5001)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Something Amazing?
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From bold ideas to breakthrough digital experiences — we partner
            with visionary brands to craft immersive, user-driven solutions that
            transform industries and captivate audiences.
          </motion.p>

          {/* Primary CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="group relative px-10 py-4 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-white font-bold rounded-full shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredButton("primary")}
              onHoverEnd={() => setHoveredButton(null)}
            >
              <span className="relative z-10 flex items-center gap-3">
                <Send className="w-5 h-5" />
                Start Your Project
                <motion.span
                  animate={{ x: hoveredButton === "primary" ? [0, 5, 0] : 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: hoveredButton === "primary" ? Infinity : 0,
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#fd5001] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Button particles */}
              {hoveredButton === "primary" && (
                <motion.div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      initial={{
                        x: "50%",
                        y: "50%",
                        opacity: 0,
                      }}
                      animate={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </motion.button>

            <motion.button
              className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredButton("secondary")}
              onHoverEnd={() => setHoveredButton(null)}
            >
              <span className="flex items-center gap-2">
                View Our Portfolio
                <motion.span
                  animate={{
                    rotate: hoveredButton === "secondary" ? [0, 360] : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  ✨
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="group relative p-8 rounded-3xl backdrop-blur-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 text-center"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Card background glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-[#fd5001]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {method.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#fd5001] transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-gray-400 mb-6">{method.description}</p>

                {/* Action button */}
                <motion.button
                  className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20 hover:bg-[#fd5001] hover:border-[#fd5001] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {method.action}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="text-2xl"
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀
            </motion.span>
            <span className="text-gray-300 font-medium">
              Let's build the future together
            </span>
            <motion.span
              className="text-2xl"
              animate={{
                rotate: [0, -15, 15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ✨
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
