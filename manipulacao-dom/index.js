/*
  1 - Escrever um texto no parágrafo.
*/
const single = document.querySelector('p');
single.innerText = 'Lorem ipsum dloror';
/*
  2 - Adicionar um item na lista
*/
const ul = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerText = 'PHP/Laravel';
ul.appendChild(newLi);
/*
  3 - Botão de Reset e esconder ele.
*/
//const btn = document.querySelectorAll('button')[1];
const btn = document.querySelector('button[type="reset"]');
btn.style.display = 'none';
/*
  4 - Um evento ao clicar no botão "Botão"
*/
const eventBtn = document.querySelector('button[type="button"]');
eventBtn.addEventListener('click', function () {
  alert('Eduardo manja!');
})

