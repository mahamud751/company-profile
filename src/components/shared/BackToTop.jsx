"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, pointerEvents: "none" }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <motion.button
        onClick={scrollToTop}
        aria-label="Back to top"
        whileHover={{ 
          scale: 1.1, 
          boxShadow: "0 0 12px 4px rgba(255, 140, 0, 0.5)"
        }}
        whileTap={{ scale: 0.95 }}
        className="
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-gradient-to-r from-[#fd5001] to-[#ff8c00]
          text-white shadow-lg
          focus:outline-none focus:ring-4 focus:ring-[#ff8c00] focus:ring-opacity-60
          transition-all duration-300
          cursor-pointer
        "
      >
        <ArrowUp className="w-7 h-7" />
      </motion.button>
    </motion.div>
  );
}

export default BackToTop;