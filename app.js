// Question # 01
// var case1 = prompt ("Please Enter Value");

// if (case1 == ) 


// Question # 02
var num1= prompt ("Enter First Number");
var num2= prompt ("Enter Second Number");

if (num1 > num2){
    document.write (num1 + " is Greater");
} else if (num1 < num2){
    document.write (num2 + " is Greater");
} else if (num1 == num2){
    document.write ("Both Value are Equals")
}

// Question # 03
var value1 = prompt("Enter Number");

if (value1 > 0) {
    document.write("The Value is Positive");
} else if (value1 < 0) {
    document.write("The Value is Negative");
} else if (value1 == 0) {
    document.write("The Value is Zero");
} else {
    document.write("Entered Value is not a Number");
}

// Question # 04
var x = prompt ("Enter Letter");
{ 
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') 
        document.write("<h1>True</h1>"); 
    else
        document.write("<h1>False</h1>"); 
} 

// Question # 05
var pass1= prompt ("Please Enter Password");
var pass3= "hello11";

if (pass1 === pass3){
    alert ("Wohoo! You Have Entered Correct Password")
} else if (pass1 != pass3) {
    alert ("“Incorrect password”")
}else {
    prompt ("Please Enter Password");
}

// Question # 06
var hour = prompt ("Enter a Number");
if (hour < 18) {
document.write (greeting = "<h1>Good day</h1>");
} else {
    document.write(greeting = "<h1>Good Evening</h1>");
}

// Question # 07
var time = prompt ("Enter Current Time In 24 Hour Format");

if (time >= "0000" && time < 1200) {
    document.write ("<h1>Good Morning</h1>")
} else if ( time>= "0000" && time < 1700){
    document.write ("<h1>Good Afternoon</h1>")
}else if (time >= 1700 && time < 2100){
    document.write ("<h1>Good Evening</h1>")
}else if (time >= 2100 && time <= 2359){
    document.write ("<h1>Good Night</h1>")
}else {
    document.write ("<h1>Enter Correct Time</h1>")
}

