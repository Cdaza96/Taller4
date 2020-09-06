// Escribir un programa que escriba en pantalla los divisores de un número dado
var num = prompt("digite el numero");

divisor(num);

function divisor(num){
        for (let index = 2; index < num/2; index++) {
            if (num % index == 0) {
                document.write(index, ",");
            }
            
        }
}

