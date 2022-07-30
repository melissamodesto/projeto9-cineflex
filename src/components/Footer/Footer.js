import "../Footer/styleFooter.css";
import React from "react";

export default function Footer(schedules) {
  return (
    <>
      <div className="footer">
        <div className="movie-poster">
          <img src={schedules.poster} alt="" />
        </div>
        <div className="movie-title">
          <h1>{schedules.title}</h1>
        </div>
      </div>
    </>
  );
}
