# Lexart Challenge

## Resumo

Este projeto se trata de uma aplicação FullStack que faz integração com o Mercado Livre e Buscapé - Desafio proposto por [Lexart](https://lexartlabs.com/) para envio como case técnico do processo seletivo.

Nesta aplicação, para o backend foi utilizando conceitos de SOLID e ODM, foi desenvolvido o backend responsável pela manipulação de dados vindo através de requisição ao Mercado Livre e Buscapé. Através de uma estrutura em camadas MSC (Model, Service e Controller) e a ODM do mongoose, desenvolvidas com a metodologia de POO (Programação Orientada a Objetos) é possível fazer requisições para a API do Mercado Livre e para o site do Buscapé fazendo um scraping dos produtos, após isto as informações dos produtos são salvas no banco de dados.

No frontend foi utilizado React + TypeScript obedecendo os conceitos de componentização, manipulação de estado locais e globais com o Context.

Os testes unitários fazem a cobertura da camada Service do projeto (MSC) e foram desenvolvidos utilizando as tecnologias: Vitest e Sinon.

## Stacks utilizadas:
Backend:
> TypeScript, SOLID, Mongoose, MongoDB, Express, metodologias MSC (Model, Service e Controller), POO (Programação Orientada a Objetos), ODM mongoose (Object Data Modeling), Eslint.

Testes Unitários:
> Vitest e Sinon

Frontend:
> TypeScript, React, Tailwind css, Eslint, React-icons, vite, Context, Provider, Reducer.

## Rodando o Projeto Localmente

Faça o clone ou fork do projeto para seu dirétorio pessoal e siga os seguintes passos:

### Instalando Dependências Back end

> Na raiz do diretório do backend (pasta server):

```bash
npm install
```

### Executando a Aplicação

```bash
npm run build
npm start
```

> Ou executando em modo de desenvolvedor:

```bash
npm run dev
```

* Para execução local do projeto é necessário ter o MongoDB instalado e iniciado
* As requisições devem ser feitas na porta 3001

### Para executar com Docker

```bash
docker-compose up -d
docker exec -it lexart_node /bash
npm install
```

> Executar os scripts normalmente dentro do container como é feito localmente

### Executando os Testes

```bash
npm test
```

### Instalando Dependências Frontend

> Na raiz do diretório do backend (pasta web):

```bash
npm install
```

### Executando a Aplicação

```bash
npm run dev
```

## Para visualização de seu funcionamento você pode acessar o seguinte link:

https://lexart-challenge.vercel.app/


## Autor

- [@thales-sz](https://www.github.com/thales-sz)
