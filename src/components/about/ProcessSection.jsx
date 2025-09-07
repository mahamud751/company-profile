// components/ProcessSection.js
"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Lightbulb, Palette, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    desc: "We start by deeply understanding your business, users, and goals through comprehensive research and analysis.",
    icon: <Search size={32} />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    details: ["User Research", "Market Analysis", "Goal Definition"],
  },
  {
    title: "Strategy",
    desc: "We craft a tailored digital roadmap aligned with your brand vision and business objectives.",
    icon: <Lightbulb size={32} />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    details: [
      "Strategic Planning",
      "User Journey Mapping",
      "Technology Selection",
    ],
  },
  {
    title: "Design",
    desc: "We translate ideas into user-centric, high-impact design experiences that resonate with your audience.",
    icon: <Palette size={32} />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    details: ["UI/UX Design", "Prototyping", "Design Systems"],
  },
  {
    title: "Delivery",
    desc: "We ensure pixel-perfect handoff, comprehensive testing, and seamless deployment to production.",
    icon: <Rocket size={32} />,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    details: ["Development", "Testing", "Launch Support"],
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

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

  const stepVariants = {
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
      className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 px-6 py-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#fd5001]/5 to-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-l from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
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
            How We Bring
            <br />
            <span className="text-gray-800">Ideas to Life</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our proven process transforms vision into reality — collaboratively,
            creatively, and with precision that delivers extraordinary results.
          </motion.p>
        </motion.div>

        {/* Interactive Process Timeline */}
        <div className="mb-16">
          {/* Timeline Navigation */}
          <motion.div
            className="flex justify-center mb-12"
            variants={stepVariants}
          >
            <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-full p-2 border border-white/20">
              {steps.map((step, index) => (
                <motion.button
                  key={step.title}
                  className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeStep === index
                      ? "bg-[#fd5001] text-white shadow-lg"
                      : "text-gray-600 hover:text-[#fd5001] hover:bg-white/80"
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-sm">{step.icon}</span>
                    <span className="hidden sm:inline">{step.title}</span>
                  </span>
                  {activeStep === index && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#fd5001] to-[#ff8c00]"
                      layoutId="activeTab"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Active Step Content */}
          <motion.div
            className="text-center max-w-4xl mx-auto"
            key={activeStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-8">
              <motion.div
                className={`p-6 rounded-3xl ${steps[activeStep].bgColor} backdrop-blur-sm border border-white/20`}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-[#fd5001] text-5xl">
                  {steps[activeStep].icon}
                </div>
              </motion.div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              {steps[activeStep].title}
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {steps[activeStep].desc}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {steps[activeStep].details.map((detail, index) => (
                <motion.span
                  key={detail}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium border border-white/20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {detail}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="group relative"
              variants={stepVariants}
              onHoverStart={() => setHoveredStep(idx)}
              onHoverEnd={() => setHoveredStep(null)}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Card */}
              <motion.div
                className="relative p-8 rounded-3xl backdrop-blur-sm border border-white/20 bg-white/40 hover:bg-white/60 transition-all duration-500 text-center h-full flex flex-col"
                style={{
                  background:
                    hoveredStep === idx
                      ? `linear-gradient(135deg, rgba(253, 80, 1, 0.1), rgba(255, 140, 0, 0.1))`
                      : "rgba(255, 255, 255, 0.4)",
                }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fd5001]/20 to-[#ff8c00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                {/* Step number with icon */}
                <motion.div
                  className="relative z-10 mx-auto mb-6"
                  animate={{
                    scale: hoveredStep === idx ? [1, 1.1, 1] : 1,
                    rotate: hoveredStep === idx ? [0, 10, -10, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredStep === idx ? Infinity : 0,
                  }}
                >
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <div className="text-[#fd5001]">{step.icon}</div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#fd5001] text-white text-sm font-bold flex items-center justify-center">
                      {idx + 1}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <motion.h3
                    className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#fd5001] transition-colors duration-300"
                    animate={{
                      scale: hoveredStep === idx ? 1.05 : 1,
                    }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 text-sm leading-relaxed flex-1"
                    animate={{
                      opacity: hoveredStep === idx ? 1 : 0.8,
                    }}
                  >
                    {step.desc}
                  </motion.p>
                </div>

                {/* Connection arrow (not for last item) */}
                {idx < steps.length - 1 && (
                  <motion.div
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden lg:block"
                    animate={{
                      x: hoveredStep === idx ? [0, 5, 0] : 0,
                      opacity: hoveredStep === idx ? [0.5, 1, 0.5] : 0.5,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: hoveredStep === idx ? Infinity : 0,
                    }}
                  >
                    <ArrowRight className="text-[#fd5001] w-6 h-6" />
                  </motion.div>
                )}

                {/* Hover particles */}
                {hoveredStep === idx && (
                  <motion.div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#fd5001] rounded-full"
                        initial={{
                          x: Math.random() * 100 + "%",
                          y: "100%",
                          opacity: 0,
                        }}
                        animate={{
                          y: "0%",
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
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
              Start Your Project
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
