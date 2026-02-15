interface NavbarProps {
  show: boolean;
}

const Navbar = ({ show }: NavbarProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <nav
      className={`navbar ${show ? "navbar-show" : "navbar-hide"}`}
    >
      <span className="logo" onClick={() => scrollToSection("hero")}>
        𝑬𝑳𝑰𝒀𝑨𝑺
      </span>

      <div className="nav-links">
        <a onClick={() => scrollToSection("hero")}>Home</a>
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
