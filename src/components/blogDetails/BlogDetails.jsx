"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { InView } from "react-intersection-observer";
import Image from "next/image";
import { Link as LucideLink, Facebook, Twitter, Linkedin } from "lucide-react";

export default function BlogDetails({ blogMain }) {
  const [activeLink, setActiveLink] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-10 px-4 sm:px-6 lg:px-8">
      {/* Sidebar TOC */}
      <motion.aside
        className="lg:col-span-4 bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-xl lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] overflow-y-auto order-1 border border-white/20"
        initial={{ opacity: 0, x: -20 }}
        animate={isMounted ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ y: -5 }}
      >
        <motion.h3
          className="text-2xl font-semibold mb-6"
          style={{ color: "#fd5001" }}
          initial={{ opacity: 0, y: 10 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Table of Contents
        </motion.h3>

        <ul className="space-y-4 text-base">
          {blogMain?.contents?.map((section, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={isMounted ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            >
              <Link
                to={`section-${index}`}
                smooth={true}
                duration={500}
                offset={-60}
                className={`transition-colors duration-200 cursor-pointer hover:text-[#ff8c00] ${
                  activeLink === `section-${index}` ? "font-medium" : ""
                }`}
                style={{
                  color:
                    activeLink === `section-${index}`
                      ? "#ff8c00"
                      : "rgba(255, 255, 255, 0.85)",
                }}
              >
                {section.title}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Share Icons */}
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <LucideLink className="w-6 h-6 text-white/70 hover:text-white cursor-pointer transition" />
          </motion.div>
          <motion.div
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Twitter className="w-6 h-6 text-white/70 hover:text-[#fd5001] cursor-pointer transition" />
          </motion.div>
          <motion.div
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Facebook className="w-6 h-6 text-white/70 hover:text-[#fd5001] cursor-pointer transition" />
          </motion.div>
          <motion.div
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Linkedin className="w-6 h-6 text-white/70 hover:text-[#fd5001] cursor-pointer transition" />
          </motion.div>
        </motion.div>
      </motion.aside>

      {/* Main Blog Content */}
      <motion.main
        className="lg:col-span-8 px-2 sm:px-4 py-2 sm:py-6 scroll-smooth order-2"
        initial={{ opacity: 0, x: 20 }}
        animate={isMounted ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {blogMain?.contents?.map((section, index) => (
          <InView
            as="section"
            id={`section-${index}`}
            key={index}
            onChange={(inView) => {
              if (inView) setActiveLink(`section-${index}`);
            }}
            className="mt-10"
          >
            <motion.h2
              className="text-3xl font-bold mb-4 border-l-4 pl-4 py-2"
              style={{
                borderColor: "#ff8c00",
                color: "white",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              {section.title}
            </motion.h2>

            <motion.div
              className="prose max-w-none text-base sm:text-lg leading-relaxed"
              style={{ color: "rgba(255, 255, 255, 0.85)" }}
              initial={{ opacity: 0 }}
              animate={isMounted ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              dangerouslySetInnerHTML={{ __html: section.description }}
            />

            {section.images && section.images.length > 0 && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {section.images.map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    className="overflow-hidden rounded-2xl shadow-lg border border-white/20"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image}
                      alt={`Section image ${imgIndex + 1}`}
                      width={500}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </InView>
        ))}
      </motion.main>
    </div>
  );
}
