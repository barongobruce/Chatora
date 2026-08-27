import { motion } from "framer-motion";
import { MessageCircle, Languages, Check } from "lucide-react";
import Container from "../Container";
import Button from "../common/Button";
import { fadeUp } from "../../utils/animations";

export default function FinalCTA() {
  return (
    <section className="section-final-cta" aria-labelledby="final-cta-heading">
      <div className="cta-bg-glow" aria-hidden="true" />
      <Container>
        <motion.div
          className="cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 }
            }
          }}
        >
          <motion.span variants={fadeUp} className="eyebrow eyebrow--light">
            READY TO GET STARTED?
          </motion.span>
          
          <motion.h2 variants={fadeUp} id="final-cta-heading" className="cta-heading">
            Ready to Start Earning <br className="hidden sm:block" />
            <span className="text-primary">From Home?</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="cta-description">
            Join Kindred  Chat, connect with people around the world, and turn your conversations into flexible earnings.
          </motion.p>

          <motion.div variants={fadeUp} className="cta-actions">
            <Button href="#find" variant="primary" icon={<MessageCircle size={18} />}>
              Chat with Foreigners
            </Button>
            <Button href="#become" variant="primary" className="btn-teal" icon={<Languages size={18} />}>
              Teach Swahili & Earn
            </Button>
          </motion.div>

          <motion.ul variants={fadeUp} className="cta-trust">
            <li><Check size={16} /> Flexible conversations</li>
            <li><Check size={16} /> Global connections</li>
            <li><Check size={16} /> M-Pesa payouts</li>
          </motion.ul>
        </motion.div>
      </Container>
    </section>
  );
}