const numeros = [54, 22, 14, 10, 284];

let contemDez = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        console.log(`O número 10 está na posição ${i}`);
        contemDez = true;
    }
}

if (!contemDez) {
    console.log(-1);
}