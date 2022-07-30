import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "./MovieList/MovieList";
import MovieTimes from "./MovieTimes/MovieTimes";
import Header from "./Header/Header";
import Seats from "./Seats/Seats";
import "./assets/css/style.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/sessao/:id" element={<MovieTimes  />} />
          <Route path="/assentos/:id" element={<Seats />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
