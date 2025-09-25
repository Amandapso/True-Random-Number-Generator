# Projeto: True-Random-Number-Generator

Este projeto implementa um **Custom Node para o n8n** chamado **Random**, que consome a API [Random.org](https://www.random.org) para gerar números aleatórios.  

O objetivo é demonstrar a capacidade de criar conectores personalizados, configurando um ambiente de desenvolvimento local utilizando **Node.js (TypeScript)**, **Docker Compose**, **n8n self-hosted** e **PostgreSQL**.

---

## Recursos Utilizados

- **Node.js 22 (LTS)** + **TypeScript**
- **n8n (self-hosted)** – versão - 1.85.4
- **Docker e Docker Compose**
- **PostgreSQL**
- **Random.org API** 
---

## Pré-requisitos

Antes de começar, é necessário instalar:

- [Node.js 22+](https://nodejs.org/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

---

## Instalação das Dependências

Clone este repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install
````
---

## Subindo a Infra com Docker

O projeto já contém um `docker-compose.yml` configurado para subir:

* n8n na porta `5678`
* Banco de dados PostgreSQL na porta `5432`

Para iniciar os serviços:

```bash
docker compose up -d
```

Para verificar se os containers estão rodando:

```bash
docker ps
```

Depois acesse o n8n em:
[http://localhost:5678](http://localhost:5678)

---

## Configuração do Ambiente

O projeto possui um arquivo `.env` com um exemplo de variáveis de ambiente necessárias.
Crie um arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

Edite os valores de acordo com seu ambiente, por exemplo:

```env
POSTGRES_USER=n8n_user
POSTGRES_PASSWORD=n8n_pass
POSTGRES_DB=n8n_db
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=admin
```

---

## Estrutura de Pastas

O conector personalizado deve estar dentro da pasta:

```
.n8n/custom/
└── nodes
    └── Random
        ├── Random.node.ts
        ├── Random.node.json
        ├── Random.svg
        └── package.json
```

> Isso fará que o n8n carregue o custom node corretamente.

---

## Testando o Conector

1. Reinicie o container do n8n para carregar o novo node:

```bash
docker compose restart n8n
```

2. Acesse o editor do n8n ([http://localhost:5678](http://localhost:5678)) e crie um novo workflow.
3. Busque pelo node `Random`.
4. Configure os parâmetros **Min** e **Max**.
5. Executando o workflow, o número retornado será obtido via Random.org.

---

## Critérios Atendidos

- Infra do n8n configurada via Docker Compose + Postgres
- Pasta de custom nodes organizada em `.n8n/custom`
- Conector `Random` implementado usando TypeScript
- Integração com [Random.org](https://www.random.org/integers/)
- Código limpo e seguindo boas práticas
- Documentação detalhada para instalação e execução

---

## 👤 Autor

**Amanda Paula Oliveira Silva**
- E-mail: amandasilvap597@gmail.com
- [LinkedIn](www.linkedin.com/in/amanda-paula-oliveira-silva-a740581bb)
