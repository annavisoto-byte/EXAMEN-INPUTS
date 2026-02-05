document.getElementById("boton").addEventListener("click", function() {

let texto = document.getElementById("texto").value;
let numero = document.getElementById("numero").value;
let telefono = document.getElementById("telefono").value;
let correo = document.getElementById("correo").value;
let contraseña = document.getElementById("contraseña").value;
let fecha = document.getElementById("fecha").value;
let color = document.getElementById("color").value;

alert(" El texto ingresado es: " + texto + " y el número es: " + numero + " el teléfono agredado es: " + telefono + " el correo ingresado es: " + correo + " la contraseña ingresada es: " + contraseña + " la fecha ingresada es: " + fecha + " el color seleccionado es: ");

console.log("Botón presionado. Texto ingresado: " + texto);
console.log("Botón presionado. Numero ingresado: " + numero);
console.log("Botón presionado. Telefono ingresado: " + telefono);
console.log("Botón presionado. Correo ingresado: " + correo);
console.log("Botón presionado. Contraseña ingresada: " + contraseña);
console.log("Botón presionado. Fecha ingresada: " + fecha);

document.getElementsByTagName("p")[0].innerText = " Has ingresado: " + texto;
document.getElementsByTagName("p")[1].innerText = " El numero ingresado es: " + numero;
document.getElementsByTagName("p")[2].innerText = " El telefono ingresado es: " + telefono;
document.getElementsByTagName("p")[3].innerText = " El correo electrónico ingresado es: " + correo;
document.getElementsByTagName("p")[4].innerText = " La contraseña ingresada es: " + contraseña;
document.getElementsByTagName("p")[5].innerText = " La fecha ingresada es: " + fecha;
document.getElementsByTagName("p")[6].innerText = " El color se ha cambiado a " + color;
document.getElementsByTagName("body")[0].style.backgroundColor = color;

});