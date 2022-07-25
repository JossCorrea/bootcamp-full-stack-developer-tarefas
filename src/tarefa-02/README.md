# Tarefa 02 - Criando funções

## O que são funções

Uma função é um procedimento, um conjunto de instruções que executa uma tarefa, calcula um valor ou realiza alguma ação.
Elas são definidas em JavaScript através da palavra-chave `function`.

Sua sintaxe consiste em:
    - nome da função;
    - argumentos (opcionais);
    - ação entre `{ }` - podendo conter ou não um retorno.

```js
function MinhaFuncao(meuParametro) {
    return meuParametro
}
```

A função acima nomeada não é executada automaticamente, para chamar a função, faça:

```js
MinhaFuncao(10)
```

Para saber mais, acesse: 

- [Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
- [Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)

## Antes de iniciar os exercícios

Antes de iniciar os exercícios, lembre-se de ter configurado os itens mencionados no arquivo de SETUP.md. 

Abra o terminal de comando na pasta no repositório clonado e execute o comando:

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

### Rodando o exercício

Com o prompt de comando aberto no diretório 02, você pode executar os exercícios com o comando:

> node index.js

### Executando os testes

Para validar todos os exercícios, na pasta src, você pode executar o comando:

> npm test

Para validar somente o exercício de pasta específica, no prompt de comando, na pasta src, você pode executar o comando:

> npm test 02\FuncaoComParametro

## Criando a solução para o exercício

Para validar os conteúdos apresentados, criamos três exercícios: ColocandoEmPratica, FuncaoComParametro, HelloWorld.
Esses exercícios tem como objetivo colocar em prátoca as declarações de variáveis, a criação de funções com e sem parâmetro e como chamar as funções.
