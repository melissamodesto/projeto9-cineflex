import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";

export default function Header({ screen }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  const backButton =
    screen !== 1 && screen !== 4 ? (
      <button onClick={handleClick} className="back-button">
        <ion-icon name="chevron-back-circle"></ion-icon>
      </button>
    ) : null;

  return (
    <>
      <div className="topo">
        {backButton}
        <h1>CINEFLEX</h1>
      </div>
    </>
  );
}
