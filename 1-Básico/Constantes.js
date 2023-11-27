const pi = 3.1415; //não podem ser alteradas durante o código
// a constante deve ser criada e inicializada ao mesmo tempo 

console.log(pi * 2); 
const nome = "João"; 
console.log(nome, "é feio"); 
console.log(typeof nome); 
console.log(typeof pi);

//EXERCÍCIO

const nomeCompleto = "Otávio Miranda"; 
let idade = 30; 
let peso = 84; 
const altura = 1.8; 
let imc = peso / (altura * altura); 
let anoNascimento = 2023 - idade; 


console.log(nomeCompleto, "tem", idade, "anos, pesa", 84, "kg", "tem", altura, "de altura e seu IMC é de", imc);
console.log(nomeCompleto, 'nasceu em', anoNascimento);

//Outra Forma 
console.log("=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=--=-=-=-=-==-=-=-=-="); 

//Usando templates 
console.log(`${nomeCompleto} tem ${idade} anos e pesa ${84} kg tem ${altura} de altura e seu IMC é de ${imc}`)






