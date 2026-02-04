![Tecboard](.github/thumbnail.png)

# Tecboard - Hub de Eventos de Tecnologia

Aplicação web desenvolvida em React para gerenciar e visualizar eventos de tecnologia. O projeto permite criar, listar e paginar eventos com diferentes temas como Front-end, Design e Marketing.

## 🔨 Funcionalidades do projeto

A aplicação oferece as seguintes funcionalidades:

- **Listagem de eventos**: Visualização de eventos em cards com imagem, nome, data e tema
- **Cadastro de eventos**: Formulário para criação de novos eventos
- **Paginação**: Navegação entre páginas de eventos
- **Infinite scroll**: Carregamento progressivo de mais eventos
- **Validação de formulários**: Validação de dados com Zod
- **Temas categorizados**: Organização por categorias (Front-end, Design, Marketing)
- **Interface responsiva**: Design adaptável usando Material-UI

## ✔️ Técnicas e tecnologias utilizadas

As principais tecnologias e bibliotecas utilizadas no projeto:

- `React 19`: Biblioteca principal para construção da interface
- `Vite`: Build tool e servidor de desenvolvimento rápido
- `Material-UI (MUI)`: Biblioteca de componentes para React
- `React Hook Form`: Gerenciamento de formulários com alta performance
- `Zod`: Validação e parsing de schemas TypeScript-first
- `TanStack Query`: Gerenciamento de estado para requisições HTTP
- `JSON Server`: API mock para desenvolvimento
- `ESLint`: Linting e padronização de código

## 🎯 Funcionalidades implementadas

### Sistema de Paginação
- Navegação entre páginas com botões "Anterior" e "Próxima"
- Controle de estado da página atual
- Desabilitação inteligente de botões quando necessário

### Infinite Query
- Carregamento progressivo de eventos
- Botão "Carregar mais" para buscar próximas páginas
- Otimização de performance com cache inteligente

### Validação de Formulários
- Validação em tempo real com Zod
- Mensagens de erro personalizadas
- Campos obrigatórios e validação de tipos

## 📁 Acesso ao projeto

Você pode acessar o código fonte do projeto neste repositório ou fazer o download/clone para sua máquina local.

## 🛠️ Abrir e rodar o projeto

Após baixar o projeto, siga os passos abaixo:

### Pré-requisitos
- Node.js (versão 18 ou superior)
- pnpm (gerenciador de pacotes)

### Instalação

1. **Clone o repositório** (se ainda não fez):
```bash
git clone <url-do-repositorio>
cd 4874-tecboard-react-vite
```

2. **Instale as dependências**:
```bash
pnpm install
```

3. **Execute o servidor JSON (API mock)**:
```bash
pnpm run json-server
```

4. **Em outro terminal, execute a aplicação**:
```bash
pnpm run dev
```

5. **Acesse a aplicação**:
Abra seu navegador e vá para `http://localhost:5173`

### Scripts disponíveis

- `pnpm run dev` - Inicia o servidor de desenvolvimento
- `pnpm run build` - Gera a build de produção
- `pnpm run preview` - Preview da build de produção
- `pnpm run lint` - Executa o linting do código

## 🌐 API

O projeto utiliza JSON Server para simular uma API REST. Os dados dos eventos ficam armazenados no arquivo `db.json` e a API roda na porta 3000.

**Endpoints disponíveis:**
- `GET /events` - Lista todos os eventos
- `GET /events?_page=1&_per_page=4` - Lista eventos com paginação
- `POST /events` - Cria um novo evento

## 📚 Mais informações do curso

Este projeto foi desenvolvido como parte do curso da Alura sobre React com Vite, abordando conceitos modernos de desenvolvimento frontend como:

- Gerenciamento de estado com TanStack Query
- Validação de formulários
- Paginação e infinite scroll
- Design system com Material-UI
- Performance e otimização

Gostou do projeto e quer conhecer mais? Você pode acessar o curso da Alura que desenvolve este projeto!
