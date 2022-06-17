import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import classNames from "classnames";
import homeStyles from "../styles/Home.module.scss";
import Image from "next/image";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
export default function Home(props: any) {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };
  return (
    <main className={homeStyles.main}>
      <div style={{ height: "100vh" }} />
      <motion.div
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 2, ease: "easeOut" }}
        ref={ref}
        className={homeStyles.magic}
      />
    </main>
  );
}
