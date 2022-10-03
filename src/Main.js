import styled from "styled-components"
import play from "./img/seta_play.png"
import Deck from "./Deck"



function Perguntas(props){
    
    return(

        <PerguntaFechada >
            <p>Pergunta {props.index+1}</p>
            <img src={play} alt="simbolo play"/>
        </PerguntaFechada>
   
    )
}

export default function Main(){

    // function sortearPerguntas(){
    //     const i = Math.floor(Math.random() * deck.length)
 

    return (
        <>
            {Deck.map((value, index) => <Perguntas index={index} key={index}/>)}
        </>
    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`

