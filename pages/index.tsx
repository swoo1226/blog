import homeStyles from "../styles/Home.module.scss";
import { motion, Variants } from "framer-motion";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

export default function Home(props: any) {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };
  const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

  function Card({ emoji, hueA, hueB }: Props) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
      <motion.div
        className={homeStyles["card-container"]}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className={homeStyles.splash} style={{ background }} />
        <motion.div className={homeStyles.card} variants={cardVariants}>
          {emoji}
        </motion.div>
      </motion.div>
    );
  }

  const food: [string, number, number][] = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320],
  ];
  return (
    <main>
      {food.map(([emoji, hueA, hueB]) => (
        <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
      ))}
    </main>
  );
}
