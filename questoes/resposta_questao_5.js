function resposta_questao_5(numeroDePessoas) {
  // Caso especial: se o número de pessoas for menor ou igual a 1, só há uma maneira de organizar
  if (numeroDePessoas <= 1) {
    return 1;
  }

  // Calcula o fatorial do número de pessoas
  let modosDistintos = 1;
  for (let i = 2; i <= numeroDePessoas; i++) {
    modosDistintos *= i;
  }

  return modosDistintos;
}

// Exemplo de uso
const numeroDePessoas = 5;
console.log(
  "Número de modos distintos: " + resposta_questao_5(numeroDePessoas)
);
