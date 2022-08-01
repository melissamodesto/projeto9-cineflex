import { useState } from "react";
import "../Sucess/styleSucess.css";

export default function RenderIndividualSeats({ seats, choiceSeats }) {
  const [select, setSelect] = useState(false);

  function handdleClick(avaliable, select, setSelect, choiceSeats) {
    if (!avaliable) {
      alert("Esse assento não está disponível, por favor, escolha outro.");
      choiceSeats = [{}];
    } else {
      setSelect(!select);
    }

    if (!select) {
      choiceSeats.push({ id: seats.id, numero: seats.name });
    } else {
      choiceSeats = choiceSeats.filter((choice) =>
        choice.id === seats.id ? false : true
      );
    }
    console.log(choiceSeats);
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
