import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";

function ToggleContent({ header, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)}>
      <motion.h2 layout>{header}</motion.h2>
      {isOpen ? content : null}
    </motion.div>
  );
}

function Submenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.ul layout style={{ height: isOpen ? "auto" : 40 }}>
      {children}
    </motion.ul>
  );
}

export function GroupedLayout({ id }) {
  return (
    <LayoutGroup id={id}>
      {new Array(10).fill(null).map((value, index) => (
        <ToggleContent
          key={`ToggleContent-${index}`}
          header={`subment ${index}`}
          content={index}
        />
      ))}
    </LayoutGroup>
  );
}
