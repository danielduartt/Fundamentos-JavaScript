let umaString = "texto"; 
console.log(umaString); 
// Strings são indexadas é um array. Iniciando do 0 
console.log(umaString[4]); 
console.log(umaString.charAt(4)); //elemento da posição 4
console.log(umaString.concat(" em um lindo dia!")); //concatena as strings 
console.log(`${umaString} em um lindo dia`);
console.log(umaString.indexOf('tex')); //pesquisando por um indíce 
//em qual indice começa a string tex 
let novaString = "Um texto"; 
console.log(novaString.indexOf('o', 3)); //começa da posição 3 
//retorna -1 caso não encontre 

//usando expressões regulares 
console.log(novaString.match(/[a-z]/g)); //retorna os valores em minúsculo 
console.log(umaString.replace(/Um/, 'utro')); 
console.log(novaString.length); 

umaString = "O rato roeu a roupa do rei de roma."; 
//slice
console.log(umaString.slice(2,6)); 
console.log(umaString.slice(-3)); 
console.log(umaString.slice(-5, - 1)); 

//Dividindo a string por um character 

console.log(umaString.split(' ')); // pelo espaço 
console.log(umaString.split(' ', 2)) //limitando a quantidade de vezes que isso acontece 
console.log(umaString.split('r', 2)); 





