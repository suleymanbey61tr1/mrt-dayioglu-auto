/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
    <div className="min-h-screen bg-bg-brand text-text-white selection:bg-gold-brand selection:text-bg-brand" id="app-wrapper">
      {/* Premium Sticky Navigation Header */}
      <Navbar />

      <main id="app-main">
        {/* Hero Banner Section (Above-the-fold call to actions) */}
        <Hero />

        {/* Corporate Story / About Us Section */}
        <About />

        {/* 4 Premium Cards (Reliability, Quality, Communication, Satisfaction) */}
        <WhyUs />

        {/* Showroom Interactive Map & Address Panel */}
        <Location />

        {/* Contact Center with Placeholder Fields */}
        <Contact />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Persistent Mobile & Desktop Speed Dial (WhatsApp & Phone) */}
      <FloatingActions />
    </div>
  );
}

