function resposta_questao_2(array) {
  // Cria um objeto para contar cada número no array
  const obj = {};
  // Array para armazenar os números repetidos
  const repetidos = [];

  // Itera sobre o array
  for (let num of array) {
    // Se o número já estiver no objeto, significa que é repetido
    if (obj[num]) {
      // Se ainda não estiver no array de números repetidos, adiciona
      if (!repetidos.includes(num)) {
        repetidos.push(num);
      }
    } else {
      // Caso contrário, registra o número
      obj[num] = 1;
    }
  }

  return repetidos;
}

// Exemplo de uso
const inputArray = [4, 5, 44, 98, 4, 5, 6, 7];
console.log(resposta_questao_2(inputArray)); // Output: [4, 5]
