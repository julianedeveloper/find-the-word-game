var tela = document.getElementById('canvas');
var pincel = tela.getContext('2d');

function foundationHangMan() {
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.moveTo(0, 350);
    pincel.lineTo(250, 350);
    pincel.moveTo(60, 350);
    pincel.lineTo(50, 50);
    pincel.lineTo(150, 50);
    pincel.lineTo(150, 80); 
    pincel.stroke();

}foundationHangMan();