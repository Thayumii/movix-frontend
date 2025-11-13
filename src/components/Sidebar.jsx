import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <i className="bi bi-truck"></i> Movix
            </div>
            <nav className="sidebar-nav">
                <Link className={location.pathname === '/' && 'active'} to="/"><i class="bi bi-columns-gap"></i> Dashboard</Link>
                <Link className={location.pathname === '/clientes' && 'active'} to="/clientes"> <i class="bi bi-people"></i> Clientes</Link>
                <Link className={location.pathname === '/pedidos' && 'active'} to="/pedidos"><i class="bi bi-box-seam"></i> Pedidos</Link>
                <Link className={location.pathname === '/entregas' && 'active'} to="/entregas"><i class="bi bi-geo-alt"></i> Entregas</Link>
            </nav>
            {/* <div className="sidebar-footer">
                Admin
            </div> */}
        </div>
    );
};
export default Sidebar;