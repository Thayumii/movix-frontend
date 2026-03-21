import { HeaderContainer } from "./styles.js";
import { useNavigate, useLocation } from "react-router-dom";
import MOVIX_LOGO from '../../assets/MOVIX-LOGO.png'
import { Link } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate()
    const locatgion = useLocation()

    const isHome = location.pathname === '/'

    return (
        <HeaderContainer isHome={isHome} id="">
            <div className="container">
                <h1 onClick={() => !isHome && navigate('/')}><img src={MOVIX_LOGO} alt="Movix Logo" width={"200px"} /></h1>
                <nav>
                    <a href="#" onClick={() => !isHome && navigate('/')}>HOME</a>
                    <a href="#">SOBRE NÓS</a>
                    <a href="#">SERVIÇOS</a>
                    <a href="#" onClick={() => navigate('/rastreio')}>RASTREAMENTO</a>
                    <a href="#">CONTATO</a>
                    <button type="button">SOLICITAR COTAÇÃO</button>
                    <Link to={"/login"} >LOGIN</Link>
                </nav>
            </div>
        </HeaderContainer>
    )
}

export default Header