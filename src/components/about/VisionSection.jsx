// components/VisionSection.js
"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeVision, setActiveVision] = useState(0);

  const visionItems = [
    {
      icon: "🌍",
      title: "Global Perspective",
      description:
        "We aim to shape experiences that resonate across cultures and platforms, creating universal digital languages.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: "🧠",
      title: "Intelligent Design",
      description:
        "Leveraging data and empathy to build smarter, adaptive interfaces that evolve with user needs.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: "💡",
      title: "Innovation First",
      description:
        "Continuously pushing creative and technological boundaries to stay ahead of tomorrow's challenges.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: "💖",
      title: "Human at the Core",
      description:
        "Prioritizing accessibility, usability, and emotional connection in every design decision we make.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
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
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#fd5001]/5 to-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-l from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
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
            transition={{ duration: 5, repeat: Infinity }}
          >
            Our Vision for
            <br />
            <span className="text-gray-800">Tomorrow's World</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We envision a world where digital experiences are not just
            functional — they're intuitive, inclusive, and emotionally
            impactful. Our goal is to lead that change through design-driven
            innovation.
          </motion.p>
        </motion.div>

        {/* Interactive Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Vision cards */}
          <motion.div className="space-y-6" variants={itemVariants}>
            {visionItems.map((item, index) => (
              <motion.div
                key={item.title}
                className={`group relative p-6 rounded-2xl backdrop-blur-sm border cursor-pointer transition-all duration-500 ${
                  activeVision === index
                    ? "bg-white/60 border-[#fd5001]/30 shadow-xl"
                    : "bg-white/20 border-white/20 hover:bg-white/40"
                }`}
                onClick={() => setActiveVision(index)}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Animated border for active item */}
                {activeVision === index && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#fd5001]/20 to-[#ff8c00]/20 blur-sm"
                    layoutId="activeBorder"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    className={`text-4xl p-3 rounded-xl ${item.bgColor} backdrop-blur-sm`}
                    animate={{
                      scale: activeVision === index ? [1, 1.1, 1] : 1,
                      rotate: activeVision === index ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: activeVision === index ? Infinity : 0,
                    }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.h3
                      className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        activeVision === index
                          ? "text-[#fd5001]"
                          : "text-gray-800"
                      }`}
                      animate={{
                        scale: activeVision === index ? 1.05 : 1,
                      }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-600 leading-relaxed"
                      animate={{
                        opacity: activeVision === index ? 1 : 0.7,
                      }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>

                {/* Hover particles */}
                <motion.div
                  className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
                  initial={false}
                  animate={activeVision === index ? "active" : "inactive"}
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#fd5001] rounded-full"
                      variants={{
                        inactive: { opacity: 0, scale: 0 },
                        active: {
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: Math.random() * 100 + "%",
                          y: Math.random() * 100 + "%",
                        },
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Animated visualization */}
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative w-full h-96 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm rounded-3xl border border-white/30 overflow-hidden">
              {/* Animated content based on active vision */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                key={activeVision}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-8xl mb-6"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotateY: [0, 360],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {visionItems[activeVision].icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {visionItems[activeVision].title}
                  </h3>
                </div>
              </motion.div>

              {/* Floating geometric shapes */}
              <motion.div
                className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-[#fd5001]/20 to-[#ff8c00]/20 rounded-lg"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-10 right-10 w-12 h-12 bg-gradient-to-l from-blue-500/20 to-purple-500/20 rounded-full"
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-1/2 right-16 w-8 h-20 bg-gradient-to-t from-green-500/20 to-teal-500/20 rounded-full"
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 0.8, 1],
                }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div className="text-center mt-20" variants={itemVariants}>
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Join Our Vision
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#fd5001] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
