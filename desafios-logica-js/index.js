const hof = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//forEach
//É um for normal, mas sem precisar criar o contador
//Essa função não retorna nada (undefined).
//Casos de Uso: Manipulação de DOM, criação de eventos e operações de CSS.
let sum = 0;
hof.forEach((elemento, index) => {
  sum = sum + elemento;
});

//map
//A hof mais famosa do JS, largamente utilizada no React e similares
//Retorna um array com os resultados.
//O Map sempre retorna a mesma quantidade de elementos do array
//Casos de uso: Tratamento de resultados (decimais), manipulação de listas (React)
const newValues = hof.map((elemento, index) => {
  return elemento ** index;
});

//some
// Um IF (OU) para vários elementos de um array
// Retornam booleano
//Caso de uso: Validação de formulário
const some = hof.some((elemento) => {
  return (elemento > 10 && elemento < 5);
});

//every
// Um IF (E) para vários elementos de um array
// Retornam booleano
//Caso de uso: Validação de formulário
const every = hof.every((elemento) => {
  return (elemento > 10 && elemento < 5);
});

//find
// Retorna um elemento que se enquadre na minha regra
// Elementos específicos, que eu irei validar a existência
const find = hof.find((elemento) => {
  return elemento % 2 === 0;
});

//filter
// Retorna um array de elementos que se enquadram na minha regra
// Múltiplos elementos que precisam ser tratados.
// Caso a função não tenha parenteses e seja de uma linha, o return é subentendido.
const filter = hof.filter((elemento) => elemento % 2 === 0);

//reduce
// Retornar um único resultado de todo o array.
// Caso de uso: Operação matemática
const reduce = hof.reduce((acc, atual) => acc + atual, 0);
//sort
//O sort é um método de ordenação similar ao BubbleSort.
//Aplica mutação: Altera o valor original.
const confuso = [5, 3, 1, 0, 9, 7, 8, 6];
confuso.sort((a, b) => b - a);

const isEven = (number) => {
  return (number % 2 === 0) ? 'Par' : 'Ímpar';
}

function calcFatorial (number) {
  if(number === 1) {
    return number;
  }
  return number * calcFatorial(number - 1);
}
console.log(calcFatorial(3));

function filterNumber(numbers) {
  const par = numbers.filter((i) => i % 2 === 0);
  const impar = numbers.filter((i) => i % 2 === 1); 
  console.log(par);
  console.log(impar);
}

filterNumber(confuso);

const sorteio = Math.floor(Math.random() * 10);
console.log(sorteio);
