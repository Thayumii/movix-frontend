import { HeroSection } from "./styles"

const Hero = () => {
    return (
        <HeroSection>
            <div className="container">
                <h2>SOLUÇÕES EM TRANSPORTE E LOGÍSTICA PARA TODO O BRASIL</h2>
                <p>A Movix garante entregas rápidas, seguras e eficiente.</p>
                <p>Sua carga em boas mãos.</p>

                <form>
                    <label htmlFor="cod_rastreio">Acompanhe seu pedido</label>
                    <input type="text" name="" id="cod_rastreio" placeholder="Rastrear com CPF/CNPJ ou Código" />
                    <button type="submit">RASTREAR</button>
                </form>
            </div>
        </HeroSection>
    )
}

export default Hero