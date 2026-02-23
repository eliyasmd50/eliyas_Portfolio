import { useState } from "react";

interface NavbarProps {
  show: boolean;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar = ({ show, theme, toggleTheme }: NavbarProps) => {
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
      <nav className={`navbar ${show ? "navbar-scrolled" : "navbar-top"}`}>

        {/* LEFT SIDE (Desktop keeps original order) */}
        <button className="logo" onClick={() => scrollToSection("hero")}>
          𝑬𝑳𝑰𝒀𝑨𝑺
        </button>

        {/* Desktop Links */}
        <div className="nav-links desktop">
          <a onClick={() => scrollToSection("hero")}>Home</a>
          <a onClick={() => scrollToSection("about")}>About</a>
          <a onClick={() => scrollToSection("projects")}>Projects</a>

          <button
            className="hire-btn"
            onClick={() => scrollToSection("contact")}
          >
            Write Me
          </button>

          {/* Theme Toggle (DESKTOP POSITION — stays right) */}
          <button
            className={`theme-toggle ${theme}`}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          />
        </div>

        {/* Mobile Only Elements */}
        <button
          className={`theme-toggle mobile-toggle ${theme}`}
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        />

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

      </nav>

      {/* 📱 Fullscreen Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

          {/* ❌ Close Button */}
        <button
          className="close-menu"
          onClick={() => setMenuOpen(false)}
          aria-label="Close Menu"
        >
          ×
        </button>
        <a onClick={() => scrollToSection("hero")}>Home</a>
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("projects")}>Projects</a>
        <button
          className="hire-btn"
          onClick={() => scrollToSection("contact")}
        >
          Write Me
        </button>
      </div>
    </>
  );
};

export default Navbar;