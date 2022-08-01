import {useLocation} from "react-router-dom"
import RenderSucess from "./RenderSucess"

export default function Sucess(){
    const location=useLocation()

    return <RenderSucess nome={location.state.nome} cpf={location.state.cpf} movieTitle={location.state.movieTitle} session={location.state.session} seats={location.state.seats} choiceSeats={location.state.choiceSeats}/>
}