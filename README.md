# JWT API - Gerador e Decodificador de Tokens

Este projeto implementa uma API REST com Node.js que:
- Gera um token JWT contendo uma mensagem aleatória.
- Decodifica um token JWT enviado no corpo da requisição, retornando a mensagem original caso o token seja válido.

## Tecnologias Utilizadas
- Node.js
- Express
- JSON Web Token (JWT)

---

## Funcionalidades

### Rota 1: Gerar Token
- Endpoint: `GET /generate-token`
- Resumo: Gera um token JWT contendo uma mensagem aleatória.
- Resposta de exemplo:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

### Rota 2: Decodificar Token
- Endpoint: `POST /decode-token`
- Resumo: Decodifica o token enviado no corpo da requisição e retorna a mensagem, caso o token seja válido.
- Corpo da requisição:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```
- Resposta de exemplo (token válido):
  ```json
  {
    "message": "Mensagem 1: A vida é uma aventura!"
  }
  ```
- Resposta de exemplo (token inválido):
  ```json
  {
    "error": "Token inválido ou expirado."
  }
  ```

---

## Passo a Passo para Execução

### 1. Clonar o Repositório
Execute o comando abaixo no terminal:
```bash
git clone https://github.com/takeshitos/2JWT.git
```

### 2. Instalar Dependências
Instale as dependências do projeto:
```bash
npm install
```

### 3. Executar o Servidor
Inicie o servidor local:
```bash
node index.js
```
O servidor estará rodando em: [http://localhost:3000](http://localhost:3000)

### 4. Testar as Rotas

#### Testar Rota 1: Gerar Token
- Endpoint: `GET /generate-token`
- Use um cliente HTTP (Postman, Insomnia) ou o navegador para fazer uma requisição GET:
  - URL: `http://localhost:3000/generate-token`

#### Testar Rota 2: Decodificar Token
- Endpoint: `POST /decode-token`
- Envie uma requisição POST com o corpo JSON:
  ```json
  {
    "token": "SEU_TOKEN_AQUI"
  }
  ```
  - URL: `http://localhost:3000/decode-token`
- Resultado:
  - Se o token for válido, a resposta contém a mensagem decodificada.
  - Se o token for inválido ou expirado, a resposta contém um erro.

