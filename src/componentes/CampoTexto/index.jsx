import styled from "styled-components"
import lupa from './search.png'

const Container = styled.div`
    position: relative;
    display: inline-block;
`;
const CampoTexto = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`
const Imagen = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;


const BarraTexto = (props) => {
    return(
        <Container>
            <CampoTexto placeholder='O que procura? '{...props}/>
            <Imagen src={lupa} alt="lupa"/>
        </Container>
    )
}

export default BarraTexto