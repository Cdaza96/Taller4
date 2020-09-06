// Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
var n1 = prompt("Escribe un número");
var i;
var primer = true;
for (i=2; i < n1 / 2; i++) {
if (n1 % i === 0) {
primer = false;
}
}
if (primer) {
document.write("El número es primo");
} else {
document.write("El número no es primo");
}