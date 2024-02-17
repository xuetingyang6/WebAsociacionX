function incrementarLike(id){
    var idContador=document.getElementById(id);
    var numero=parseInt(idContador.textContent);
    idContador.textContent=numero+1;
}