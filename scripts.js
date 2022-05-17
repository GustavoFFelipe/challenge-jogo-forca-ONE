
  const showGame = document.getElementById('start-game');
  const showButton = document.getElementById('first-page');
  const showAddWord = document.getElementById('addWord');

  const secretWords = ['CASA', 'CAMELO', 'HORIZONTE', 'FORTE', 'VERMELHO', 'ZEBRA', 'ASFALTO', 'LUA', 'SOL', 'NUVEM', 'ARVORES', 'HOJE', 'ONTEM', 'AMANHA','FLORES', 'PLANTAS', 'ANIMAIS', 'NUMEROS', 'CAVALEIRO', 'DAMA', 'SOLDADO', 'XADREZ', 'ESQUILO', 'FOCA', 'PIRATA']

function handleShowGame() {
  if(showButton.style.display === 'flex') {
    showButton.style.display = 'none';
    showGame.style.display = 'block'
  } else {
    showButton.style.display = 'flex';
    showGame.style.display = 'none'
  }
  drawSpacesCanvas()
}

//-----------------adding new words to array ----------------//
function addNewWord(){
  const newWord = document.getElementById('text-area').value;

  if(newWord ===""){
    alert("Please enter only letters")
  } else{
    secretWords.push(newWord);
    console.log(newWord)
    console.log(secretWords)

    handleAddWord()
  }
}


//----------------- Handle with display functions------------------//
function handleAddWord(){

  if(showButton.style.display === 'flex'){
    showButton.style.display = 'none';
    showAddWord.style.display = 'block'
  } else {
    showButton.style.display = 'flex';
    showAddWord.style.display = 'none'
  }
}

function backDisplay(){
  if(showButton.style.display === 'flex') {
    showButton.style.display = 'none';
    showGame.style.display = 'block'
  } else {
    showButton.style.display = 'flex';
    showGame.style.display = 'none'
  }
}
//--------------------------Canvas Script ---------------------------//



function drawSpacesCanvas(){

  const word= [Math.floor(Math.random() * secretWords.length)];
  console.log(secretWords[word])
  console.log(secretWords[word].length)


const screen = document.querySelector("canvas");
const draw = screen.getContext('2d');

let space = 50;
for( i = 0; i< secretWords[word].length; i++) {
  draw.fillStyle = '#0A3871';
  draw.fillRect(space, 130, 20, 1);
  space = space + 27;
}
    
}

//----------------- Secret Words --------------//





