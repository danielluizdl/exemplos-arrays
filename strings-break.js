const palavra = 'Alemanha';

let encontrado = false

for (let letra of palavra) {
    if (letra === 'h') {
        console.log('Tem a Letra H');
        encontrado = true;
        break;
    }
}
if (!encontrado) {
    console.log('nao tem H')
}
