import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

interface NavbarProps {
  show: boolean;
}

const Navbar = ({ show }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    setMenuOpen(false); // ✅ close menu after click
  };

  return (
    <>
      <nav className={`navbar ${show ? "navbar-scrolled" : "navbar-hero"}`}>
        <button className="logo" onClick={() => scrollToSection("hero")}>
          <span className="logo-mark"><span>M</span><span>E</span></span>
          <span className="logo-type">ELIYAS <small>FULL-STACK DEV</small></span>
        </button>
        <div className="nav-links">
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("works")}>Experience</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
          <a className="nav-cta" href="mailto:eliyasmohamed50@gmail.com">Let&apos;s talk <FiArrowUpRight /></a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("works")}>Experience</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
        <a href="mailto:eliyasmohamed50@gmail.com">Let&apos;s talk <FiArrowUpRight /></a>
      </div>
    </>
  );
};

export default Navbar;