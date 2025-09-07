"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import {
  Filter,
  X,
  ExternalLink,
  Play,
  Heart,
  Eye,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const caseStudies = [
  {
    id: "62d6540c00182a751955a78b",
    title: "REACT NATIVE APP",
    category: "React Native App",
    desc: "A ecommerce react native app. User can buy product also see order list",
    fullDesc: "Storage Club is a warehouse management system",
    image: "/assets/case-studies/Rectangle-1.png",
    img1: "/assets/case-studies/Rectangle-2.png",
    img2: "/assets/case-studies/Rectangle-3.png",
    img3: "/assets/case-studies/Rectangle-4.png",
    tags: [
      "HTML5",
      "CSS3",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Heroku",
      "Node.js",
      "Axios",
      "Firebase",
    ],
    year: "2022",
    client: "Confidential",
    duration: "Unknown",
    team: "Varies",
    views: "2.4k",
    likes: "156",
    featured: true,
    live: "exp://exp.host/@pino751/native_redux?release-channel=default",
    description1: "Storage Club is a warehouse management system",
    description2:
      "Admin can update stock , deliver products , add In stock After login",
    description3: "Admin can see all products in the warehouse",
    description4: "Admin aslo can see he/her added products.",
    technology:
      "HTML5, CSS3,Bootstrap5, React.js,Mongodb , Heroku ,Node.js,Axios, Firebase",
  },
  {
    id: "62d6540c00182a751955a781",
    title: "Social App",
    category: "React Js",
    desc: "Social site where user can share photo, like , follow users, add friends, chat with friends. Admin can also control add friends and chatting options. Now by default everyone admin but when a client want to everything private then just contract us",
    fullDesc: "Social Application",
    image:
      "/assets/case-studies/social-app-1.png",
    img1: "/assets/case-studies/social-app-2.png",
    img2: "/assets/case-studies/social-app-3.png",
    img3: "/assets/case-studies/social-app-4.png",
    tags: [
      "HTML5",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Render",
      "Node.js",
      "Axios",
      "Socket.io",
    ],
    year: "2022",
    client: "Confidential",
    duration: "Unknown",
    team: "Varies",
    views: "3.1k",
    likes: "203",
    featured: false,
    live: "https://dream-tech.netlify.app",
    description1: "Social Application",
    description2:
      "User can share photos, share their posts, like , chat with friends, add friends, follow others users",
    description3:
      "Admin can control everything just like add friends, chatting options etc",
    description4: "By default everyone admin but admin can control everything",
    technology:
      "HTML5,Bootstrap5, React.js, Mongodb, Render, Node.js, Axios, Socket.io",
  },
  {
    id: "62d6540c00182a751955a71111",
    title: "Korbojoy Ecommerce",
    category: "React Js",
    desc: "E-commerce Website. Users can see all category and products. User can buy any products. Registration and login system for protected routes.",
    fullDesc: "E-commerce Website",
    image: "/assets/case-studies/korbojoy-1.png",
    img1: "/assets/case-studies/korbojoy-2.png",
    img2: "/assets/case-studies/korbojoy-3.png",
    img3: "/assets/case-studies/korbojoy-4.png",
    tags: [
      "HTML5",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Render",
      "Node.js",
      "Axios",
    ],
    year: "2022",
    client: "Confidential",
    duration: "Unknown",
    team: "Varies",
    views: "1.8k",
    likes: "124",
    featured: true,
    live: "https://korbojoy-client.onrender.com/",
    description1: "E-commerce Website",
    description2: "Users can see all category and products",
    description3: "User can buy any products",
    description4: "Registration and login system for protected routes",
    technology: "HTML5,Bootstrap5, React.js, Mongodb, Render, Node.js, Axios",
  },
  {
    id: "62d6540c00182a751955a1581",
    title: "Pharmacy Website",
    category: "React Js",
    desc: "Pharmacy Website. Different categories of products. Customers can sell & buy medicine and others equipments. Registration and login system for protected routes.",
    fullDesc: "Pharmacy Website",
    image: "/assets/case-studies/pharmacy-1.png",
    img1: "/assets/case-studies/pharmacy-2.png",
    img2: "/assets/case-studies/pharmacy-3.png",
    img3: "/assets/case-studies/pharmacy-4.png",
    tags: [
      "HTML5",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Render",
      "Node.js",
      "Axios",
    ],
    year: "2022",
    client: "Confidential",
    duration: "Unknown",
    team: "Varies",
    views: "4.2k",
    likes: "287",
    featured: true,
    live: "https://wellspringpharma.netlify.app",
    description1: "Pharmacy Website",
    description2: "Different categories of products",
    description3: "Customers can sell & buy medicine and others equipments",
    description4: "Registration and login system for protected routes",
    technology: "HTML5,Bootstrap5, React.js, Mongodb, Render, Node.js, Axios",
  },
  {
    id: "62d6540c00182a751955a7181",
    title: "KorboJoy Admin",
    category: "React Js",
    desc: "Admin can add, delete, edit and control all products, category",
    fullDesc: "E-commerce Website Admin",
    image: "/assets/case-studies/korbojoy-admin-1.png",
    img1: "/assets/case-studies/korbojoy-admin-2.png",
    img2: "/assets/case-studies/korbojoy-admin-3.png",
    img3: "/assets/case-studies/korbojoy-admin-4.png",
    tags: ["HTML5", "Bootstrap5", "React.js", "Node.js", "Render", "Axios"],
    year: "2022",
    client: "Confidential",
    duration: "Unknown",
    team: "Varies",
    views: "5.6k",
    likes: "398",
    featured: false,
    live: "https://korbojoy-admin.onrender.com",
    description1: "E-commerce Website Admin",
    description2: "Admin can control everything add , delete, edit etc",
    description3: "Admin can control all products, category etc",
    description4: "By default everyone admin but admin can control everything",
    technology: "HTML5,Bootstrap5, React.js, Node.js, Render, Axios",
  },
  {
    id: "62d6540c00182a751955a7111",
    title: "Education Site",
    category: "React Js",
    desc: "Admin can add, delete, edit and control all exams, courses, exams, comments, exam date etc",
    fullDesc: "Education Website",
    image:
      "/assets/case-studies/education-1.png",
    img1: "/assets/case-studies/education-2.png",
    img2: "/assets/case-studies/education-3.png",
    img3: "/assets/case-studies/education-4.png",
    tags: [
      "HTML5",
      "Bootstrap5",
      "React.js",
      "MySql",
      "Render",
      "Node.js",
      "Axios",
    ],
    year: "2022",
    client: "Confidential",
    duration: "Unknown",
    team: "Varies",
    views: "2.9k",
    likes: "178",
    featured: false,
    live: "https://education01.netlify.app/",
    description1: "Education Website",
    description2:
      "Students & teacher both can see top college list, upcoming exams list, courses list",
    description3:
      "Students & teacher both can see details of colleges, exams, courses",
    description4:
      "Students can also give mock test ,chatting others students(pending)",
    technology: "HTML5,Bootstrap5, React.js, MySql, Render, Node.js, Axios",
  },
  {
    id: "62d6540c00182a751955a78c",
    title: "SUPER SHOP",
    category: "Next JS",
    desc: " A full-stack e-commerce web app.The user can book products",
    fullDesc: "Storage Club is a warehouse management system",
    image: "/assets/case-studies/supershop-1.png",
    img1: "/assets/case-studies/supershop-2.png",
    img2: "/assets/case-studies/supershop-3.png",
    img3: "/assets/case-studies/supershop-4.png",
    tags: [
      "HTML5",
      "CSS3",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Heroku",
      "Node.js",
      "Axios",
      "Firebase",
    ],
    year: "2022",
    client: "Confidential",
    duration: "Unknown",
    team: "Varies",
    views: "2.4k",
    likes: "156",
    featured: true,
    live: "https://e-commerce-nextjs-redux-two.vercel.app/",
    description1: "Storage Club is a warehouse management system",
    description2:
      "Admin can update stock , deliver products , add In stock After login",
    description3: "Admin can see all products in the warehouse",
    description4: "Admin aslo can see he/her added products.",
    technology:
      "HTML5, CSS3,Bootstrap5, React.js,Mongodb , Heroku ,Node.js,Axios, Firebase",
  },
  {
    id: "62d6540c00182a751955a78d",
    title: "ADMIN PANEL",
    category: "Next JS",
    desc: "Admin can add product & category also see order list. Admin can delete products & order list",
    fullDesc: "Storage Club is a warehouse management system",
    image: "/assets/case-studies/adminpanel-1.png",
    img1: "/assets/case-studies/adminpanel-2.png",
    img2: "/assets/case-studies/adminpanel-3.png",
    img3: "/assets/case-studies/adminpanel-4.png",
    tags: [
      "HTML5",
      "CSS3",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Heroku",
      "Node.js",
      "Axios",
      "Firebase",
    ],
    year: "2022",
    client: "Confidential",
    duration: "Unknown",
    team: "Varies",
    views: "3.1k",
    likes: "203",
    featured: false,
    live: "https://native-app-admin.vercel.app/",
    description1: "Storage Club is a warehouse management system",
    description2:
      "Admin can update stock , deliver products , add In stock After login",
    description3: "Admin can see all products in the warehouse",
    description4: "Admin aslo can see he/her added products.",
    technology:
      "HTML5, CSS3,Bootstrap5, React.js,Mongodb , Heroku ,Node.js,Axios, Firebase",
  },
  {
    id: "62d6540c00182a751955a78e",
    title: " SR BIKES SHOP",
    category: "React JS",
    desc: " A full-stack e-commerce web app.The user can book products, give them a review, and can see booking status.Admin can change the order status, add service, delete service, edit service, and can make someone an admin etc.",
    fullDesc: "Storage Club is a warehouse management system",
    image: "/assets/case-studies/srbikeshop-1.png",
    img1: "/assets/case-studies/srbikeshop-2.png",
    img2: "/assets/case-studies/srbikeshop-3.png",
    img3: "/assets/case-studies/srbikeshop-4.png",
    tags: [
      "HTML5",
      "CSS3",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Heroku",
      "Node.js",
      "Axios",
      "Firebase",
    ],
    year: "2022",
    client: "Confidential",
    duration: "Unknown",
    team: "Varies",
    views: "1.8k",
    likes: "124",
    featured: true,
    live: "https://first-project-fab11.web.app/",
    description1: "Storage Club is a warehouse management system",
    description2:
      "Admin can update stock , deliver products , add In stock After login",
    description3: "Admin can see all products in the warehouse",
    description4: "Admin aslo can see he/her added products.",
    technology:
      "HTML5, CSS3,Bootstrap5, React.js,Mongodb , Heroku ,Node.js,Axios, Firebase",
  },
  {
    id: "62d6540c00182a751955a711",
    title: "Office Maintain Software",
    category: "Others",
    desc: " A office management system",
    fullDesc: " A office management system",
    image: "/assets/case-studies/officemaintain-1.png",
    img1: "/assets/case-studies/officemaintain-2.png",
    img2: "/assets/case-studies/officemaintain-3.png",
    img3: "/assets/case-studies/officemaintain-3.png",
    tags: ["HTML5", "CSS3", "Bootstrap5"],
    year: "2022",
    client: "Confidential",
    duration: "Unknown",
    team: "Varies",
    views: "4.2k",
    likes: "287",
    featured: true,
    live: "https://office-maintain-software.netlify.app/",
    description1: " A office management system",
    description2:
      "Admin can update stock , deliver products , add In stock After login",
    description3: "Admin can see all products in the warehouse",
    description4: "Admin aslo can see he/her added products.",
    technology: "HTML5, CSS3,Bootstrap5",
  },
  {
    id: "62d6540c00182a751955a78f",
    title: " SR TRAVEL AGENCY",
    category: "React JS",
    desc: "A full-stack travel-agency web app.The user can book event packages, give them a review.Admin can change the add new event packages, delete service, edit service.",
    fullDesc: "Storage Club is a warehouse management system",
    image: "/assets/case-studies/travelagency-1.png",
    img1: "/assets/case-studies/travelagency-2.png",
    img2: "/assets/case-studies/travelagency-3.png",
    img3: "/assets/case-studies/travelagency-4.png",
    tags: [
      "HTML5",
      "CSS3",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Heroku",
      "Node.js",
      "Axios",
      "Firebase",
    ],
    year: "2022",
    client: "Confidential",
    duration: "Unknown",
    team: "Varies",
    views: "5.6k",
    likes: "398",
    featured: false,
    live: "https://travel-a0f60.web.app/",
    description1: "Storage Club is a warehouse management system",
    description2:
      "Admin can update stock , deliver products , add In stock After login",
    description3: "Admin can see all products in the warehouse",
    description4: "Admin aslo can see he/her added products.",
    technology:
      "HTML5, CSS3,Bootstrap5, React.js,Mongodb , Heroku ,Node.js,Axios, Firebase",
  },
  {
    id: "62d6540c00182a751955a793",
    title: "Restaurant-Management",
    category: "Others",
    desc: "A Restaurant web app.User can see all category foods.The user can buy foods.",
    fullDesc: "Storage Club is a warehouse management system",
    image: "/assets/case-studies/restaurantmanagement-1.png",
    img1: "/assets/case-studies/restaurantmanagement-2.png",
    img2: "/assets/case-studies/restaurantmanagement-3.png",
    img3: "/assets/case-studies/restaurantmanagement-4.png",
    tags: [
      "HTML5",
      "CSS3",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Heroku",
      "Node.js",
      "Axios",
      "Firebase",
    ],
    year: "2022",
    client: "Confidential",
    duration: "Unknown",
    team: "Varies",
    views: "2.9k",
    likes: "178",
    featured: false,
    live: "https://mahamud751.github.io/Restaurant-Management/",
    description1: "Storage Club is a warehouse management system",
    description2:
      "Admin can update stock , deliver products , add In stock After login",
    description3: "Admin can see all products in the warehouse",
    description4: "Admin aslo can see he/her added products.",
    technology:
      "HTML5, CSS3,Bootstrap5, React.js,Mongodb , Heroku ,Node.js,Axios, Firebase",
  },
  {
    id: "62d6540c00182a751955a790",
    title: " SMILE ZONE SHOP",
    category: "React JS",
    desc: "A shop web app.User can see all category products.The user can buy products.",
    fullDesc: "Storage Club is a warehouse management system",
    image: "/assets/case-studies/smilezoneshop-1.png",
    img1: "/assets/case-studies/smilezoneshop-2.png",
    img2: "/assets/case-studies/smilezoneshop-3.png",
    img3: "assets/case-studies/smilezoneshop-4.png",
    tags: [
      "HTML5",
      "CSS3",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Heroku",
      "Node.js",
      "Axios",
      "Firebase",
    ],
    year: "2022",
    client: "Confidential",
    duration: "Unknown",
    team: "Varies",
    views: "2.4k",
    likes: "156",
    featured: true,
    live: "https://shop-project-d6699.web.app/",
    description1: "Storage Club is a warehouse management system",
    description2:
      "Admin can update stock , deliver products , add In stock After login",
    description3: "Admin can see all products in the warehouse",
    description4: "Admin aslo can see he/her added products.",
    technology:
      "HTML5, CSS3,Bootstrap5, React.js,Mongodb , Heroku ,Node.js,Axios, Firebase",
  },
  {
    id: "62d6540c00182a751955a791",
    title: "Education Site",
    category: "Others",
    desc: "A eduction site",
    fullDesc: "Storage Club is a warehouse management system",
    image: "/assets/case-studies/educationsite-1.png",
    img1: "/assets/case-studies/educationsite-2.png",
    img2: "/assets/case-studies/educationsite-3.png",
    img3: "/assets/case-studies/educationsite-4.png",
    tags: [
      "HTML5",
      "CSS3",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Heroku",
      "Node.js",
      "Axios",
      "Firebase",
    ],
    year: "2022",
    client: "Confidential",
    duration: "Unknown",
    team: "Varies",
    views: "3.1k",
    likes: "203",
    featured: false,
    live: "https://stoic-tesla-859bd2.netlify.app/",
    description1: "Storage Club is a warehouse management system",
    description2:
      "Admin can update stock , deliver products , add In stock After login",
    description3: "Admin can see all products in the warehouse",
    description4: "Admin aslo can see he/her added products.",
    technology:
      "HTML5, CSS3,Bootstrap5, React.js,Mongodb , Heroku ,Node.js,Axios, Firebase",
  },
];

