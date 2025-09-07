"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Lightbulb,
  Palette,
  Code,
  Rocket,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    icon: <Lightbulb size={32} />,
    title: "Discovery & Research",
    description:
      "Deep dive into your business goals, user needs, and market landscape",
    details: [
      "Stakeholder interviews",
      "User research & personas",
      "Competitive analysis",
      "Technical feasibility study",
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    duration: "1-2 weeks",
  },
  {
    id: 2,
    icon: <Target size={32} />,
    title: "Strategy & Planning",
    description:
      "Define project scope, create roadmap, and establish success metrics",
    details: [
      "Project roadmap creation",
      "Information architecture",
      "User journey mapping",
      "Success metrics definition",
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    duration: "1 week",
  },
  {
    id: 3,
    icon: <Palette size={32} />,
    title: "Design & Prototyping",
    description:
      "Create intuitive, beautiful designs that solve real user problems",
    details: [
      "Wireframes & mockups",
      "Visual design system",
      "Interactive prototypes",
      "Usability testing",
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    duration: "2-4 weeks",
  },
  {
    id: 4,
    icon: <Code size={32} />,
    title: "Development",
    description:
      "Build robust, scalable solutions using cutting-edge technologies",
    details: [
      "Frontend development",
      "Backend integration",
      "Performance optimization",
      "Quality assurance",
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    duration: "4-8 weeks",
  },
  {
    id: 5,
    icon: <Rocket size={32} />,
    title: "Launch & Optimization",
    description:
      "Deploy your solution and continuously improve based on real data",
    details: [
      "Deployment & monitoring",
      "Performance analytics",
      "User feedback collection",
      "Iterative improvements",
    ],
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    duration: "Ongoing",
  },
];

export default function WorksProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 py-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#fd5001]/5 to-orange-500/5 rounded-full blur-3xl"
          animate={
            isMounted
              ? {
                  scale: [1, 1.2, 1],
                  x: [0, 50, 0],
                }
              : {}
          }
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={
            isMounted
              ? {
                  scale: [1.2, 1, 1.2],
                  y: [0, -30, 0],
                }
              : {}
          }
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
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
            animate={
              isMounted
                ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : {}
            }
            transition={{ duration: 4, repeat: Infinity }}
          >
            Our Proven\n <br />
            <span className="text-gray-800">Process</span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From initial concept to final delivery, we follow a systematic
            approach that ensures exceptional results and client satisfaction.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div className="relative" variants={containerVariants}>
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#fd5001] to-[#ff8c00] rounded-full opacity-20"></div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                variants={stepVariants}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Content */}
                <motion.div
                  className="flex-1 relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 cursor-pointer"
                    style={{
                      background:
                        hoveredStep === index || activeStep === index
                          ? "linear-gradient(135deg, rgba(253, 80, 1, 0.1), rgba(255, 140, 0, 0.1))"
                          : "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {/* Step Number */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl ${step.bgColor} backdrop-blur-sm border border-white/20 flex items-center justify-center text-[#fd5001]`}
                        animate={{
                          scale:
                            hoveredStep === index || activeStep === index
                              ? [1, 1.1, 1]
                              : 1,
                          rotate:
                            hoveredStep === index || activeStep === index
                              ? [0, 5, -5, 0]
                              : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat:
                            hoveredStep === index || activeStep === index
                              ? Infinity
                              : 0,
                        }}
                      >
                        {step.icon}
                      </motion.div>
                      <div>
                        <div className="text-sm text-[#fd5001] font-bold">
                          Step {step.id}
                        </div>
                        <div className="text-xs text-gray-500">
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#fd5001] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detail}
                          className="flex items-center gap-3 text-sm text-gray-600"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isMounted ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: index * 0.1 + detailIndex * 0.05,
                          }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Connecting Arrow */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute -bottom-12 left-1/2 transform -translate-x-1/2"
                      animate={
                        isMounted
                          ? {
                              y: [0, 5, 0],
                              opacity: [0.5, 1, 0.5],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      <ArrowRight className="w-6 h-6 text-[#fd5001] rotate-90" />
                    </motion.div>
                  )}
                </motion.div>

                {/* Timeline Node */}
                <motion.div
                  className="hidden lg:flex w-6 h-6 rounded-full bg-gradient-to-r from-[#fd5001] to-[#ff8c00] items-center justify-center relative z-10"
                  whileHover={{ scale: 1.2 }}
                  animate={{
                    scale: activeStep === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat: activeStep === index ? Infinity : 0,
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project Journey
              <motion.span
                animate={isMounted ? { x: [0, 5, 0] } : {}}
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
