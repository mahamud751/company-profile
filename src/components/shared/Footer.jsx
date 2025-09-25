"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Home,
  Briefcase,
  Users,
  MessageCircle,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import grainImage from "@/assets/images/grain.jpg";
import BackToTop from "./BackToTop";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeIcon, setActiveIcon] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-500/30 to-pink-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Dynamic Grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1200px]">
          {/* Hero Section */}
          {/* <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Let's Create
            </motion.h2>
            <motion.p
              className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Something extraordinary together. Ready to bring your vision to
              life?
            </motion.p>
          </motion.div> */}

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-500 group">
                <motion.h3
                  className="text-2xl font-bold text-white mb-6 group-hover:text-orange-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  Get In Touch
                </motion.h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 to-pink-500/10 hover:from-orange-500/20 hover:to-pink-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a
                        href="mailto:crazysolve@gmail.com"
                        className="text-white hover:text-orange-400 transition-colors font-medium"
                      >
                        crazysolve@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a
                        href="tel:+8801603795302"
                        className="text-white hover:text-purple-400 transition-colors font-medium"
                      >
                        +8801603795302
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 group">
                <motion.h3
                  className="text-2xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  Quick Links
                </motion.h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Works", href: "/works", icon: "💼" },
                    { name: "Service", href: "/service", icon: "⚡" },
                    { name: "Blog", href: "/blog", icon: "📝" },
                    { name: "About", href: "/about", icon: "👥" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-white/5 to-white/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 group"
                      >
                        <span className="text-xl group-hover:scale-110 transition-transform">
                          {item.icon}
                        </span>
                        <span className="text-white group-hover:text-purple-300 transition-colors font-medium">
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 group">
                <motion.h3
                  className="text-2xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  Our Location
                </motion.h3>
                <motion.div
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-2">
                        Mirpur 10
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        D Block
                        <br />
                        Mirpur, Dhaka
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Social Media & Bottom Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {/* Decorative Line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* Social Media */}
              <div className="flex flex-col items-center lg:items-start">
                <h4 className="text-white font-semibold mb-4 text-lg">
                  Follow Our Journey
                </h4>
                <div className="flex gap-4">
                  {[
                    {
                      icon: Facebook,
                      href: "https://www.facebook.com/crazysolve",
                      label: "Facebook",
                      color: "from-blue-500 to-blue-600",
                      hoverColor: "hover:shadow-blue-500/25",
                    },
                    {
                      icon: Twitter,
                      href: "https://twitter.com/crazysolve",
                      label: "Twitter",
                      color: "from-sky-400 to-sky-500",
                      hoverColor: "hover:shadow-sky-400/25",
                    },
                    {
                      icon: Linkedin,
                      href: "https://linkedin.com/company/crazysolve",
                      label: "LinkedIn",
                      color: "from-blue-600 to-blue-700",
                      hoverColor: "hover:shadow-blue-600/25",
                    },
                  ].map((social, index) => (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Link
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          w-14 h-14 rounded-2xl bg-gradient-to-r ${social.color} 
                          flex items-center justify-center text-white 
                          shadow-lg ${social.hoverColor} hover:shadow-xl 
                          transition-all duration-300 group
                        `}
                      >
                        <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <motion.div
                className="flex flex-col items-center lg:items-end text-center lg:text-right"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-white font-semibold mb-4 text-lg">
                  Stay Updated
                </h4>
                <div className="flex flex-col sm:flex-row gap-3 max-w-sm">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <motion.p
                  className="text-gray-400 text-sm"
                  whileHover={{ color: "#ffffff" }}
                >
                  © 2020 – {currentYear} Crazy Solve. Crafted with ❤️ for
                  innovation.
                </motion.p>
                <div className="flex gap-6 text-sm">
                  {["Privacy", "Terms", "Cookies"].map((item) => (
                    <motion.div key={item} whileHover={{ y: -2 }}>
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Bottom Dock Navigation */}
      {isMobile && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mx-4 mb-4">
            <motion.div className="relative bg-black/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#fd5001]/20 to-[#ff8c00]/20" />

              <div className="relative flex items-center justify-around px-4 py-3">
                {[
                  { icon: Home, label: "Home", href: "/", color: "#fd5001" },
                  {
                    icon: Briefcase,
                    label: "Work",
                    href: "/works",
                    color: "#ff8c00",
                  },
                  {
                    icon: Users,
                    label: "About",
                    href: "/about",
                    color: "#8b5cf6",
                  },
                  {
                    icon: MessageCircle,
                    label: "Contact",
                    href: "/contact",
                    color: "#06b6d4",
                  },
                  {
                    icon: FileText,
                    label: "Blog",
                    href: "/blog",
                    color: "#10b981",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeIcon === index;

                  return (
                    <motion.div key={item.label} className="relative">
                      <Link href={item.href}>
                        <motion.div
                          className="relative p-3 rounded-xl transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            y: isActive ? -6 : 0,
                            scale: isActive ? 1.1 : 1,
                          }}
                          onTap={() => setActiveIcon(index)}
                        >
                          <motion.div
                            className="absolute inset-0 rounded-xl"
                            style={{
                              background: isActive
                                ? `${item.color}20`
                                : "transparent",
                            }}
                          />

                          <motion.div
                            animate={{
                              color: isActive ? item.color : "#ffffff",
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <Icon className="w-6 h-6 relative z-10" />
                          </motion.div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      <BackToTop />

      {/* Mobile Spacing */}
      {isMobile && <div className="h-20" />}
    </footer>
  );
}
