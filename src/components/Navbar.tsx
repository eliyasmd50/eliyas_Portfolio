const Navbar = () => {
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
      </div>
    </nav>
  );
};

export default Navbar;
