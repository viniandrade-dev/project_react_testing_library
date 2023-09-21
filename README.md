# Project React Testing Library

Projeto desenvolvido enquanto aluno da Trybe para praticar conceitos do React Testing Library.

## Sobre a Aplicação

O app foi desenvolvido previamente pela Trybe, isto é, todo o código contido no diretório /src já havia sido desenvolvido, a menos do diretório /tests e /helpers. Eu desenvolvi testes contidos em /tests utilizando o React Testing Library. A aplicação simula uma pokedex, que é uma enciclopédia de pokemons, contendo as páginas home, about, details, favorite pokemons e not found. Porém aqui iremos focar nos testes da aplicação.

## Desenvolvendo os Testes

Inicialmente no diretório /helpers foi desenvolvida uma função que nos permite realizar testes envolvendo diferentes rotas. Cada arquivo no diretório /tests se refere a testes de integração da renderização de componentes em cada página da aplicação. Além disso os testes também tratam do funcionamento dos botões, se realizam corretamente suas funcionalidades ou se fazem o redirecionamento para a página correta, entre demais outros testes. 

Os testes foram desenvolvidos com o rigor do Clean Code, Seguindo as ordens de prioriodade das queries e assincronicidade, quando necessário, ambas encontradas na documentação https://testing-library.com/docs/react-testing-library/intro.

## Rodando a Aplicação Localmente

Caso deseje rodar localmente a aplicação:

1. Faça o clone do repositório e rode o `npm install` na raíz do projeto (é necessário ter o Node 16+ instalado). 
2. Agora rode o comando `npm start` para rodar localmente aplicação.
3. Para rodar os testes, use o comando `npm run test` e para ver a cobertura dos testes `npm run test-coverage`. Caso queira rodar apenas um test, basta especificar o caminho até o teste desejado.
4. Fique à vontade para explorar os arquivos de testes =)

## Tecnologias e Ferramentas

[![My Skills](https://skillicons.dev/icons?i=js,react,nodejs)](https://skillicons.dev)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