const categories = ["All", "React Js", "Next JS", "React Native App", "Others"];

export default function CaseStudiesGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredStudies = useMemo(() => {
    return selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === selectedCategory);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="px-4 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header with Filters */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-6xl font-black mb-6"
              style={{
                background: "linear-gradient(45deg, #fd5001, #ff8c00, #fd5001)",
                backgroundSize: "200% 200%",
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
              transition={{ duration: 4, repeat: Infinity }}
            >
              Our Portfolio
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore our diverse collection of digital experiences that have
              transformed businesses and delighted users across various
              industries.
            </motion.p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "text-white"
                    : "bg-white/80 text-gray-600 hover:bg-[#fd5001]/10 hover:text-[#fd5001]"
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categories.indexOf(category) * 0.1 + 0.3 }}
              >
                <span className="relative z-10">{category}</span>
                {selectedCategory === category && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#fd5001] to-[#ff8c00]"
                    layoutId="activeCategory"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {filteredStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                index={index}
                onSelect={setSelectedProject}
                onHover={setHoveredCard}
                isHovered={hoveredCard === study.id}
                variants={cardVariants}
                isMounted={isMounted}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Load More Projects
              <ArrowRight className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c00] to-[#fd5001] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

function CaseStudyCard({
  study,
  index,
  onSelect,
  onHover,
  isHovered,
  variants,
  isMounted,
}) {
  return (
    <motion.div
      className="group relative cursor-pointer"
      variants={variants}
      onHoverStart={() => onHover(study.id)}
      onHoverEnd={() => onHover(null)}
      onClick={() => onSelect(study)}
      whileHover={{ y: -10 }}
    >
      {/* Featured Badge */}
      {study.featured && (
        <motion.div
          className="absolute -top-2 -right-2 z-20 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-white px-3 py-1 rounded-full text-xs font-bold"
          initial={{ scale: 0, rotate: -45 }}
          animate={isMounted ? { scale: 1, rotate: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          Featured
        </motion.div>
      )}

      {/* Main Card */}
      <motion.div
        className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20"
        whileHover={{ scale: 1.02 }}
        style={{
          background: isHovered
            ? "linear-gradient(135deg, rgba(253, 80, 1, 0.1), rgba(255, 140, 0, 0.1))"
            : "rgba(255, 255, 255, 0.8)",
        }}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={study.image}
              alt={study.title}
              width={400}
              height={300}
              className="w-full h-full object-cover"
              priority={index < 6}
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Hover Actions */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <motion.button
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#fd5001] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5 ml-0.5" />
            </motion.button>
            <motion.button
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#fd5001] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Stats Overlay */}
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="flex items-center gap-1 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-xs">
              <Eye className="w-3 h-3" />
              <span>{study.views}</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-xs">
              <Heart className="w-3 h-3" />
              <span>{study.likes}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <motion.h3
                className="text-xl font-bold text-gray-800 group-hover:text-[#fd5001] transition-colors duration-300 mb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {study.title}
              </motion.h3>
              <motion.p
                className="text-sm text-gray-500"
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {study.category} • {study.year}
              </motion.p>
            </div>
          </div>

          <motion.p
            className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {study.desc}
          </motion.p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {study.tags.slice(0, 3).map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={isMounted ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.3 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fd5001]/5 to-[#ff8c00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            scale: isHovered ? [1, 1.02, 1] : 1,
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />
      </motion.div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const images = [
    project.image,
    project.img1,
    project.img2,
    project.img3,
  ].filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState("Overview");

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Slider */}
          <div className="relative h-64 md:h-80">
            <Image
              src={images[currentIndex]}
              alt={`${project.title} ${currentIndex + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Project Details */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-[#fd5001] font-medium mb-4">
                  {project.category}
                </p>

                {/* Tabs */}
                <div className="flex gap-4 mb-4">
                  <button
                    className={`px-4 py-2 ${
                      selectedTab === "Overview"
                        ? "bg-[#fd5001] text-white"
                        : "bg-gray-200 text-gray-800"
                    } rounded-lg`}
                    onClick={() => setSelectedTab("Overview")}
                  >
                    Overview
                  </button>
                  <button
                    className={`px-4 py-2 ${
                      selectedTab === "Features"
                        ? "bg-[#fd5001] text-white"
                        : "bg-gray-200 text-gray-800"
                    } rounded-lg`}
                    onClick={() => setSelectedTab("Features")}
                  >
                    Features
                  </button>
                  <button
                    className={`px-4 py-2 ${
                      selectedTab === "Technology"
                        ? "bg-[#fd5001] text-white"
                        : "bg-gray-200 text-gray-800"
                    } rounded-lg`}
                    onClick={() => setSelectedTab("Technology")}
                  >
                    Technology
                  </button>
                </div>

                {/* Tab Content */}
                {selectedTab === "Overview" && (
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.fullDesc}
                  </p>
                )}
                {selectedTab === "Features" && (
                  <ul className="list-disc pl-5 text-gray-600 leading-relaxed mb-6">
                    {project.description1 && <li>{project.description1}</li>}
                    {project.description2 && <li>{project.description2}</li>}
                    {project.description3 && <li>{project.description3}</li>}
                    {project.description4 && <li>{project.description4}</li>}
                  </ul>
                )}
                {selectedTab === "Technology" && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 text-[#fd5001] text-sm rounded-full border border-[#fd5001]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 text-[#fd5001] text-sm rounded-full border border-[#fd5001]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#fd5001] text-white rounded-lg hover:bg-[#ff8c00] transition-colors duration-300"
                  >
                    View Live Project
                  </a>
                  <button className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg hover:border-[#fd5001] hover:text-[#fd5001] transition-colors duration-300">
                    Case Study
                  </button>
                </div>
              </div>

              {/* Project Meta */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-800 mb-4">
                  Project Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Client:</span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Team Size:</span>
                    <span className="font-medium">{project.team}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Year:</span>
                    <span className="font-medium">{project.year}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Eye className="w-4 h-4" />
                      <span>{project.views}</span>
                    </div>
                    <div className="flex items-center gap-1 text-red-500">
                      <Heart className="w-4 h-4" />
                      <span>{project.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
