"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import CategoryTabs from "./CategoryTabs";

export default function BlogPageContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Animated Background Elements with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Central "Bottle" Element - Pepsi-like design */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-64 rounded-3xl opacity-20"
          style={{
            background:
              "linear-gradient(180deg, #fd5001 0%, #ff8c00 50%, #ffffff 100%)",
            boxShadow: "0 0 50px rgba(253, 80, 1, 0.5)",
          }}
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={
            isMounted
              ? {
                  opacity: 0.3,
                  y: 0,
                  scale: 1,
                  rotate: [0, 5, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            delay: 0.2,
            ease: "easeOut",
          }}
        />

        {/* Green Leaves surrounding the bottle */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`leaf-${i}`}
            className="absolute w-12 h-12 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #4ade80, transparent)",
              left: "50%",
              top: "50%",
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
                    opacity: [0, 0.3, 0.2],
                    x: [
                      0,
                      Math.cos((i * Math.PI) / 4) * (80 + Math.random() * 40),
                      Math.cos((i * Math.PI) / 4) * (100 + Math.random() * 60),
                    ],
                    y: [
                      0,
                      Math.sin((i * Math.PI) / 4) * (80 + Math.random() * 40),
                      Math.sin((i * Math.PI) / 4) * (100 + Math.random() * 60),
                    ],
                    scale: [0, 1, 1.2],
                    rotate: [0, 180, 360],
                  }
                : {}
            }
            transition={{
              duration: 2,
              delay: 0.5 + i * 0.1,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(253, 80, 1, 0.5) 0%, transparent 70%)",
          }}
          animate={
            isMounted
              ? {
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.2, 1],
                }
              : {}
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 140, 0, 0.5) 0%, transparent 70%)",
          }}
          animate={
            isMounted
              ? {
                  x: [0, -40, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.3, 1],
                }
              : {}
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating Particles with Parallax Movement */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor:
                i % 3 === 0 ? "#fd5001" : i % 3 === 1 ? "#ff8c00" : "#ffffff",
              opacity: 0.3 + Math.random() * 0.4,
            }}
            animate={
              isMounted
                ? {
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    opacity: [0.3, 0.7, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }
                : {}
            }
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 mt-8"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 inline-flex gap-2 tracking-widest relative"
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
            The Curiosity Blog
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] rounded-full"
              initial={{ scaleX: 0 }}
              animate={isMounted ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto mt-6"
            style={{
              color: "rgba(255, 255, 255, 0.85)",
            }}
          >
            Discover insights, trends, and inspiration from our team of experts
          </motion.p>
        </motion.div>

        {/* Category Tabs with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <CategoryTabs />
        </motion.div>

        {/* Blog Cards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isMounted ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <BlogCard />
        </motion.div>
      </div>
    </div>
  );
}
