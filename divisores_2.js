var num1 = prompt("digite el numero");
var num2 = prompt("digite el numero");
var bajo;
var index; 

if (num1 < num2) {
    bajo = num1;
}else{
    bajo = num2;
}

for (index = 2; index < bajo / 2; index++) {
    if (num1 % i === 0 && num2 % i === 0) {
        document.write(index, ",");
    }
            
}

