function getEstadoCivil(){
    var radios=document.getElementsByName("estadoCivil");
    var selected=null;

    for(var i=0;i<radios.length&&!radios[i].checked;i++){
        if(radios[i].checked){
            selected =radios[i].value;
        }
    }
}

function showDiaSemana(show){
    var diaOp=document.getElementById("diaSemana");

    if(show){
        diaOp.style.display='block';
    } else {
        diaOp.style.display = 'none';
    }
}