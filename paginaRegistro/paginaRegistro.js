//document.getElementById("otraMotivacion").onclick=mostrarOp();
/*
function mostrarOp(){
    //document.getElementById("txtMotivacion").hide;
    alert("...")
}

function validarNombre(){
    var nombre=document.forms["f"]["nombre"].value;
    if(nombre==""){
        alert("Campo Nombre es obligatorio");
        return false;
    }
}
*/
function obtenerDatos(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    //var dni = document.getElementById("dni");
    //var estadoCivil = document.getElementsByName("estadoCivil");

    var pagConfirm = `
    <h2>Revisar sus informaciones introducidas </h2>
    <p>Nombre: ${nombre}</p>

    <input type="button" value="Confirmar" onclick="confirmarRevision()">

    
    
    `;
    document.body.innerHTML =pagConfirm;
    
}

function confirmarRevision(){
    alert("Exito");
}


