import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Clientes from './pages/Clientes';
import Pedidos from './pages/Pedidos';
import Entregas from './pages/Entregas';
import Login from './pages/Login';
import Home from "./pages/Home/index.jsx";
import Rastreio from "./pages/Rastreio/index.jsx";
import './assets/theme.css';
import './index.css';
import ProtectedRoute from "./services/ProtectedRoute.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rastreio" element={<Rastreio />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/pedidos" element={<Pedidos />} />
              <Route path="/entregas" element={<Entregas />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;