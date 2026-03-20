import { HeaderContainer } from "./styles.js";
import MOVIX_LOGO from '../../assets/MOVIX-LOGO.png'


const Header = () => {
    return (
        <HeaderContainer>
            <div className="container">
                <img src={MOVIX_LOGO} alt="Movix Logo" width={"200px"} />
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