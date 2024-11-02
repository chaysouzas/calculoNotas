let interacaoUsuario = document.querySelector('input#clicar')
interacaoUsuario.addEventListener('click', clicar) 

/*Declarar variavel de interação, incluir evento de click para o botão "calcular"   */

/*Atribuindo variaveis aos inputs*/

function calcularSituacao(){

let nota1 = Number(document.querySelector('input#prova01').value);
let nota2 = Number(document.querySelector('input#prova02').value);
let nota3 = Number(document.querySelector('input#prova03').value);
let nota4 = Number(document.querySelector('input#trab1').value);
let nota5 = Number(document.querySelector('input#trab2').value);

let mediaGeral = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
    
let resultadoGeral = document.getElementById('resposta');
resposta.innerHTML = 
    `
    <p>Média Geral: ${mediaGeral.toFixed(1)} </p>

    `;

 
/*Exibir Resultado Aprovação*/

let resultadoFinal = document.getElementById('resultadoFinal'); //declarar variavel com resultado final antes da condição

if (mediaGeral < 6){
    resultadoFinal.innerHTML = '<p>Sua média ficou abaixo do esperado. Resultado final: Reprovado(a).</p>';      
} else if (mediaGeral >= 6 && mediaGeral <= 7){
    resultadoFinal.innerHTML = '<p>Sua média ficou abaixo de 7.0, você está em recuperação.</p>'; 
} else{
    resultadoFinal.innerHTML = '<p>Parabéns! Você atingiu a média esperada e está APROVADO (a)!</p>'; 
}

}


