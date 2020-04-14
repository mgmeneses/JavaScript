/*var nome = "Marcelo Gomes";
var idade = 33;
//alert("Nome: " + nome + " tem: " + idade + " anos!");
console.log(nome.replace("Gomes", "Meneses"));
//alert(nome.replace("Gomes", "de Meneses Gomes"));
console.log(nome.toUpperCase());
*/
//var lista = ["Palmeiras", "Arsenal", "Portuguesa"]
//lista.pop();
//lista.push("La Corunha");
//console.log(lista[1].toUpperCase());
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));
/*var libertadores = {Time: "Palemiras", Posição: "1º"};
console.log(libertadores.Time);
*/
/*var libertadores = [{Time: "Pameiras", Posição: "1º"}, {Time:"Boca Juniors", Posição: "2º"}, {Time:"River Plate", Posição: "3º"}];
console.log(libertadores);
console.log(libertadores[0].Time);
*/
/*
var idade = prompt("Qual a sua idade?");
//var idade = 18;
if (idade >=18){
    alert("Maior de Idade!");
}else{
    alert("Menor de Idade!");
};
*/
/*
var count = 0;
while (count < 5){
    alert(count);
    count ++;
};
*/
/*
var count;
for (count =0; count < 5; count++){
    alert(count);
};
*/
/*
var d = new Date();
alert(d.getMonth());

function soma(n1, n2){
    return n1 + n2;
}
function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Digite sua Idade!");
alert(validaIdade(idade));
alert(soma(5, 10));
*/
function botao(){
    document.getElementById("clicar").innerHTML = "Obrigado por Clicar!";
    
    //alert("Obrigado por clicar!");
}
function botao2(){
    //window.open("https://github.com/mgmeneses");
    window.location.href = "https://github.com/mgmeneses";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    //alert("OK!");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui..";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui..";
}

//Evento onLoad
function load(){
    alert("Página carregada com sucesso!");
}

//Evento Onchange
function eventoChange(elemento){
    console.log(elemento.value);
}