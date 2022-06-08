
  const showGame = document.getElementById('start-game');
  const showButton = document.getElementById('first-page');
  const showAddWord = document.getElementById('addWord');

  let palavras = ['CASA', 'CAMELO', 'HORIZONTE', 'FORTE', 'VERMELHO', 'ZEBRA', 'ASFALTO', 'LUA', 'SOL', 'NUVEM', 'ARVORE', 'HOJE', 'ONTEM', 'AMANHA','FLOR', 'PLANTA', 'ANIMAl', 'NUMERO', 'CAVALEIRO', 'DAMA', 'SOLDADO', 'XADREZ', 'ESQUILO', 'FOCA', 'PIRATA'];
  let tabuleiro = document.getElementById('forca').getContext('2d')
  let letras = [];
  let palavraCorreta ='';
  let erros = 9;

  function desenharForca(){
    tabuleiro.moveTo(100,0);
   tabuleiro.lineTo(100, 100);
  }desenharForca()

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
     tabuleiro.moveTo(200+(eixo*i), 640)
     tabuleiro.lineTo(250+(eixo*i), 640)
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
      tabuleiro.fillText(secretaPalavra[index], 205+(eixo*index), 620)
      tabuleiro.stroke()
}
function escreverLetraIncorreta(letra, errorsLeft){
  tabuleiro.font = "bold 40px Poppins"
  tabuleiro.lineWidth = 6
  tabuleiro.lineCap = "round"
  tabuleiro.lineJoin = "round"
  tabuleiro.strokeStyle = "#0A3871"
  tabuleiro.fillText(letra, 235+(40*(10-errorsLeft)),710,40)
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

//------------------ CHange display buttons to game ------------------//
function handleShowGame() {
  if(showButton.style.display === 'flex') {
    showButton.style.display = 'none';
    showGame.style.display = 'block'
  } else {
    showButton.style.display = 'flex';
    showGame.style.display = 'none'
  }

}
handleShowGame() // add only for test a bug that I try to solve

//-----------------adding new words to array ----------------//
function addNewWord(){
  const newWord = document.getElementById('text-area').value.toLocaleUpperCase('PT-BR');

  if( newWord !== ""){
    secretWords.push(newWord);
  } else{
    alert('Please some word')
  }
  console.log(newWord)
  handleAddWord()
}

//-------------------- back to the buttons display(main) ----------------///
function backDisplay(){
  newGame()
  if(showButton.style.display === 'flex') {
    showButton.style.display = 'none';
    showGame.style.display = 'block'
  } else {
    showButton.style.display = 'flex';
    showGame.style.display = 'none'
  }
}

//----------------- Handle with display functions to cancel the  adding word------------------//
function handleAddWord(){
  const newWord = document.getElementById('text-area').value
  if(showAddWord.style.display === 'block' &&  newWord !== ""){
    showAddWord.style.display = 'none';
    showButton.style.display = 'flex'
  } else {
    showButton.style.display = 'none';
    showAddWord.style.display = 'block'
  }

}

//------------------Function for new game -------------*/
function newGame(){
  document.location.reload(true);
}

//--------------------------Canvas Script ---------------------------//

function drawErrorCanvas(){
const tabuleiro = document.getElementById("forca").getContext('2d');;

tabuleiro.lineWidth = 6
tabuleiro.lineCap = "round"
tabuleiro.lineJoin = "round"
tabuleiro.strokeStyle = "#0A3871"
tabuleiro.beginPath()
 if(erros === 9 ){
  
 }
tabuleiro.stroke()
tabuleiro.closePath()

}

