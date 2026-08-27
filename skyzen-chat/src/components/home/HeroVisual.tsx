import { motion } from "framer-motion";
import connectionImage from "../../assets/images/hero-connection.png";
import "./HeroVisual.css";

export default function HeroVisual() {
  return (
    <motion.figure
      className="hero-visual"
      initial={{ opacity: 0, x: 24, y: 18 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.85,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <img
        src={connectionImage}
        alt="A Kenyan woman and an older man abroad smiling while messaging each other on their phones"
      />
    </motion.figure>
  );
}