import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './styleMovieSession.css';

const urlAPI = "https://mock-api.driven.com.br/api/v7/cineflex/movies/ID_DO_FILME/showtimes";

function Session(session) {
  return (
    <Link to={`/sessions/${session.id}`}>
      <img className="session" src={session.image} alt={session.title} />
    </Link>
  );
}

function ListSession() {
  const [sessions, setSessions] = useState(null);

  useEffect(() => {
    const request = axios.get(urlAPI);

    request.then((response) => {
      setSessions(response.data);
      console.log(response.data);
    });
  }, []);

  
  return (
    <div className="session-list">
      {sessions.days.map((session, index) => (
        <Session key={index} daySession={session.day} id={session.id} />
      ))}
    </div>
  );
}



export default function MovieSession() {
  return (
    <>
      <ListSession />
    </>
  );
}