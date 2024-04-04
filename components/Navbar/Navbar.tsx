"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeSwitch from "../ThemeSwitcher/ThemeSwitch";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentRoute = usePathname();
  const [scrollActive, setScrollActive] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });

    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const techSection = document.getElementById('tech');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');

      if (homeSection && techSection && projectsSection && contactSection) {
        const homeSectionTop = homeSection.offsetTop;
        const techSectionTop = techSection.offsetTop;
        const projectsSectionTop = projectsSection.offsetTop;
        const contactSectionTop = contactSection.offsetTop;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= homeSectionTop && scrollPosition < techSectionTop) {
          setActiveSection('home');
        } else if (scrollPosition >= techSectionTop && scrollPosition < projectsSectionTop) {
          setActiveSection('tech');
        } else if (scrollPosition >= projectsSectionTop && scrollPosition < contactSectionTop) {
          setActiveSection('projects');
        } else if (scrollPosition >= contactSectionTop) {
          setActiveSection('contact');
        } else {
          setActiveSection('home');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (section: any) => {
    const sectionElement = document.getElementById(`${section}`);
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };





  return (
    <div className="w-full h-20 lg:h-[12vh] top-0 px-4">

      <div className="max-w-container h-full font-titleFont flex items-center justify-center">
        {/* ============ Logo Start here ============ */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            {/* <Image className="w-14" src={logo} alt="logo" /> */}
            {/* <span className="invisible lg:visible fixed left-16 top-8 font-bold text-xl text-white">@Harjot</span> */}
          </motion.div>
        </Link>
        {/* ============ Logo End here ============== */}
        {/* ============ ListItem Start here ======== */}
        <nav className={`fixed z-50 max-w-[95vw] text-secondary dark:text-white rounded-full py-4 px-6  ${scrollActive ? "dark:bg-secondary bg-lightMode transition-all duration-500" : "bg-transparent transition-all duration-500"}`}>
          <ul className="flex gap-10 sm:gap-14 smsl:gap-20 md:text-lg text-sm">


            <Link
              className={`flex items-center gap-1  hover:text-textDarkGreen dark:hover:text-textGreen cursor-pointer duration-300 nav-link ${activeSection === 'home' ? "tracking-widest text-sm md:text-lg font-extrabold dark:text-textGreen text-textDarkGreen" : "text-secondary dark:text-white  font-medium "}`}
              href="/"

            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                HOME
              </motion.li>
            </Link>
            <Link
              className={`hidden mdl:flex items-center gap-1  hover:text-textDarkGreen dark:hover:text-textGreen  cursor-pointer duration-300 nav-link ${activeSection === 'tech' ? "tracking-widest text-sm md:text-lg font-extrabold dark:text-textGreen text-textDarkGreen" : "text-secondary dark:text-white  font-medium "}`}
              href="/#tech"
              onClick={() => handleNavLinkClick("tech")}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                TECH
              </motion.li>
            </Link>
            <Link
              className={`flex items-center gap-1   hover:text-textDarkGreen dark:hover:text-textGreen  cursor-pointer duration-300 nav-link ${currentRoute === '/projects' || activeSection === 'projects' ? "tracking-widest text-sm md:text-lg font-extrabold dark:text-textGreen text-textDarkGreen" : "text-secondary dark:text-white  font-medium "}`}
              href="/projects"

            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                PROJECTS
              </motion.li>
            </Link>


            <Link
              className={`hidden mdl:flex items-center gap-1  hover:text-textDarkGreen dark:hover:text-textGreen  cursor-pointer duration-300 nav-link ${activeSection === 'contact' ? "tracking-widest text-sm md:text-lg font-extrabold dark:text-textGreen text-textDarkGreen" : "text-secondary dark:text-white  font-medium "}`}
              href="/#contact"
              onClick={() => handleNavLinkClick("contact")}


            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}

              >
                CONTACT
              </motion.li>
            </Link>

            <Link
              className={`flex items-center gap-1   hover:text-textDarkGreen dark:hover:text-textGreen  cursor-pointer duration-300 nav-link ${currentRoute === '/blogs' ? "tracking-widest text-sm md:text-lg font-extrabold dark:text-textGreen text-textDarkGreen" : "text-secondary dark:text-white  font-medium "}`}
              href="/blogs"

            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                BLOG
              </motion.li>
            </Link>

          </ul>
        </nav>
        <div className="fixed bottom-3 right-3 lg:top-6 lg:right-12">
          <ThemeSwitch />
        </div>


        {/* ============ ListItem End here ========== */}
      </div>
    </div>
  );
};

export default Navbar;

