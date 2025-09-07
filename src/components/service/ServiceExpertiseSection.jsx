"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const expertise = [
  {
    title: "E-Commerce",
    color: "from-[#FF6333] to-[#fd5001]",
    image: "/expertise-ecommerce.jpg",
    details:
      "Crafting frictionless and conversion-optimized shopping experiences for digital retailers.",
  },
  {
    title: "Edu-Tech",
    color: "from-[#4B215C] to-[#A259FF]",
    image: "/expertise-edutech.jpg",
    details:
      "Building engaging, accessible platforms that elevate the digital learning journey.",
  },
  {
    title: "Fintech",
    color: "from-[#E6FF3F] to-[#24E6FF]",
    image: "/expertise-fintech.jpg",
    details:
      "Designing secure, intuitive interfaces for modern financial services and banking apps.",
  },
  {
    title: "Corporate",
    color: "from-[#A259FF] to-[#4B215C]",
    image: "/expertise-corporate.jpg",
    details:
      "Developing enterprise-grade solutions that empower team collaboration and productivity.",
  },
  {
    title: "Health Tech",
    color: "from-[#F5AFFF] to-[#A259FF]",
    image: "/expertise-healthtech.jpg",
    details:
      "Creating user-first healthcare tools for better diagnostics, care, and engagement.",
  },
  {
    title: "SaaS Application",
    color: "from-[#24E6FF] to-[#E6FF3F]",
    image: "/expertise-saas.jpg",
    details:
      "Delivering scalable, UX-focused SaaS products for startups and enterprises alike.",
  },
];

export default function ServiceExpertiseSection() {
  const sliderRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scroll = (offset) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="w-full py-20 relative overflow-hidden"
      style={{ background: "rgba(255, 255, 255, 0.05)" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
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
                    y: [0, (Math.random() - 0.5) * 40, 0],
                    x: [0, (Math.random() - 0.5) * 40, 0],
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.2, 1],
                  }
                : {}
            }
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Pulsing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, #ff8c00 0%, transparent 70%)",
          }}
          animate={
            isMounted
              ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.2, 0.1],
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
          className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, #fd5001 0%, transparent 70%)",
          }}
          animate={
            isMounted
              ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
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
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Top Section */}
        <motion.div
          className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              className="text-lg font-semibold mb-2 relative inline-block"
              style={{ color: "#fd5001" }}
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              Our Expertise
              {/* Animated underline */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#fd5001] to-[#ff8c00]"
                initial={{ scaleX: 0 }}
                animate={isMounted ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.h3>
          </motion.div>
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p
              className="text-2xl md:text-3xl font-medium leading-snug"
              style={{ color: "rgba(255, 255, 255, 0.9)" }}
            >
              We've collaborated with digital product teams across industries to
              craft user-first solutions. Here's where we specialize — though
              our skills reach far beyond.
            </p>
          </motion.div>
        </motion.div>

        {/* Slider Controls */}
        <div className="flex justify-end gap-2 mb-4">
          <motion.button
            className="p-2 rounded-full shadow transition relative overflow-hidden"
            style={{ background: "rgba(255, 140, 0, 0.8)" }}
            whileHover={{
              scale: 1.1,
              background: "rgba(253, 80, 1, 0.8)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll(-300)}
            aria-label="Scroll left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {/* Animated background for button */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] opacity-0"
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <ArrowRight
              className="rotate-180 text-white relative z-10"
              size={20}
            />
          </motion.button>
          <motion.button
            className="p-2 rounded-full shadow transition relative overflow-hidden"
            style={{ background: "rgba(255, 140, 0, 0.8)" }}
            whileHover={{
              scale: 1.1,
              background: "rgba(253, 80, 1, 0.8)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll(300)}
            aria-label="Scroll right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {/* Animated background for button */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] opacity-0"
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <ArrowRight className="text-white relative z-10" size={20} />
          </motion.button>
        </div>

        {/* Slider */}
        <motion.div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollSnapType: "x mandatory" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {expertise.map((item, idx) => (
            <motion.div
              key={item.title}
              className="relative rounded-3xl w-64 min-w-[256px] h-80 flex flex-col items-center justify-end p-6 cursor-pointer group transition duration-300 shadow-xl border border-white/20 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${item.color})`,
                scrollSnapAlign: "start",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
              }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 border-2 border-white"
                animate={
                  hoveredIndex === idx ? { opacity: 0.5, scale: 1.05 } : {}
                }
                transition={{ duration: 0.3 }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl" />

              {/* Floating elements inside card */}
              <motion.div
                className="absolute top-4 right-4 w-4 h-4 rounded-full opacity-20"
                style={{ background: "white" }}
                animate={
                  hoveredIndex === idx
                    ? {
                        y: [0, -5, 0],
                        scale: [1, 1.3, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />

              {/* Title */}
              <div
                className="w-full text-2xl font-bold mb-3 z-10 relative"
                style={{ color: "white" }}
              >
                {item.title}
                {/* Animated underline for title */}
                <motion.div
                  className="absolute bottom-0 left-0 w-8 h-0.5 bg-white rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={hoveredIndex === idx ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Image */}
              <div className="relative w-full h-36 mb-2 z-10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 256px"
                  draggable={false}
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1a0e1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex flex-col items-center justify-center p-6 z-20 text-center">
                <p className="text-white text-sm">{item.details}</p>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.section>
  );
}
