import { useState } from 'react'
import { Container, CardLogin, InputContainer } from "./styles.js"
import { useNavigate } from "react-router-dom";
import {login} from "../../services/api.js";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        try {
            const response = await login(email, password)
            const token = response.data.token
            localStorage.setItem("token", token)
            navigate("/dashboard")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Container>
            <CardLogin>
                <h2>LOGIN</h2>
                <InputContainer>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id={"email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="password">Senha:</label>
                    <input type={"password"} id={"password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                </InputContainer>
                <button type={"button"} onClick={handleLogin}>
                    Entrar
                </button>
             </CardLogin>
        </Container>
    )
}

export default Login