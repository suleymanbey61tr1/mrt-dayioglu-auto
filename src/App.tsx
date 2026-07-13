import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  return (
    <div
      id="app-wrapper"
      className="min-h-screen bg-bg-brand text-text-white selection:bg-gold-brand selection:text-bg-brand"
    >
      <Navbar />

      <main id="app-main" role="main">
        <Hero />
        <About />
        <WhyUs />
        <Location />
        <Contact />
      </main>

      <Footer />

      <FloatingActions />
    </div>
  );
}