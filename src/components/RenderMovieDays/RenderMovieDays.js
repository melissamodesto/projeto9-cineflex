import RenderMovieSchedules from "../RenderMovieSchedules/RenderMovieSchedules";

export default function RenderMovieDays({ informationMovie }) {
  return informationMovie.map((movie, index) => (
    <div className="date"  key={index}>
      <h1>
        {movie.weekday} - {movie.date}
      </h1>
      <div className="container-hour">
        <RenderMovieSchedules movieSchedules={movie.showtimes} />
      </div>
    </div>
  ));
}
