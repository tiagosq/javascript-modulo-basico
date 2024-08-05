/*
  1 - npm init -y
  2 - npm install --save-dev typescript
  3 - Criando o arquivo tsconfig.json (Segue o modelo)
  4 - Criar as pastas de saída e de código (dist e src).
  5 - Após escrever o código, compile com o npx tsc

  - Usar o Vite
  1 - npm create vite@latest
*/

// Tipagem declarada
let mensagem: string = "Olá TypeScript!";
let numero = 1;
// Tipagem por inferência
let isTrue = true;

// Type Union
// Para tipar um array, basta colocar [] no fim do tipo.
let data: undefined | string[] = undefined;
data = ['Amar o próximo como a ti mesmo.'];

type RespostaDaAPI = {
  book: {
    abbrev: {
      pt: string;
      en: string; // É valor opcional.
      // Optional Chaining - Não dispara erros caso o valor não exista
      // versiculo.book.abbrev.en?.length;
      // Total optativo (quando eu nem sei qual o nome pode vir).
      [key: string]: string;
    };
    name: string;
    author: string;
    group: string;
    version: string;
  };
  chapter: number;
  number: number;
  text: string;
}


const requestVerse = async (cap: number, ver: number): Promise<string> => {
  let versiculo = {} as RespostaDaAPI;
  try {
    const resposta: Response = await fetch(`https://www.abibliadigital.com.br/api/verses/nvi/gn/${cap}/${ver}`);
    versiculo = await resposta.json();
  } catch(error) {
    console.error(error);
  }
  return versiculo.text;
};