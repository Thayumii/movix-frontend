import React, { useState, useEffect } from "react";
import * as api from '../services/api'
import { Modal, ModalBackground, Table, Button, ModalActions, ListEmpty, Container } from './base.js'
import Loading from "../components/Loading/index.jsx"

import { MOCK_PEDIDOS } from '../services/mocks.js'


const Pedidos = () => {
    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(true)
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

    // const carregarPedidos = async () => {
    //     // simula delay de API
    //     setTimeout(() => {
    //         setPedidos(MOCK_PEDIDOS)
    //     }, 500)
    // }
    const carregarPedidos = async () => {
        try {
            setLoading(true)
            const response = await api.getPedidos();
            setPedidos(response.data);
        } catch (error) {
            console.error("Erro ao carregar pedidos:", error);
        } finally {
            setLoading(false)
        }
    }

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
        <Container>
            <div className="header">
                <div>
                    <h1>Pedidos</h1>
                    <h4>Gerencie seus pedidos</h4>
                </div>
                <Button onClick={() => setIsModalOpen(true)} variant="novo">
                    + Novo Pedido
                </Button>
            </div>

            <Table>
                <thead>
                {pedidos.length > 0 && (
                    <tr>
                        <th>Descrição</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Peso</th>
                        <th>Cliente</th>
                    </tr>
                )}
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
                    ) : loading ? (
                        <tr>
                            <td colSpan={5}>
                                <Loading variant="sync" />
                            </td>
                        </tr>
                    ) : (
                        <tr>
                            <td colSpan={5}>
                                <ListEmpty>
                                    <i className="bi bi-inbox"></i>
                                    <br />
                                    Nenhum pedido cadastrado
                                </ListEmpty>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {isModalOpen && (
                <ModalBackground>
                    <Modal>
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
                            <ModalActions>
                                <Button type="submit" variant="salvar">Salvar</Button>
                                <Button type="button" onClick={() => setIsModalOpen(false)} variant="cancelar">Cancelar</Button>
                            </ModalActions>
                        </form>
                    </Modal>
                </ModalBackground>
            )}
        </Container>
    );
};

export default Pedidos;