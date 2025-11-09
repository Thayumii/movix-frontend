// Espera o HTML carregar antes de executar o script
document.addEventListener("DOMContentLoaded", () => {

    const btnCarregar = document.getElementById("btn-carregar");
    const tabelaCorpo = document.getElementById("tabela-clientes");

    // Função assíncrona para buscar os dados na API
    async function carregarClientes() {
        
        // Limpa a tabela antes de carregar novos dados
        tabelaCorpo.innerHTML = ''; 

        try {
            // 1. FAZ A REQUISIÇÃO (FETCH) PARA O SEU BACKEND
            const response = await fetch('http://localhost:8080/clientes');
            
            if (!response.ok) {
                throw new Error('Erro ao buscar clientes: ' + response.statusText);
            }

            // 2. CONVERTE A RESPOSTA PARA JSON
            const clientes = await response.json();

            // 3. PERCORRE A LISTA DE CLIENTES E CRIA AS LINHAS DA TABELA
            clientes.forEach(cliente => {
                const tr = document.createElement('tr'); // Cria uma linha <tr>

                tr.innerHTML = `
                    <td>${cliente.id}</td>
                    <td>${cliente.nome}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.telefone}</td>
                    <td>${cliente.endereco}</td>
                `;

                tabelaCorpo.appendChild(tr); // Adiciona a linha na tabela
            });

        } catch (error) {
            console.error('Falha na requisição:', error);
            tabelaCorpo.innerHTML = '<tr><td colspan="5">Erro ao carregar dados. Verifique o console.</td></tr>';
        }
    }

    // Adiciona o "escutador de evento" no botão
    btnCarregar.addEventListener('click', carregarClientes);
});