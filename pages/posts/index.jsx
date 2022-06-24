import Link from "next/link";
import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";
import classNames from "classnames";
import homeStyles from "../../styles/Home.module.scss";
import { getSortedPostsData } from "../../lib/posts";
// import { gql } from "@apollo/client";
// import client from "../../apollo-client";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Posts({ allPostsData, countries }) {
  return (
    <main className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Posts</h2>
      <motion.ul
        className={classNames(utilStyles.list, homeStyles.flexbox, "container")}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {allPostsData.map(({ id, date, title }) => (
          <motion.li
            className={classNames(
              utilStyles.listItem,
              utilStyles.glass,
              "item"
            )}
            key={id}
            variants={item}
          >
            <Link href={`/posts/${encodeURIComponent(id)}`}>{title}</Link>
            <br />
            {date}
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // const response = await client.query({
  //   query: gql`
  //     query Countries {
  //       countries {
  //         code
  //         name
  //         emoji
  //       }
  //       languages {
  //         code
  //         name
  //         native
  //       }
  //     }
  //   `,
  // });
  // const { data } = response;
  return {
    props: {
      allPostsData,
      // countries: data.countries.slice(0, 4),
    },
  };
}
