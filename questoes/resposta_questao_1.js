function resposta_questao_1(numero) {
  const digitos = Array.from(String(numero), Number);

  // Verificar ordem crescente
  let ordemCrescente = true;
  for (let i = 0; i < digitos.length - 1; i++) {
    if (digitos[i] > digitos[i + 1]) {
      ordemCrescente = false;
      break;
    }
  }

  // Verificar ordem decrescente
  let ordemDecrescente = true;
  for (let i = 0; i < digitos.length - 1; i++) {
    if (digitos[i] < digitos[i + 1]) {
      ordemDecrescente = false;
      break;
    }
  }

  if (ordemCrescente) {
    return "Está ordenado (crescente)";
  } else if (ordemDecrescente) {
    return "Está ordenado (decrescente)";
  } else {
    return "Não está ordenado";
  }
}

// Exemplos de uso
console.log(resposta_questao_1(12345678)); // Está ordenado (crescente)
console.log(resposta_questao_1(1223455678)); // Está ordenado (crescente)
console.log(resposta_questao_1(876543210)); // Está ordenado (decrescente)
console.log(resposta_questao_1(152456457)); // Não está ordenado
console.log(resposta_questao_1(12356789)); // Não está ordenado
console.log(resposta_questao_1(13579)); // Não está ordenado
console.log(resposta_questao_1(9765421)); // Não está ordenado
console.log(resposta_questao_1(123454321)); // Não está ordenado
console.log(resposta_questao_1(12222222)); // Está ordenado (crescente)
console.log(resposta_questao_1(2111111)); // Está ordenado (crescente)
console.log(resposta_questao_1(1599)); // Não está ordenado

{
  `

1- A função resposta_questao_1 recebe um número como parâmetro.

2- Em seguida, converte esse número em um array de dígitos usando o método Array.from e String(numero), que converte o número em uma string, e Number, que converte cada caractere dessa string de volta para um número. Isso resulta em um array chamado digitos que contém os dígitos do número.

3- A função então verifica se os dígitos estão em ordem crescente. Isso é feito através de um loop for que percorre o array de dígitos. Se, um dígito for maior que o próximo dígito, a variável ordemCrescente é definida como false e o loop é interrompido com break.

4- Em seguida, a função verifica se os dígitos estão em ordem decrescente de maneira semelhante ao passo anterior.

5- Depois de verificar a ordem crescente e decrescente dos dígitos, a função retorna uma mensagem indicando se os dígitos estão em ordem crescente, em ordem decrescente ou se não estão ordenados.

`;
}
