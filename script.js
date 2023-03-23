function calcPlus(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + result + ".";
}   
function calcMinus(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("result").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + result + ".";
}   

function calcMultiply(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 * num2;
    document.getElementById("result").innerHTML = "The product of " + num1 + " and " + num2 + " is " + result + ".";
}   

function calcDivide(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 / num2;
    document.getElementById("result").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + result + ".";
}   

function calcModulus(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 % num2;
    document.getElementById("result").innerHTML = "The remainder of " + num1 + " and " + num2 + " is " + result + ".";
}   