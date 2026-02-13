import { useEffect, useState } from "react";
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => { setShowPage(true); }, 500);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      <div className={`page-wrapper ${showPage ? "fade-in" : "hidden-page"}`}>
        <main className="content">
          <Hero />
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
