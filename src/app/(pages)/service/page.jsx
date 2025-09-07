"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Company from "@/components/home/Company";
import ServiceHeroSection from "@/components/service/ServiceHeroSection";
import ServiceBrandingSection from "@/components/service/ServiceBrandingSection";
import ServiceUxUiSection from "@/components/service/ServiceUxUiSection";
import ServiceWebDesignSection from "@/components/service/ServiceWebDesignSection";
import ServiceMobileAppDesign from "@/components/service/ServiceMobileAppDesign";
import ServiceMvpDevelopment from "@/components/service/ServiceMvpDevelopment";
import ServiceWhyPartnerSection from "@/components/service/ServiceWhyPartnerSection";
import ServiceExpertiseSection from "@/components/service/ServiceExpertiseSection";
import ProjectShowcase from "@/components/home/ProjectShowcase";

const Service = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate floating bubbles
  const generateBubbles = (count) => {
    return [...Array(count)].map((_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 15,
    }));
  };

  const floatingBubbles = generateBubbles(15);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-[#1a0e1c] via-[#2a1e2c] to-[#1a0e1c] relative overflow-hidden"
    >
      {/* Interactive Mouse Follower */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(253, 80, 1, 0.15) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(253, 80, 1, 0.5) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
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
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating Bubbles */}
        {floatingBubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full opacity-10"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              background:
                bubble.id % 3 === 0
                  ? "radial-gradient(circle, #fd5001, transparent)"
                  : bubble.id % 3 === 1
                  ? "radial-gradient(circle, #ff8c00, transparent)"
                  : "radial-gradient(circle, #ffffff, transparent)",
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(bubble.id) * 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Particles */}
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
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing Border Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 rounded-full opacity-20 animate-pulse"
          style={{
            boxShadow: "inset 0 0 100px #fd5001, inset 0 0 200px #ff8c00",
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <ServiceHeroSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ServiceBrandingSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ServiceUxUiSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ServiceWebDesignSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ServiceMobileAppDesign />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ServiceMvpDevelopment />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ServiceExpertiseSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <ServiceWhyPartnerSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Company />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <ProjectShowcase />
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
