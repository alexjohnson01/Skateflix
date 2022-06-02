import { Link } from "react-router-dom";

export default function Card({thumbnail, id, idHandler}) {
  return (
    <Link to="/player">
      <img
        src={thumbnail}
        alt=""
        className="card"
        id={id}
        onClick={idHandler}
      />
    </Link>
  );
}
