import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styleMovieTimes.css";
import Footer from "../Footer/Footer";
import RenderMovieDays from "../RenderMovieDays/RenderMovieDays";

const loading =
  "https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-7.jpg";

export default function MovieSession({ setScreenCallback }) {
  const { id } = useParams();
  const urlAPI = `https://mock-api.driven.com.br/api/v7/cineflex/movies/${id}/showtimes`;

  const [schedules, setSchedules] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    setScreenCallback(2);

    const request = axios.get(urlAPI);

    request.then((response) => {
      setSchedules(response.data);
    });
  }, [id]);

  if (schedules === null) {
    return (
      <div className="loading">
        <img src={loading} />
      </div>
    );
  }

  return (
    <>
      <div className="schedules">
        <h1 className="subtitle">Selecione o horário</h1>
        <div className="list-schedules">
          <RenderMovieDays informationMovie={schedules.days} />
        </div>
      </div>
      <Footer title={schedules.title} poster={schedules.posterURL} />
    </>
  );
}
