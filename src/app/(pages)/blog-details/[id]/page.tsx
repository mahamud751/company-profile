"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogDetailsHero from "@/components/blogDetails/BlogDetailsHero";
import BlogDetails from "@/components/blogDetails/BlogDetails";
import LatestBlogs from "@/components/blogDetails/LatestBlogs";
import mockBlogData from "@/data/mockBlogData ";

import { useParams } from "next/navigation";

// Define proper type for params

export default function BlogDetailsPage() {
  const { id } = useParams();

  const blogMain = mockBlogData.find((blog) => blog._id === id);
  const latestBlogs = mockBlogData.filter((blog) => blog._id !== id);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!blogMain) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a0e1c] via-[#2a1e2c] to-[#1a0e1c] flex items-center justify-center">
        <motion.p
          className="text-center py-20 text-white text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Blog post not found.
        </motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0e1c] via-[#2a1e2c] to-[#1a0e1c] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <BlogDetailsHero blogMain={blogMain} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <BlogDetails blogMain={blogMain} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <LatestBlogs blogs={latestBlogs} />
        </motion.div>
      </div>
    </div>
  );
}
