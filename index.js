/*
//ejercicio 1
alert("hello world");


//ejercicio 2
document.write("ejercicio 2"+"<br/>");
document.open();
document.write("hello world<br/>");
document.close();

//ejercicio 3
document.write("ejercicio 3"+"<br/>");
document.write(3+5+"<br/>");

//ejercicio 4
document.write("ejercicio 4"+"<br/>");
var nombre = prompt("Digite su nombre");
document.write("hola "+nombre+"<br/>");

//ejercicio 5
document.write("ejercicio 5"+"<br/>");
var num1 = prompt("Digite numero 1");
var num2 = prompt("Digite numero 2");
var resultado = (parseInt(num1))+(parseInt(num2));
document.write(`El resultado es: ${resultado}`+"<br/>");

document.write("ejercicio 6"+"<br/>");
//ejercicio 6
document.write("ejercicio 6"+"<br/>");
var num1 = prompt("Digite numero 1");
var num2 = prompt("Digite numero 2");

if(num1 > num2){
    document.write("El numero mayor es: "+num1);
}else{
    document.write("El numero mayor es: "+num2)
}

//ejercicio 7
document.write("ejercicio 7"+"<br/>");
var num1 = prompt("Digite numero 1");
var num2 = prompt("Digite numero 2");
var num3 = prompt("Digite numero 3");

if(num1 > num2 ){
    if(num1 > num3){
        document.write("El numero mayor es: "+num1);
    }else{
        document.write("El numero mayor es: "+num3);
    }

}else if(num2> num3){
    document.write("El numero mayor es: "+num2);
    }else{
        document.write("El numero mayor es: "+num3);
    }
    
//ejercicio 8
document.write("ejercicio 8"+"<br/>");
var num1 = prompt("Digite numero 1");

var mod = num1 % 2;
if(mod == 0){
    document.write("El número: "+num1+" es divisible por 2");
}else{
    document.write("El número: "+num1+" NO es divisible por 2");
}


//ejercicio 9
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
 */
//ejercicio 10
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

