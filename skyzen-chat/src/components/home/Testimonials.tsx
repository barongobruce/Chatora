import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Container from "../Container";
import { siteConfig } from "../../config/site";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function Testimonials() {
  const { testimonials } = siteConfig;

  return (
    <section className="section-testimonials" aria-labelledby="testimonials-heading">
      <Container>
        <motion.div
          className="section-header section-header--light"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span variants={fadeUp} className="eyebrow eyebrow--light">
            {testimonials.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} id="testimonials-heading" className="section-heading section-heading--light">
            {testimonials.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="section-description section-description--light">
            {testimonials.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.items.map((item) => (
            <motion.div
              key={item.name}
              className="testimonial-card"
              variants={fadeUp}
              whileHover={{ y: -4 }}
            >
              <div className="testimonial-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="testimonial-star" />
                ))}
              </div>
              
              <p className="testimonial-review">"{item.review}"</p>
              
              <div className="testimonial-footer">
                <div className="testimonial-avatar" aria-hidden="true">
                  {item.initials}
                </div>
                <div className="testimonial-info">
                  <span className="testimonial-name">{item.name}</span>
                  <span className="testimonial-meta">{item.location} · {item.role}</span>
                </div>
                <div className="testimonial-earnings">
                  <span className="testimonial-amount">{item.amount}</span>
                  <span className="testimonial-period">{item.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}