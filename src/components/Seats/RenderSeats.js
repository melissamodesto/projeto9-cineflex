import RenderIndividualSeats from "./RenderIndividualSeats"

export default function RenderSeats({choiceMovie,choiceSeats}){

    return (choiceMovie.map((seats, index) =>
        <RenderIndividualSeats key={index} seats={seats} choiceSeats={choiceSeats}/>
    ))
}