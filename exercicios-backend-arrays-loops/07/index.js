const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const inicialA = [];
for (let nome of nomes) {
    if (nome[0] === "a" || nome[0] === "A") {
        inicialA.push(nome);
    }
}
console.log(inicialA);