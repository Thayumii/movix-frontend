import React from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarContainer, SidebarHeader, SidebarNav, SidebarLink } from './styles.js'

const Sidebar = () => {
    // const location = useLocation();

    return (
        <SidebarContainer>
            <SidebarHeader>
                <i className="bi bi-truck"></i> Movix
            </SidebarHeader>
            <SidebarNav>
                <SidebarLink to="/dashboard" end><i class="bi bi-columns-gap"></i> Dashboard</SidebarLink>
                <SidebarLink to="/clientes" end> <i class="bi bi-people"></i> Clientes</SidebarLink>
                <SidebarLink to="/pedidos" end><i class="bi bi-box-seam"></i> Pedidos</SidebarLink>
                <SidebarLink to="/entregas" end><i class="bi bi-geo-alt"></i> Entregas</SidebarLink>
            </SidebarNav>
            {/* <div className="sidebar-footer">
                Admin
            </div> */}
        </SidebarContainer>
    );
};
export default Sidebar;