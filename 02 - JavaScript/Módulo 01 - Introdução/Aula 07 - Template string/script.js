let nome = 'João';
let sobrenome = 'França';

let nomeCompleto = nome + ' ' + sobrenome; /** Concatenação normal */

console.log('Nome: ' + nomeCompleto);

let nomeCompletoTemplate = `Nome: ${nome} ${sobrenome}`; /** Template String */
console.log(nomeCompletoTemplate);