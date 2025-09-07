"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ArrowLeft, Sparkles, Clock } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";

const steps = [
  {
    title: "Kickoff & Align",
    description:
      "We begin by clarifying your objectives and aligning on goals.",
  },
  {
    title: "Plan & Validate",
    description:
      "We craft a strategic plan and get your sign-off to move forward.",
  },
  {
    title: "Design & Visuals",
    description:
      "Our team crafts on-brand visuals and user-friendly layouts swiftly.",
  },
  {
    title: "Develop & Iterate",
    description:
      "We develop and iterate based on your feedback in quick sprints.",
  },
  {
    title: "Launch & Support",
    description: "We help launch your product and support post-launch success.",
  },
];

export default function ProjectApproachSlider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [startIndex, setStartIndex] = useState(0);
  const [maxVisible, setMaxVisible] = useState(3);
  const [direction, setDirection] = useState(0);

  const totalSteps = steps.length;

  useEffect(() => {
    const updateMaxVisible = () => {
      if (window.innerWidth < 640) {
        setMaxVisible(1);
      } else if (window.innerWidth < 1024) {
        setMaxVisible(2);
      } else {
        setMaxVisible(3);
      }
    };

    updateMaxVisible();
    window.addEventListener("resize", updateMaxVisible);
    return () => window.removeEventListener("resize", updateMaxVisible);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % totalSteps);
  };

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
  };

  // Calculate the steps to display, handling wrap-around
  const visibleSteps = [];
  if (totalSteps > 0) {
    for (let i = 0; i < maxVisible; i++) {
      const stepIndex = (startIndex + i) % totalSteps;
      visibleSteps.push(steps[stepIndex]);
    }
  }

  // Animation variants for the group of cards
  const groupVariants = {
    initial: (customDirection) => ({
      opacity: 0,
      x: customDirection === 0 ? 0 : customDirection === 1 ? "30%" : "-30%",
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: (customDirection) => ({
      opacity: 0,
      x: customDirection === 1 ? "-30%" : "30%",
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <motion.section
      ref={ref}
      className="relative text-white bg-gradient-to-br from-[#1a0e1c] via-[#2a1e2c] to-[#1a0e1c] lg:py-24 py-16 overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#fd5001] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10],
              x: [-5, 5],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Subtitle */}
          <motion.div className="flex justify-center items-center gap-3 mb-6">
            <motion.div className="relative flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <motion.span
                className="relative flex h-3 w-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe9667] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#fd5001]" />
              </motion.span>
              <Sparkles className="w-4 h-4 text-white" />
              <span className="uppercase font-semibold tracking-widest text-white text-sm">
                Our Approach
              </span>
            </motion.div>
          </motion.div>

          {/* Enhanced Title */}
          <motion.h2
            className="font-serif text-4xl md:text-6xl text-center"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <span className="text-white">Live in </span>
            <motion.span
              className="line-through text-[#fe9667]"
              whileHover={{ scale: 1.1 }}
            >
              Months
            </motion.span>
            <span className="text-white"> </span>
            <motion.span
              className="bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-transparent bg-clip-text"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Weeks
            </motion.span>
          </motion.h2>
        </motion.div>
      </div>

      {/* Enhanced Slider Container */}
      <div className="relative max-w-6xl mx-auto px-4 mt-16">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={startIndex}
            custom={direction}
            variants={groupVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-[400px]"
          >
            <div
              className={`grid grid-cols-1 ${
                maxVisible === 2 ? "sm:grid-cols-2" : ""
              } ${maxVisible === 3 ? "lg:grid-cols-3" : ""} gap-6 sm:gap-8`}
            >
              {visibleSteps.map((step, index) => (
                <EnhancedStepCard
                  key={step.title + "-" + index}
                  step={step}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Navigation Buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 transform -translate-y-1/2 z-10">
          <motion.button
            onClick={handlePrev}
            aria-label="Previous Step"
            className="group relative bg-white/10 backdrop-blur-sm hover:bg-[#fd5001] text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-2xl transition-all duration-300 border border-white/20"
            disabled={totalSteps <= maxVisible}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#fd5001] to-[#ff8c00] opacity-0 group-hover:opacity-20 transition-opacity" />
          </motion.button>

          <motion.button
            onClick={handleNext}
            aria-label="Next Step"
            className="group relative bg-white/10 backdrop-blur-sm hover:bg-[#fd5001] text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-2xl transition-all duration-300 border border-white/20"
            disabled={totalSteps <= maxVisible}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#fd5001] to-[#ff8c00] opacity-0 group-hover:opacity-20 transition-opacity" />
          </motion.button>
        </div>

        {/* Progress Indicator */}
        <motion.div
          className="flex justify-center mt-8 gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  index >= startIndex && index < startIndex + maxVisible
                    ? "#fd5001"
                    : "rgba(255, 255, 255, 0.3)",
              }}
              whileHover={{ scale: 1.5 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Enhanced Step Card Component
function EnhancedStepCard({ step, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group flex flex-col gap-6 rounded-3xl border border-white/20 p-8 shadow-2xl overflow-hidden transition-all duration-500 cursor-pointer"
      style={{
        background: isHovered
          ? "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(253, 80, 1, 0.1))"
          : "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        scale: 1.02,
        rotateY: 5,
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
    >
      {/* Grain effect background */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
          backgroundSize: "cover",
        }}
      />

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        animate={{
          scale: isHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />

      {/* Step Number */}
      <motion.div
        className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] rounded-full flex items-center justify-center text-white text-sm font-bold"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
      >
        {(index + 1).toString().padStart(2, "0")}
      </motion.div>

      {/* Clock Icon */}
      <motion.div
        className="w-12 h-12 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] rounded-xl flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Clock className="w-6 h-6 text-white" />
      </motion.div>

      <div>
        <motion.h3
          className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-[#fd5001] transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
        >
          {step.title}
        </motion.h3>
        <motion.p
          className="text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
        >
          {step.description}
        </motion.p>
      </div>

      {/* Interactive Arrow */}
      <motion.div
        className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
      >
        <div className="inline-flex items-center gap-2 text-[#fd5001] font-semibold text-sm">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </motion.div>

      {/* Corner decoration */}
      <motion.div
        className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#fd5001]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0, rotate: 45 }}
        whileHover={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </motion.div>
  );
}
