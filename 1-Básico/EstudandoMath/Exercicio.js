const num = Number(prompt("Digite um número")); //sempre retorna como string, por isso puxo o Number
const num_titulo = document.getElementById("numero-titulo"); 
const text = document.getElementById("texto"); 
num_titulo.innerHTML = num; 
text.innerHTML += `<p>O seu número + 2 é ${num + 2}</p>`; 
text.innerHTML += `<p>${num.toFixed(2)} é inteiro? => ${Number.isInteger(num)}</p>`; 
text.innerHTML += `<p>É Nan? => ${Number.isNaN(num)}</p>`; 
text.innerHTML += `<p>Arredondando para cima => ${Math.ceil(num)}</p>`; 
text.innerHTML += `<p>Arredondando para baixo => ${Math.floor(num)}</p>`; 
text.innerHTML += `<p>Com duas casas decimais =>${num.toFixed(2)}</p>`; 
text.innerHTML += `<p>A raiz quadrada é ${Math.sqrt(num)}</p>`; 
