let livros = [];

// fetch('https://www.abibliadigital.com.br/api/books')
//   .then((resposta) => {
//     if(resposta.status !== 200) {
//       throw new Error('Requisição não retornou OK.');
//     }
//     return resposta.json();
//   })
//   .then((dados) => {
//     livros = dados;
//     console.log(livros);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

// async function requestBible () {
//   try {
//     const resposta = await fetch('https://www.abibliadigital.com.br/api/books');
//     if(resposta.status !== 200) {
//       throw new Error('Requisição não retornou OK.');
//     }
//     const dados = await resposta.json();
//     const nomes = dados
//       .filter((livro) => livro.testament === "VT")
//       .map((livro) => livro.name);
//     console.log(nomes);
//   } catch(error) {
//     console.error(error.message);
//   }
// }

// requestBible();

const controller = new AbortController();
const signal = controller.signal;

const requestVerse = async (cap = 1, ver = 1) => {
  try {
    const resposta = await fetch(`https://www.abibliadigital.com.br/api/verses/nvi/gn/${cap}/${ver}`);
    const versiculo = await resposta.json();
    console.log(cap, ver);
    return versiculo.text;
  } catch(error) {
    console.error(error.message);
  }
};

setTimeout(() => {
  controller.abort();
}, 2000);

/*
  Para serviços de falha:
  - Adicione em uma tabela temporária, com o máximo de dados possíveis
  - Usando um CRON JOB ou Scheduler, executaria as operações falhas
  - Emitiria e-mails de notificação para monitoramento
*/

const primeiroVer = requestVerse(1, 1); // Certo
const segundoVer = requestVerse(1, 2); // Certo
const terceiroVer = requestVerse(1, 3); // Errado
const quartoVer = requestVerse(1, 4); // Certo
const quintoVer = requestVerse(-1, 5); // Certo

const array = [primeiroVer, segundoVer, terceiroVer, quartoVer, quintoVer];
Promise.all(array).then((data) => {
  data.forEach((ver) => {
    if(ver !== undefined) {
      const p = document.createElement('p');
      p.innerText = ver;
      document.body.appendChild(p);
    }
  });
});