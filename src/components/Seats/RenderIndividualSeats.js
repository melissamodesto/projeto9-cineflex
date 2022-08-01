import { useState } from "react";
import "../Sucess/styleSucess.css";

export default function RenderIndividualSeats({ seats, choiceSeats }) {
  const [select, setSelect] = useState(false);

  function handdleClick(avaliable, select, setSelect) {
    if (avaliable) {
      setSelect(!select);
    } else {
      alert("Esse assento não está disponível, por favor, escolha outro.");
      choiceSeats = [];
      return;
    }

    if (!select) {
      choiceSeats.push({ id: seats.id, numero: seats.name });
    } else {
      choiceSeats.splice(
        choiceSeats.findIndex((seat) => seat.id === seats.id),
        1
      );
      /* choiceSeats = choiceSeats.filter((choiceSeat) =>
        choiceSeat.id === seats.id ? false : true
      ); */
    }
    console.log(choiceSeats);
    console.log(seats.id);
  }

  return (
    <div
      className="seats"
      onClick={() =>
        handdleClick(seats.isAvailable, select, setSelect, choiceSeats)
      }
    >
      <div
        className={
          !seats.isAvailable
            ? "lugar indisponivel"
            : select
            ? "lugar selecionado"
            : "lugar disponivel"
        }
      >
        {seats.name}
      </div>
    </div>
  );
}
