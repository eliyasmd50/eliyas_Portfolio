import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Contact from "./components/Contact";

type Theme = "light" | "dark";

function App() {
  const [loading, setLoading] = useState(true);
  const [showPage, setShowPage] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // 🔥 THEME STATE
  const [theme, setTheme] = useState<Theme>("light");

  const heroRef = useRef<HTMLDivElement | null>(null);

  // -------------------------
  // LOADER LOGIC
  // -------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setShowPage(true);
      }, 500);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  // -------------------------
  // SYSTEM + SAVED THEME
  // -------------------------
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // -------------------------
  // APPLY THEME TO HTML
  // -------------------------
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // -------------------------
  // HERO INTERSECTION OBSERVER
  // -------------------------
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

      {/* Pass theme + toggle to Navbar */}
      <Navbar show={showNav} theme={theme} toggleTheme={toggleTheme} />

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
