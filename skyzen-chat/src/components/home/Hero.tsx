import { motion } from "framer-motion";
import { Users, Globe2, ShieldCheck, Clock, ArrowRight, HeartHandshake } from "lucide-react";
import Container from "../Container";
import Button from "../common/Button";
import HeroVisual from "./HeroVisual";
import { siteConfig } from "../../config/site";
import { fadeUp, staggerContainer } from "../../utils/animations";
import "./Hero.css";

const ICONS = {
  users: Users,
  globe: Globe2,
  shield: ShieldCheck,
  clock: Clock,
} as const;

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__glow" aria-hidden="true" />
      <Container className="hero__inner">
        <motion.div
          className="hero__content"
          variants={staggerContainer(0.14)}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            {hero.eyebrow}
          </motion.span>

          <motion.h1 variants={fadeUp} className="hero__heading">
            {hero.headingLines.map((line) => (
              <span className="hero__heading-line" key={line}>
                {line === hero.headingHighlight ? (
                  <span className="hero__heading-highlight">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p variants={fadeUp} className="hero__description">
            {hero.description}
          </motion.p>

          <motion.div variants={fadeUp} className="hero__actions">
            <Button href={hero.primaryCta.href} variant="primary" icon={<ArrowRight size={18} />}>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" icon={<HeartHandshake size={18} />}>
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.ul variants={fadeUp} className="hero__trust" aria-label="Why people choose Skyzen Chat">
            {hero.trustIndicators.map((item) => {
              const Icon = ICONS[item.icon as keyof typeof ICONS];
              return (
                <li key={item.label} className="hero__trust-item">
                  <Icon size={16} strokeWidth={2.4} aria-hidden="true" />
                  <span>{item.label}</span>
                </li>
              );
            })}
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero__visual-wrap"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </Container>
    </section>
  );
}
