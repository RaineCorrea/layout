function resposta_questao_4(matriz) {
  let anosTrabalhados = {};

  // Iterar sobre cada entrada na matriz
  matriz.forEach((entrada) => {
    let inicioTrabalho = entrada[0];
    let aposentadoria = entrada[1];

    // Iterar sobre todos os anos entre inicioTrabalho e aposentadoria
    for (let ano = inicioTrabalho; ano <= aposentadoria; ano++) {
      if (anosTrabalhados[ano]) {
        anosTrabalhados[ano]++;
      } else {
        anosTrabalhados[ano] = 1;
      }
    }
  });

  // Encontrar o ano com mais pessoas trabalhando
  let maxPessoas = Math.max(...Object.values(anosTrabalhados));
  let anosMaisTrabalhadores = Object.keys(anosTrabalhados).filter(
    (ano) => anosTrabalhados[ano] === maxPessoas
  );

  return anosMaisTrabalhadores;
}

// Exemplo de uso
let matrizExemplo = [
  [1960, 2005],
  [1945, 2008],
  [1938, 1999],
];
console.log(
  "Ano com mais pessoas trabalhando:",
  resposta_questao_4(matrizExemplo)
);
