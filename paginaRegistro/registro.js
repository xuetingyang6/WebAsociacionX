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

//obtener datos introducidos en los campos
function getDato(){

    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var dni=document.getElementById("dni").value;
    var email=document.getElementById("email").value;
    var tlf=document.getElementById("tlf").value;

    var datos=document.getElementById("dato");
    var txt=document.createElement("p");//crear una etiqueta p
    txt.setAttribute("id", "mensaje");//add un id para una etiqueta
    var msg="Nombre: "+nombre+"<br>Apellido: "+apellido+"<br>DNI: "+dni+"<br>Número de contacto: "+tlf+"<br>Correo electrónico: "+email;
    txt.innerHTML=msg;
    datos.appendChild(txt);

    datos.style.display='block';

    return false;
}

//boton Volver
function omitirDiv(){
    var div=document.getElementById("dato");
    var txt=document.getElementById("mensaje");

    div.style.display="none";

    div.removeChild(txt);
    
}

//boton Confirmacion
function enviarDato(){
    omitirDiv();
    resetearCampo();
    alert("Enviado");
    
}

//resetear los campos
function resetearCampo(){
    document.getElementById("form1").reset();
}

//validacion de los campos
function validacion(){
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var dni=document.getElementById("dni").value;

    var motivacionOp =document.getElementsByClassName("razones");
    var selected=estaSeleccionado(motivacionOp);
    

    if(!hayAlgo(nombre)&&!hayAlgo(apellido)&&dni.charAt(8)==letras[dni.substring(0,8)%23]&&selected){
        getDato();
        return false;
    }
    else{
        if(hayAlgo(nombre)||hayAlgo(apellido)){
            alert("Campo del nombre o del apellido está vacío");
        }
        if(dni.charAt(8)!=letras[dni.substring(0,8)%23]){
            alert("Introduzca un dni correcto");
        }
        if(!selected){
            alert("No has elegido la motivación");
        }
    }
    return false;
}

function hayAlgo(valor){
    if( valor == null || /^\s+$/.test(valor)||valor.length==0){
        return false;
    }
}

function estaSeleccionado(valor){
    var motivacionOp =document.getElementsByClassName("razones");
    var seleccionado=false;
    for(var i=0;i<motivacionOp.length&&!seleccionado;i++){
        if(motivacionOp[i].checked){
            seleccionado=true;
        }
    }
    return seleccionado;
}   