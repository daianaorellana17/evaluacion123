
//Es un comentario de una sóla línea

/*
Esto es un 
comentario de 
varias líneas
*/

//Funciones: bloque de código que ejecuta una tarea específica
//Estructura de una función
function arbitro(tarjetas, silvato) {
    // la tarea de la función va entre las llaves  
    
    //1. Saludar a los jugadores
    console.log("Buenas tardes, soy el árbitro del partido ");

    // 2. Sacar una tarjeta roja a un jugador
    console.log("Usted tiene la tarjeta " + tarjetas);

    // 3. Hacer sonar el silbato
    console.log("El silbato suena: " + silvato);
    
}

//Creamos la variable tarjetas y le asignamos un valor
let tarjeta = "roja";

// Creamos la variable silvato y le asignamos un valor
let silvato = "piiiiiiiiiiiiiiii";

// llamar a la función y le pasamos la tarjeta
arbitro(tarjeta, silvato);