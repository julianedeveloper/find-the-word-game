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
    console.log(secretWord);

    return word;
    
} 

function writeDashes() {

    gameTable.lineWidth = 6;
    gameTable.lineCap = 'round';
    gameTable.lineJoin = 'round';
    gameTable.strokeStyle = '#390099';
    gameTable.beginPath();

    var eixo = 300 / secretWord.length;

    for (let i = 0; i < secretWord.length; i++) {
        gameTable.moveTo (250 +  eixo * i, 340);
        gameTable.lineTo (280 + eixo * i, 340);
    }

    gameTable.stroke();
    gameTable.closePath();

} writeDashes(chooseTheSecretWord());

function writerCorrectLetter(index) {

    gameTable.font = 'bold 15px Arial';
    gameTable.lineWidth = 6;
    gameTable.lineCap = 'round';
    gameTable.lineJoin = 'round';
    gameTable.fillStyle = '#390099';

    var eixo = 300 / secretWord.length;
    gameTable.fillText(secretWord[index], 257 + eixo * index, 320);
    gameTable.stroke();

} writerCorrectLetter();


function writerIncorrectLetter(letter, errorsLeft) {

    gameTable.font = 'bold 15px Arial';
    gameTable.lineWidth = 3;
    gameTable.lineCap = 'round';
    gameTable.lineJoin = 'round';
    gameTable.fillStyle = '#390099';
    gameTable.fillText(letter, 257 + 20 * (10 - errorsLeft), 390); // Aqui havia um parâmetro a mais, tirei um dos números e funcionou, mas provavelmente não está escrevendo onde você queria.

}

function verifyCorrectLetter(key) {

    if(letters.length < 1 || letters.indexOf(key) < 0) {
        console.log(key)
        console.log(mistakes)
        letters.push(key)
        return false

    }

    else {

        letters.push(key.toUpperCase())
        return true
    }
}


function addCorrectLetter(i) {

    correctWord += secretWord[i].toUpperCase();

}

function addIncorrectLetter(letter) {

    if(secretWord.indexOf(letter) <= 0) {
    
        mistakes =- 1;
    }
}

/*
document.onkeydown = (e) => {
    let letter = e.key.toUpperCase();
    if(!verifyCorrectLetter(e.key)) {
        if(secretWord.includes(letter)) {
            addCorrectLetter(secretWord.indexOf(letter))
            for (let i = 0; i < secretWord.length; i++) {
                if(secretWord[i] === letter) {
                    writerCorrectLetter(i)
                }
            }
        }
    } else {
        if (verifyCorrectLetter(letter))
        addIncorrectLetter(letter)
        writerIncorrectLetter(letter, mistakes)
        return
    }

}
*/

window.onkeydown = e => {
    let letter = e.key.toUpperCase();
    if (verifyCorrectLetter(letter)) {
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letter) {
                addCorrectLetter(i);
                writerCorrectLetter(i);
            }
        }
        if (secretWord.indexOf(letter) < 0) {
            console.log(letter);
            writerIncorrectLetter(letter, mistakes);
            mistakes -= 1;
            letters.push(letter);
            console.log(mistakes);
        }
    }
    gameOver();
}


function gameOver(){

    if(mistakes === 0) {

    var element = document. createElement('sorry-page.html');
    
    }
}

