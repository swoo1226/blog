import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import classNames from "classnames";
import homeStyles from "../styles/Home.module.scss";
export default function Home(props: any) {
  return (
    <main>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Home</h2>
        <ul className={classNames(utilStyles.list, homeStyles.flexbox)}></ul>
        <div></div>
      </section>
    </main>
  );
}
