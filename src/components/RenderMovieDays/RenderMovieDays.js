import RenderMovieSchedules from "../RenderMovieSchedules/RenderMovieSchedules";

export default function RenderMovieDays({ informationMovie }) {
  return informationMovie.map((movie, index) => (
    <div className="date">
      <h1>
        {movie.weekday} - {movie.date}
      </h1>
      <div className="container-hour">
        <RenderMovieSchedules key={index} movieSchedules={movie.showtimes} />
      </div>
    </div>
  ));
}
