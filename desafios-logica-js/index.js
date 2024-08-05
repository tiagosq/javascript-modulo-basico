const hof = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//forEach
//É um for normal, mas sem precisar criar o contador
//Essa função não retorna nada (undefined).
//Casos de Uso: Manipulação de DOM, criação de eventos e operações de CSS.
let sum = 0;
hof.forEach((elemento, index) => {
  sum = sum + elemento;
});
console.log(sum);

//map
//A hof mais famosa do JS, largamente utilizada no React e similares
//Retorna um array com os resultados.
//O Map sempre retorna a mesma quantidade de elementos do array
//Casos de uso: Tratamento de resultados (decimais), manipulação de listas (React)
const newValues = hof.map((elemento, index) => {
  return elemento ** index;
});
console.log(newValues);

//some
// Um IF (OU) para vários elementos de um array
// Retornam booleano
//Caso de uso: Validação de formulário
const some = hof.some((elemento) => {
  return (elemento > 10 && elemento < 5);
});
console.log(some);

//every
// Um IF (E) para vários elementos de um array
// Retornam booleano
//Caso de uso: Validação de formulário
const every = hof.every((elemento) => {
  return (elemento > 10 && elemento < 5);
});
console.log(every);

//find
// Retorna um elemento que se enquadre na minha regra
// Elementos específicos, que eu irei validar a existência
const find = hof.find((elemento) => {
  return elemento % 2 === 0;
});
console.log(find);

//filter
// Retorna um array de elementos que se enquadram na minha regra
// Múltiplos elementos que precisam ser tratados.
// Caso a função não tenha parenteses e seja de uma linha, o return é subentendido.
const filter = hof.filter((elemento) => elemento % 2 === 0);
console.log(filter);

//reduce
// Retornar um único resultado de todo o array.
// Caso de uso: Operação matemática
const reduce = hof.reduce((acc, atual) => acc + atual, 0);
console.log(reduce);

//sort
//O sort é um método de ordenação similar ao BubbleSort.
//Aplica mutação: Altera o valor original.
const confuso = [5, 3, 1, 0, 9, 7, 8, 6];
confuso.sort((a, b) => b - a);
console.log(confuso);
