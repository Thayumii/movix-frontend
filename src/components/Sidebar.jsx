import React from 'react';
import { Link } from 'react-router-dom';
//import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                Movix
            </div>
            <nav className="sidebar-nav">
                <Link to="/">Dashboard</Link>
                <Link to="/">Clientes</Link>
                <Link to="/">Pedidos</Link>
                <Link to="/">Entregas</Link>
            </nav>
            <div className="sidebar-footer">
                Admin
            </div>
        </div>
    );
};
export default Sidebar;