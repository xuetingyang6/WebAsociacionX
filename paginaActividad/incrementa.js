function incrementarLike(id){
    var idContador=document.getElementById(id);
    var numero=parseInt(idContador.textContent);
    idContador.textContent=numero+1;
}


function expandir(n){
    var contenido=document.getElementsByClassName("contenido")[n];
    var txt=document.getElementsByClassName("mas")[n];

    if(contenido.style.display=="none"){
        contenido.style.display="block";
        txt.textContent="...Colapsar";
    }else {
        contenido.style.display="none";
        txt.textContent="More...";
    }
}