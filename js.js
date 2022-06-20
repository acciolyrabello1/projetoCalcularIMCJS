var peso = 
function calcular(){

const inputPeso = document.querySelector(peso).value;
const inputAltura = document.querySelector(altura).value;
const imcTotal = (inputPeso / (inputAltura * inputAltura)).toFixed(2);

resultado.innerHTML = <p> Seu IMC é de: <strong> ${imcTotal} </strong></p>

}