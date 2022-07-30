import RenderIndividualSeats from "./RenderIndividualSeats"

export default function RenderSeats({assentosFilme,assentosEscolhidos}){

    return (assentosFilme.map(assento =>
        <RenderIndividualSeats assento={assento} assentosEscolhidos={assentosEscolhidos}/>
    ))
}