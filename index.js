/*
//ejercicio 1 Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
alert("hello world");


//ejercicio 2 Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
document.write("ejercicio 2"+"<br/>");
document.open();
document.write("hello world<br/>");
document.close();

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
document.write("El resultado es: "+(parseInt(num1)+parseInt(num2));


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
 
//ejercicio 11
document.write("ejercicio 10"+"<br/>");

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

//ejercicio 10 Escribe un programa que pida una frase y escriba las vocales que aparecen
document.write("ejercicio 10"+"<br/>");

var frase = prompt("Digite la frase");
counter(frase);
 
 function counter(str){
    var vocals = 'aeiouAEIOU';
    var vcontador = 0;
    
    for(var i=0; i< str.length; i++){
        if(vocals.indexOf(str[i]) !== -1){
            vcontador += 1;
            document.write(str[i]);

        }
    }
    document.write("la palabra es: "+ frase+"<br/>");
    document.write("la palabra tiene "+vcontador+" Vocales.");
 }



//ejercicio 12 Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
document.write("ejercicio 10"+"<br/>");

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
*/


