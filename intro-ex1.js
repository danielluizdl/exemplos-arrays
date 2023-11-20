const nomeDePaises = ['Brasil', 'Argentina', 'Irlanda', 'Alemanha', 'Bolivia'];

// adicionando pais no final da fila
nomeDePaises.push('Colombia');

console.log(nomeDePaises)

// removendo pais no final da fila
nomeDePaises.pop('Colombia');

console.log(nomeDePaises)

// adicionando pais no inicio da fila
nomeDePaises.unshift('Canada');

console.log(nomeDePaises)

// removendo pais do inicio da fila
nomeDePaises.shift('Canada')

console.log(nomeDePaises)

// mostrando o ultimo pais da fila
const ultimoPais = nomeDePaises[nomeDePaises.length - 1];
console.log(ultimoPais)

// mostrando o segundo pais
console.log(nomeDePaises[1])

// mostrando o pais de indice 2
console.log(nomeDePaises[2])