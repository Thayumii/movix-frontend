import styled from "styled-components";

export const Container = styled.div`
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(0deg, var(--cor-primaria), var(--cor-secundaria));
`

export const CardLogin = styled.div`
    padding: 24px;
    border-radius: 16px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    h2 {
        text-align: center;
        
    }
    
    button {
        border: none;
        padding: 12px;
        cursor: pointer;
        outline: none;
        background-color: var(--primary-color);
        color: #fff;
        font-size: 16px;
        border-radius: 4px;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    input {
        width: 100%;
        outline: none;
        padding: 4px;
        border: none;
        border-bottom: 1px solid var(--cor-texto);
        border-radius: 4px 4px 0 0;
        font-size: 16px;
    }
`
