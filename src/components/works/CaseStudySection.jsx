"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Play,
  ExternalLink,
  Award,
  Users,
  Zap,
  ChevronRight,
} from "lucide-react";

export default function CaseStudySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeMetric, setActiveMetric] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const metrics = [
    { icon: <Award size={20} />, value: "50+", label: "Projects Completed" },
    { icon: <Users size={20} />, value: "30+", label: "Happy Clients" },
    { icon: <Zap size={20} />, value: "95%", label: "Client Satisfaction" },
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#fd5001]/10 via-transparent to-[#ff8c00]/10"></div>
      </div>

      <motion.section
        className="relative py-32 px-4 min-h-screen flex items-center"
        style={{ y, opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
      >
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-[#fd5001]/20 to-[#ff8c00]/20 rounded-lg rotate-45"
          animate={{
            y: [-10, 10, -10],
            rotate: [45, 225, 45],
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
          transition={{ duration: 6, repeat: Infinity }}
          initial={{ opacity: 0, scale: 0 }}
        />
        <motion.div
          className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            x: mousePosition.x * -0.3,
            y: mousePosition.y * -0.3,
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          initial={{ opacity: 0, scale: 0 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-24 bg-gradient-to-t from-green-400/20 to-teal-400/20 rounded-full"
          animate={{
            x: mousePosition.x * 0.7,
            y: mousePosition.y * 0.7,
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
          initial={{ opacity: 0, scale: 0 }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-left z-10 relative">
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-5xl md:text-7xl font-black leading-tight mb-8 tracking-tight"
                style={{
                  background:
                    "linear-gradient(45deg, #fd5001, #ff8c00, #fd5001)",
                  backgroundSize: "400% 400%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                initial={{ opacity: 0, y: 20, duration: 0.8, delay: 0.3 }}
                animate={
                  isMounted
                    ? {
                        opacity: 1,
                        y: 0,
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }
                    : {}
                }
              >
                Transforming
                <br />
                <span className="text-white">Vision Into</span>
                <br />
                <span className="relative">
                  Digital Impact
                  <motion.div
                    className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={isMounted ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              We partner with fast-growing startups and visionary brands to
              craft
              <span className="font-semibold text-[#fd5001]">
                {" "}
                extraordinary digital experiences
              </span>{" "}
              that drive engagement, conversion, and long-term success.
            </motion.p>

            {/* Metrics */}
            <motion.div
              className="grid grid-cols-3 gap-6 mb-8"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center cursor-pointer"
                  onHoverStart={() => setActiveMetric(index)}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isMounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                >
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-2 transition-colors duration-300 ${
                      activeMetric === index
                        ? "bg-[#fd5001] text-white"
                        : "bg-white/10 text-[#fd5001]"
                    }`}
                    animate={{
                      rotate: activeMetric === index ? [0, 360] : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {metric.icon}
                  </motion.div>
                  <div className="text-2xl font-bold text-white">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isMounted ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View All Projects
                  <ChevronRight className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#fd5001] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isMounted ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Featured Case Study */}
          <motion.div
            className="relative z-10"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isMounted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0 }}
                  animate={isMounted ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  <Image
                    src="/case-study-01.jpg"
                    alt="Featured Project"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    priority
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#fd5001] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-6 h-6 ml-1" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Glide Dashboard
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Career Management Platform
                    </p>
                  </div>
                  <motion.button
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-[#fd5001] transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isMounted ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </div>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Modern job referral and applicant tracking system focused on
                  simplicity, performance, and clarity. Redesigned UI/UX for
                  intuitive job hunting experience.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {["UI/UX Design", "Dashboard", "SaaS", "React"].map(
                    (tag, index) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-[#fd5001]/20 to-[#ff8c00]/20 text-[#fd5001] text-xs font-medium rounded-full border border-[#fd5001]/30"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isMounted ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 2.1 + index * 0.1, duration: 0.3 }}
                      >
                        {tag}
                      </motion.span>
                    )
                  )}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </motion.div>

            {/* Floating elements around the card */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] rounded-full"
              transition={{ duration: 4, repeat: Infinity, delay: 1.6 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isMounted
                  ? {
                      opacity: 1,
                      scale: 1,
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }
                  : {}
              }
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isMounted
                  ? { opacity: 1, scale: [1.2, 1, 1.2], y: [-5, 5, -5] }
                  : {}
              }
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 3 }}
          >
            <motion.div className="w-1 h-3 bg-white/40 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
