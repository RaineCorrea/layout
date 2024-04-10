function resposta_questao_3(str) {
  const pilha = [];

  const pares = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  for (let i = 0; i < str.length; i++) {
    const caractere = str[i];
    if (caractere === "[" || caractere === "{" || caractere === "(") {
      pilha.push(caractere);
    } else {
      const ultimoAberto = pilha.pop();
      if (caractere !== pares[ultimoAberto]) {
        return false;
      }
    }
  }

  return pilha.length === 0;
}

console.log(resposta_questao_3("{[()(){}[]]{}}")); // true
console.log(resposta_questao_3("{[(()]}")); // false
console.log(resposta_questao_3("{}[]()")); // true
console.log(resposta_questao_3("((){}[[])")); // false
console.log(resposta_questao_3("[{}([)]]")); // false

{
  `

A função resposta_questao_3 verifica se uma sequência de parênteses, colchetes e chaves em uma string é válida.
O algoritmo utiliza uma pilha para rastrear os caracteres de abertura encontrados e,
em seguida, verifica se os caracteres de fechamento correspondem ao último caractere de abertura encontrado.
Se a sequência for válida, a função retorna true, caso contrário, retorna false.

  `;
}
