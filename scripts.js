
  const showGame = document.getElementById('start-game');
  const showButton = document.getElementById('first-page');
  const showAddWord = document.getElementById('addWord');

  const secretWords = ['CASA', 'CAMELO', 'HORIZONTE', 'FORTE', 'VERMELHO', 'ZEBRA', 'ASFALTO', 'LUA', 'SOL', 'NUVEM', 'ARVORES', 'HOJE', 'ONTEM', 'AMANHA','FLORES', 'PLANTAS', 'ANIMAIS', 'NUMEROS', 'CAVALEIRO', 'DAMA', 'SOLDADO', 'XADREZ', 'ESQUILO', 'FOCA', 'PIRATA'];
  const wrongLetter = [];
  const rightLetter = [];
 
  //----------------------Random words --------------------------//

function randomWord(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

let word = randomWord(secretWords)
console.log(word)
//------------------ CHange display buttons to game ------------------//
function handleShowGame() {
  if(showButton.style.display === 'flex') {
    showButton.style.display = 'none';
    showGame.style.display = 'block'
  } else {
    showButton.style.display = 'flex';
    showGame.style.display = 'none'
  }

 drawSpacesCanvas();
}
handleShowGame() // add only for test a bug that I try to solve

//---------validation of words ---------------------//

document.addEventListener('keydown', (evento) => {

  const codLetter = evento.keyCode; // 65 - 90 interval to alfabet letters
  if(isLetter(codLetter)){
    const letter = evento.key.toLocaleUpperCase('PT-BR');
  console.log(letter)
      if(word.includes(letter)){
        rightLetter.push(letter)
      } else {
          wrongLetter.push(letter)
      }
    }
    console.log(rightLetter)
    console.log(wrongLetter)
      updateGame();
})
function isLetter(codLetter) {
  return codLetter >= 65 && codLetter <= 90
}

//---------------Update Game -----------------//
function updateGame(){

  showWrongLetter();
}
//-----------------Handdle letters ---------------//

function showWrongLetter() {
  const wrongContainer  = document.getElementById('wrong-letters');
  wrongContainer.innerHTML = "";
  wrongLetter.forEach( letter => {
    wrongContainer.innerHTML += `<span>${letter}</span>`;
  })
}

function showRightLetter(){
  //  BEGIN FOR HERE
}

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

//--------------------------Canvas Script ---------------------------//

function drawSpacesCanvas(){
const screen = document.querySelector("canvas");
const draw = screen.getContext('2d');
let space = 50;
for( i = 0; i< word.length; i++) {
  draw.fillStyle = '#0A3871';
  draw.fillRect(space, 130, 20, 1);
  space = space + 27;
}

}
//------------------Function for new game -------------*/
function newGame(){
  document.location.reload(true);
}

