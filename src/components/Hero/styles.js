import styled from 'styled-components'
import image from '../../assets/movix_hero_temp.jpg'
import image2 from '../../assets/movix_hero_temp2.jpg'

export const HeroSection = styled.section`
    position: relative;
    top: 0;
    background-image: url(${image2});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;

    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;

        height: 100%;

        h2 {
            color: #fff;
            font-size: 48px;
            width: 700px;
        }
        p {
            color: #dfdfdf;
            font-size: 24px;
            width: 700px;
        }
    }
`

export const FormSection = styled.form`
    
`