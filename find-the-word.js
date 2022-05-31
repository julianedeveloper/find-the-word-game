var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'antiquewhite';
pincel.fillRect(200, 50, 1200, 500);
pincel.strokeStyle = 'pink'
pincel.strokeRect = (250, 50, 1100, 500);


function foundationHangMan() {

/*
    pincel.strokeStyle = "#0A3871"; //primeiro definimos a cor das linhas, preferencialmente em formato rgba
    pincel.lineWidth = 4; //depois o width(espessura) dela
    pincel.beginPath(); //iniciamos o caminho
    pincel.moveTo(200, 400); //definimos a movimentação do eixo
    pincel.lineTo((500+45), 200);  //possiveis intervalos de execução
    pincel.stroke(); //e por fim o stroke (contorno)

}

foundationHangMan();
*/

    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 4;
    pincel.beginPath();
    pincel.moveTo(200, 350); //foundation
    pincel.lineTo(250, 350);
    pincel.moveTo(50, 300);
    pincel.lineTo(50, 50);
    pincel.lineTo(150, 50);
    pincel.lineTo(150, 80); 
    pincel.stroke();

}

foundationHangMan();
