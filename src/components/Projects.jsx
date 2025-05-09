import ProjectTile from "./ProjectTile";
import { project_data } from "../data/project";

export default function Projects() {
  return (
    <section id="projects">
      <h2 id="project-heading">Projects</h2>

      <div id="projects-box">
        {project_data.map((data) => (
          <ProjectTile key={data.name} tile_data={data} />
        ))}
        {/* <div class="project-tile">
        <a href="https://music-app-api-oq6b.onrender.com/login" target="_blank">
          <image src="./music_sharing_app.png" alt="music app page"/>
          <h2>Music Sharing App</h2>
          <p>Share clips of your favorite songs. Interact with your friends about music. Great way to discover new music.
            Some lyrics might be explicit due to the nature music.
          </p>
        </a>
      </div> */}
        {/* <div class="project-tile">
        <a href="https://fitness-planner-frontend.onrender.com/" target="_blank">
          <image src="./plannerapp.png" alt="task manager page"/>
          <h2>Planner Web Application</h2>
          <p>This fullstack Planner application uses React JS, Express JS, and PostgreSQL to help you plan your work and workouts. Create repeatable tasks and schedule them to the calendar.</p>
        </a>
      </div>
      <div class="project-tile">
        <a href="https://bibiusa.github.io/eCommerce/" target="_blank">
          <image src="./ecommerce.png" alt=" ecommerce page"/>
          <h2>Clothing eCommerce Website</h2>
          <p>eCommerce website where you can shop various items, add and remove items in the cart. Also includes features such as product suggestions and total fit recommendation. </p>
        </a>
      </div>
      <div class="project-tile">
        <a href="https://bibiusa.github.io/Rock-Paper-Scissors/" target="_blank">
          <image src="./Rock-paper-scissors-screenshot.png" alt=" rock-paper-scissors page"/>
          <h2>Rock Paper Scissors Game</h2>
          <p>Play a best of 5 series of the classic game of Rock, Paper, Scissors against "AI"  </p>
        </a>
      </div> */}
        {/* <div class="project-tile">
        <a href="https://bibiusa.github.io/Calculator/" target="_blank">
          <image src="./calculator.png" alt=" calculator"/>
          <h2>Calculator</h2>
          <p>Do some math and see if things add up. Maybe, do some multiplications to see the product. </p>
      </div>
      <div class="project-tile">
        <a href="https://bibiusa.github.io/HangManGame/" target="_blank">
          <image src="./Hangman.png" alt=" hangman game pic"/>
          <h2>HangMan Game</h2>
          <p>See if you can guess the hidden word. Each missed guess makes you lose health points. Don't run out of health points! </p>
          </a>
      </div> */}
      </div>
    </section>
  );
}
