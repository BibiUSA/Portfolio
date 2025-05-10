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
      </div>
    </section>
  );
}
