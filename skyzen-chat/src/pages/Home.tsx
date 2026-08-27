import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";

// Phase 1: foundation, navbar, and hero only.
// Later phases add How It Works, Earn, Rates, FAQs, testimonials, and footer.
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
      </main>
    </>
  );
}