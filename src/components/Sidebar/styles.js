import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const SidebarContainer = styled.div`
    width: 250px;
    background-color: #fff;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 24px;
    position: fixed;
    top: 0;
    left: 0;
`

export const SidebarHeader = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 48px;

    i {
        padding: 8px;
        background-image: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
        color: var(--white-color);
        border-radius: 6px;
    }
`

export const SidebarNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const SidebarLink = styled(NavLink)`
    color: var(--gray-color);
    text-decoration: none;
    font-size: 18px;
    padding: 12px 20px;
    border-radius: 6px;

    &:hover {
        background-color: var(--primary-color-hover);
        color: var(--primary-color);
    }

    &.active {
        background-color: var(--primary-color);
        color: var(--white-color);
        box-shadow: 0 4px 12px 0 var(--primary-color);
    }
`