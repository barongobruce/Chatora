import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import ConnectionOptions from "../components/home/ConnectionOptions";
import CountryRates from "../components/home/CountryRates";
import EarningsSection from "../components/home/EarningsSection";
import Testimonials from "../components/home/Testimonials";
import FinalCTA from "../components/home/FinalCTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <HowItWorks />
        <ConnectionOptions />
        <CountryRates />
        <EarningsSection />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}