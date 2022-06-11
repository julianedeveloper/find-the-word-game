let words = ['ERRO', 'JOGO', 'TENTE', 'ACERTO', 'FORCA', 'SEGREDO', 'PALAVRAS'];
let gameTable = document.getElementById('hangMan').getContext('2d');

    gameTable.fillStyle = 'white'; // here I define the canva's settings
    gameTable.fillRect (150, 50, 1200, 500); // here canva's dimensions

let letters = []; // to save the letters after
let correctWord = ""; // to save the correct word at the moment 
let mistakes = 7; // to count the mistakes until the lost of the game
let secretWord ;


function chooseTheSecretWord() {

    let word = words[Math.floor(Math.random() * words.length)];
    secretWord = word;
    return word;
    console.log(secretWord);
    
} 

function writeDashes() {

    gameTable.lineWidth = 6;
    gameTable.lineCap = 'round';
    gameTable.lineJoin = 'round';
    gameTable.strokeStyle = '#390099';
    gameTable.beginPath();

    var eixo = 300 / secretWord.length;

    for (let i = 0; i < secretWord.length; i++) {
        gameTable.moveTo (250 + (eixo*i), 340);
        gameTable.lineTo (280 + (eixo*i), 340);
    }

    gameTable.stroke();
    gameTable.closePath();

} writeDashes(chooseTheSecretWord());

function writerCorrectLetter(index) {

    gameTable.font = 'bold 15px Arial';
    gameTable.lineWidth = 6;
    gameTable.lineCap = 'round';
    gameTable.lineJoin = 'round';
    gameTable.strokeStyle = '#390099';

    var eixo = 300 / secretWord.length;
    gameTable.fillText(secretWord[index], 100 + (eixo*index), 200);
    gameTable.stroke();

} writeCorrectLetter();


function writerIncorrectLetter(letter, errorsLeft) {

    gameTable.font = 'bold 5px Arial';
    gameTable.lineWidth = 3;
    gameTable.lineCap = 'round';
    gameTable.lineJoin = 'round';
    gameTable.strokeStyle = '#390099';
    gameTable.fillText (letter, 120 + (20*(5 - errorsLeft)),300, 20);

}

function verifyCorrectLetter(key) {

    if(letters.length < 1 || letters.indexOf(key) > 0) {
        console.log(key)
        letras.push(key)
        return false

    }

    else {

        letters.push(key.toUpperCase())
        return true
    }
}


function addCorrectLetter(key) {

    correctWord += secretWord[i].toUpperCase();

}

function addIncorrectLetter(letter) {

    if(secretWord.indexOf(letter) <= 0) {
    
        mistakes -+ 1
    }
}

document.onkeydown = (e) => {

    if(!verifyCorrectLetter(e.key)) {
        if(secretWord.includes(letters)) {
            addCorrectLetter(secretWord.indexOf(letters))
            for (let i = 0; i < secretWord.length; i++) {
                if(secretWord[i] === letters) {
                    writerCorrectLetter(i)
                }
            }
        }
    } else {
        if (!verifyCorrectLetter(e.key))
        return
        addIncorrectLetter(letters)
        writerIncorrectLetter(letters, mistakes)
    }

}



