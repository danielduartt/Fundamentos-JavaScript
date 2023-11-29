let num1 = 1; 
let num2 = 2.5; 
console.log(num1.toString() + num2); //concatenação 
console.log(typeof num1); 

//alterando pra sempre 
num1 = num1.toString(); 

//arredondando valores 
let num3 = 10.578899898930; 

console.log(num3.toFixed(4) + num2); //4 casas decimais 

console.log(Number.isInteger(num1)); //retorna true ou false

let temp = num1 * 'Ola'; //Nan 
console.log(temp); 
console.log(Number.isNaN(temp));  // se for Nan retorna true ou false 


let n1 = 0.7; 
let n2 = 0.1; 
console.log(n1 + n2); 

n1 += n2; //0.8
console.log(n1); 

n1 += n2; //0.9
n1 += n2; //1.0 
console.log(n1); //0.999999999999999999
console.log(parseFloat(n1.toFixed(2))); //1.00

