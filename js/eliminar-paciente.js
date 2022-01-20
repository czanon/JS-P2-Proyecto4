var pacientes = document.querySelectorAll (".paciente");

var tabla = document.querySelector("#tabla-pacientes");

//event bubbling 
tabla.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },800);
    

});

//nota arriba se usa parentNode para selecionar el contenedor Tr 
//(el renglón) de todos los Tds (las celdas). Si yo no uso parentNode
//me quita de manera individual los Tds...
