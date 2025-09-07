// components/MissionSection.js
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MissionSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const missionItems = [
    {
      icon: "🌱",
      title: "Empower",
      description:
        "We craft digital solutions that empower users and elevate brand value through thoughtful design and innovation.",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: "🎯",
      title: "Focus",
      description:
        "Every decision we make stems from purpose, precision, and user intent, ensuring meaningful impact.",
      gradient: "from-blue-400 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: "🤝",
      title: "Collaborate",
      description:
        "We believe the best ideas come through open, transparent collaboration with our clients and team.",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: "🚀",
      title: "Evolve",
      description:
        "We constantly iterate, improve, and stay ahead of industry innovation to deliver cutting-edge solutions.",
      gradient: "from-orange-400 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
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

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#fd5001]/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-blue-500/10 to-[#fd5001]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight"
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
            Driven by Purpose.
            <br />
            <span className="text-white">Designed for Impact.</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our mission is to shape intuitive, human-centered digital
            experiences that empower brands to connect, inspire, and grow in a
            constantly evolving world.
          </motion.p>
        </motion.div>

        {/* Mission Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {missionItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative"
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -10 }}
            >
              {/* Card background with glassmorphism */}
              <motion.div
                className="relative p-8 rounded-2xl backdrop-blur-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                style={{
                  background:
                    hoveredCard === index
                      ? `linear-gradient(135deg, rgba(253, 80, 1, 0.1), rgba(255, 140, 0, 0.1))`
                      : "rgba(255, 255, 255, 0.05)",
                }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#fd5001]/20 to-[#ff8c00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                {/* Icon with floating animation */}
                <motion.div
                  className="text-6xl mb-6 relative z-10"
                  animate={{
                    y: hoveredCard === index ? [-5, 5, -5] : 0,
                    rotate: hoveredCard === index ? [0, 5, -5, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredCard === index ? Infinity : 0,
                  }}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-bold mb-4 text-[#fd5001] group-hover:text-[#ff8c00] transition-colors duration-300"
                    animate={{
                      scale: hoveredCard === index ? 1.05 : 1,
                    }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {item.description}
                  </motion.p>
                </div>

                {/* Hover effect particles */}
                {hoveredCard === index && (
                  <motion.div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#fd5001] rounded-full"
                        initial={{
                          x: Math.random() * 100 + "%",
                          y: Math.random() * 100 + "%",
                          opacity: 0,
                        }}
                        animate={{
                          y: ["100%", "0%"],
                          opacity: [0, 1, 0],
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
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Learn More About Our Process
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#fd5001] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
