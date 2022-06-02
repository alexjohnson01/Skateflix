import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export default function Player({id, movies }) {
  return (
    <div className="video-container">
      <div className="top-controls">
        <Link to="/home">
          <button className="back">BACK</button>
        </Link>
      </div>
      <div className="video">
        <ReactPlayer
          playing
          light
          height="720px"
          width="1280px"
          url={movies[id].url}
        />
      </div>
    </div>
  );
}
