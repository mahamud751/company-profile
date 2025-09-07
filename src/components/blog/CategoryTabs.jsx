"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const categories = [
  { id: "all", name: "All Posts" },
  { id: "design", name: "Design" },
  { id: "technology", name: "Technology" },
  { id: "business", name: "Business" },
  { id: "productivity", name: "Productivity" },
  { id: "lifestyle", name: "Lifestyle" },
];

export default function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            activeCategory === category.id
              ? "text-white"
              : "bg-white/10 text-gray-300 hover:bg-white/20"
          }`}
          onClick={() => setActiveCategory(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <span className="relative z-10">{category.name}</span>
          {activeCategory === category.id && (
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#fd5001] to-[#ff8c00]"
              layoutId="activeCategory"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}
