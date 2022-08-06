import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export default function Player({ id, movies }) {
  let thumbnail = movies[id].thumbnail;
  return (
    <div className="video-container">
      <div className="top-controls">
        <Link to="/home">
          <button className="back">BACK</button>
        </Link>
        <h1 className="heading">{movies[id].name}</h1>
      </div>
      <div className="videoPlayer">
        <ReactPlayer
          controls
          playing
          light={thumbnail}
          height="720px"
          width="1280px"
          url={movies[id].url}
        />
      </div>
    </div>
  );
}
