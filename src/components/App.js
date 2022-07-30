import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "./MovieList/MovieList";
import MovieSession from "./MovieSession/MovieSession";
import Header from "./Header/Header";
import "./assets/css/style.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/sessions/:id" element={<MovieSession  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
