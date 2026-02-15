interface NavbarProps {
  show: boolean;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar = ({ show, theme, toggleTheme }: NavbarProps) => {
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
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("projects")}>Projects</a>

        <button
          className="hire-btn"
          onClick={() => scrollToSection("contact")}
        >
          Write Me
        </button>

        {/* 🌙 Theme Toggle Button */}
        <button
          className={`theme-toggle ${theme}`}
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        />
      </div>
    </nav>
  );
};

export default Navbar;
