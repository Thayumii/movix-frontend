import React, { useState, useEffect } from "react";
import * as api from '../services/api';
import { Modal, ModalBackground, Table, Button, ModalActions, ListEmpty, Container } from './base.js'
import Loading from "../components/Loading/index.jsx"

import { MOCK_CLIENTES } from '../services/mocks.js'

const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true)
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

    // const carregarClientes = async () => {
    //     // simula delay de API
    //     setTimeout(() => {
    //         setClientes(MOCK_CLIENTES)
    //     }, 500)
    // }
    const carregarClientes = async () => {
        try {
            setLoading(true)
            const response = await api.getClientes();
            setClientes(response.data);
        } catch (error) {
            console.error("Erro ao carregar clientes:", error);
        } finally {
            setLoading(false)
        }
    }

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
        <Container>
            <div className="header">
                <div>
                    <h1>Clientes</h1>
                    <h4>Gerencie seus clientes</h4>
                </div>
                <Button onClick={() => setIsModalOpen(true)} variant="novo">
                    + Novo Cliente
                </Button>
            </div>

            {/* LISTA DE CLIENTES */}
            <Table>
                <thead>
                    {clientes.length > 0 && (
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Cidade</th>
                        </tr>
                    )}
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
                                    <i className="bi bi-person-x"></i>
                                    <br />
                                    Nenhum cliente cadastrado
                                </ListEmpty>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            {/*MODAL DE NOVO CLIENTE*/}
            {isModalOpen && (
                <ModalBackground>
                    <Modal>
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

                            <ModalActions className="modal-actions">
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
export default Clientes;