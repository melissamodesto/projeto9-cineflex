import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import MovieList from "./MovieList/MovieList";
import MovieTimes from "./MovieTimes/MovieTimes";
import Header from "./Header/Header";
import Seats from "./Seats/Seats";
import Sucess from "./Sucess/Sucess";
import "./assets/css/style.css";

export default function App() {
  const [screen, setScreen] = useState(1);

  return (
    <>
      <BrowserRouter>
        <Header screen={screen} />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList setScreenCallback={(value) => setScreen(value)} />
            }
          />
          <Route
            path="/sessao/:id"
            element={
              <MovieTimes setScreenCallback={(value) => setScreen(value)} />
            }
          />
          <Route
            path="/assentos/:id"
            element={<Seats setScreenCallback={(value) => setScreen(value)} />}
          />
          <Route
            path="/sucesso"
            element={<Sucess setScreenCallback={(value) => setScreen(value)} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
