"use strict";
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
let mensagem = "Olá TypeScript!";
let numero = 1;
// Tipagem por inferência
let isTrue = true;
// Type Union
// Para tipar um array, basta colocar [] no fim do tipo.
let data = undefined;
data = ['Amar o próximo como a ti mesmo.'];
const requestVerse = async (cap, ver) => {
    try {
        const resposta = await fetch(`https://www.abibliadigital.com.br/api/verses/nvi/gn/${cap}/${ver}`);
        const versiculo = await resposta.json();
        return versiculo.text;
    }
    catch (error) {
        console.error(error);
    }
};

requestVerse(1, 1);
