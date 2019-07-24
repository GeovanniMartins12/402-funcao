// let compras = ['salgadinho', 'coca-cola', 'chocolate','alcaxofra','pepino'];

// console.log(compras);
// //ADICIONAR NA ULTIMA POSICAO
// compras.push("cebola");
// console.log(compras);
// //REMOVER O ULTIMO ELEMENTO
// compras.pop();
// console.log(compras);
// //ADICIONAR ELMENTO NA PRIMEIRA POSICAO
// compras.unshift("papel higienico");
// console.log(compras);
// //REMOVER O PRIMEIRO ELEMENTO
// compras.shift();
// console.log(compras);]


// function somar(num1, num2){
//     return num1 + num2;
// }

// console.log(somar(15,12));
// console.log(somar(25,10));

// alert(somar(10,184));

// let casa = [{nome:'Lucas'},
//            {sobrenome: 'Melo'}]

// function somar(a,b){
//     return a+b;
// }
// //ARROW FUNCTION
// somar = (a,b) =>{
//     return a+b
// }

// let casa = {
//     cozinha: ["geladeira","fogao"],
//     banheiro: ["chuveiro", "shampoo"]
// }
// console.log(casa.banheiro);


// D.O.M.

// let corpo = document.querySelector("body");
// let botao = document.querySelector("button");

// function trocarCor(){
//     corpo.style.backgroundColor = "limegreen";
// }

// botao.onclick = trocarCor;
// let corpo = document.querySelector("body");
// let botoes = document.querySelectorAll("button");
// let imagem = document.querySelector("img");


// function trocarCor(){
//     corpo.style.backgroundColor = "limegreen";
// }

// function trocarTexto(){
//     botoes[1].innerHTML = "Faz um OH ai ";
// }

// function trocarBg(){
//     if(this.style.backgroundColor == "magenta"){
//         this.style.backgroundColor = "blue";
//     }
//     else{
//         this.style.backgroundColor="magenta";
//     }
// }

// function trocarFoto(){
//     imagem.src = "http://placekitten.com/500/500";
// }

// botoes[0].onclick = trocarBg;
// botoes[1].onclick = trocarBg;

// botoes[2].onclick = trocarFoto;

// let botoes = document.querySelectorAll("button");

// function trocarMeuBg(){
//     if(this.style.backgroundColor == "magenta"){
//         this.style.backgroundColor = "limegreen";
//     }
//     else{
//         this.style.backgroundColor="magenta";
//     }
// }

// for(let botao of botoes){
//     botao.onclick = trocarMeuBg;
// }

let inputEmail = document.querySelector("#inputEmail");
let inputSenha = document.querySelector("#inputSenha");
let resposta = document.querySelector("p");
let botao = document.querySelector("button");

let usuarios = [
    {email: "lili", senha:123},
    {email: "jube", senha:123},
    {email: "caca", senha:123}
];

function validarLogin(){
    for(let nomem of usuarios){
        if(inputEmail.value == nomem.email && inputSenha.value == nomem.senha){
            resposta.innerHTML = "Login Aprovado";
            resposta.style.color = "blue";
            resposta.style.border = "2px blue solid"; 
	    return;
        }
        else{
            resposta.innerHTML = "Login Inválido";
            resposta.style.color = "red";
            resposta.style.border = "2px red dotted";
        }
    }
}

botao.onclick = validarLogin;


// for(let filme of filmes){
//     if(idade>=filme.classificaçao){
//         console.log(`${nome}, você pode assistir ${filme.nome}`);
//     }
// }


