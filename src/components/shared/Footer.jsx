"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <footer className="pt-24 pb-8 relative overflow-hidden mt-auto bg-[#fd5001] text-white">
      {/* Simple Animated Blobs */}
      <motion.svg
        className="absolute -top-24 -left-24 w-72 h-72 opacity-80 text-yellow-300"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <path
          d="M43.1,-68.8C56.9,-60.6,64.8,-46.8,70.3,-33.8C75.8,-20.8,78.9,-8.4,78.5,3.3C78,15,74.1,26.7,67.3,36.3C60.5,45.9,50.9,53.4,40.1,59.5C29.3,65.6,17.3,70.3,5.4,66.9C-6.5,63.5,-13,52,-23.7,45.1C-34.4,38.1,-49.3,35.8,-57.4,27.6C-65.5,19.4,-66.8,5.3,-64.3,-7.3C-61.8,-19.9,-55.5,-30.9,-48.4,-39.6C-41.3,-48.3,-33.3,-54.6,-24.2,-62.1C-15.1,-69.6,-7.5,-78.3,3.3,-82.1C14.1,-85.9,28.2,-84.9,43.1,-68.8Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      <motion.svg
        className="absolute -bottom-24 -right-24 w-96 h-96 opacity-70 text-cyan-400"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        animate={{
          rotate: [360, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <path
          d="M42.6,-74.8C56.6,-66.7,66.9,-56.1,72.9,-44.2C78.9,-32.3,80.5,-19.1,79.3,-6.6C78.1,5.9,74.2,17.9,67.3,27.8C60.3,37.7,50.3,45.5,39,52.5C27.7,59.5,14.8,65.6,2.4,62.7C-10,59.8,-20.1,47.9,-30.3,40.8C-40.5,33.7,-50.7,31.5,-54.7,24.4C-58.7,17.3,-56.5,5.3,-56.2,-6.7C-55.9,-18.7,-57.5,-30.7,-52.3,-39.5C-47.1,-48.3,-35.2,-53.9,-23.6,-60.3C-12,-66.7,-6,-73.9,3.4,-79.2C12.8,-84.5,25.6,-87,42.6,-74.8Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      {/* Simple Grain Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-[1200px]">
        {/* Simple Content Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Let's Talk
            </motion.h2>
            <div className="space-y-2">
              <motion.p
                className="text-lg sm:text-xl hover:text-black text-white/80 transition-colors duration-200"
                whileHover={{ x: 10 }}
              >
                <a href="mailto:hey@protoja.studio">hey@protoja.studio</a>
              </motion.p>
              <motion.p
                className="text-lg sm:text-xl hover:text-black text-white/80 transition-colors duration-200"
                whileHover={{ x: 10 }}
              >
                <a href="tel:+14157966262">+1 415 796 6262</a>
              </motion.p>
            </div>
          </div>

          <div>
            {/* Simple Navigation */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {["Work", "Services", "Blog"].map((item, index) => (
                  <motion.div key={item} whileHover={{ x: 5 }}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="block text-base sm:text-lg hover:text-black transition-colors"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                {["Clients", "About", "Contact"].map((item, index) => (
                  <motion.div key={item} whileHover={{ x: 5 }}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="block text-base sm:text-lg hover:text-black transition-colors"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Simple Offices */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {[
                {
                  city: "San Francisco",
                  address: "300 Broadway",
                  state: "San Francisco, CA 94133",
                },
                {
                  city: "New York",
                  address: "148 Lafayette St",
                  state: "New York, NY 10013",
                },
                {
                  city: "Austin",
                  address: "600 Congress Ave",
                  state: "Austin, TX 78701",
                },
              ].map((office, index) => (
                <motion.div
                  key={office.city}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="font-semibold text-lg mb-2">{office.city}</h3>
                  <p className="text-white/60">{office.address}</p>
                  <p className="text-white/60">{office.state}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Simple Bottom Section */}
        <motion.div
          className="flex flex-col sm:flex-row sm:justify-between items-center gap-6 border-t border-white/20 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {/* Simple Social Icons */}
          <nav className="flex gap-5 order-2 sm:order-1">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="#" aria-label={`Social ${index}`}>
                  <Icon className="text-white hover:text-gray-300 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Simple Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-white/90 order-1 sm:order-2">
            <p>© 2016 – {currentYear} Clay Global, LLC</p>
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <motion.div key={item} whileHover={{ x: 3 }}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-black transition-colors duration-200"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
