const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];


while (filaDeDentro.length < 5) 
{
   const primeiraFora = filaDeFora.shift();
    if (primeiraFora === undefined) break;
    
    filaDeDentro.push(primeiraFora);
    
}
console.log(filaDeDentro);
console.log(filaDeFora);

