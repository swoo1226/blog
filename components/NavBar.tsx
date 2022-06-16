import { useEffect } from "react";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/navbar.module.scss";
import {
  FaHome,
  FaUser,
  FaPizzaSlice,
  FaAt,
  FaDrawPolygon,
} from "react-icons/fa";
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
  const Links = ["home", "about", "posts", "contact", "neon"];
  const Icons: { [key: string]: any } = {
    home: () => <FaHome size="20" />,
    about: () => <FaUser size="20" />,
    posts: () => <FaPizzaSlice size="20" />,
    contact: () => <FaAt size="20" />,
    neon: () => <FaDrawPolygon size="20" />,
  };
  const linkMaker = (links: string[]) => {
    return links.map((link: string) => (
      <Link key={link} href={`/${link === "home" ? "" : link}`}>
        <a
        //   onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
        //     e.currentTarget.scrollIntoView({ behavior: "smooth" });
        //   }}
        >
          {Icons[link]()}
          <span>{link.toUpperCase()}</span>
        </a>
      </Link>
    ));
  };
  return <nav className={`${styles.nav}`}>{linkMaker(Links)}</nav>;
}
