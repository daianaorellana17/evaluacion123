

alert("Bienvenido a nuesta Calculadora")

// Creamos las variables para la SUMA
let numeroUno = prompt("Inroduce el primer número: ")//string
let numeroDos = prompt("Introduce el segundo número: ")

// convertimos en números los datos
numeroUno = parseInt(numeroUno)
numeroDos = parseInt(numeroDos)

// probamos si capturamos los datos
console.log("Los números que ingresaron son " + numeroUno + " y " + numeroDos);

// Creamos la calculadora
console.log(numeroUno + numeroDos);