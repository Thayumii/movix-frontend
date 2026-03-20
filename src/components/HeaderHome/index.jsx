import { HeaderContainer } from "./styles.js";
import MOVIX_LOGO from '../../assets/MOVIX-LOGO.png'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <HeaderContainer>
            <div className="container">
                <h1><img src={MOVIX_LOGO} alt="Movix Logo" width={"200px"} /></h1>
                <nav>
                    <a href="#">HOME</a>
                    <a href="#">SOBRE NÓS</a>
                    <a href="#">SERVIÇOS</a>
                    <a href="#">RASTREAMENTO</a>
                    <a href="#">CONTATO</a>
                    <button type="button">SOLICITAR COTAÇÃO</button>
                    <Link to={"/login"} >LOGIN</Link>
                </nav>
            </div>
        </HeaderContainer>
    )
}

export default Header