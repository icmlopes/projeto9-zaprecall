import styled from "styled-components"
import play from "./img/seta_play.png"

function Perguntas(props){
    return(

        <PerguntaFechada>
            <p>Pergunta {props.posicao}</p>
            <img src={play} alt="simbolo play"/>
        </PerguntaFechada>
            
    )
}


export default function Questions(){

    const deck = [
        {posicao: "1", Pergunta: "O que é JSX?", Resposta: "Uma extensão de linguagem do JavaScript"},
        {posicao: "2", Pergunta: "O React é __", Resposta: "Uma biblioteca JavaScript para construção de interfaces"},
        {posicao: "3", Pergunta: "Componentes devem iniciar com __", Resposta: "letra maiúscula"},
        {posicao: "4", Pergunta: "Podemos colocar __ dentro do JSX", Resposta: "expressões"},
        {posicao: "5", Pergunta: "O ReactDOM nos ajuda __", Resposta: "Interagindo com a DOM para colocar componentes React na mesma"},
        {posicao: "6", Pergunta: "Usamos o npm para __ ", Resposta: "Gerenciar os pacotes necessários e suas dependências"},
        {posicao: "7", Pergunta: "Usamos props para __ ", Resposta: "Passar diferentes informações para componentes "},
        {posicao: "8", Pergunta: "Usamos estado (state) para __ ", Resposta: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
        ]
        
    return (
        <>
            {deck.map((infoDeck) => <Perguntas posicao={infoDeck.posicao}/>)}
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
`