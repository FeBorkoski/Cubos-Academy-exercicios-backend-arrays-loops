const letras = ["A", "e", "B", "C", "E", "z"];

let letraE = 0;

for (let letra of letras) 
{
    if (letra === "e" || letra === "E") {
        letraE++;
    }
}
if (letraE === 0) {
    console.log('Não há nenhuma letra "E" ou "e" no array');
} 
else if (letraE > 0) {
    console.log(`Há ${letraE} letras "e" ou "E"`);
}