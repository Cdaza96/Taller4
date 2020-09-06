//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados


var num1 = prompt("Escribe número 1");
var num2 = prompt("Escribe número 2");
var menor;

if (num1 < num2) {
    menor = num1;
} else {
    menor = num2;
}
    for (i=2; i < menor / 2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
        document.write(i,", ");
        }
    }

