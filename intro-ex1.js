const nomeDePaises = ['Brasil', 'Argentina', 'Irlanda', 'Alemanha', 'Bolivia'];

nomeDePaises.push('Colombia');

console.log(nomeDePaises)

nomeDePaises.pop('Colombia');

console.log(nomeDePaises)

nomeDePaises.unshift('Canada');

console.log(nomeDePaises)

nomeDePaises.shift('Canada')

console.log(nomeDePaises)

const ultimoPais = nomeDePaises[nomeDePaises.length - 1];
console.log(ultimoPais)

console.log(nomeDePaises[1])