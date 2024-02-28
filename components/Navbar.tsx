"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeSwitch from "./ThemeSwitch";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentRoute = usePathname();
  const ref = useRef<string | any>("");
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    // Update the class name of the clicked link
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };


  return (
    <div className="w-full h-20 lg:h-[12vh] sticky top-0 z-50 px-4">
      {/* <TransitionEffect /> */}
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center mdl:justify-center justify-between">
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
        <div className="mdl:inline-flex items-center gap-7 mx-auto bg-white dark:bg-secondary shadow-xl rounded-full py-3 md:py-3">
          <ul className="end:px-0 max-w-[90vw] flex gap-10 px-3 text-[15px] sm:px-10 sm:space-x-16 sm:text-md smsl:space-x-6 smsl:px-6 sml:text-md sml:space-x-16 sml:px-12 md:px-8 md:space-x-0 md:text-lg  lg:text-lg lg:gap-16 text-secondary dark:text-white overflow-hidden">

            <Link
              className={`flex items-center gap-1  font-medium hover:text-textGreen  cursor-pointer duration-300 nav-link ${currentRoute === '/' ? "text-textGreen dark:text-textGreen" : "text-secondary dark:text-white"}`}
              href="/"

            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              className={`flex items-center gap-1  font-medium hover:text-textGreen  cursor-pointer duration-300 nav-link ${currentRoute === '/projects' ? "text-textGreen dark:text-textGreen" : "text-secondary dark:text-white"}`}
              href="/projects"

            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                Projects
              </motion.li>
            </Link>
            <Link
              className={`flex items-center gap-1  font-medium hover:text-textGreen  cursor-pointer duration-300 nav-link ${currentRoute === '/skills' ? "text-textGreen dark:text-textGreen" : "text-secondary dark:text-white"}`}
              href="/skills"

            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Skills
              </motion.li>
            </Link>
            <Link
              className={`flex items-center gap-1  font-medium hover:text-textGreen  cursor-pointer duration-300 nav-link ${currentRoute === '/education' ? "text-textGreen dark:text-textGreen" : "text-secondary dark:text-white"}`}
              href="/education"

            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Education
              </motion.li>
            </Link>
            <Link
              className={`flex items-center gap-1  font-medium hover:text-textGreen  cursor-pointer duration-300 nav-link ${currentRoute === '/#contact' ? "text-textGreen dark:text-textGreen" : "text-secondary dark:text-white"}`}
              href="/#contact"
              onClick={handleScroll}

            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                Contact
              </motion.li>
            </Link>


          </ul>
        </div>
        <div className="fixed bottom-3 right-3 mdl:top-6 mdl:right-12">
          <ThemeSwitch />
        </div>


        {/* ============ ListItem End here ========== */}
      </div>
    </div>
  );
};

export default Navbar;

