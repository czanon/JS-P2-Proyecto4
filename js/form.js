var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    
    // todas estas var aquí abajo son objetos de mi pagina index.html
    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    var pacienteTr = construirTr(paciente);

    //sección del manejo de error (altura o peso incorrecto)
    var errores = validarPaciente(paciente);
    
    if(errores.length > 0){
        exhibirMensajeErrores(errores);
        return; //este return hace ref. a la función anonima
    }

    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
    form.reset();
    //con estas dos lineas vacio la lista de mis mensajes de errores
    var mensajesErrores = document.querySelector("#mensajes-errores");
    mensajesErrores.innerHTML = "";
});

function adicionarPacienteEnLaTabla(paciente){
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

//función para capturar los datos del paciente
function capturarDatosPaciente(form){
    //capturando los datos del formulario es decir toda la sección que viene
    //entre <form id="form-adicionar"></form>
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
    }
    return paciente; 
}

function construirTr(paciente){
    
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //asignación al tr de los tds y a la tabla del tr
    pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc,"info-imc")); 
    
    return pacienteTr;
}

//función para construir los tds
function construirTd(dato,clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;
}

function validarPaciente(paciente){
    var errores = [];

    if(paciente.nombre.length ==0){
        errores.push("El nombre no puede estar vacio.");
    }
    if(paciente.peso.length ==0){
        errores.push("El peso no puede estar vacio");
    }
    if(paciente.altura.length ==0){
        errores.push("La altura no puede estar vacio");
    }
    if(paciente.gordura.length ==0){
        errores.push("La gordura no puede estar vacio");
    }
    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    }
    if(!validarPeso(paciente.altura)){
        errores.push("La altura es incorrecta");
    }    
    return errores;
}

function exhibirMensajeErrores(errores){
    var ul = document.querySelector("#mensajes-errores")
    ul.innerHTML = ""; //aqui reseteo la lista HTML
    errores.forEach(function(error){ //uso de función anonima denuevo
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
  
}

