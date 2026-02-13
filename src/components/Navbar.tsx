
const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  }
  return (
    <nav className="navbar">
      <span 
      className="logo"
      onClick={scrollToTop}
      >𝑬𝑳𝑰𝒀𝑨𝑺</span>

      {/* Desktop links */}
      <div className="nav-links">
        <a 
        href="#hero"
        onClick={scrollToTop}
        >Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <button
          className="hire-btn"
          onClick={() => scrollToSection("contact")}
        >
          Write Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
