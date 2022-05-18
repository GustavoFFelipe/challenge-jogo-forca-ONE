
  const showGame = document.getElementById('start-game');
  const showButton = document.getElementById('first-page');
  const showAddWord = document.getElementById('addWord');

  const secretWords = ['CASA', 'CAMELO', 'HORIZONTE', 'FORTE', 'VERMELHO', 'ZEBRA', 'ASFALTO', 'LUA', 'SOL', 'NUVEM', 'ARVORES', 'HOJE', 'ONTEM', 'AMANHA','FLORES', 'PLANTAS', 'ANIMAIS', 'NUMEROS', 'CAVALEIRO', 'DAMA', 'SOLDADO', 'XADREZ', 'ESQUILO', 'FOCA', 'PIRATA']
  const word= secretWords[Math.floor(Math.random() * secretWords.length)];
  const wrongLetter = [];
  const rightLetter = [];
  
console.log(word)
  //---------validation of words ---------------------//
  document.addEventListener('keydown', (evento) => {
 
    const codLetter = evento.keyCode; // 65 - 90 interval to alfabet letters
    if(isLetter(codLetter)){
      const letter = evento.key.toLocaleUpperCase('PT-BR');
    console.log(letter)
      if(wrongLetter.includes(letter)){
        alert('type again')
      }else {
        if(word.includes(letter)){
          rightLetter.push(letter)
        } else {
            wrongLetter.push(letter)
        }
      }
      console.log(rightLetter)
      console.log(wrongLetter)

  }
}
  )

  function showAlert(){
    const showAlert = document.getElementById('hidden-div');
    showAlert.classList.add('show');
  }

  function isLetter(codLetter) {
    return codLetter >= 65 && codLetter <= 90
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
 drawSpacesCanvas()
}
// add only for test a bug that I try to solve
//-----------------adding new words to array ----------------//
function addNewWord(){
  const newWord = document.getElementById('text-area').value;

  if(newWord ===""){
    alert("Please enter only letters")
  } else{
    secretWords.push(newWord);
   

    handleAddWord()
  }
}

//-------------------- back to the buttons display(main) ----------------///
function backDisplay(){
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

  if(showButton.style.display === 'flex'){
    showButton.style.display = 'none';
    showAddWord.style.display = 'block'
  } else {
    showButton.style.display = 'flex';
    showAddWord.style.display = 'none'
  }
}

//--------------------------Canvas Script ---------------------------//

function drawSpacesCanvas(){
  console.log(word.length)


const screen = document.querySelector("canvas");
const draw = screen.getContext('2d');

let space = 50;
for( i = 0; i< word.length; i++) {
  draw.fillStyle = '#0A3871';
  draw.fillRect(space, 130, 20, 1);
  space = space + 27;
}
    
}







