import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import RenderSeats from "./RenderSeats";
import "./styleRenderSeats.css";
import "../Sucess/styleSucess.css";

const loading = "https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif";
const seats = [
  { id: 101, numero: 1 },
  { id: 103, numero: 3 },
  { id: 105, numero: 5 },
];

export default function Sessao() {
  const { id } = useParams();
  const [items, setItems] = useState(null);
  const navigate = useNavigate();
  const [choiceSeats, setChoiceSeats] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    setIds(choiceSeats.map((seats) => seats.id));
  }, [choiceSeats]);

  function submitForm(event) {
    event.preventDefault();
    if (choiceSeats.length === 0) {
      alert("Por favor, escolha os assentos desejados.");
    } else if (event.target.cpf.value.length < 11) {
      alert("Você deve digitar um CPF de 11 dígitos");
    } else {
      const request = axios.post(
        `https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`,
        { ids: ids, name: event.target.nome.value, cpf: event.target.cpf.value }
      );
      request.then(
        navigate("/sucesso", {
          state: {
            nome: event.target.nome.value,
            cpf: event.target.cpf.value,
            movieTitle: items.movie.title,
            session: `${items.day.date} ${items.name}`,
            seats: seats,
            choiceSeats: choiceSeats,
          },
        })
      );
    }
  }

  useEffect(() => {
    const request = axios.get(
      `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${id}/seats`
    );
    request.then((resp) => {
      setItems(resp.data);
    });
  }, [id]);

  if (items === null) {
    return (
      <div className="loading">
        <img
          src={loading}
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="title">Selecione o(s) assento(s)</div>
      <div className="assentos">
        <RenderSeats
          choiceMovie={items.seats}
          choiceSeats={choiceSeats}
          setChoiceSeats={setChoiceSeats}
        />
      </div>
      <div className="legend-seats">
        <div className="assento">
          <div className="lugar selecionado"></div>
          <h1>Selecionado</h1>
        </div>
        <div className="assento">
          <div className="lugar disponivel"></div>
          <h1>Disponível</h1>
        </div>
        <div className="assento">
          <div className="lugar indisponivel"></div>
          <h1>Indisponível</h1>
        </div>
      </div>
      <form onSubmit={submitForm}>
        <div className="buyer-data">
          <h1>Nome do comprador</h1>
          <input placeholder={"Digite seu nome..."} name="nome" required />
          <h1>CPF do comprador</h1>
          <input
            placeholder={"Digite seu CPF..."}
            maxLength="11"
            name="cpf"
            required
          />
        </div>
        <div className="button-reservation">
          <button type="submit">Reservar assento(s)</button>
        </div>
      </form>
      <div className="footer">
        <div className="movie-poster">
          <img src={items.movie.posterURL} alt="" />
        </div>
        <div className="movie-title">
          <div>{items.movie.title}</div>
          <div>
            {items.day.weekday} - {items.name}
          </div>
        </div>
      </div>
    </div>
  );
}
