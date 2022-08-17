//1. Write a program to find whether a given year is a leap year or not.

let year = 2022;
if((year%4)===0 && (year%100)!==0 || (year%400)===0)
{
    console.log("It is a leap year");
}
else
{
    console.log("It is not a leap year");
}


/*2. Write a JavaScript program to convert temperatures to and from Celsius,
Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C*/


let tempinc = 60;
let ans = 9*(tempinc/5)+32;
console.log(tempinc+"℃  is "+ans+"℉");

let tempinf = 45;
let ans2 = (5/9)*(tempinf-32);
console.log(tempinf+"℉  is "+ans2+"℃");


//3. Write a program to find the factorial of a number.


let factorial=1;
let num=6;
for(let i=1;i<=num;i++)
{
    factorial=factorial*i;
}
console.log("Factorial of the number is " + factorial);

