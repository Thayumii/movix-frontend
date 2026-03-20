import styled from "styled-components"
import { Link } from "react-router-dom"

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    /* background-color: var(--cor-primaria); */
    padding: 32px;
    
    h1 {
        max-height: 49px;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 8px;
        
        a {
            color: #fff;
            text-decoration: none;
            text-align: center;
            font-weight: 500;
            padding: 16px 16px;
            border-radius: 4px;

            &:hover {
                /* text-decoration: underline; */
                background-color: rgba(0,0,0,0.15);

            }
        }

        button {
            padding: 16px 16px;
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
    }
`