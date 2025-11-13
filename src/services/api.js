import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

// API DE CLIENTES
export const getClientes = () => apiClient.get('/clientes');
export const getClientesById = (id) => apiClient.get(`/clientes/${id}`);
export const createCliente = (clienteData) => apiClient.post('/clientes', clienteData);
export const updateCliente = (id, clienteData) => apiClient.put(`/clientes/${id}`, clienteData);
export const deleteCliente = (id) => apiClient.delete(`/clientes/${id}`);

// API DE PEDIDOS
export const getPedidos = () => apiClient.get('/pedidos');
export const getPedidosById = (id) => apiClient.get(`/pedidos/${id}`);
export const createPedido = (pedidoData) => apiClient.post('/pedidos', pedidoData);
export const updatePedido = (id, pedidoData) => apiClient.put(`/pedidos/${id}`);
export const deletePedido = (id) => apiClient.delete(`/pedidos/${id}`);

// API DE ENTREGAS
export const getEntregas = () => apiClient.get('/entregas');
export const getEntregasById = (id) => apiClient.get(`/entregas/${id}`);
export const createEntrega = (entregaData) => apiClient.post('/entregas', entregaData);
export const updateEntrega = (id, entregaData) => apiClient.put(`/entregas/${id}`);
export const deleteEntrega = (id) => apiClient.delete(`/entregas/${id}`);