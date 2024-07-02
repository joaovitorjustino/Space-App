import styled from "styled-components"
import BarraTexto from "../CampoTexto"

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Cabecalho = () => {
    return(
        <HeaderStyled >
            <img src='/imagens/logo.png'/>
            <BarraTexto />
        </HeaderStyled>
    )
}

export default Cabecalho
