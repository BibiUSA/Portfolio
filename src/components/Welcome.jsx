import "./Welcome.css";
import { TypeAnimation } from "react-type-animation";

export default function Welcome() {
  return (
    <div id="welcome">
      <TypeAnimation
        className="nice-to-meet"
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Hi! I'm Bibi. Nice to Meet You!",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Hi! I'm Bibi. Nice to Meet You!",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "3rem", display: "inline-block" }}
        repeat={Infinity}
      />
      <div id="me">
        <img
          id="profile-pic"
          src="/Portfolio/Profile-pic.jpg"
          alt="profile pic"
        />
        <h2>I love building beautiful, performant applications.</h2>
        <p>
          I specialize in creating intuitive user interfaces and scalable
          backend systems that bring ideas to life — clean code, thoughtful
          design, and real-world impact.
        </p>
      </div>
    </div>
  );
}
