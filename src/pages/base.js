import styled from "styled-components"

/* ===== BOTÕES ===== */
export const Container = styled.div`
    padding: 24px;
    
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px
    }

    h1 {
        font-size: 32px;
        margin-bottom: 8px;
    }

    h4 {
        font-size: 16px;
        font-weight: 500;
    }
`
export const Button = styled.button`
    cursor: pointer;
    font-weight: 500;
    border: none;
    border-radius: 6px;
    padding: 10px 16px;
    transition: all 0.2s ease;
    
    ${({ variant }) => {
        switch (variant) {
            case 'novo':
                return 'background-color: var(--primary-color);' +
                        'color: var(--white-color);' +
                        'box-shadow: 0 4px 12px 0 var(--primary-color);'
            case 'salvar':
                return 'background-color: var(--primary-color);' +
                        'color: var(--white-color);' +
                        'box-shadow: 0 4px 12px 0 var(--primary-color);'
            case 'cancelar':
                return 'background-color: #ccc;' +
                        'color: var(--cor-texto);' +
                        'box-shadow: 0 4px 12px 0 var(--primary-color);' +
                        '&:hover {' +
                        '    background-color: #bdbdbd;' +
                        '}'
        }
    }}
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: var(--cor-branca);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    overflow: hidden;

    thead {
        background-color: var(--primary-color);
        color: var(--cor-branca);
    }

    th,
    td {
        text-align: left;
        padding: 12px 14px;
        border-bottom: 1px solid var(--cor-borda);
    }

    tbody tr:hover {
        background-color: var(--cor-hover);
    }
`

/* ===== MODAL ===== */

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

export const Modal = styled.div`
    background: var(--cor-branca);
    padding: 2rem;
    border-radius: 10px;
    width: 400px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

    h2 {
        margin-top: 0;
        color: var(--cor-primaria);
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    input {
        padding: 10px;
        border-radius: 6px;
        border: 1px solid var(--cor-borda);
        outline: none;
        font-size: 0.95rem;
        
        &:focus {
            border-color: var(--cor-primaria);
            box-shadow: 0 0 4px var(--primary-color);
        }
    }
`

export const ModalActions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`

export const ListEmpty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.2rem;
    height: 350px;
    padding: 24px;

    i {
        background-color: var(--gray-color-hover);
        font-size: 32px;
        padding: 16px 18px 16px 18px;
        border-radius: 50%;
    }
`
