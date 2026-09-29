// Import the main homepage components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LightizerSystem from "@/components/LightizerSystem";
import WhatIDo from "@/components/WhatIDo";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
// Import the Playground section.
import Playground from "@/components/Playground";
// Import the Currently Exploring section.
import CurrentlyExploring from "@/components/CurrentlyExploring";
// Import the Lightizer Technologies section.
import LightizerTechnologies from "@/components/LightizerTechnologies";
// Import the Contact section.
import Contact from "@/components/Contact";
// Import the Footer section.
import Footer from "@/components/Footer";
// Import the Lightizer AI assistant.
import LightizerAI from "@/components/LightizerAI";

export default function Home() {
  return (
    // Main homepage wrapper
    <main>

      {/* Fixed navigation */}
      <Navbar />

      {/* Hero introduction */}
      <Hero />

      {/* Interactive Lightizer system */}
      <LightizerSystem />

      {/* Main areas of work */}
      <WhatIDo />

      {/* About Chukwuka */}
      <About />

      {/* Selected projects */}
      <SelectedWork />

      {/* Interactive experiments */}
      <Playground />

      {/* Areas currently being explored */}
      <CurrentlyExploring />

      {/* Lightizer Technologies brand section */}
      <LightizerTechnologies />

      {/* Contact section */}
      <Contact />

      {/* Website footer */}
      <Footer />

      {/* Floating Lightizer AI assistant */}
      <LightizerAI />

    </main>
  );
}