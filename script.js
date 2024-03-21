//alert("Hola este es mi Javascript");
//let nombre = "Marta"; //dentro del bloque
//nombre ="Maria";
//var nombre1 = "Juan"; //global
//const nombre2 = "Maria";

/*console.log(nombre);
console.log(nombre1);
console.log(nombre2);*/

//SELECCIONAR ELEMENTOS

/*let contenidoTitulo ="Nombre";

let titulo = document.querySelector(".logo .fuente-")*/


//CONDICIONALES
//let titulo1 = document.querySelector(".container .encabezado .tituloLogo");
//let contenidoTitulo = titulo1.innerHTML;

/*let titulo1 = document.querySelector(".container .encabezado .tituloLogo").innerText;
console.log(titulo1);

if(contenidoTitulo == "Nombre"){
    titulo1.innerHTML ="Otro";
   }*/


let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function(){
    navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
}

const mq = window.matchMedia("(min-width: 768px)");

// Verifica si la consulta de medios coincide
// Escucha el evento de cambio de tamaño de ventana
$(window).resize(function() {
    // Obtén el ancho actual de la ventana
    const anchoVentana = $(window).width();
    // Selecciona el elemento al que deseas quitar la clase
    const elemento = document.getElementById("navbar");
    // Si el ancho de la ventana es menor o igual a 768px, quita la clase
    if (anchoVentana <= 768) {
        elemento.removeClass('active');
    }
});

/*if (mq.matches) {
    const elemento = document.getElementById("navbar");
    elemento.classList.remove("active");
}*/

