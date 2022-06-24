import { useState } from "react";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import List from "../components/List";

const items = [0, 1, 2];

function About() {
  return <List items={items} selectedId={1} />;
}

export default About;
