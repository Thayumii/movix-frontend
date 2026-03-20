import styled from "styled-components"

export const HeaderContainer = styled.header`
        background-color: var(--cor-primaria);
        padding: 32px;
    
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