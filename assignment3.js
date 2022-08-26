                      //Javascript Assignment 3

/*
1. Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10
*/

let count=1;
for(let i=1;i<=4;i++)
{
    let string=" ";
    for(let j=1;j<=i;j++)
    {
        string+=count+" ";
        count++;
    }
    console.log(string);
}


/*
2. Write a program to find whether a given number is armstrong number or

not-
The Armstrong number is a number that is equal to the sum of cubes of

its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
numbers. Let's try to understand why 153 is an Armstrong number.
153 = (1*1*1)+(5*5*5)+(3*3*3) where:
(1*1*1)=1
(5*5*5)=125
(3*3*3)=27
So:
1+125+27=153
*/

let num=370;
let temp=num;
let sum=0;
while(temp!==0)
{
    let d= parseInt(temp%10);
    sum+=(d*d*d);
    temp=parseInt(temp/10);
}
if(num===sum)
{
    console.log("The number is armstrong");
}
else
{
    console.log("The number is not armstrong");
}


/*
3. Write a program to find whether a given number is special number or

not-
If the sum of the factorial of digits of a number (N) is equal to the

number itself, the number (N) is called a special number.
eg- 145 is a special number
Logic- 1! + 4! + 5!= 1+24+120 i.e 145
*/


function factorial(num)
{
    let fact=1;
    for(let i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    return fact;
}
let sum=0;
let num=145;
let temp=num;
while(temp!==0)
{
    let d= parseInt(temp%10);
    sum+=factorial(d);
    temp=parseInt(temp/10);
}
if(num===sum)
{
    console.log("The number is special number");
}
else
{
    console.log("The number is not special number");
}

