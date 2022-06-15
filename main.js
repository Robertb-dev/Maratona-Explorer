

//quando for programar JS se faça essas perguntas
//quais variaveis teremos?
//dados de entrada?
//dados de saida?

//pesquise seletor
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
"Certeza!",
"Não tenho tanta certeza.",
"É decididamente assim.",
"Mas nem pensar, não conte com isso",
"Sem dúvidas!",
"Pergunte novamente mais tarde.",
"Sim, definitivamente!",
"Minha resposta é não, seu trouxa!",
"Você pode contar com isso.",
"Melhor não te dizer agora.",
"A meu ver, sim.",
"A vozes da minha cabeça dizem que não",
"Provavelmente.",
"Não é possivel prever agora, tente novamente.",
"Perspectiva boa",
"As perspectivas não são boas.",
"As cartas revelam que sim",
"Concentre-se e pergunte novamente.",
"Sinais dos astros revelam que sim.",
]


//gerar numero aleatório
//estamos indo do 0 a total de respostas
//com resposta.length temos o total de frases que usamos
//com math.floor arredondamos o numero math random para o minimo e depois multiplicamos pelo total de respostas, no fim o número random segue sendo o random
//const totalRespostas = repostas.length
//const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

//console.log(numeroAleatorio)


//clicar em fazer pergunta
//Dessa forma apenas ao clicar em um botão iremos executar a função


function fazerPergunta() {

if(inputPergunta.value == "") {
alert("Ta com medo do que? digite sua pergunta vai")
return
}

buttonPerguntar.setAttribute("disabled", true)
const pergunta = "<div>" + inputPergunta.value + "<div>"

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random () * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

//sumir a resposta depois de 5 segundos (ou 5000 milisecundos)

elementoResposta.style.opacity = 1;

setTimeout(function() {

  elementoResposta.style.opacity = 0;
  buttonPerguntar.removeAttribute("disabled")}, 3000)

}

//50:35 ele fala do input




