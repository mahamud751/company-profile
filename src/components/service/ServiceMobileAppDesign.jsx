"use client";
import Image from "next/image";
import { ArrowRight, Smartphone, Tablet, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const apps = [
  { name: "Mobile App", icon: Smartphone },
  { name: "IOS App", icon: Tablet },
  { name: "App prototyping", icon: Code },
];

export default function ServiceMobileAppDesign() {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.section
      className="w-full py-20 relative overflow-hidden"
      style={{ background: "rgba(255, 255, 255, 0.05)" }}
      initial={{ opacity: 0, y: 40 }}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background:
                i % 3 === 0
                  ? "radial-gradient(circle, #fd5001, transparent)"
                  : i % 3 === 1
                  ? "radial-gradient(circle, #ff8c00, transparent)"
                  : "radial-gradient(circle, #ffffff, transparent)",
              opacity: 0.1 + Math.random() * 0.2,
            }}
            animate={
              isMounted
                ? {
                    y: [0, (Math.random() - 0.5) * 30, 0],
                    x: [0, (Math.random() - 0.5) * 30, 0],
                    opacity: [0.1, 0.4, 0.1],
                    scale: [1, 1.3, 1],
                  }
                : {}
            }
            transition={{
              duration: 4 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Pulsing Orbs */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-24 h-24 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, #ff8c00 0%, transparent 70%)",
          }}
          animate={
            isMounted
              ? {
                  scale: [1, 1.4, 1],
                  opacity: [0.1, 0.25, 0.1],
                }
              : {}
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, #fd5001 0%, transparent 70%)",
          }}
          animate={
            isMounted
              ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.3, 0.1],
                }
              : {}
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-4 items-stretch relative z-10">
        {/* Left: Content */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 leading-tight relative"
            style={{ color: "#fd5001" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Mobile app design
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] rounded-full"
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
            We focus on enhancing user interest by creating User friendly
            interfaces. By building a strong brand identity within the app, we
            ensure that users recognize and trust your brand. Our expert design
            team also works on optimizing the functionality of the app, making
            sure it runs smoothly and efficiently.
          </motion.p>

          <ul className="space-y-3">
            {apps.map((app, idx) => {
              const IconComponent = app.icon;
              return (
                <motion.li
                  key={app.name}
                  className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0 group px-2 rounded transition-all duration-300 relative overflow-hidden"
                  style={{ background: "rgba(255, 255, 255, 0.05)" }}
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
                  {/* Animated background for list item */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] opacity-0 rounded"
                    animate={hoveredIndex === idx ? { opacity: 0.1 } : {}}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="flex items-center gap-4 relative z-10">
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
                              rotate: [0, 15, 0],
                            }
                          : {}
                      }
                      transition={{ duration: 0.6 }}
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
                      {app.name}
                    </span>
                  </div>

                  {/* Enhanced arrow animation */}
                  <motion.div
                    className="relative z-10"
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

        {/* Right: Image */}
        <motion.div
          className="md:w-1/2 w-full flex items-stretch"
          initial={{ opacity: 0, x: 30 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
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
              whileHover={{ opacity: 0.4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#fd5001]/10 to-[#ff8c00]/10 z-10" />

            {/* Floating corner elements */}
            <motion.div
              className="absolute top-4 right-4 w-5 h-5 rounded-full bg-[#fd5001] opacity-30"
              animate={{
                y: [0, -6, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
              }}
            />

            <motion.div
              className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-[#ff8c00] opacity-30"
              animate={{
                y: [0, 6, 0],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 1,
              }}
            />

            <Image
              src="/service-mobile-app-design.jpg"
              alt="Mobile App Design Showcase"
              fill
              className="object-cover h-full"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
