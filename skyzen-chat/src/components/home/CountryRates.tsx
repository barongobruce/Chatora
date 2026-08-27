import { motion } from "framer-motion";
import Container from "../Container";
import { siteConfig } from "../../config/site";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function CountryRates() {
  const { countryRates } = siteConfig;

  return (
    <section id="rates" className="section-country-rates" aria-labelledby="country-rates-heading">
      <Container>
        <motion.div
          className="section-header"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span variants={fadeUp} className="eyebrow">
            {countryRates.eyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} id="country-rates-heading" className="section-heading">
            {countryRates.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="section-description">
            {countryRates.description}
          </motion.p>
        </motion.div>

        <motion.div 
          className="rates-grid"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {countryRates.countries.map((country) => (
            <motion.div
              key={country.code}
              className="rate-card"
              variants={fadeUp}
              whileHover={{ y: -5 }}
            >
              <div className="rate-card__flag" aria-hidden="true">
                {country.flag}
              </div>
              <div className="rate-card__code">{country.code}</div>
              <div className="rate-card__name">{country.name}</div>
              <div className="rate-card__value">
                <span className="rate-card__amount">{country.rate}</span>
                <span className="rate-card__unit">{country.unit}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          className="rates-disclaimer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {countryRates.disclaimer}
        </motion.p>
      </Container>
    </section>
  );
}