// =====================================================
// LIGHTIZER TECHNOLOGIES — HOMEPAGE
// =====================================================

// Import the entrance experience.
import LightizerIntro from "@/components/LightizerIntro";

// Import the main homepage components.
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LightizerSystem from "@/components/LightizerSystem";
import WhatIDo from "@/components/WhatIDo";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import Playground from "@/components/Playground";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import LightizerTechnologies from "@/components/LightizerTechnologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LightizerAI from "@/components/LightizerAI";


// =====================================================
// HOMEPAGE
// =====================================================

export default function Home() {
  return (
    <>
      {/* =================================================
          LIGHTIZER ENTRANCE
          ================================================= */}
      <LightizerIntro />

      {/* =================================================
          MAIN WEBSITE
          ================================================= */}
      <main>
        {/* Fixed navigation */}
        <Navbar />

        {/* Hero introduction */}
        <Hero />

        {/* Interactive Lightizer system */}
        <LightizerSystem />

        {/* Main areas of work */}
        <WhatIDo />

        {/* About */}
        <About />

        {/* Selected projects */}
        <SelectedWork />

        {/* Interactive experiments */}
        <Playground />

        {/* Currently exploring */}
        <CurrentlyExploring />

        {/* Lightizer Technologies */}
        <LightizerTechnologies />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />

        {/* Floating Lightizer AI assistant */}
        <LightizerAI />
      </main>
    </>
  );
}