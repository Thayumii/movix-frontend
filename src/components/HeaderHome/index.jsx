import { HeaderContainer } from "./styles.js";

const Header = () => {
    return (
        <HeaderContainer>
            <div className="container">
                <image></image>
                <nav>
                    <a href="">HOME</a>
                    <a href="">SOBRE NÓS</a>
                    <a href="">SERVIÇOS</a>
                    <a href="">RASTREAMENTO</a>
                    <a href="">CONTATO</a>
                    <button type="button">SOLICITAR COTAÇÃO</button>
                </nav>
            </div>
        </HeaderContainer>
    )
}

export default Header