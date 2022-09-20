# Projeto Blacksmith API

A API foi desenvolvida seguindo um modelo de arquitetura em camadas (Models, Service e Controllers),
por meio dessa aplicação é possível realizar operações básicas em um banco de dados como
Criação, Leitura, Atualização e Exclusão (ou 'CRUD').

## Tecnologias utilizadas:
- Node.js;
- TypeScript;
- MySQL;
- Express.js;
- Joi (para validação de dados das requesições HTTP);
- jsonwebtoken (para gerar e validar token de autenticação).

## Diagrama do Banco de Dados
![sYkpG5z](https://user-images.githubusercontent.com/97243572/191351782-1bfaf0d3-c9df-40ab-9e27-70ad61542ec4.png)


## Domínios e Endpoints da API
<strong>A aplicação conta com os seguintes domínios, seguidos de seus endpoints:</strong>
* Login
  - endpoint `POST /login`
  
* Users
  - endpoint `POST /users`
  
* Products
  - endpoint `POST /products`
  - endpoint `GET /products`
  
* Orders
  - endpoint `POST /orders`
  - endpoint `GET /orders`
  
  
## Rodando a API
 **⚠️ É essencial configurar essas 3 variáveis de ambiente no arquivo .env: ⚠️**

  ```
    MYSQL_HOST='nome-do-host-mysql'
    MYSQL_USER='nome-do-seu-user-mysql'
    MYSQL_PASSWORD='sua-senha-mysql'
  ```

<strong>Criando e populando o banco de dados</strong>

  O arquivo `BlacksmithDB.sql` na raiz do projeto possui as _queries_ que criam e populam o banco, sendo essenciais para que você teste
aplicação localmente.

<strong>Instale as dependências e rode o projeto localmente:</strong>
- Para instalar as depedências utilize o comando: `npm install`;
- Para rodar o projeto: `npm start`;
