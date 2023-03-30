# Projeto de automação de testes com CodeceptJS com Playwright e REST API

# Pré-Requisitos:

Java 11 JDK,
VS Code

## Estrutura do Projeto

./features/web.feature:
Constam os cenários de testes WEB escritos em BDD para execução

./output:
Evidências da execução dos testes

./pages:
Responsável pelos mapeamento das páginas dos testes

./resource/api/jsonSchema.js:
Responsável por fazer as validações da estrutura do response da API

./resource/api/responseValidation.js:
Responsável por fazer as validações de forma genérica do response da API

./step_definitions/web_steps:
Responsável pelos steps versus BDD

./tests/api/pet_store_test.js:
Constam os cenários de testes de API para execução sem BDD

./tests/ui/swag_lab_test.js:
Constam os cenários de testes de WEB para execução sem BDD

./Utils/name.js:
Responsável por gerar nomes randômicos durante a execução dos testes da API

./Utils/code.js:
Responsável por gerar números randômicos durante a execução dos testes da API

# Observações:

Faça o donwload do template no repositório de código para utilizar no seu projeto em especifico, feito isso, fique a vontande para usufruir dos recursos disponíveis e também customizar de acordo com sua necessidade.

# Comandos utilizados durante a construção da automação de API com CodeceptJS

## Inicialização do projeto:

npm init

## Instalação do codeceptjs na pasta do projeto:

npm i playwright@^1.18 --save
npm i codeceptjs --save-dev

## Inicialização do codeceptjs:

npx codeceptjs init

## Gerar outro método de teste

npx codeceptjs gt

## Gerar Page Object

npx codeceptjs gpo

## Configuração e os métodos BDD para os cenários

npx codeceptjs gherkin:init
npx codeceptjs gherkin:snippets

## Sugestões de extensões para BDD

BDD Highlighter
Snippets and Syntax Highlight for Gherkin (Cucumber)
Cucumber (Gherkin) Full Support

## Comandos para rodar a automação dos testes

npx codeceptjs run

## Configuração de informações randômicas via NPM

npm install node-random-name
npm install random-number

## Relatorio Allure

npm install @codeceptjs/allure-legacy --save-dev
npx allure serve output

## Instalação do prettier e eslint

npm install prettier
npm install eslint -D
npm init @eslint/config
npm install eslint-config-airbnb-base
npm install --save-dev eslint-plugin-prettier
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
npm install --save-dev lint-staged

## Instalação do Husky

npm install husky --save-dev
npm install -g git-cz
npm install commitizen -g --force
npm install --save-dev git-cz

Obs.: Copiar a pasta .husky, changelog.config.js e adicionar comandos na pasta package.json
