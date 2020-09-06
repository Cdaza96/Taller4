//ejercicio 13 Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

document.write("ejercicio 13"+"<br/>");
var num = prompt("Digite número 1");
divisible(num);


function divisible(num){
    
        if(num % 2 == 0 || num % 3 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0){
            document.write("El número: "+num+" es divisible por 2, 3, 5 o 7. </br>");
        }else{
            document.write("El número: "+num+" NO es divisible por 2, 3, 5 o 7. </br>");
        }
}