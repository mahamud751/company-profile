"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import grainImage from "@/assets/images/grain.jpg";
import mockBlogData from "@/data/mockBlogData ";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function BlogSection() {
  // Get first 6 blog posts
  const displayedBlogs = mockBlogData.slice(0, 6);

  const BlogCard = ({ blog, index }) => (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className="relative z-0 flex flex-col gap-4 rounded-3xl bg-[#1a0e1c] p-4 sm:p-5 md:p-6 shadow-md overflow-hidden transition w-full"
    >
      {/* Grain Overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: 'cover', backgroundRepeat: 'repeat' }}
      />

      <Link href={`/blog-details/${blog._id}`} className="block">
        <div className="relative w-full h-44 sm:h-52 md:h-56 lg:h-64 rounded-xl overflow-hidden">
          <Image
            src={blog.photos[0]}
            alt={blog.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <h3 className="text-white text-lg sm:text-xl font-semibold mt-4">{blog.name}</h3>
        <p className="text-white/60 text-sm sm:text-base">{blog.desc}</p>
      </Link>
    </motion.div>
  );

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="text-center mb-12 md:mb-16">
          <p className="uppercase font-semibold tracking-widest text-[#1A0E1C]">
            Our Blog
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mt-4 text-[#fd5001]">
            Latest Trends and Updates
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedBlogs.map((blog, index) => (
            <BlogCard key={blog._id} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}