import { motion } from "framer-motion";
import { Wallet, Clock, Smartphone, ShieldCheck, CheckCircle2 } from "lucide-react";
import Container from "../Container";
import { siteConfig } from "../../config/site";
import { fadeUp } from "../../utils/animations";

const ICONS = {
  wallet: Wallet,
  clock: Clock,
  smartphone: Smartphone,
  shieldCheck: ShieldCheck,
} as const;

export default function EarningsSection() {
  const { mpesaSection } = siteConfig;

  return (
    <section className="section-earnings" aria-labelledby="earnings-heading">
      <Container>
        <div className="earnings-wrapper">
          {/* Left Content */}
          <motion.div
            className="earnings-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            <span className="eyebrow eyebrow--green">{mpesaSection.eyebrow}</span>
            <h2 id="earnings-heading" className="section-heading section-heading--left">
              {mpesaSection.heading}
            </h2>
            <p className="section-description section-description--left">
              {mpesaSection.description}
            </p>

            <ul className="earnings-benefits">
              {mpesaSection.benefits.map((benefit, index) => {
                const Icon = ICONS[benefit.icon as keyof typeof ICONS];
                return (
                  <motion.li
                    key={benefit.title}
                    className="earnings-benefit"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="earnings-benefit__icon">
                      <Icon size={20} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="earnings-benefit__text">
                      <h3 className="earnings-benefit__title">{benefit.title}</h3>
                      <p className="earnings-benefit__desc">{benefit.description}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Right M-Pesa Mock Card */}
          <motion.div
            className="earnings-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="mpesa-card">
              <div className="mpesa-card__glow" aria-hidden="true" />
              
              <div className="mpesa-card__header">
                <span className="mpesa-card__label">{mpesaSection.mockData.label}</span>
                <div className="mpesa-card__status">
                  <CheckCircle2 size={14} strokeWidth={2.5} aria-hidden="true" />
                  <span>{mpesaSection.mockData.status}</span>
                </div>
              </div>

              <div className="mpesa-card__body">
                <p className="mpesa-card__subheading">{mpesaSection.mockData.heading}</p>
                <h3 className="mpesa-card__amount">{mpesaSection.mockData.amount}</h3>
                <p className="mpesa-card__available">{mpesaSection.mockData.availableLabel}</p>
              </div>

              <div className="mpesa-card__stats">
                <div className="mpesa-stat">
                  <span className="mpesa-stat__value">{mpesaSection.mockData.conversations}</span>
                  <span className="mpesa-stat__label">This week</span>
                </div>
                <div className="mpesa-stat-divider" aria-hidden="true" />
                <div className="mpesa-stat">
                  <span className="mpesa-stat__value">{mpesaSection.mockData.activeTime}</span>
                  <span className="mpesa-stat__label">Total active</span>
                </div>
              </div>

              {/* Decorative progress bar */}
              <div className="mpesa-card__progress">
                <div className="mpesa-card__progress-bar" style={{ width: "75%" }} />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}