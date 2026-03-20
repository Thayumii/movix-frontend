import { HeroSection, FormSection } from "./styles"
import { useState } from "react"
const Hero = () => {
    const [codigo, setCodigo] = useState('')
    const [erro, setErro] = useState(false)

    const handleFocus = () => {
        if (!codigo.startsWith("MVX")) {
            setCodigo("MVX")
        }
        setErro(false)
    }

    const handleBlur = () => {
        if (codigo === "MVX" || codigo.length < 3) {
            setCodigo("")
        }

        if (codigo.length > 3 && codigo.length !== 13) {
            setErro(true)
        } else {
            setErro(false)
        }
    }

    const handleChange = (e) => {
        let value = e.target.value

        if (!codigo.startsWith("MVX")) {
            setCodigo("MVX")
        }

        setCodigo(value)
    }

    const isValid = codigo.length > 3 && codigo.length === 13

    return (
        <HeroSection>
            <div className="container">
                <h2>SOLUÇÕES EM TRANSPORTE E LOGÍSTICA PARA TODO O BRASIL</h2>
                <p>A Movix garante entregas rápidas, seguras e eficiente.</p>
                <p>Sua carga em boas mãos.</p>

                <FormSection>
                    <label htmlFor="cod_rastreio">Acompanhe seu pedido</label>
                    <input
                        maxLength={13}
                        id="cod_rastreio"
                        placeholder="Rastrear com CPF/CNPJ ou Código"
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={codigo}
                    />
                    <button type="submit" disabled={!isValid}>RASTREAR</button>
                    {erro && <p className="erro">Código de rastreio inválido</p>}
                </FormSection>
            </div>
        </HeroSection>
    )
}

export default Hero