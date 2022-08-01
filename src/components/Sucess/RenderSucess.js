import { Link } from "react-router-dom";
import RenderSucessSeats from "./RenderSucessSeats";

export default function RenderizarSucesso({
  nome,
  cpf,
  movieTitle,
  session,
  seats,
  choiceSeats,
}) {

  return (
    <>
      <div className="main-container">
        <div className="title-sucess">
          <h3>Pedido feito com sucesso!</h3>
        </div>
        <div className="movie-info">
          <div className="session-info">
            <h1>Filme e sessão</h1>
            <h2>{movieTitle}</h2>
            <h2>{session}</h2>
          </div>
          <div className="seats-info">
            <h1>Ingressos</h1>
            <RenderSucessSeats seats={seats} choiceSeats={choiceSeats} />
          </div>
          <div className="buyer-info">
            <h1>Comprador</h1>
            <h2>Nome: {nome}</h2>
            <h2>CPF: {cpf}</h2>
          </div>
        </div>
      </div>
      <div className="button">
        <Link to="/">
          <div className="button-back">Voltar para home</div>
        </Link>
      </div>
    </>
  );
}
