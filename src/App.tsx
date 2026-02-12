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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <div className="vertical-line"></div>

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
