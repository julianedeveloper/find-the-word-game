var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 20, 10);



function startGame() {

    const theSecretWord = document.querySelector('canvas');

    const words = ['desafio', 'coragem', 'persistir', 'disciplina', 'crer', 'descansar', 'orar', 'meditar', 'conseguir', 'lutar'];

    let random = words[Math.random() * words.length];
    console.log(random);

    return startGame();
}
