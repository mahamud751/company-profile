"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect, useRef } from "react";
import {
  X,
  ExternalLink,
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
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
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(parseInt(study.likes));
  const imageRef = useRef(null);

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <motion.div
      ref={imageRef}
      className="group relative cursor-pointer"
      variants={variants}
      onMouseEnter={() => onHover(study.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onSelect(study)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Main Card */}
      <motion.div
        className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full backdrop-blur-sm"
        style={{
          background: isHovered
            ? "linear-gradient(135deg, rgba(253, 80, 1, 0.05), rgba(255, 140, 0, 0.05), rgba(255, 255, 255, 0.95))"
            : "rgba(255, 255, 255, 0.98)",
        }}
      >
        {/* Premium Gradient Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fd5001]/20 via-[#ff8c00]/10 to-[#fd5001]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-3xl h-72">
          <Image
            src={study.image}
            alt={study.title}
            width={400}
            height={288}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            priority={index < 6}
          />

          {/* Premium Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Floating Like Button */}
          <motion.button
            className={`absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-lg transition-all duration-300 shadow-xl border border-white/20 ${
              isLiked
                ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-red-500/25"
                : "bg-white/90 text-gray-600 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white hover:shadow-red-500/25"
            }`}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: index * 0.1 + 0.3,
              type: "spring",
              stiffness: 400,
            }}
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
          </motion.button>

          {/* Stylish Like Count */}
          <motion.div
            className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 bg-black/60 backdrop-blur-lg rounded-full text-white text-sm font-medium shadow-xl border border-white/10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span className="font-semibold">{likeCount}</span>
          </motion.div>

          {/* Elegant Click Indicator */}
          <motion.div
            className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg border border-white/20"
            whileHover={{ scale: 1.2 }}
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
                d="M15 12a3 3 0 11-6 0 3 3 0 616 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </motion.div>

          {/* Premium Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
        </div>

        {/* Elegant Bottom Section */}
        <div className="p-4 bg-gradient-to-br from-white to-gray-50/50">
          <motion.h3
            className="text-lg font-bold text-gray-800 group-hover:text-[#fd5001] transition-colors duration-300 mb-1 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {study.title}
          </motion.h3>
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <span className="px-3 py-1 bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 text-[#fd5001] rounded-full text-xs font-semibold border border-[#fd5001]/20">
              {study.category}
            </span>
            <span className="text-xs text-gray-500 font-medium">
              {study.year}
            </span>
          </motion.div>
        </div>

        {/* Premium Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
          animate={{
            scale: isHovered ? [1, 1.05, 1] : 1,
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
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(parseInt(project.likes));

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
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
            className="absolute top-6 right-6 z-10 w-12 h-12 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] backdrop-blur-md rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-xl border border-white/20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Like Button */}
          <motion.button
            className={`absolute top-6 left-6 z-10 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-lg transition-all duration-300 shadow-xl border border-white/20 ${
              isLiked
                ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-red-500/25"
                : "bg-white/90 text-gray-600 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white hover:shadow-red-500/25"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
          >
            <Heart className={`w-6 h-6 ${isLiked ? "fill-current" : ""}`} />
          </motion.button>

          {/* Image Container */}
          <div className="relative h-[70vh]">
            <Image
              src={images[currentIndex]}
              alt={`${project.title} ${currentIndex + 1}`}
              fill
              className="object-contain bg-gray-100"
            />

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] backdrop-blur-md text-white p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-xl border border-white/20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] backdrop-blur-md text-white p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-xl border border-white/20"
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
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-gradient-to-r from-[#fd5001] to-[#ff8c00] scale-125 shadow-lg"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="p-6 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  {project.title}
                </h2>
                <p className="text-[#fd5001] font-medium text-sm">
                  {project.category} • {project.year}
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{project.views}</span>
                </div>
                <div className="flex items-center gap-1 text-red-500">
                  <Heart className="w-4 h-4" />
                  <span>{likeCount}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {project.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 text-[#fd5001] text-xs rounded-full border border-[#fd5001]/20 font-medium"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 5 && (
                <span className="px-3 py-1 bg-gradient-to-r from-[#fd5001]/10 to-[#ff8c00]/10 text-[#fd5001] text-xs rounded-full border border-[#fd5001]/20 font-medium">
                  +{project.tags.length - 5} more
                </span>
              )}
            </div>

            {/* Action Button */}
            <div className="flex justify-center">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
              >
                <span>View Project</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
