/*
  Tipagem Fraca
  Tipagem Dinâmica
  Interpretado
  (TypeScript vem pra resolver)
*/
// Hoisting - De escopo do valor.
var nome = 30; // Global
let sobrenome = 'Quadros'; // Escopo Local
const idade = 30; // Escopo Local

// if/else - switch/case
// while, for

const array = ['Item 0', 'Item 1', 'Item 2'];

//JSON é a mesma coisa desses objetos.


function olaMundo(nome) {
  console.log('Ola ' + nome);
  console.log(`Ola ${nome}`);
}

const isPar = (numero) => {
  return (numero % 2 === 0) ? 'Par' : 'Ímpar';
}

const obj = {
  nomeDaChave: 'valorDaChave',
  isPar,
};

// olaMundo('Tiago');
// console.log(obj.isPar(2));