import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="navbar">
      <div id="navigation">
        <a href="#welcome" aria-label="Learn more about me">
          About
        </a>
        <a href="#projects" aria-label="Check out some of my projects">
          Projects
        </a>
        <a href="#contact" aria-label="Ways to contact me">
          Contact
        </a>
      </div>
    </div>
  );
}
