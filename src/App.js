import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"

export default function App(){
    return(
        <>
            <Container>
                <Header/>
                <Footer/>
            </Container>
            
        </>
    )
} 

const Container = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0px;
    padding-bottom: 200px; //Acho que não precisa
`