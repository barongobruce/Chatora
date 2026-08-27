import { motion } from "framer-motion";
import { MessageCircle, Languages, Check, ArrowRight } from "lucide-react";
import Container from "../Container";
import Button from "../common/Button";
import { siteConfig } from "../../config/site";
import { fadeUp, staggerContainer } from "../../utils/animations";

const OPTION_ICONS = {
  blue: MessageCircle,
  teal: Languages,
} as const;

export default function ConnectionOptions() {
  const { connectionOptions } = siteConfig;

  return (
    <section id="earn" className="section-connection-options" aria-labelledby="connection-options-heading">
      <Container>
        <motion.div
          className="section-header"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span variants={fadeUp} className="eyebrow">
            {connectionOptions.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} id="connection-options-heading" className="section-heading">
            {connectionOptions.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="section-description">
            {connectionOptions.description}
          </motion.p>
        </motion.div>

        <div className="options-grid">
          {connectionOptions.options.map((option, index) => {
            const Icon = OPTION_ICONS[option.variant as keyof typeof OPTION_ICONS];
            return (
              <motion.div
                key={option.badge}
                className={`option-card option-card--${option.variant}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <div className="option-card__glow" aria-hidden="true" />
                
                <div className="option-card__content">
                  <div className={`option-badge option-badge--${option.variant}`}>
                    <Icon size={14} strokeWidth={2.5} aria-hidden="true" />
                    <span>{option.badge}</span>
                  </div>

                  <h3 className="option-title">{option.title}</h3>
                  <p className="option-description">{option.description}</p>

                  <div className="option-earning">
                    <span className="option-earning__amount">{option.earningAmount}</span>
                    <span className="option-earning__label">{option.earningLabel}</span>
                  </div>

                  <ul className="option-benefits">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="option-benefit">
                        <div className={`option-benefit__icon option-benefit__icon--${option.variant}`}>
                          <Check size={14} strokeWidth={3} aria-hidden="true" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    href="#" 
                    variant="primary" 
                    className={`option-cta ${option.variant === "teal" ? "btn-teal" : ""}`}
                    icon={<ArrowRight size={18} />}
                  >
                    {option.cta}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}