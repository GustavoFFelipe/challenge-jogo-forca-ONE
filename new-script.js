
let words = ['CASA', 'CAMELO', 'HORIZONTE', 'FORTE', 'VERMELHO', 'ZEBRA', 'ASFALTO', 'LUA', 'SOL', 'NUVEM', 'ARVORE', 'HOJE', 'ONTEM', 'AMANHA','FLOR', 'PLANTA', 'ANIMAl', 'NUMERO', 'CAVALEIRO', 'DAMA', 'SOLDADO', 'XADREZ', 'ESQUILO', 'FOCA', 'PIRATA'];
let table = document.getElementById('forca').getContext('2d');
let letters = [];
let rightWord = "";
let error = 0;

function chooseSecretWord(){
  let word = words[Math.floor(Math.random()*words.length)] ;
  secretWord = word;
  console.log(word)
  return word
}

function writeTrace(){
  table.lineWidth = 6;
  table.lineCap = 'round';
  table.lineJoin = 'round';
  table.strokeStyle = '#0A3871';
  table.beginPath();
  let axle = 600/secretWord.length;
  for(let i = 0; i < secretWord.length; i++){
      table.moveTo(250+(axle*i), 340)
      table.lineTo(300+(axle*i), 340)
  }
  table.stroke()
  table.closePath()
}
writeTrace(chooseSecretWord())

function writeRightLetter(index) {
     table.font = 'bold 52px Poppins'
     table.lineWidth = 6
     table.lineCap = 'round';
     table.lineJoin = 'round';
     table.strokeStyle = '#0A3871';

     let axle = 600/secretWord.length
     table.fillText(secretWord[index], 255+(axle*index), 320)

}

function writeWrongLetter(letter, errorsLeft){
  table.font = 'bold 40px Poppins'
     table.lineWidth = 6
     table.lineCap = 'round';
     table.lineJoin = 'round';
     table.strokeStyle = '#0A3871';
     table.fillText(letter, 285 + (40*(10-errorsLeft)), 710, 40)
}

function checkRightLetter(key){
    if(letters.length < 1 || letters.indexOf(key) < 0){
      console.log(key)
        letters.push(key)
        return false
    }else {
      letters.push(key.toUpperCase())
      return true
    }
}
function addRightLetter(i){
  rightWord += secretWord[i].toUpperCase()
}
function addWrongLetter(letter){
  if(secretWord.indexOf(letter) >= 9 ){
    error += 1
    console.log(error)
  }
}
document.onkeydown = (e) => {
  let letter = e.key.toUpperCase()
    if(!checkRightLetter(e)){
      if(secretWord.includes(letter)){
        addRightLetter(secretWord.indexOf(letter))
        for(let i = 0; i < secretWord.length; i++){
          if(secretWord[i] === letter){
            writeRightLetter(i)
          }
        }
      }
    } 
    // fixed else for wrong letter
    else {
          if(!checkRightLetter(e.key)) return
          writeWrongLetter(letter, error)
          addWrongLetter(letter)
         
          
          
    }
}