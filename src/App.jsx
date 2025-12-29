import { useEffect, useState } from "react";

import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // ===== SPLASH TIMER =====
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800); // perfect timing (not annoying)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden">
      {/* SPLASH SCREEN */}
      <SplashScreen show={showSplash} />

      {/* MAIN APP (after splash) */}
      {!showSplash && (
        <>
          {/* NAVBAR */}
          <Navbar />

          {/* MAIN CONTENT */}
          <main className="pt-24">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          {/* FLOATING BUTTON */}
          <BackToTop />
        </>
      )}
    </div>
  );
}

export default App;
