import React from "react";
import { LuGraduationCap, LuSchool2 } from "react-icons/lu";
import { PongImg, PixisImg, AnicodeImg, PortfolioImg, LeetcodeImg, HackerrankImg, CFImg } from "@/public/assets";



export const links = [
  {
    name: "Home",
    hash: "/",
    id: 1
  },
  {
    name: "Projects",
    hash: "/projects",
    id: 2
  },
  {
    name: "Skills",
    hash: "/skills",
    id: 3
  },
  {
    name: "Education",
    hash: "/education",
    id: 4
  },
  {
    name: "Contact",
    hash: "/#contact",
    id: 5
  },

]


export const projectsData = [
  {
    title: "Pong Game",
    projectLink: "https://harjot01.itch.io/ping-pong",
    summary:
      "A Pong game using the awesome Godot 4 engine and GDScript as the magic behind the scenes. You know, the classic bouncing ball, paddles, and all that jazz.",
    tags: ["Godot", "GDScript"],
    githubLink: "https://github.com/Harjot01",
    img: PongImg,
    id: 1,
    featured: true
  },
  {
    title: "Pixis Media Solutions",
    projectLink: "https://pixismedia.in/",
    summary:
      "Pixis Media Solutions offers a range of services, including Photoshop, video editing, reel editing, and graphic designing.",
    tags: ["React", "Next.js", "Tailwind", "Sanity.io"],
    githubLink: "https://github.com/Harjot01",
    img: PixisImg,
    id: 2,
    featured: true
  },
  {
    title: "Anicode - Coding Through Animations",
    projectLink: "https://anicode-swart.vercel.app/",
    summary:
      "A platform which helps the students to learn Data Structures & Algorithms with the help of fun and intuitive animations.",
    tags: ["React", "Next.js", "Tailwind", "Sanity.io"],
    githubLink: "https://github.com/Harjot01",
    img: AnicodeImg,
    id: 3,
    featured: true
  },
  {
    title: "Personal Portfolio Website",
    projectLink: "https://priyadav-portfolio.vercel.app/",
    summary:
      "A personal website using Next.js and Tailwind CSS. It has cool animations thanks to framer-motion. On the site, you can see all the important skills, educational background, projects built.",
    tags: ["React", "Next.js", "Tailwind", "Sanity.io"],
    githubLink: "https://github.com/Harjot01",
    img: PortfolioImg,
    id: 4,
    featured: false
  },



] as const;



export const GithubRepoData = [
  {
    title: "DSA-Problem-Solving",
    desc: "This respository will contain all the source code that I am writing to solve Data Structures & Algorithms problems.",
    link: "https://github.com/Harjot01/DSA-Problem-Solving",
    id: 1
  },
  {
    title: "Snake and Apples",
    desc: "Snake and apples, famous nokia game using pygame a python library for 2D game development.",
    link: "https://github.com/Harjot01/Python/tree/main/Python%20Game%20Dev/Snakes%20and%20Apples",
    id: 2
  },
  {
    title: "Pixis Media Solutions",
    desc: "Pixis Media Solutions offers a range of services, including Photoshop, video editing, reel editing, and graphic designing.",
    link: "https://github.com/Harjot01/Pixis",
    id: 3
  },
  {
    title: "Pixis Media Solutions",
    desc: "Pixis Media Solutions offers a range of services, including Photoshop, video editing, reel editing, and graphic designing.",
    link: "https://github.com/Harjot01/Pixis",
    id: 4
  },
  {
    title: "Portfolio Website",
    desc: "My friend's portfolio website that I've built using Next.js, Tailwind CSS and Sanity.io CMS.",
    link: "https://github.com/Harjot01/priya-portfolio",
    id: 5
  },
  {
    title: "Codeforces",
    desc: "This repository contains all the source code that I am writing to solve problems on CodeForces platform.",
    link: "https://github.com/Harjot01/CodeForces",
    id: 6
  },
  {
    title: "Anicode - Coding Through Animations",
    desc: "A platform which helps the students to learn Data Structures & Algorithms with the help of fun and intuitive animations.",
    link: "https://github.com/Harjot01/Anicode",
    id: 7
  },
  {
    title: "C++ Programming",
    desc: "This repository contains all the programs I have written including all the important concepts of object oriented programming in C++.",
    link: "https://github.com/Harjot01/CPP",
    id: 8
  },
  {
    title: "Disney Hotstar Clone",
    desc: "Disney hotstar clone using only HTML, CSS and JavaScript.",
    link: "https://github.com/Harjot01/Disney-Hotstar",
    id: 9
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "C++",
  "Java",
  "Python",
  "C",
  "Azure",
  "Ursina",
  "Godot",
  "PostgreSQL",
  "Mongo",
  "Django",
  "Flask",
  "Framer Motion",
  "GDScript"

] as const;
