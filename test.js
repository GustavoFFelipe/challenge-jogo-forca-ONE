let tabuleiro = document.getElementById('forca').getContext('2d')
  function desenharForca(){
    // Linha maior vertical
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.beginPath()
    tabuleiro.moveTo(300,100);
   tabuleiro.lineTo(300, 370);
   tabuleiro.stroke()
tabuleiro.closePath()
// linha horiontal
tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.beginPath()
    tabuleiro.moveTo(300,100);
   tabuleiro.lineTo(400, 100);
   tabuleiro.stroke()
tabuleiro.closePath()
// Linha menor vertical tabuleiro
tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.beginPath()
    tabuleiro.moveTo(400,100);
   tabuleiro.lineTo(400, 120);
   tabuleiro.stroke()
tabuleiro.closePath()
  }desenharForca()

function cabeçaBoneco(){
  tabuleiro.lineWidth = 6
      tabuleiro.lineCap = "round"
      tabuleiro.lineJoin = "round"
      tabuleiro.strokeStyle = "#0A3871"
  tabuleiro.beginPath();
  tabuleiro.arc(400, 145, 25,0, 2*Math.PI, true);
  tabuleiro.stroke();
  tabuleiro.closePath()
}
function troncoBoneco(){
  tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.beginPath()
    tabuleiro.moveTo(400,170);
   tabuleiro.lineTo(400, 250);
   tabuleiro.stroke()
  tabuleiro.closePath()
}
function braçoDireitoBoneco(){
tabuleiro.lineWidth = 6
tabuleiro.lineCap = "round"
tabuleiro.lineJoin = "round"
tabuleiro.strokeStyle = "#0A3871"
tabuleiro.beginPath()
tabuleiro.moveTo(400,200);
tabuleiro.lineTo(430, 220);
tabuleiro.stroke()
tabuleiro.closePath()
}
function braçoEsquerdoBoneco(){
tabuleiro.lineWidth = 6
tabuleiro.lineCap = "round"
tabuleiro.lineJoin = "round"
tabuleiro.strokeStyle = "#0A3871"
tabuleiro.beginPath()
tabuleiro.moveTo(400,200);
tabuleiro.lineTo(370, 220);
tabuleiro.stroke()
tabuleiro.closePath()
}
function pernaDireitaBoneco(){
  tabuleiro.lineWidth = 6
  tabuleiro.lineCap = "round"
  tabuleiro.lineJoin = "round"
  tabuleiro.strokeStyle = "#0A3871"
  tabuleiro.beginPath()
  tabuleiro.moveTo(400,250);
  tabuleiro.lineTo(420, 320);
  tabuleiro.stroke()
  tabuleiro.closePath()
}
function pernaEsquerdaBoneco(){
tabuleiro.lineWidth = 6
tabuleiro.lineCap = "round"
tabuleiro.lineJoin = "round"
tabuleiro.strokeStyle = "#0A3871"
tabuleiro.beginPath()
tabuleiro.moveTo(400,250);
tabuleiro.lineTo(380, 320);
tabuleiro.stroke()
tabuleiro.closePath()
}


























/*

let palavras = ['CASA', 'CAMELO', 'HORIZONTE', 'FORTE', 'VERMELHO', 'ZEBRA', 'ASFALTO', 'LUA', 'SOL', 'NUVEM', 'ARVORE', 'HOJE', 'ONTEM', 'AMANHA','FLOR', 'PLANTA', 'ANIMAl', 'NUMERO', 'CAVALEIRO', 'DAMA', 'SOLDADO', 'XADREZ', 'ESQUILO', 'FOCA', 'PIRATA'];
let tabuleiro = document.getElementById('forca').getContext('2d')
let letras = [];
let palavraCorreta ='';
let erros = 9;
// função para escolher palavras secretas
function escolherPalavraSecreta(){
  let palavra = palavras[Math.floor(Math.random()*palavras.length)];
  secretaPalavra = palavra;
  console.log(palavra)
  return palavra
}
// função para escrever os traços no canvas
function escreverTracinhos(){
  tabuleiro.lineWidth = 6
  tabuleiro.lineCap = "round"
  tabuleiro.lineJoin = "round"
  tabuleiro.strokeStyle = "#0A3871"
  tabuleiro.beginPath()
   let eixo = 600/secretaPalavra.length
   for(let i = 0; i < secretaPalavra.length; i++){
     tabuleiro.moveTo(500+(eixo*i), 640)
     tabuleiro.lineTo(550+(eixo*i), 640)
   };
tabuleiro.stroke()
tabuleiro.closePath()
} escreverTracinhos(escolherPalavraSecreta())

function escreverLetraCorreta(index){
      tabuleiro.font = "bold 52px Poppins"
      tabuleiro.lineWidth = 6
      tabuleiro.lineCap = "round"
      tabuleiro.lineJoin = "round"
      tabuleiro.strokeStyle = "#0A3871"
      let eixo = 600/secretaPalavra.length;
      tabuleiro.fillText(secretaPalavra[index], 505+(eixo*index), 620)
      tabuleiro.stroke()
}
function escreverLetraIncorreta(letra, errorsLeft){
  tabuleiro.font = "bold 40px Poppins"
  tabuleiro.lineWidth = 6
  tabuleiro.lineCap = "round"
  tabuleiro.lineJoin = "round"
  tabuleiro.strokeStyle = "#0A3871"
  tabuleiro.fillText(letra, 535+(40*(10-errorsLeft)),710,40)
}

function verificarLetraCorreta(key){
      if(letras.length < 1 || letras.indexOf(key) < 0){
        console.log(key)
        letras.push(key)
        return false
      } else{
        letras.push(key.toUpperCase())
        return true
      }
}

function adicionarLetraCorreta(i){
    palavraCorreta += secretaPalavra[i].toUpperCase()
}
function adicionarLetraIncorreta(letter){
  if(secretaPalavra.indexOf(letter) <= 0){
    erros -= 1
  }
}
document.onkeydown = (e) => {
    let letra = e.key.toUpperCase()
    if(!verificarLetraCorreta(e.key)){
      if(secretaPalavra.includes(letra)){
        adicionarLetraCorreta(secretaPalavra.indexOf(letra))
        for(let i = 0; i < secretaPalavra.length; i++){
          if(secretaPalavra[i] === letra){
            escreverLetraCorreta(i)
          }
        }
      }
    }
    else {
        if(!verificarLetraCorreta(e.key)) 
        return
        adicionarLetraIncorreta(letra)
        escreverLetraIncorreta(letra, erros)
    }
}
*/