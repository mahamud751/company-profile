// components/AboutHeroSection.js
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function AboutHeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
    hidden: { y: 30, opacity: 0 },
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

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-50/30 via-transparent to-pink-50/30 animate-pulse"></div>
      </div>

      <motion.section
        className="relative flex flex-col items-center justify-center min-h-screen px-6 py-32 text-center"
        style={{ y, opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
      >
        {/* Central Figure - Man Element */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-48 rounded-lg opacity-20 z-0"
          style={{
            background:
              "linear-gradient(180deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%)",
            boxShadow: "0 0 50px rgba(124, 58, 237, 0.5)",
          }}
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={
            isMounted
              ? {
                  opacity: 0.3,
                  y: 0,
                  scale: 1,
                  rotate: [0, 2, -2, 0],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            delay: 0.2,
            ease: "easeOut",
          }}
        />

        {/* Surrounding Stars */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-4 h-4 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, #fbbf24, #f59e0b, transparent)",
              left: "50%",
              top: "50%",
              boxShadow: "0 0 10px #fbbf24",
            }}
            initial={{
              opacity: 0,
              x: 0,
              y: 0,
              scale: 0,
            }}
            animate={
              isMounted
                ? {
                    opacity: [0, 0.4, 0.3],
                    x: [
                      0,
                      Math.cos((i * Math.PI) / 6) * (60 + Math.random() * 40),
                      Math.cos((i * Math.PI) / 6) * (80 + Math.random() * 60),
                    ],
                    y: [
                      0,
                      Math.sin((i * Math.PI) / 6) * (60 + Math.random() * 40),
                      Math.sin((i * Math.PI) / 6) * (80 + Math.random() * 60),
                    ],
                    scale: [0, 1, 1.3],
                    rotate: [0, 180, 360],
                  }
                : {}
            }
            transition={{
              duration: 2,
              delay: 0.5 + i * 0.15,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg rotate-45 opacity-20"
          animate={
            isMounted
              ? {
                  ...floatingAnimation,
                  rotate: [45, 225, 45],
                  x: mousePosition.x * 0.5,
                  y: mousePosition.y * 0.5,
                  opacity: 0.2,
                  scale: 1,
                }
              : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
          animate={
            isMounted
              ? {
                  ...floatingAnimation,
                  scale: [1, 1.2, 1],
                  x: mousePosition.x * -0.3,
                  y: mousePosition.y * -0.3,
                  opacity: 0.2,
                  scale: 1,
                }
              : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-24 bg-gradient-to-t from-green-400 to-teal-400 rounded-full opacity-20"
          animate={
            isMounted
              ? {
                  ...floatingAnimation,
                  x: mousePosition.x * 0.7,
                  y: mousePosition.y * 0.7,
                  opacity: 0.2,
                  scale: 1,
                }
              : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
        />

        <div className="max-w-6xl z-10 relative">
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-6xl md:text-8xl font-black leading-tight mb-8 tracking-tight"
              animate={
                isMounted
                  ? { backgroundPosition: "100% 50%" }
                  : { backgroundPosition: "0% 50%" }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1.5,
              }}
              style={{
                background:
                  "linear-gradient(45deg, #fd5001, #ff8c00, #fd5001, #ff6b35)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Crafting Tomorrow's
              <br />
              <span className="relative">
                Digital Stories
                <motion.div
                  className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
                  animate={isMounted ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1.5, delay: 2 }}
                />
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            We blend cutting-edge technology with human-centered design to
            create
            <span className="font-semibold text-[#fd5001]">
              {" "}
              extraordinary digital experiences
            </span>{" "}
            that inspire, engage, and transform the way people interact with
            brands.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-16"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {[
              { text: "UI/UX Strategy", icon: "✨" },
              { text: "Brand Identity", icon: "🎨" },
              { text: "Web & App Design", icon: "💻" },
              { text: "Digital Innovation", icon: "🚀" },
            ].map((badge, index) => (
              <motion.div
                key={badge.text}
                className="group relative"
                variants={badgeVariants}
                whileHover="hover"
                custom={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full shadow-lg text-sm font-semibold border border-white/20 flex items-center gap-2 group-hover:bg-white transition-colors">
                  <span className="text-lg">{badge.icon}</span>
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={itemVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isMounted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <span className="relative z-10">Explore Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#fd5001] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-gray-700 font-semibold rounded-full border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isMounted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 2.3 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>

        {/* Enhanced decorative elements */}
        <motion.div
          className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={
            isMounted
              ? {
                  scale: [1, 1.2, 1],
                  x: mousePosition.x * 0.2,
                  y: mousePosition.y * 0.2,
                  opacity: 0.3,
                  scale: 1,
                }
              : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-l from-orange-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={
            isMounted
              ? {
                  scale: [1.2, 1, 1.2],
                  x: mousePosition.x * -0.2,
                  y: mousePosition.y * -0.2,
                  opacity: 0.3,
                  scale: 1,
                }
              : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 3 }}
          >
            <motion.div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
