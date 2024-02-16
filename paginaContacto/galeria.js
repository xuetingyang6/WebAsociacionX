document.addEventListener("DOMContentLoaded", function() {
var boton = document.querySelector("#next");
var fotos=document.getElementsByClassName("fotoCentro");

var actual=0;
function showFoto(n) {
    for(var i=0;i<fotos.length;i++){
        if(i==n){
            fotos[i].style.opacity=1;
        } else {
            fotos[i].style.opacity = 0;
        }

    }
}
function nextFoto(){
    actual=(actual+1)%fotos.length;
    showFoto(actual);
}

showFoto(actual);
boton.addEventListener("click",nextFoto);
});