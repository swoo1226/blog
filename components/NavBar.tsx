import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "../styles/navbar.module.scss";
import {
  RiHome2Line,
  RiHome2Fill,
  RiMentalHealthLine,
  RiMentalHealthFill,
  RiNewspaperFill,
  RiNewspaperLine,
} from "react-icons/ri";
import React from "react";
export default function NavBar() {
  //   useEffect(() => {
  //     const callback = (entries: any, observer: any) => {
  //       console.log(entries);
  //     };
  //     let options = {
  //       root: document.querySelector("nav"),
  //       rootMargin: "0px",
  //       threshold: 1.0,
  //     };
  //     let observer = new IntersectionObserver(callback, options);
  //     let target = document.querySelector(".navMenu");
  //     observer.observe(target!);
  //   }, []);
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const { pathname } = router;
  const Links = ["home", "about", "posts", "repo1"];
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  // const Icons: { [key: string]: any } = {
  //   home: () =>
  //     pathname === "/" ? <RiHome2Fill size="20" /> : <RiHome2Line size="20" />,
  //   about: () => <FaUser size="20" />,
  //   posts: () => <FaPizzaSlice size="20" />,
  //   contact: () => <FaAt size="20" />,
  //   neon: () => <FaDrawPolygon size="20" />,
  // };

  const renderIcon = React.useCallback(
    (link, isCurrentPath) => {
      const iconOptions: { [key: string]: () => void } = {
        home: () =>
          isCurrentPath ? <RiHome2Fill size="20" /> : <RiHome2Line size="20" />,
        about: () =>
          isCurrentPath ? (
            <RiMentalHealthFill size="20" />
          ) : (
            <RiMentalHealthLine size="20" />
          ),
        posts: () =>
          isCurrentPath ? (
            <RiNewspaperFill size="20" />
          ) : (
            <RiNewspaperLine size="20" />
          ),
        repo1: () =>
          isCurrentPath ? (
            <RiNewspaperFill size="20" />
          ) : (
            <RiNewspaperLine size="20" />
          ),
      };
      return iconOptions[link]();
    },
    [pathname]
  );
  const linkMaker = (links: string[]) => {
    return links.map((link: string) => {
      let isCurrentPath = pathname.includes(link);
      if (pathname === "/blog" && link === "home") isCurrentPath = true;
      return (
        <Link key={link} href={`/${link === "home" ? "blog" : link}`}>
          <a>
            {renderIcon(link, isCurrentPath)}
            <span style={isCurrentPath ? { fontWeight: "bolder" } : undefined}>
              {link.toUpperCase()}
            </span>
          </a>
        </Link>
      );
    });
  };
  return (
    <>
      <motion.nav
        className={isOpen ? `${styles.nav}` : undefined}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        {linkMaker(Links)}
      </motion.nav>
    </>
  );
}
