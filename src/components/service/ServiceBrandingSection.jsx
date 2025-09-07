"use client";
import Image from "next/image";
import { ArrowRight, Palette, Zap, Target, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const services = [
  { name: "Branding", icon: Palette },
  { name: "Brand Identity", icon: Target },
  { name: "Corporate Identity", icon: Layers },
  { name: "Brand Strategy", icon: Zap },
  { name: "Motion Graphics", icon: Palette },
  { name: "Graphic Design", icon: Layers },
  { name: "Logo Design", icon: Target },
  { name: "Startup Branding", icon: Zap },
];

export default function ServiceBrandingSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Wave animation for background elements
  const waveVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0.15,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="w-full py-20 relative overflow-hidden"
      style={{ background: "rgba(26, 14, 28, 0.7)" }}
      initial={{ opacity: 0, y: 40 }}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      {/* Enhanced Background Elements with Wave Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wave-like floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-2xl"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
              background:
                i % 2 === 0
                  ? "radial-gradient(circle, #fd5001 0%, transparent 70%)"
                  : "radial-gradient(circle, #ff8c00 0%, transparent 70%)",
              opacity: 0.1,
            }}
            animate={
              isMounted
                ? {
                    y: [0, -20, 0],
                    x: [0, Math.sin(i) * 15, 0],
                    scale: [1, 1.1, 1],
                  }
                : {}
            }
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Pulsing center element */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl opacity-5"
          style={{
            background: "radial-gradient(circle, #fd5001 0%, transparent 70%)",
          }}
          animate={
            isMounted
              ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.05, 0.15, 0.05],
                }
              : {}
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-4 items-stretch relative z-10">
        {/* Left: Image with Enhanced Animation */}
        <motion.div
          className="md:w-1/2 w-full flex items-stretch"
          initial={{ opacity: 0, x: -30 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 3 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isMounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 border-2 border-[#fd5001]"
              whileHover={{ opacity: 0.3, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fd5001]/10 to-[#ff8c00]/10 z-10" />

            {/* Floating corner elements */}
            <motion.div
              className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#fd5001] opacity-30"
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0.5,
              }}
            />

            <Image
              src="/service-branding-image.jpg"
              alt="Brand Identity Visual"
              fill
              className="object-cover h-full"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right: Content with Enhanced Animations */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 leading-tight relative"
            style={{ color: "#fd5001" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Memorable Branding That Resonates
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-0 w-24 h-1 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] rounded-full"
              initial={{ scaleX: 0 }}
              animate={isMounted ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>

          <motion.p
            className="mb-8 max-w-lg text-lg"
            style={{ color: "rgba(255, 255, 255, 0.85)" }}
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We shape digital-first brand identities that are consistent,
            compelling, and scalable. Whether you're a startup or an established
            company, we bring your story to life through strategy, visuals, and
            clarity.
          </motion.p>

          <ul className="space-y-3">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <motion.li
                  key={service.name}
                  className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0 group px-2 rounded transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                  }}
                  whileHover={{
                    scale: 1.02,
                    background: "rgba(253, 80, 1, 0.15)",
                    x: 5,
                  }}
                  onHoverStart={() => setHoveredIndex(idx)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isMounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                >
                  <div className="flex items-center gap-4">
                    {/* Animated icon */}
                    <motion.div
                      className="flex items-center justify-center w-8 h-8 rounded-full"
                      style={{
                        background: "rgba(253, 80, 1, 0.2)",
                      }}
                      animate={
                        hoveredIndex === idx
                          ? {
                              scale: [1, 1.2, 1],
                              rotate: [0, 10, 0],
                            }
                          : {}
                      }
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent
                        className="group-hover:text-[#fd5001] transition-colors"
                        style={{ color: "rgba(255, 255, 255, 0.8)" }}
                        size={16}
                      />
                    </motion.div>

                    <span
                      className="font-mono w-7 group-hover:text-[#fd5001] transition-colors text-sm"
                      style={{ color: "rgba(255, 255, 255, 0.6)" }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-lg group-hover:text-[#fd5001] transition-colors"
                      style={{ color: "rgba(255, 255, 255, 0.9)" }}
                    >
                      {service.name}
                    </span>
                  </div>

                  {/* Enhanced arrow animation */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    animate={
                      hoveredIndex === idx
                        ? {
                            x: [0, 5, 0],
                          }
                        : {}
                    }
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      duration: 0.6,
                    }}
                  >
                    <ArrowRight
                      className="group-hover:text-[#fd5001] transition-colors"
                      style={{ color: "rgba(255, 255, 255, 0.6)" }}
                      size={20}
                    />
                  </motion.div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
