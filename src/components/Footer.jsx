import "./Footer.css";

export default function Footer() {
  return (
    <section id="contact">
      <h2>Let's Work Together</h2>
      <div className="socials">
        <div className="social-link">
          <a
            id="profile-link"
            href="https://www.linkedin.com/in/thebibimathew/"
            target="_blank"
            aria-label="My Linkedin Page"
            content="Opens in a new tab"
          >
            Linkedin
          </a>
        </div>
        <div className="social-link">
          <a
            id="github"
            href="https://github.com/BibiUSA"
            target="_blank"
            aria-label="My GitHub Page"
            content="Opens in a new tab"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
