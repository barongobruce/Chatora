import { motion } from "framer-motion";
import { UserPlus, MessageCircle, Wallet } from "lucide-react";
import Container from "../Container";
import { siteConfig } from "../../config/site";
import { fadeUp, staggerContainer } from "../../utils/animations";

const ICONS = {
  userPlus: UserPlus,
  messageCircle: MessageCircle,
  wallet: Wallet,
} as const;

export default function HowItWorks() {
  const { howItWorks } = siteConfig;

  return (
    <section id="how-it-works" className="section-how-it-works" aria-labelledby="how-it-works-heading">
      <Container>
        <motion.div
          className="section-header"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span variants={fadeUp} className="eyebrow">
            {howItWorks.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} id="how-it-works-heading" className="section-heading">
            {howItWorks.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="section-description">
            {howItWorks.description}
          </motion.p>
        </motion.div>

        <div className="steps-grid">
          {howItWorks.steps.map((step, index) => {
            const Icon = ICONS[step.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={step.number}
                className="step-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <span className="step-number-bg" aria-hidden="true">
                  {step.number}
                </span>
                <div className="step-icon-wrap">
                  <Icon size={28} strokeWidth={2} aria-hidden="true" />
                </div>
                <span className="step-label">Step {step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}