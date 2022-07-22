# bootcamp-developer-tarefas

## Organização das pastas

Nossas pastas estão separadas por contextos de conteúdo.

- [01] O que são funções;
- [02] Comandos condicionais;
- [03] Comandos de repetição;
- [04] Objetos, métodos e listas.

## Organização dos exercícios

Cada pasta tem exercícios relacionados aos conteúdos da semana para colocar em prática. A ideia é fortalecer e treinar as habilidades vistas durante o curso. Algumas tarefas possuem testes automatizados que validam o sucesso ou falha do código escrito. Isso ajuda a viabilizar e a treinar um dos itens importantes em programação: os testes. Além disso, a todo momento, você poderá enviar dúvidas em nosso canal do Discord. Elas servem inicialmente como guia para as suas atividades.

## Como realizar as atividades

Cada pasta contém um breve README.md com o exercício proposto. A ideia é ter uma variedade de exercícios curtos que validem e te ajudem a dominar programação reforçcando sua base de código. Para realilzar as atividades, você poderá copiar este repositório com a opção de `use this template`. Isso irá copiar o repositório para o seu perfil.

## Como iniciar os exercícios

Antes de iniciar os exercícios, lembre-se de ter configurado os itens mencionados no arquivo de SETUP.md. Abra o terminal de comando na pasta no repositório clonado e execute o comando:

> npm install

Cada pasta contém um arquivo de `index.js` onde o exercício será desenvolvido e um arquivo de teste que irá validar a solução do seu exercício: `index.spec.js`.
Cada arquivo `index.js` também indica o nome da função que deverá ser criada. Isso foi criado para facilitar e automatizar os testes de validação.

Na última linha de cada arquivo index, você encontrará algo parecido como:

```js
module.exports = NomeDaFuncaoDefinida;
```

Portanto, quando for criar a função, mantenha o mesmo nome para que os testes funcionem.

```js
function NomeDaFuncaoDefinida() {
    // escreva seu código aqui
}

module.exports = NomeDaFuncaoDefinida;
```

## Validando os exercícios

Com o prompt de comando aberto em cada diretório, você pode executar os exercícios com o comando:

> node index.js

Para validar todos os exercícios, na pasta src, você pode executar o comando:

> npm test

Para validar somente o exercício de pasta específica, no prompt de comando, na pasta src, você pode executar o comando:

> npm test 02\ImparOuPar
