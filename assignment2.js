                        //Javascript Assignment 2

/*
1. Write a Javascript function to check whether a triangle is equilateral,
isosceles or scalene
*/

function triangle(side1,side2,side3)
{
    if((side1===side2)&&(side2===side3))
    {
        console.log("Triangle is equilateral");
    }
    else if((side1 !== side2)&&(side2 !== side3)&&(side1 !== side3))
    {
        console.log("Triangle is scalene");
    }
    else
    {
        console.log("Triangle is isosceles");
    }
}
triangle(50,50,20);


/*
2. Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.
*/


function grading(marks)
{
    switch(true)
    {
        case marks<=100 && marks>=90:
            console.log("S grade");
            break;
        case marks<90 && marks>=80:
            console.log("A grade");
            break;
        case marks<80 && marks>=70:
            console.log("B grade");
            break;
        case marks<70 && marks>=60:
            console.log("C grade");
            break;
        case marks<60 && marks>=50:
            console.log("D grade");
            break;
        case marks<50 && marks>=40:
            console.log("E grade");
            break;
        case marks<40 && marks>=0:
            console.log("Student has failed");
            break;
        default:
            console.log("Invalid marks");
    }
}
grading(92);


/*
3. Write a JavaScript program to find the sum of the multiples of 3 and 5
under 1000
*/

let sum1=0;
let sum2=0;
let sum3=0;
for(let i=3;i<=(1000/3);i+=3)
{
    sum1+=i;
}
for(let i=5;i<(1000/5);i+=5)
{
    sum2+=i;
}
for(let i=15;i<=(1000/15);i+=15)
{
    sum3+=i;
}
let result=sum1+sum2-sum3;
console.log(result);


/*
4. Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).
*/

function prime(num)
{
    let counter=0;
    for(let i=2;i<=(num/2);i++)
    {
        if((num%i)===0)
        {
            counter++;
        }
    }
    if(counter===0)
    {
        return 1;
    }
}
function factorial(num)
{
    let fact=1;
    for(let i=1;i<=num;i++)
    {
        fact*=i;
    }
    return fact;
}
console.log("Prime numbers between 1 and 10 and there factorials:")
function primefact(num1,num2)
{
    for(let i=num1+1;i<num2;i++)
    {
        if((prime(i))===1)
        {
            console.log(`The factorial of ${i} is ${factorial(i)}`);
        }              
    }
}
primefact(1,10);
