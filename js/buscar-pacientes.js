var botonBuscar = document.querySelector("#buscar-paciente")

botonBuscar.addEventListener("click",function(){
    var xhr = new XMLHttpRequest;
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes22.json");
    xhr.addEventListener("load",function(){
        var errorAJAX = document.querySelector("#error-ajax")
        if(xhr.status == 200){
            errorAJAX.classList.add("invisible");
            var respuesta = xhr.responseText;
            var pacientes = JSON.parse(respuesta);
            pacientes.forEach(function(paciente) {
                adicionarPacienteEnLaTabla(paciente);    
            });
        }else{
            errorAJAX.classList.remove("invisible");
            console.log(xhr.status);
            console.log(this.responseText);
        }
        
        
            });
    xhr.send();

});