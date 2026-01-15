export const MOCK_CLIENTES = [
    {
        id: 1,
        nome: "João Silva",
        email: "joao.silva@email.com",
        telefone: "1199123-1111",
        cep: "01001-000",
        logradouro: "Rua das Flores",
        numero: "123",
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP",
        complemento: "Apto 12",
        pontoReferencia: "Metrô Sé"
    },
    {
        id: 2,
        nome: "Maria Oliveira",
        email: "maria.oliveira@email.com",
        telefone: "2198234-2222",
        cep: "22040-010",
        logradouro: "Av. Atlântica",
        numero: "456",
        bairro: "Copacabana",
        cidade: "Rio de Janeiro",
        estado: "RJ",
        complemento: "",
        pontoReferencia: "Posto 5"
    },
    {
        id: 3,
        nome: "Carlos Pereira",
        email: "carlos.p@email.com",
        telefone: "3199345-3333",
        cep: "30110-012",
        logradouro: "Rua da Bahia",
        numero: "98",
        bairro: "Centro",
        cidade: "Belo Horizonte",
        estado: "MG",
        complemento: "Sala 302",
        pontoReferencia: "Praça Sete"
    },
    {
        id: 4,
        nome: "Ana Costa",
        email: "ana.costa@email.com",
        telefone: "7199456-4444",
        cep: "40020-000",
        logradouro: "Av. Sete de Setembro",
        numero: "1500",
        bairro: "Vitória",
        cidade: "Salvador",
        estado: "BA",
        complemento: "",
        pontoReferencia: "Largo do Campo Grande"
    },
    {
        id: 5,
        nome: "Bruno Martins",
        email: "bruno.m@email.com",
        telefone: "4199567-5555",
        cep: "80010-000",
        logradouro: "Rua XV de Novembro",
        numero: "321",
        bairro: "Centro",
        cidade: "Curitiba",
        estado: "PR",
        complemento: "Loja 2",
        pontoReferencia: "Praça Osório"
    },
    {
        id: 6,
        nome: "Fernanda Lima",
        email: "fernanda.l@email.com",
        telefone: "8599678-6666",
        cep: "60160-230",
        logradouro: "Av. Beira Mar",
        numero: "999",
        bairro: "Meireles",
        cidade: "Fortaleza",
        estado: "CE",
        complemento: "Bloco B",
        pontoReferencia: "Feirinha da Beira Mar"
    },
    {
        id: 7,
        nome: "Ricardo Alves",
        email: "ricardo.alves@email.com",
        telefone: "6299789-7777",
        cep: "74000-000",
        logradouro: "Av. Goiás",
        numero: "77",
        bairro: "Setor Central",
        cidade: "Goiânia",
        estado: "GO",
        complemento: "",
        pontoReferencia: "Praça Cívica"
    },
    {
        id: 8,
        nome: "Patrícia Rocha",
        email: "patricia.rocha@email.com",
        telefone: "8199890-8888",
        cep: "50010-000",
        logradouro: "Rua do Sol",
        numero: "55",
        bairro: "Santo Antônio",
        cidade: "Recife",
        estado: "PE",
        complemento: "Casa",
        pontoReferencia: "Marco Zero"
    },
    {
        id: 9,
        nome: "Diego Nunes",
        email: "diego.n@email.com",
        telefone: "4899901-9999",
        cep: "88010-400",
        logradouro: "Rua Felipe Schmidt",
        numero: "888",
        bairro: "Centro",
        cidade: "Florianópolis",
        estado: "SC",
        complemento: "Cobertura",
        pontoReferencia: "Terminal Central"
    },
    {
        id: 10,
        nome: "Juliana Ribeiro",
        email: "juliana.r@email.com",
        telefone: "6699012-0000",
        cep: "78005-100",
        logradouro: "Av. Getúlio Vargas",
        numero: "1010",
        bairro: "Centro Norte",
        cidade: "Cuiabá",
        estado: "MT",
        complemento: "",
        pontoReferencia: "Shopping Popular"
    }
]

export const MOCK_PEDIDOS = [
    {
        id: 1,
        descricao: "Carga de eletrônicos",
        origem: "São Paulo - SP",
        destino: "Rio de Janeiro - RJ",
        peso: "1200kg",
        cliente: { id: 1 }
    },
    {
        id: 2,
        descricao: "Móveis planejados",
        origem: "Curitiba - PR",
        destino: "Florianópolis - SC",
        peso: "850kg",
        cliente: { id: 2 }
    },
    {
        id: 3,
        descricao: "Produtos hospitalares",
        origem: "Campinas - SP",
        destino: "Belo Horizonte - MG",
        peso: "540kg",
        cliente: { id: 3 }
    },
    {
        id: 4,
        descricao: "Peças automotivas",
        origem: "Sorocaba - SP",
        destino: "Goiânia - GO",
        peso: "2100kg",
        cliente: { id: 4 }
    },
    {
        id: 5,
        descricao: "Alimentos refrigerados",
        origem: "Uberlândia - MG",
        destino: "Brasília - DF",
        peso: "980kg",
        cliente: { id: 5 }
    },
    {
        id: 6,
        descricao: "Material de construção",
        origem: "Ribeirão Preto - SP",
        destino: "Campo Grande - MS",
        peso: "3500kg",
        cliente: { id: 6 }
    },
    {
        id: 7,
        descricao: "Equipamentos industriais",
        origem: "Joinville - SC",
        destino: "Porto Alegre - RS",
        peso: "4200kg",
        cliente: { id: 7 }
    },
    {
        id: 8,
        descricao: "Roupas e tecidos",
        origem: "Blumenau - SC",
        destino: "São Paulo - SP",
        peso: "600kg",
        cliente: { id: 8 }
    }
]

export const MOCK_ENTREGAS = [
    {
        id: 1,
        motorista: "Carlos Mendes",
        veiculoPlaca: "ABC1D23",
        dataPrevista: "2026-01-18",
        pedido: { id: 1 },
        status: "PENDENTE"
    },
    {
        id: 2,
        motorista: "Rafael Lima",
        veiculoPlaca: "DEF4G56",
        dataPrevista: "2026-01-19",
        pedido: { id: 2 },
        status: "EM_ROTA"
    },
    {
        id: 3,
        motorista: "Juliana Rocha",
        veiculoPlaca: "GHI7J89",
        dataPrevista: "2026-01-20",
        pedido: { id: 3 },
        status: "ENTREGUE"
    },
    {
        id: 4,
        motorista: "Marcos Pereira",
        veiculoPlaca: "JKL1M23",
        dataPrevista: "2026-01-22",
        pedido: { id: 4 },
        status: "CANCELADA"
    },
    {
        id: 5,
        motorista: "Fernanda Alves",
        veiculoPlaca: "NOP4Q56",
        dataPrevista: "2026-01-23",
        pedido: { id: 5 },
        status: "EM_ROTA"
    },
    {
        id: 6,
        motorista: "Diego Santos",
        veiculoPlaca: "RST7U89",
        dataPrevista: "2026-01-24",
        pedido: { id: 6 },
        status: "PENDENTE"
    },
    {
        id: 7,
        motorista: "Lucas Nogueira",
        veiculoPlaca: "VWX1Y23",
        dataPrevista: "2026-01-25",
        pedido: { id: 7 },
        status: "EM_ROTA"
    },
    {
        id: 8,
        motorista: "Paulo Ribeiro",
        veiculoPlaca: "ZAB4C56",
        dataPrevista: "2026-01-26",
        pedido: { id: 8 },
        status: "ENTREGUE"
    }
]
