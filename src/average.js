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

function funSum(notError, sum, index, array) {
  if (array.length === 0 || array.length !== index) {
    if (typeof array[index] === 'number') {
      sum += array[index];
    } else {
      notError = false;
    }
  }
}

const average = (array) => {
  let sum = 0;
  let result;
  let notError = true;
  for (let index = 0; index <= array.length; index += 1) {
    funSum(notError, sum, index, array);
  }
  if (notError) {
    result = sum / array.length;
    result = result.toFixed(0);
    result = Number(result);
  }
  return result;
};

module.exports = average;
