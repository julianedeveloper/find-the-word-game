var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(200, 50, 600, 400);

console.log('pincel');

pincel.fillStyle = 'darkblue';
pincel.beginPath();
pincel.moveTo(100, 100);
pincel.lineTo(100, 200);
pincel.fill();

console.log('pincel');



function startGame() {

    const theSecretWord = document.querySelector('canvas');

    const words = ['desafio', 'coragem', 'persistir', 'disciplina', 'crer', 'descansar', 'orar', 'meditar', 'conseguir', 'lutar'];

    let random = words[Math.random() * words.length];
    console.log(random);

    return startGame();
}
