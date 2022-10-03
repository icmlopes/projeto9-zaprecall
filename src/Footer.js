import styled from "styled-components"
import deck from "./Deck"

export default function Footer() {
    const naolembrei = "#FF3030"
    const quase = "#FF922E"
    const zap = "#2FBE34"
    return (
        <>
            <Container>
                <ContainerBotao>
                    <Botao cor={naolembrei}>Não lembrei</Botao>
                    <Botao cor={quase}>Quase não lembrei</Botao>
                    <Botao cor={zap}>Zap!</Botao>
                </ContainerBotao>
                <h6>0/{deck.length} Concluído</h6>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 30vw;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
    margin: 0 auto;
    h6{
        font-family: 'Recursive', sans-serif;
        font-size: 18px;
        font-style: normal;
    }
`
const ContainerBotao = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`

const Botao = styled.button`
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: ${props => props.cor};
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 5px;
`
