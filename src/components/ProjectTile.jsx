import { project_data } from "../data/project";
import "./ProjectTile.css";

export default function ProjectTile(props) {
  return (
    <div className="project-tile">
      <a href={props.tile_data.link} target="_blank">
        <img src={props.tile_data.img_src} alt={props.tile_data.alt} />
        <h2>{props.tile_data.name}</h2>
        <div>
          <p>{props.tile_data.description}</p>
        </div>
      </a>
    </div>
  );
}
