"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const services = [
  "UX UI Design",
  "UX UI Consulting",
  "UX Audit",
  "UX Research",
  "Usability Testing",
  "Wireframe & UI Prototyping",
  "Design System",
];

export default function ServiceUxUiSection() {
  const [isMounted, setIsMounted] = useState(false);

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
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, #ff8c00 0%, transparent 70%)",
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
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{
            background: "radial-gradient(circle, #fd5001 0%, transparent 70%)",
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
            className="text-4xl font-bold mb-6 leading-tight"
            style={{ color: "#fd5001" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Intuitive UX/UI Design That Delivers
          </motion.h2>

          <motion.p
            className="mb-8 max-w-lg text-lg"
            style={{ color: "rgba(255, 255, 255, 0.85)" }}
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We craft user-centered designs that blend usability and visual
            appeal. Whether you're improving a product or launching a new one,
            our team ensures every interaction feels effortless and every
            interface looks polished.
          </motion.p>

          <ul className="space-y-3">
            {services.map((service, idx) => (
              <motion.li
                key={service}
                className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0 group px-2 rounded transition"
                style={{ background: "rgba(255, 255, 255, 0.05)" }}
                whileHover={{
                  scale: 1.02,
                  background: "rgba(253, 80, 1, 0.1)",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={isMounted ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="font-mono w-7 group-hover:text-[#fd5001] transition-colors"
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-lg group-hover:text-[#fd5001] transition-colors"
                    style={{ color: "rgba(255, 255, 255, 0.9)" }}
                  >
                    {service}
                  </span>
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight
                    className="group-hover:text-[#fd5001] transition-colors"
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                    size={20}
                  />
                </motion.div>
              </motion.li>
            ))}
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
            whileHover={{ scale: 1.02, rotateY: 5 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isMounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src="/service-ui-ux-design.jpg"
              alt="UX UI Design Showcase"
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
