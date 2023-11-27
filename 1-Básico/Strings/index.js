const nome = window.prompt("Digite o seu nome: "); 
window.document.write("Alguma coisa"); // só para mostrar 
document.body.innerHTML = 'Qualquer coisa <br />';//seleciona tudo dentro do body e pode alterar
//some com o que tem e reescreve
document.body.innerHTML += 'Escrever <br />'; //agora vou incrementar 
//tudo quebra a linha 
document.body.innerHTML += `O seu nome é ${nome} <br />`;
document.body.innerHTML += `O seu nome tem ${nome.length} letras <br />`; 
document.body.innerHTML += `A segunda letra do seu nome é ${nome.charAt(2)} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${nome.indexOf('a')} <br />`; 
document.body.innerHTML += `Qual o último indíce da letra a no seu nome? ${nome.lastIndexOf('a')} <br />`; 
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}  <br />`; 
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')[-1]} <br />`; 
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toLowerCase()} <br />`; 
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toUpperCase()} <br />`; 



