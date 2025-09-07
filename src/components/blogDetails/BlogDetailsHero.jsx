import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function BlogDetailsHero({ blogMain }) {
  const [isMounted, setIsMounted] = useState(false);
  const firstPhoto = blogMain?.photos?.[0];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg p-6 md:p-10 rounded-3xl shadow-2xl border border-white/20 overflow-hidden relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isMounted ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ y: -5 }}
    >
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fd5001]/10 to-[#ff8c00]/10 rounded-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, x: -20 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
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
            {blogMain?.name}
          </motion.h1>

          <motion.p
            className="text-lg leading-relaxed mb-6"
            style={{ color: "rgba(255, 255, 255, 0.85)" }}
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {blogMain?.desc}
          </motion.p>

          {/* Author Info */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              <Image
                src="/images/avatar.jpg"
                width={48}
                height={48}
                className="rounded-full border-2 border-white shadow-lg"
                alt="Author"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#fd5001] rounded-full border-2 border-[#1a0e1c]"></div>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "white" }}>
                Md Rafatul Islam
              </p>
              <p
                className="text-sm"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                Published{" "}
                {new Date(
                  blogMain?.createdAt || Date.now()
                ).toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side – Show only first image */}
        <motion.div
          className="lg:col-span-6 w-full"
          initial={{ opacity: 0, x: 20 }}
          animate={isMounted ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {firstPhoto ? (
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl border border-white/20"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isMounted ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Image
                src={firstPhoto}
                alt="Blog Main Image"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                width={1000}
                height={1000}
                priority
              />
            </motion.div>
          ) : (
            <div className="w-full h-64 bg-gradient-to-r from-[#fd5001]/20 to-[#ff8c00]/20 rounded-2xl flex items-center justify-center text-white/70 border border-white/10">
              No image available
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
