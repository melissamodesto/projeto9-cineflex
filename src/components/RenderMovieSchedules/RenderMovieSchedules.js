import { Link } from "react-router-dom";
import './styleRenderMovieSchedules.css';

export default function RenderMovieSchedules({ movieSchedules }) {
  return movieSchedules.map((schedule, index) => (
    <div className="hour" key={index}>
      <Link to={`/assentos/${schedule.id}`}>
        <div className="hour-options">{schedule.name}</div>
      </Link>
    </div>
  ));
}
