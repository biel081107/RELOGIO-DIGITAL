function  relogio(){
var agora = new Date();
var hora = agora.getHours();
var minuto = agora.getMinutes();
var segundos = agora.getSeconds();

//ADICIONANDO HORA
document.getElementById('nhoras').innerHTML = hora;

//ADICIONANDO MINUTO
document.getElementById('nminutos').innerHTML = minuto;

//ADICIONANDO SEGUNDOS
document.getElementById('nsegundos').innerHTML = segundos
}
var tempodecarregamento = setInterval(relogio, 1000);

