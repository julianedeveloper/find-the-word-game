let words = ['ERRO', 'JOGO', 'TENTE', 'ACERTO', 'FORCA', 'SEGREDO', 'PALAVRAS'];
let gameTable = document.getElementById('canvas').getContext('2d');
//let tela = document.getElementById('canvas');
//let brush = tela.getContext('2d');

//gameTable.fillStyle = 'white';
//gameTable.fillRect ();

let letters = [];
let correctWord = "";
let mistakes = 7;

function chooseTheSecretWord() {

    let word = words[Math.floor(Math.random() * words.length)];
    secretWord = word;
    console.log(word);
    return word;

}

function writeDashes(secretWord) {

    gameTable.lineWidth = 6;
    gameTable.lineCap = "round"; // round the corners (arredonda os cantos), to get a more soft result.
    gameTable.lineJoin = "round"; // connect the dots (une os pontos)
    gameTable.strokeStyle = "#390099";
    gameTable.beginPath();

    /*
            brush.lineWidth = 6;
            brush.lineCap = 'round';
            brush.lineJoin = 'round';
            brush.strokeStyle = "#390099";
            brush.beginPath();
    */

    let eixo = 600 / secretWord.length; //600 represents in pixels, any space that will be filled with the length of the word choosed
    for (let i = 0; i < secretWord.length; i++) {

        gameTable.moveTo(550 + (eixo * i), 640);
        gameTable.lineTo(550 + (eixo * i), 640);

        //brush.moveTo(550 + (eixo*i), 640);
        //brush.lineTo(550 + (eixo*i), 640);
    }

    gameTable.stroke();
    gameTable.closePath();

    //brush.stroke();
    //brush.closePath();

} writeDashes('note');

function writerIncorrectWord(letra, errorLeft) {

    gameTable.font = 'bold 30px Arial';
    gameTable.lineWidth = 6;
    gameTable.lineCap = 'round';
    gameTable.lineJoin = 'round';
    gameTable.strokeStyle = "#0A3871";
    gameTable.fillText(letters, 535 + (40 * (10 - errorLeft)), 710, 40);

}

function verifyCorrectLetter(key) {

    if (letters.length < 1 || letters.indexOf(key) < 0) {

        console.log(key)
        letters.push(key)
        return false

    }

    else {

        letters.push(key.toUpperCase())
        return true
    }

function addCorrectLetter(i) {

    correctWord += correctWord[i].toUpperCase();
    
}

function addIncorrectLetter(letter) {

    if (secretWord.indexOf(letter) <= 0) {

        if (secretWord.indexOf(letter) <= 0) {

            mistakes -= 1;
        }
    }
}

    document.onkeydown = (e) => {

        var letter = e.key.toUpperCase();
        if (!verifyCorrectLetter(e.key)) {

            if(secretWord.includes(letters)) {

                addCorrectLetter(secretWord.indexOf(letters))
                for(let i = 0; i < secretWord.length; i++) {

                    if(secretWord[i] === letters) {

                        verifyCorrectLetter(i)
                    }
                }
            }
        }
    }

}

