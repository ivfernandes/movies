# Moviedev

## Descrição do projeto
O projeto consiste no desenvolvimento de uma mini plataforma colaborativa de catálogo de filmes que permita
o usuário visualizar os últimos filmes adicionados e visualizar a sinopse do filme. Nesta plataforma
colaborativa, deverá existir também uma página administrativa para cadastro de filme com título, descrição e
upload de imagem.

## Pre-requisitos para executar o projeto localmente
> Node.js e MySql

## Mysql
- O download do mysql pode ser encrontado aqui: [MySql](https://dev.mysql.com/downloads/installer/)
- Ao instalar fique atento na hora da criação do seu usuario e senha, guarde essas credencias
- Ainda na instalação crie um usuario chamado **movie** com a senha **1234**
- Com o MySql instalado, conecte-se com o usuario criado e crie um banco de dados chamado **moviedev**

## Node.js
Para instalar, buildar, exportar o projeto execute o seguintes comandos em ordem.

1. Instalar todas as dependencias necessarias.
```
npm install
```
2. Executar todas as operações do banco de dados.
```
npm run dball
```
3. Inicializar o projeto na url http://localhost:5555
```
npm start
```