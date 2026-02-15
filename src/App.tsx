import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [showPage, setShowPage] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const heroRef = useRef<HTMLDivElement | null>(null);

  // Loader Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setShowPage(true);
      }, 500);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for Hero
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNav(!entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}

      {/* Navbar receives showNav */}
      <Navbar show={showNav} />

      <div className={`page-wrapper ${showPage ? "fade-in" : "hidden-page"}`}>
        <main className="content">
          <div ref={heroRef}>
            <Hero />
          </div>

          <About />
          <Projects />
          <Contact />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
