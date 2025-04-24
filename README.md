# Projeto Fullstack com APIs em MongoDB e MySQL + Frontend em React

Este projeto é composto por três partes principais:

- **API MongoDB**: Backend com persistência em MongoDB  
- **API MySQL**: Backend com persistência em MySQL  
- **Frontend**: Aplicação React que consome ambas as APIs

---

## 🚀 Como rodar o projeto localmente

### 📦 Requisitos

- Docker e Docker Compose instalados  
- Node.js e Yarn instalados (para o frontend)

---

### 🔧 Subindo a API com MongoDB

1. Navegue até a pasta da API do MongoDB:

```bash
cd ./APIDockerMongoDB

    Suba os containers com o Docker Compose:

docker compose up --build

🛠️ Subindo a API com MySQL

    Navegue até a pasta da API do MySQL:

cd ./APISqlDocker

    Suba os containers com o Docker Compose:

docker compose up --build

🎨 Rodando o Frontend

    Navegue até a pasta do projeto frontend:

cd ./ProjetoUI

    Instale as dependências:

yarn install

    Inicie o servidor de desenvolvimento:

yarn run dev

