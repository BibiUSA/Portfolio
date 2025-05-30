import "./Skills.css";

import { skills_array } from "../data/skills";
import ScrollVelocity from "../animation/ScrollVelocity";
import { TypeAnimation } from "react-type-animation";

export default function Skills() {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate random index
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at indices i and j
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  function spreadTypeAnimation() {
    const this_array = shuffleArray(skills_array);
    const random_number = Math.floor(Math.random()) * 400 + 900;
    const newArr = [];

    const createSequence = shuffleArray(skills_array).map((skillset) => {
      newArr.push(skillset);
      newArr.push(random_number);
    });
    createSequence;
    console.log(newArr);
    return (
      <TypeAnimation
        className="skills-type"
        sequence={newArr}
        wrapper="span"
        speed={40}
        deletionSpeed={10}
        style={{ fontSize: "1rem", display: "inline-block" }}
        repeat={Infinity}
      />
    );
  }

  return (
    <div id="skills">
      <h2>My Skillsets</h2>
      <div className="skills-display">
        {spreadTypeAnimation()}
        {spreadTypeAnimation()}
        {spreadTypeAnimation()}
      </div>
    </div>
  );
}
