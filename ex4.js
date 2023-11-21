const palavra = 'Gabriela';

let encontrado = false;
let quantidade = 0;

for (let letra of palavra) {
    if (letra === 'a') {
        encontrado = true;
        quantidade++
    }
}
console.log(quantidade);




