let words = ['ERRO', 'JOGO', 'TENTE','ACERTO','FORCA', 'SEGREDO', 'PALAVRAS'];
let gameTable = document.getElementById("canvas").getContext('2d');
let letters = [];
let correctWord = "";
let mistakes = 7;

function chooseTheSecretWord() {

    let word = words[Math.floor(Math.random() * words.length)];
    secretWord = word;
    console.log(word);
    return secretWord;

} 

function writeDashes() {

        gameTable.lineWidth = 6;
        gameTable.lineCap = "round"; // round the corners (arredonda os cantos), to get a more soft result.
        gameTable.lineJoin = "round"; // connect the dots (une os pontos)
        gameTable.strokeStyle = "#390099";
        gameTable.beginPath();
        let eixo = 600/secretWord.length; //600 represents in pixels, any space that will be filled with the length of the word choosed
        for(let i=0; i < secretWord.length; i++) {

            gameTable.moveTo(550 + (eixo*i), 640);
            gameTable.lineTo(550 + (eixo*i), 640);
        }

        gameTable.stroke();
        gameTable.closePath();

} writeDashes(chooseTheSecretWord());

