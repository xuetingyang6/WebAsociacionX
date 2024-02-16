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

function showTexarea() {
    var area=document.getElementById("razonMotivacion");
    var op=document.getElementById("otraMotivacion");
    if(op.checked){
        area.style.display='block';
    }
    else{
        area.style.display='none';
    }
}


function getDato(confirmacion){

    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var dni=document.getElementById("dni").value;
    var email=document.getElementById("email").value;
    var tlf=document.getElementById("tlf").value;

    var datos=document.getElementById("dato");

    var msg="\nNombre: "+nombre+"\nApellido: "+apellido+"\nDNI: "+dni+"\nNúmero de contacto: "+tlf+"\nCorreo electrónico: "+email;

    var textNode = document.createTextNode(msg);
    //datos.appendChild(msg);
    datos.appendChild(textNode);
    datos.style.display='block';

    return false;
    /*
    confirm("Revisar los datos introducido: "+"\nNombre: "+nombre+"\nApellido: "+apellido+"\nDNI: "+dni+"\nNúmero de contacto: "+tlf+"\nCorreo electrónico: "+email);
*/
}


