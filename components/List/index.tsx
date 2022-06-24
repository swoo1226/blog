import { useState } from "react";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import style from "./style.module.scss";

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={style.row} />
      <div className={style.row} />
      <div className={style.row} />
    </motion.div>
  );
}

function Item({ content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <motion.li
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
      className={style.li}
    >
      <motion.div className={style.avatar} layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
}

function List({ items, selectedId }) {
  return (
    <AnimateSharedLayout>
      <motion.ul layout className={style.ul}>
        {items.map((item) => (
          <Item content={item.content} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

export default List;
