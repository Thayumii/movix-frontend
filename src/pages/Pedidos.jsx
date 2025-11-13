import React, { useState, useEffect } from "react";
import * as api from '../services/api';

const Pedidos = () => {
    const [pedidos, setPedidos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [novoPedido, setNovoPedido] = useState({
        descricao: '',
        origem: '',
        destino: '',
        peso: '',
        cliente: { id: '' },
    });

    useEffect(() => {
        carregarPedidos();
    }, []);

    const carregarPedidos = async () => {
        try {
            const response = await api.getPedidos();
            setPedidos(response.data);
        } catch (error) {
            console.error("Erro ao carregar pedidos:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name.includes('.')) {
            const [obj, key] = name.split('.');
            setNovoPedido({
                ...novoPedido,
                [obj]: {
                    ...novoPedido[obj],
                    [key]: value
                }
            });
        } else {
            setNovoPedido({ ...novoPedido, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createPedido(novoPedido);
            setIsModalOpen(false);
            carregarPedidos();
            setNovoPedido({
                descricao: '',
                origem: '',
                destino: '',
                peso: '',
                cliente: { id: '' }
            });
        } catch (error) {
            console.error("Erro ao salvar pedido:", error);
        }
    };

    return (
        <div className="page-container">
            <h1>Pedidos</h1>
            <button onClick={() => setIsModalOpen(true)} className="btn-novo">
                + Novo Pedido
            </button>

            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Peso</th>
                        <th>Cliente</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.length > 0 ? (
                        pedidos.map(pedido => (
                            <tr key={pedido.id}>
                                <td>{pedido.descricao}</td>
                                <td>{pedido.origem}</td>
                                <td>{pedido.destino}</td>
                                <td>{pedido.peso}</td>
                                <td>{pedido.cliente?.nome || pedido.cliente?.id || 'Sem cliente'}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Nenhum pedido cadastrado</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="modal-backdrop">
                    <div className="modal-content">
                        <h2>Novo Pedido</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="descricao"
                                value={novoPedido.descricao}
                                onChange={handleInputChange}
                                placeholder="Descrição *"
                                required
                            />
                            <input
                                name="origem"
                                value={novoPedido.origem}
                                onChange={handleInputChange}
                                placeholder="Origem *"
                                required
                            />
                            <input
                                name="destino"
                                value={novoPedido.destino}
                                onChange={handleInputChange}
                                placeholder="Destino *"
                                required
                            />
                            <input
                                type="number"
                                name="peso"
                                value={novoPedido.peso}
                                onChange={handleInputChange}
                                placeholder="Peso *"
                                required
                            />
                            <input
                                name="cliente.id"
                                value={novoPedido.cliente.id}
                                onChange={handleInputChange}
                                placeholder="ID do Cliente *"
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

export default Pedidos;