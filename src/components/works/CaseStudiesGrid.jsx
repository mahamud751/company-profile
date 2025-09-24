"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect, useRef } from "react";
import {
  X,
  ExternalLink,
  Play,
  Heart,
  Eye,
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
    image: "https://i.ibb.co.com/v6ZBTQQ0/Rectangle-1-11-11zon.webp",
    img1: "https://i.ibb.co.com/6Jws2QCP/Rectangle-2-12-11zon.webp",
    img2: "https://i.ibb.co.com/s94mPVrR/Rectangle-3-13-11zon.webp",
    img3: "https://i.ibb.co.com/rKczFYBV/Rectangle-4-14-11zon.webp",
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
    image: "https://i.ibb.co.com/tTFLw69k/social-app-1-4-11zon.webp",
    img1: "https://i.ibb.co.com/4w7xvyCN/social-app-2-5-11zon.webp",
    img2: "https://i.ibb.co.com/FLNCXnSF/social-app-3-6-11zon.webp",
    img3: "https://i.ibb.co.com/39nhjHwC/social-app-4-7-11zon.webp",
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
    image: "https://i.ibb.co.com/21h9D2Xg/korbojoy-1-14-11zon.webp",
    img1: "https://i.ibb.co.com/yn1zDss8/korbojoy-2-15-11zon.webp",
    img2: "https://i.ibb.co.com/r2596wjR/korbojoy-3-16-11zon.webp",
    img3: "https://i.ibb.co.com/8gbxFJrT/korbojoy-4-11zon.webp",
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
    image: "https://i.ibb.co.com/WW3mkJ62/pharmacy-1-7-11zon.webp",
    img1: "https://i.ibb.co.com/qLQ3h12s/pharmacy-2-8-11zon.webp",
    img2: "https://i.ibb.co.com/b5qrmbMQ/pharmacy-3-9-11zon.webp",
    img3: "https://i.ibb.co.com/XxDbZ4gZ/pharmacy-4-10-11zon.webp",
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
    id: "62d6540c00182a751955a71111",
    title: "71 Super Shop",
    category: "Next Js",
    desc: "E-commerce Website. Users can see all category and products. User can buy any products. Registration and login system for protected routes.",
    fullDesc: "E-commerce Website",
    image: "https://i.ibb.co/pPxdFBZ/grocery-store.png",

    tags: [
      "HTML5",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Render",
      "Node.js",
      "Axios",
    ],
    year: "2025",
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
    id: "62d6540c00182a751955a71111",
    title: "Trade",
    category: "Next Js",
    desc: "E-commerce Website. Users can see all category and products. User can buy any products. Registration and login system for protected routes.",
    fullDesc: "E-commerce Website",
    image:
      "https://i.ibb.co/GMJ5FV1/screencapture-coldrate-2023-01-02-15-30-09.png",

    tags: [
      "HTML5",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Render",
      "Node.js",
      "Axios",
    ],
    year: "2025",
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
    id: "62d6540c00182a751955a71111",
    title: "Super Trade",
    category: "Next Js",
    desc: "E-commerce Website. Users can see all category and products. User can buy any products. Registration and login system for protected routes.",
    fullDesc: "E-commerce Website",
    image:
      "https://i.ibb.co/JQ90fxr/screencapture-supper-trade-netlify-app-2023-01-02-15-48-54.png",

    tags: [
      "HTML5",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Render",
      "Node.js",
      "Axios",
    ],
    year: "2025",
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
    id: "62d6540c00182a751955a71111",
    title: "Business Portfolio",
    category: "Next Js",
    desc: "E-commerce Website. Users can see all category and products. User can buy any products. Registration and login system for protected routes.",
    fullDesc: "E-commerce Website",
    image:
      "https://i.ibb.co/gPtvVX6/screencapture-static-office-website-vercel-app-2023-01-02-16-09-13.png",

    tags: [
      "HTML5",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Render",
      "Node.js",
      "Axios",
    ],
    year: "2025",
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
    id: "62d6540c00182a751955a7181",
    title: "71 Super Shop Admin",
    category: "Next Js",
    desc: "Admin can add, delete, edit and control all products, category",
    fullDesc: "E-commerce Website Admin",
    image: "https://i.ibb.co/mXdMGJB/Frame-1.png",
    tags: ["HTML5", "Bootstrap5", "React.js", "Node.js", "Render", "Axios"],
    year: "2025",
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
    id: "62d6540c00182a751955a7181",
    title: "Admin",
    category: "Next Js",
    desc: "Admin can add, delete, edit and control all products, category",
    fullDesc: "E-commerce Website Admin",
    image:
      "https://i.ibb.co.com/kVyWbtXD/Screenshot-2025-09-25-at-1-10-06-AM.png",
    img1: "https://i.ibb.co.com/BKqshxTL/Screenshot-2025-09-25-at-1-10-30-AM.png",
    tags: ["HTML5", "Bootstrap5", "React.js", "Node.js", "Render", "Axios"],
    year: "2025",
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
    id: "62d6540c00182a751955a7181",
    title: "KorboJoy Admin",
    category: "React Js",
    desc: "Admin can add, delete, edit and control all products, category",
    fullDesc: "E-commerce Website Admin",
    image: "https://i.ibb.co.com/jvFbSpz6/korbojoy-admin-1-17-11zon.webp",
    img1: "https://i.ibb.co.com/Rpb4nVnF/korbojoy-admin-2-18-11zon.webp",
    img2: "https://i.ibb.co.com/N61kv2wW/korbojoy-admin-3-19-11zon.webp",
    img3: "https://i.ibb.co.com/gMB3vs0M/korbojoy-admin-4-20-11zon.webp",
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
    id: "62d6540c00182a751955a71111",
    title: "D CAFE",
    category: "Next Js",
    desc: "E-commerce Website. Users can see all category and products. User can buy any products. Registration and login system for protected routes.",
    fullDesc: "E-commerce Website",
    image: "https://i.ibb.co/QpXZKLd/Mac-Book-Pro-16-1.png",

    tags: [
      "HTML5",
      "Bootstrap5",
      "React.js",
      "Mongodb",
      "Render",
      "Node.js",
      "Axios",
    ],
    year: "2025",
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
    id: "62d6540c00182a751955a7111",
    title: "Education Site",
    category: "React Js",
    desc: "Admin can add, delete, edit and control all exams, courses, exams, comments, exam date etc",
    fullDesc: "Education Website",
    image: "https://i.ibb.co.com/8LD9skmf/education-1-6-11zon.webp",
    img1: "https://i.ibb.co.com/zhPbG3n1/education-2-7-11zon.webp",
    img2: "https://i.ibb.co.com/DDJ0gxbL/education-3-8-11zon.webp",
    img3: "https://i.ibb.co.com/zWNRQhcQ/education-4-9-11zon.webp",
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
    image: "https://i.ibb.co.com/Gfkj39Gh/supershop-1-12-11zon.webp",
    img1: "https://i.ibb.co.com/gZ3hBxsx/supershop-2-13-11zon.webp",
    img2: "https://i.ibb.co.com/qz5SL3G/supershop-3-14-11zon.webp",
    img3: "https://i.ibb.co.com/xKq8w6xJ/supershop-4-15-11zon.webp",
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
    image: "https://i.ibb.co.com/KxbzxRHD/adminpanel-1-2-11zon.webp",
    img1: "https://i.ibb.co.com/R4Dz4Z3t/adminpanel-2-3-11zon.webp",
    img2: "https://i.ibb.co.com/Kc4hTmgc/adminpanel-3-4-11zon.webp",
    img3: "https://i.ibb.co.com/WN1ZPds6/adminpanel-4-5-11zon.webp",
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
    image: "https://i.ibb.co.com/Y4r9fFGT/srbikeshop-1-8-11zon.webp",
    img1: "https://i.ibb.co.com/S7n9pCVS/srbikeshop-2-9-11zon.webp",
    img2: "https://i.ibb.co.com/tP4CwYzH/srbikeshop-3-10-11zon.webp",
    img3: "https://i.ibb.co.com/wFPdp5Yw/srbikeshop-4-11-11zon.webp",
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
    image:
      "https://i.ibb.co.com/Mx2Bqq94/officemaintain-1-Copy-Copy-1-11zon.webp",
    img1: "https://i.ibb.co.com/n8bjJx9W/officemaintain-2.webp",
    img2: "https://i.ibb.co.com/S4b3HL82/officemaintain-3-Copy-5-11zon.webp",
    img3: "https://i.ibb.co.com/S4b3HL82/officemaintain-3-Copy-5-11zon.webp",
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
    image: "https://i.ibb.co.com/chXpD5fV/travelagency-1-16-11zon.webp",
    img1: "https://i.ibb.co.com/zhwMPjYJ/travelagency-2-17-11zon.webp",
    img2: "https://i.ibb.co.com/5XWqjyVk/travelagency-3-18-11zon.webp",
    img3: "https://i.ibb.co.com/j9J6xzK7/travelagency-4-2-11zon.webp",
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
    image: "https://i.ibb.co.com/JjchsB4g/restaurantmanagement-1-15-11zon.webp",
    img1: "https://i.ibb.co.com/Xr0Yr9Jn/restaurantmanagement-2-16-11zon.webp",
    img2: "https://i.ibb.co.com/N2WMYw7F/restaurantmanagement-3-17-11zon.webp",
    img3: "https://i.ibb.co.com/6R6TDXJw/restaurantmanagement-4-3-11zon.webp",
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
    image: "https://i.ibb.co.com/SDZZ4dH2/smilezoneshop-1-1-11zon.webp",
    img1: "https://i.ibb.co.com/0pqRyKLk/smilezoneshop-3-2-11zon.webp",
    img2: "https://i.ibb.co.com/9kfPBdnG/smilezoneshop-3-1-11zon.webp",
    img3: "https://i.ibb.co.com/wNTN9ZT1/smilezoneshop-4-3-11zon.webp",

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
    image: "https://i.ibb.co.com/M5gd278k/educationsite-1-10-11zon.webp",
    img1: "https://i.ibb.co.com/M5gd278k/educationsite-1-10-11zon.webp",
    img2: "https://i.ibb.co.com/hPRHJNN/educationsite-3-12-11zon.webp",
    img3: "https://i.ibb.co.com/RLz8Gr9/educationsite-4-13-11zon.webp",
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
    <section className="px-4 py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
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
          <div className="flex flex-wrap justify-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
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
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    onHover(study.id);
    setIsImageExpanded(true);
    // Auto scroll to show the expanded image
    setTimeout(() => {
      if (imageRef.current) {
        imageRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);
  };

  const handleMouseLeave = () => {
    onHover(null);
    setIsImageExpanded(false);
  };

  return (
    <motion.div
      ref={imageRef}
      className="group relative cursor-pointer"
      variants={variants}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(study)}
      whileHover={{ y: -10 }}
    >
      {/* Featured Badge */}
      {study.featured && (
        <motion.div
          className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl"
          initial={{ scale: 0, rotate: -45 }}
          animate={isMounted ? { scale: 1, rotate: 0 } : {}}
          transition={{
            delay: index * 0.1 + 0.5,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          ✨ Featured
        </motion.div>
      )}

      {/* Main Card */}
      <motion.div
        className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 h-full flex flex-col"
        whileHover={{ scale: 1.02 }}
        style={{
          background: isHovered
            ? "linear-gradient(135deg, rgba(253, 80, 1, 0.1), rgba(255, 140, 0, 0.1))"
            : "rgba(255, 255, 255, 0.9)",
        }}
      >
        {/* Image Container */}
        <div
          className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
            isImageExpanded ? "h-96" : "h-64"
          }`}
        >
          <motion.div
            className="w-full h-full relative"
            animate={{
              scale: isImageExpanded ? 1.02 : 1,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <Image
              src={study.image}
              alt={study.title}
              width={400}
              height={384}
              className={`w-full h-full transition-all duration-700 ease-in-out ${
                isImageExpanded ? "object-contain bg-gray-100" : "object-cover"
              }`}
              priority={index < 6}
            />
            {/* Full Image Overlay */}
            {isImageExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"
              />
            )}
          </motion.div>

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
              isImageExpanded
                ? "opacity-30"
                : "opacity-0 group-hover:opacity-100"
            }`}
          />

          {/* Zoom Indicator */}
          {!isImageExpanded && (
            <motion.div
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </motion.div>
          )}

          {/* Hover Actions */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <motion.button
              className="w-14 h-14 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#fd5001] hover:scale-110 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(study);
              }}
            >
              <Play className="w-6 h-6 ml-0.5" />
            </motion.button>
            <motion.a
              href={study.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#fd5001] hover:scale-110 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Stats Overlay */}
          <div className="absolute top-4 left-4 flex gap-2">
            <motion.div
              className="flex items-center gap-1 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-medium shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Eye className="w-3 h-3" />
              <span>{study.views}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-1 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-medium shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-3 h-3 text-red-400" />
              <span>{study.likes}</span>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div>
              <motion.h3
                className="text-xl font-bold text-gray-800 group-hover:text-[#fd5001] transition-colors duration-300 mb-1 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {study.title}
              </motion.h3>
              <motion.div
                className="flex items-center gap-2 text-sm text-gray-500 mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <span className="px-2 py-1 bg-[#fd5001]/10 text-[#fd5001] rounded-full text-xs font-medium">
                  {study.category}
                </span>
                <span>•</span>
                <span>{study.year}</span>
              </motion.div>
            </div>
          </div>

          <motion.p
            className="text-gray-600 text-sm mb-4 leading-relaxed flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 + 0.4 }}
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {study.desc}
          </motion.p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {study.tags.slice(0, 3).map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-xs rounded-full border border-gray-200 hover:border-[#fd5001]/30 hover:bg-gradient-to-r hover:from-[#fd5001]/10 hover:to-[#ff8c00]/10 transition-all duration-300 font-medium"
                initial={{ scale: 0, opacity: 0 }}
                animate={isMounted ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.3 }}
              >
                {tag}
              </motion.span>
            ))}
            {study.tags.length > 3 && (
              <motion.span
                className="px-3 py-1.5 bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 text-[#fd5001] text-xs rounded-full border border-[#fd5001]/20 font-medium"
                initial={{ scale: 0, opacity: 0 }}
                animate={isMounted ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.6 }}
              >
                +{study.tags.length - 3} more
              </motion.span>
            )}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fd5001]/5 to-[#ff8c00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            scale: isHovered ? [1, 1.01, 1] : 1,
          }}
          transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
        />

        {/* Decorative Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#fd5001]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
  const [isModalImageExpanded, setIsModalImageExpanded] = useState(false);

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
            className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Slider */}
          <div
            className={`relative transition-all duration-700 ease-in-out ${
              isModalImageExpanded ? "h-96 md:h-[500px]" : "h-72 md:h-96"
            }`}
            onMouseEnter={() => setIsModalImageExpanded(true)}
            onMouseLeave={() => setIsModalImageExpanded(false)}
          >
            <motion.div
              className="w-full h-full relative"
              animate={{
                scale: isModalImageExpanded ? 1.02 : 1,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Image
                src={images[currentIndex]}
                alt={`${project.title} ${currentIndex + 1}`}
                fill
                className={`transition-all duration-700 ease-in-out ${
                  isModalImageExpanded
                    ? "object-contain bg-gray-100"
                    : "object-cover"
                }`}
              />
              {/* Enhanced overlay for expanded state */}
              {isModalImageExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10"
                />
              )}
            </motion.div>
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                isModalImageExpanded ? "opacity-20" : "opacity-100"
              }`}
            />
            {/* Zoom Indicator for Modal */}
            {!isModalImageExpanded && (
              <motion.div
                className="absolute top-4 left-4 w-10 h-10 bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </motion.div>
            )}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/25 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition-all duration-300 shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/25 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition-all duration-300 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-white scale-125"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
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
                <div className="flex gap-2 mb-6">
                  {["Overview", "Features", "Technology"].map((tab) => (
                    <button
                      key={tab}
                      className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                        selectedTab === tab
                          ? "bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-[#fd5001]"
                      }`}
                      onClick={() => setSelectedTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
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
                {/* <div className="flex gap-4">
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
                </div> */}
              </div>

              {/* Project Meta */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
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
