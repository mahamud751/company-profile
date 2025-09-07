"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ServiceHeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <section className="min-h-[500px] flex items-center overflow-hidden relative py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e1c] via-[#2a1e2c] to-[#1a0e1c] z-0" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(253, 80, 1, 0.5) 0%, transparent 70%)",
          }}
          animate={
            isMounted
              ? {
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 140, 0, 0.5) 0%, transparent 70%)",
          }}
          animate={
            isMounted
              ? {
                  x: [0, -30, 0],
                  y: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }
              : {}
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Additional Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor:
                i % 3 === 0 ? "#fd5001" : i % 3 === 1 ? "#ff8c00" : "#ffffff",
              opacity: 0.2 + Math.random() * 0.3,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 40, 0],
              x: [0, (Math.random() - 0.5) * 40, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Pulsing Center Orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-2xl opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(253, 80, 1, 0.8) 0%, transparent 70%)",
          }}
          animate={
            isMounted
              ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.1, 0.3, 0.1],
                }
              : {}
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 relative z-10">
        {/* Left: Text Content */}
        <motion.div
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight relative"
            style={{
              background:
                "linear-gradient(45deg, #ffffff, #fd5001, #ff8c00, #ffffff)",
              backgroundSize: "300% 300%",
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
            transition={{ duration: 6, repeat: Infinity }}
          >
            Design That Drives Growth
            {/* Glowing underline effect */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] rounded-full"
              initial={{ scaleX: 0 }}
              animate={isMounted ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h1>

          <motion.p
            className="text-lg mb-8 max-w-xl"
            style={{ color: "rgba(255, 255, 255, 0.85)" }}
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We specialize in crafting scalable, user-centric digital products —
            from MVPs and SaaS platforms to mobile apps and enterprise software.
            Let us help you transform ideas into intuitive, engaging
            experiences.
          </motion.p>

          <motion.button
            className="px-8 py-3 font-semibold shadow transition-all duration-300 border border-white/20 backdrop-blur-sm rounded-full relative overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "white",
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(253, 80, 1, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Animated background for button */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Start Your Product Journey</span>
          </motion.button>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            whileHover={{ scale: 1.03, rotateY: 5, rotateX: 5 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isMounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 border-2 border-[#fd5001]"
              whileHover={{ opacity: 0.5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#fd5001]/20 to-[#ff8c00]/20 z-10" />

            {/* Floating elements inside image container */}
            <motion.div
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#fd5001] opacity-20"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
              }}
            />

            <motion.div
              className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-[#ff8c00] opacity-20"
              animate={{
                y: [0, 10, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 1,
              }}
            />

            <Image
              src="/service-product-design.jpg"
              alt="Product Design Service"
              width={500}
              height={400}
              className="rounded-3xl object-cover z-0 relative"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
