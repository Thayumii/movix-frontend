import React, { useState, useEffect } from "react";
import * as api from '../services/api';
//import './Clientes.css';
//import '../components/Modal.css';

const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [novoCliente, setNovoCliente] = useState({
        nome: '',
        email: '',
        telefone: '',
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        complemento: '',
        pontoReferencia: ''
    });
    // busca os clientes quando a página carrega
    useEffect(() => {
        carregarClientes();
    }, []);

    const carregarClientes = async () => {
        try {
            const response = await api.getClientes();
            setClientes(response.data);
        } catch (error) {
            console.error("Erro ao carregar clientes:", error);
        }
    };
    // controla as mudanças dos inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNovoCliente({ ...novoCliente, [name]: value });
    };
    // envia o novo cliente para o backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createCliente(novoCliente);
            setIsModalOpen(false);
            carregarClientes();

            //limpa o formulário
            setNovoCliente({
                    nome: '',
                    email: '',
                    telefone: '',
                    cep: '',
                    logradouro: '',
                    numero: '',
                    bairro: '',
                    cidade: '',
                    estado: '',
                    complemento: '',
                    pontoReferencia: ''
            });
        } catch (error) {
            console.error("Erro ao salvar cliente:", error);
        }
    };
    return (
        <div className="page-container">
            <h1>Clientes</h1>
            <button onClick={() => setIsModalOpen(true)} className="btn-novo">
                + Novo Cliente
            </button>

            {/* LISTA DE CLIENTES */}
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.length > 0 ? (
                        clientes.map(cliente =>(
                            <tr key={cliente.id}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.telefone}</td>
                                <td>{cliente.cidade}</td>
                            </tr>
                        ))
                    ): (
                        <tr>
                            <td colSpan="4">Nenhum cliente cadastrado</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/*MODAL DE NOVO CLIENTE*/}
            {isModalOpen && (
                <div className="modal-backdrop">
                    <div className="modal-content">
                        <h2>Novo Cliente</h2>
                        <form onSubmit={handleSubmit}>
                            <input name="nome" value={novoCliente.nome} onChange={handleInputChange} placeholder="Nome *"/>
                            <input name="email" value={novoCliente.email} onChange={handleInputChange} placeholder="Email *"/>
                            <input name="telefone" value={novoCliente.telefone} onChange={handleInputChange} placeholder="Telefone *"/>
                            <input name="cep" value={novoCliente.cep} onChange={handleInputChange} placeholder="CEP *"/>
                            <input name="logradouro" value={novoCliente.logradouro} onChange={handleInputChange} placeholder="Logradouro(Rua) *"/>
                            <input name="numero" value={novoCliente.numero} onChange={handleInputChange} placeholder="Número *"/>
                            <input name="bairro" value={novoCliente.bairro} onChange={handleInputChange} placeholder="Bairro *"/>
                            <input name="cidade" value={novoCliente.cidade} onChange={handleInputChange} placeholder="Cidade *"/>
                            <input name="estado" value={novoCliente.estado} onChange={handleInputChange} placeholder="Estado *"/>
                            <input name="complemento" value={novoCliente.complemento} onChange={handleInputChange} placeholder="Complemento *"/>
                            <input name="pontoReferencia" value={novoCliente.pontoReferencia} onChange={handleInputChange} placeholder="Ponto de Referência *"/>

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
export default Clientes;