import React, { useState, useEffect } from "react";
import * as api from '../services/api';
//import './Entregas.css';
//import '../components/Modal.css';

const Entregas = () => {
    const [entregas, setEntregas] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [novaEntrega, setNovaEntrega] = useState({
        motorista: '',
        veiculoPlaca: '',
        dataPrevista: '',
        pedido: { id: 0 },
        status: ''
    });

    // busca as entregas quando a página carrega
    useEffect(() => {
        carregarEntregas();
    }, []);

    const carregarEntregas = async () => {
        try {
            const response = await api.getEntregas();
            setEntregas(response.data);
        } catch (error) {
            console.error("Erro ao carregar entregas:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name.includes('.')) {
            const [obj, key] = name.split('.');
            setNovaEntrega({
                ...novaEntrega,
                [obj]: {
                    ...novaEntrega[obj],
                    [key]: value
                }
            });
        } else {
            setNovaEntrega({ ...novaEntrega, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createEntrega(novaEntrega);
            setIsModalOpen(false);
            await carregarEntregas();
            setNovaEntrega({
                motorista: '',
                veiculoPlaca: '',
                dataPrevista: '',
                pedido: { id: 0 },
                status: ''
            });
        } catch (error) {
            console.error("Erro ao salvar entrega:", error);
        }
    };

    return (
        <div className="page-container">
            <h1>Entregas</h1>
            <button onClick={() => setIsModalOpen(true)} className="btn-novo">
                + Nova Entrega
            </button>

            {/* LISTA DE ENTREGAS */}
            <table>
                <thead>
                    <tr>
                        <th>Motorista</th>
                        <th>Placa</th>
                        <th>Data Prevista</th>
                        <th>Pedido</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {entregas.length > 0 ? (
                        entregas.map(entrega => (
                            <tr key={entrega.id}>
                                <td>{entrega.motorista}</td>
                                <td>{entrega.veiculoPlaca}</td>
                                <td>{entrega.dataPrevista}</td>
                                <td>{entrega.pedido?.id || 'Sem pedido'}</td>
                                <td>{entrega.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Nenhuma entrega cadastrada</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* MODAL DE NOVA ENTREGA */}
            {isModalOpen && (
                <div className="modal-backdrop">
                    <div className="modal-content">
                        <h2>Nova Entrega</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="motorista"
                                value={novaEntrega.motorista}
                                onChange={handleInputChange}
                                placeholder="Motorista *"
                                required
                            />
                            <input
                                name="veiculoPlaca"
                                value={novaEntrega.veiculoPlaca}
                                onChange={handleInputChange}
                                placeholder="Placa do Veículo *"
                                required
                            />
                            <input
                                type="date"
                                name="dataPrevista"
                                value={novaEntrega.dataPrevista}
                                onChange={handleInputChange}
                                placeholder="Data Prevista *"
                                required
                            />
                            <input
                                type="number"
                                name="pedido.id"
                                value={novaEntrega.pedido.id}
                                onChange={handleInputChange}
                                placeholder="ID do Pedido *"
                                required
                            />
                            <input
                                name="status"
                                value={novaEntrega.status}
                                onChange={handleInputChange}
                                placeholder="Status *"
                                required
                            />

                            <div className="modal-actions">
                                <button type="submit" className="btn-salvar">Salvar</button>
                                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-cancelar">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Entregas;
