import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuSchool2 } from "react-icons/lu";
import { PongImg, PixisImg, AnicodeImg, PortfolioImg, LeetcodeImg, HackerrankImg, CFImg } from "@/public/assets";



export const links = [
  {
    name: "Home",
    hash: "/"
  },
  {
    name: "Projects",
    hash: "/projects"
  },
  {
    name: "Skills",
    hash: "/skills"
  },
  {
    name: "Education",
    hash: "/education"
  },
  {
    name: "Contact",
    hash: "/#contact"
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
    img: PongImg
  },
  {
    title: "Pixis Media Solutions",
    projectLink: "https://pixismedia.in/",
    summary:
      "Pixis Media Solutions offers a range of services, including Photoshop, video editing, reel editing, and graphic designing.",
    tags: ["React", "Next.js", "Tailwind", "Sanity.io"],
    githubLink: "https://github.com/Harjot01",
    img: PixisImg
  },
  {
    title: "Anicode - Coding Through Animations",
    projectLink: "https://anicode-swart.vercel.app/",
    summary:
      "A platform which helps the students to learn Data Structures & Algorithms with the help of fun and intuitive animations.",
    tags: ["React", "Next.js", "Tailwind", "Sanity.io"],
    githubLink: "https://github.com/Harjot01",
    img: AnicodeImg
  },
  {
    title: "Personal Portfolio Website",
    projectLink: "https://priyadav-portfolio.vercel.app/",
    summary:
      "A personal website using Next.js and Tailwind CSS. It has cool animations thanks to framer-motion. On the site, you can see all the important skills, educational background, projects built.",
    tags: ["React", "Next.js", "Tailwind", "Sanity.io"],
    githubLink: "https://github.com/Harjot01",
    img: PortfolioImg
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const GithubRepoData = [
  {
    title: "DSA-Problem-Solving",
    desc: "This respository will contain all the source code that I am writing to solve Data Structures & Algorithms problems.",
    link: "https://github.com/Harjot01/DSA-Problem-Solving"
  },
  {
    title: "Snake and Apples",
    desc: "Snake and apples, famous nokia game using pygame a python library for 2D game development.",
    link: "https://github.com/Harjot01/Python/tree/main/Python%20Game%20Dev/Snakes%20and%20Apples"
  },
  {
    title: "Pixis Media Solutions",
    desc: "Pixis Media Solutions offers a range of services, including Photoshop, video editing, reel editing, and graphic designing.",
    link: "https://github.com/Harjot01/Pixis"
  },
  {
    title: "Pixis Media Solutions",
    desc: "Pixis Media Solutions offers a range of services, including Photoshop, video editing, reel editing, and graphic designing.",
    link: "https://github.com/Harjot01/Pixis"
  },
  {
    title: "Portfolio Website",
    desc: "My friend's portfolio website that I've built using Next.js, Tailwind CSS and Sanity.io CMS.",
    link: "https://github.com/Harjot01/priya-portfolio"
  },
  {
    title: "Codeforces",
    desc: "This repository contains all the source code that I am writing to solve problems on CodeForces platform.",
    link: "https://github.com/Harjot01/CodeForces"
  },
  {
    title: "Anicode - Coding Through Animations",
    desc: "A platform which helps the students to learn Data Structures & Algorithms with the help of fun and intuitive animations.",
    link: "https://github.com/Harjot01/Anicode"
  },
  {
    title: "C++ Programming",
    desc: "This repository contains all the programs I have written including all the important concepts of object oriented programming in C++.",
    link: "https://github.com/Harjot01/CPP"
  },
  {
    title: "Disney Hotstar Clone",
    desc: "Disney hotstar clone using only HTML, CSS and JavaScript.",
    link: "https://github.com/Harjot01/Disney-Hotstar"
  },

] as const;

export const AchievementsData = [
  {
    title: "Leetcode",
    desc: "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    imageUrl: LeetcodeImg
  },
  {
    title: "Codeforces",
    desc: "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    imageUrl: CFImg
  },
  {
    title: "Hackerrank",
    desc: "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    imageUrl: HackerrankImg
  }

]

export const EducationData = [
  {
    title: "Bachelor of Engineering",
    institution: "Chandigarh University",
    location: "Mohali, India",
    description:
      "Pursuing my Bachelor of Technology in Computer Science and Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
  {
    title: "High School",
    institution: "Lawrance Public School",
    location: "Mohali, India",
    description:
      "Completed my high school with 83% marks.",
    icon: React.createElement(LuSchool2),
    date: "2008 - 2021",
  },
  {
    title: "Secondary School",
    institution: "Lawrance Public School",
    location: "Mohali, India",
    description:
      "Completed my secondary education with 87.2% marks.",
    icon: React.createElement(LuSchool2),
    date: "2008 - 2021",
  },

] as const;