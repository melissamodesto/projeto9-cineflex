import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import RenderSucess from "./RenderSucess";

export default function Sucess({ setScreenCallback }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setScreenCallback(4);
  });

  return (
    <RenderSucess
      nome={location.state.nome}
      cpf={location.state.cpf}
      movieTitle={location.state.movieTitle}
      session={location.state.session}
      seats={location.state.seats}
      choiceSeats={location.state.choiceSeats}
    />
  );
}
