import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <span className="logo">Eliyas MD</span>

      {/* Desktop links */}
      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          <a href="#hero" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
