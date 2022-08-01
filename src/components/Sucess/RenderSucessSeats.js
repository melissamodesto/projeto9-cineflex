export default function RenderSucessSeats({choiceSeats}){
    return (choiceSeats.map(assento =>
        <h2>Assento {assento.numero}</h2>  
    ))
}