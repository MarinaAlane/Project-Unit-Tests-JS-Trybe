/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const validateArrayType = (array) => {
  let validation = true;
  for (let index = 0; index < array.length; index += 1) {
    if (typeof(array[index]) === 'number' && validation !== false) {
      validation = true;
    } else {
      validation = false;
    }
  }
  return validation;
}

const validateArray = (array) => {
  if (Array.isArray(array) && array.length > 0 && validateArrayType(array)) {
    return true;
  }
  return false;
};

const average = (array) => {
  if (validateArray(array) === false) {
    return undefined;
  } else {
    let sum = 0;
    let average = 0;
    for (let index = 0; index < array.length; index += 1) {
      sum += array[index];
    }
    average = sum / array.length;
    return Math.round(average);
  }
};
module.exports = average;