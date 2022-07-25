# Comandos condicionais

## Contexto

Assim como em nossas vidas em que tomamos diferentes caminhos em nossas escolhas ou decisões, o nosso código não foge a regra. Transformamos em linhas de código as regras estabelecidas para diferentes cenários, contextos e processamentos. Isso significa que podemos transformar nosso código em condições. No Brasil, em sua grande maioria, permitimos que uma pessoa possa ter carteira de motorista a partir dos 18 anos. Caso contrário, ela não está apta para realizar as aulas.

```js
if (condicao) {
    // caso a condicao seja verdadeira, esse bloco sera executado
} else {
    // caso contrário, esse bloco será executado
}
```

```js
function PodeDirigir(idade) {
    if (idade >= 18) {
        // caso a condicao seja verdadeira, esse bloco sera executado
        return "Habilitado"
    } else {
        return "Não Habilitado"
    }
}
```

Para saber mais, acesse:

- [Condicionais](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Instruções switch](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals#instru%C3%A7%C3%B5es_switch)

## Colocando em prática

Para colocar o contexto acima em prática, temos uma lista de exercícios na pasta 02 para exercitar os comandos condicionais. Você pode utilizar as instruções if, else, switch, ternários para resolvê-los.
