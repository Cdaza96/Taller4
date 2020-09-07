
//ejercicio 1 Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
alert("hello world");


//ejercicio 2 Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
document.write("ejercicio 2"+"<br/>");
document.write("hello world<br/>");


//ejercicio 3 Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write("ejercicio 3"+"<br/>");
document.write(3+5+"<br/>");

//ejercicio 4 Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
document.write("ejercicio 4"+"<br/>");
var nombre = prompt("Digite su nombre");
document.write("hola "+nombre+"<br/>");

//ejercicio 5 Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
document.write("ejercicio 5"+"<br/>");
var num1 = prompt("Digite número 1");
var num2 = prompt("Digite número 2");
document.write("El resultado es: "+ ( parseInt(num1)+parseInt(num2)));


//ejercicio 6 Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
document.write("ejercicio 6"+"<br/>");
var num1 = prompt("Digite numero 1");
var num2 = prompt("Digite numero 2");

if(num1 > num2){
    document.write("El número mayor es: "+num1);
}else{
    document.write("El número mayor es: "+num2)
}

//ejercicio 7 Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
document.write("ejercicio 7"+"<br/>");
var num1 = prompt("Digite número 1");
var num2 = prompt("Digite número 2");
var num3 = prompt("Digite número 3");

if(num1 > num2 ){
    if(num1 > num3){
        document.write("El número mayor es: "+num1);
    }else{
        document.write("El número mayor es: "+num3);
    }

}else if(num2> num3){
    document.write("El número mayor es: "+num2);
    }else{
        document.write("El número mayor es: "+num3);
    }
    
//ejercicio 8 Escribe un programa que pida un número y diga si es divisible por 2
document.write("ejercicio 8"+"<br/>");
var num1 = prompt("Digite numero 1");

var mod = num1 % 2;
if(mod == 0){
    document.write("El número: "+num1+" es divisible por 2");
}else{
    document.write("El número: "+num1+" NO es divisible por 2");
}


//ejercicio 9 Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
document.write("ejercicio 9"+"<br/>");

var frase = prompt("Digite la frase");
counter(frase);
 
 function counter(str){
    var vocals = 'aA';
    var vcontador = 0;
    
    for(var i=0; i< str.length; i++){
        if(vocals.indexOf(str[i]) !== -1){
            vcontador += 1;

        }
    }
    document.write("la palabra es: "+ frase+"<br/>");
    document.write("la palabra tiene "+vcontador+" letras a.");
 }
 
//ejercicio 10 Escribe un programa que pida una frase y escriba las vocales que aparecen
document.write("ejercicio 10"+"<br/>");

var frase = prompt("Digite la frase");
counter(frase);
 
 function counter(str){
    var l_str = str.length;

    for (let i = 0; i < l_str; i++) {
        if (str.substr(i,1) == "a" || str.substr(i,1) == "e" || str.substr(i,1) == "i" ||
        str.substr(i,1) == "o" || str.substr(i,1) == "u") {
            document.write(str.substr(i,1));
        }
        
    }    
 }

//ejercicio 11
document.write("ejercicio 11"+"<br/>");

var frase = prompt("Digite la frase");
counter(frase);
 
 function counter(str){
    var vocals = 'aeiouAEIOU';
    var vcontador = 0;
    
    for(var i=0; i< str.length; i++){
        if(vocals.indexOf(str[i]) !== -1){
            vcontador += 1;

        }
    }
    document.write("la palabra es: "+ frase+"<br/>");
    document.write("la palabra tiene "+vcontador+" Vocales.");
 }



//ejercicio 12 Escribe un programa que pida  una frase y escriba cuántas de las letras que tiene son vocales
document.write("ejercicio 12"+"<br/>");

var frase = prompt("Digite la frase");
document.write("la palabra es: "+ frase+"<br/>");
counter(frase,'aA');
counter(frase,'eE');
counter(frase,'iI');
counter(frase,'oO');
counter(frase,'uU');
 
 function counter(str,vlo){
     //'aeiouAEIOU'
    var vocals = vlo;
    var vcontador = 0;
    
    for(var i=0; i< str.length; i++){
        if(vocals.indexOf(str[i]) !== -1){
            vcontador += 1;
            //document.write(str[i]);

        }
    }
    
    document.write("la palabra tiene "+vcontador+" de la vocal "+ vlo+ "</br>");
 }


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


//ejercicio 14 //Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)

document.write("ejercicio 14"+"<br/>");
var num = prompt("Digite número");
divisible(num);


function divisible(num){
    
        if(num % 2 == 0 || num % 3 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0){
            if(num % 2 == 0){
                document.write("El número: "+num+" es divisible por 2.</br>");
            }
            if(num % 3 == 0){
                document.write("El número: "+num+" es divisible por 3.</br>");
            }
            if(num % 5 == 0){
                document.write("El número: "+num+" es divisible por 5.</br");
            }
            if(num % 7 == 0){
                document.write("El número: "+num+" es divisible por 7.</br>");
            }
        }else{
            document.write("El número: "+num+" NO es divisible por 2, 3, 5 o 7</br>");
        }
}



//ejercicio 15  Escribir un programa que escriba en pantalla los divisores de un número dado

var num = prompt("digite el numero");

divisor(num);

function divisor(num){
        for (let index = 2; index < num/2; index++) {
            if (num % index == 0) {
                document.write(index, ",");
            }
            
        }
}



//ejercicio 16 Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

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



//ejercicio 17 Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

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

