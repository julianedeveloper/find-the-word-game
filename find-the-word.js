var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'black';
pincel.fillRect(200, 50, 600, 400);



function startGame() {

    const theSecretWord = document.querySelector('canvas');

    const words = ['desafio', 'coragem', 'persistir', 'disciplina', 'crer', 'descansar', 'orar', 'meditar', 'conseguir', 'lutar'];

    let random = words[Math.random() * words.length];
    console.log(random);

    return startGame();
}
