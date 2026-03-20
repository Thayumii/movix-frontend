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
    background-color: var(--cor-primaria);
    color: #fff;
    padding: 16px 24px;
    border-radius: 16px;
    width: fit-content;
    margin-top: 48px;


    label {
        display: block;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 8px;
        width: fit-content;
    }

    input {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        width: 300px;
        margin-right: 16px;

        &:focus {
            outline: solid;
            outline-color: var(--cor-secundaria);
        }
    }

    button {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        background-color: var(--cor-secundaria);
        color: #fff;
        cursor: pointer;
        font-weight: 500;
        font-size: 16px;

        &:hover {
            filter: brightness(90%);
        }
    }

    .erro {
        color: #ff0000 !important;
        font-weight: normal !important;
        font-size: 12px !important;
        margin-top: 4px;
        width: fit-content !important;
    }

`