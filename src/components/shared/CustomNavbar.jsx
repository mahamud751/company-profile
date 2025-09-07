'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/service" },
  { name: "Works", href: "/works" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const btnOverlayRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GSAP animation for button hover effect
  const handleMouseEnter = () => {
    gsap.to(btnOverlayRef.current, {
      width: "100%",
      duration: 0.3,
      ease: "power2.out",
      onStart: () => {
        gsap.to(btnOverlayRef.current, {
          backgroundColor: "#d43e01",
          duration: 0.4
        });
      }
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnOverlayRef.current, {
      width: "0%",
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(btnOverlayRef.current, {
          backgroundColor: "#fd5001",
          duration: 0.1
        });
      }
    });
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "backdrop-blur-md bg-white/80 border-b border-black/10 shadow-sm"
        : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-4 md:px-8 h-16 flex items-center transition-all duration-300">

        <div
          className={`flex w-full items-center transition-all duration-300 ${scrolled ? "justify-center" : "justify-between"
            }`}
        >
          <motion.div
            className={`flex items-center ${scrolled
              ? "gap-10"
              : "w-full justify-between"
              }`}
            animate={{
              x: 0,
              scale: scrolled ? 1.05 : 1,
            }}
            initial={false}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setActive("Home")}
              className="w-20 h-20 flex items-center justify-center shrink-0"
            >
              <Image
                src="/assets/logo.svg"
                alt="Company logo"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </Link>

            {/* Nav Items - Hidden on mobile, flex on medium screens and up */}
            <ul className="hidden md:flex items-center gap-x-1 h-full select-none">
              {navLinks.map(({ name, href }) => (
                <li key={name} className="flex items-center h-full">
                  <Link
                    href={href}
                    onClick={() => {
                      setActive(name);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded-full text-sm transition-all duration-150 flex items-center h-8 font-medium ${active === name
                      ? "bg-orange-50 text-[#fd5001]"
                      : "text-gray-700 hover:text-[#fd5001] hover:bg-orange-50"
                      }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Button - Always part of this motion.div */}
            {/* Added hidden md:inline-flex to match nav items visibility for consistency, remove if button should always show */}
            <a
              href="#projects"
              className="relative hidden md:inline-flex items-center gap-2 border-2 border-[#fd5001] px-5 h-9 rounded-full overflow-hidden group font-medium text-[#fd5001] hover:text-white transition-all duration-300"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                ref={btnOverlayRef}
                className="absolute left-0 top-0 h-full z-0 bg-[#fd5001]"
                style={{
                  width: "0%",
                }}
              />
              <span className="relative z-10 flex items-center gap-1">
                Let&apos;s Talk
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 500 }}
                  className="inline-block"
                >
                  →
                </motion.span>
              </span>
            </a>
          </motion.div>

          {/* Mobile Menu Toggle - Hidden on medium screens and up */}
          <button
            className="md:hidden ml-auto p-1 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Animates presence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg"
          >
            <ul className="flex flex-col items-center px-4 py-4 space-y-2 select-none">
              {navLinks.map(({ name, href }) => (
                <li key={name} className="w-full">
                  <Link
                    href={href}
                    onClick={() => {
                      setActive(name);
                      setMobileMenuOpen(false);
                    }}
                    className={`block text-center font-medium px-3 py-3 rounded-md transition-colors duration-150 w-full ${active === name
                      ? "bg-[#fd5001] text-white"
                      : "text-gray-700 hover:bg-orange-50 hover:text-[#fd5001]"
                      }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
