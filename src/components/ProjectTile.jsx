import { project_data } from "../data/project";
import "./ProjectTile.css";

export default function ProjectTile(props) {
  return (
    <div className="project-tile">
      <a href={props.tile_data.link} target="_blank">
        {props.tile_data.img_src.includes("youtube.com") && (
          <iframe
            width="320"
            height="180"
            src={props.tile_data.img_src}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        )}
        {!props.tile_data.img_src.includes("youtube.com") && (
          <img src={props.tile_data.img_src} alt={props.tile_data.alt} />
        )}
        <h2>{props.tile_data.name}</h2>
        <div>
          <p>{props.tile_data.description}</p>
        </div>
      </a>
    </div>
  );
}
