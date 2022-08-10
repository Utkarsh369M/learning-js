//1)calculator with all basic operations:

let num1=5;
let num2=10;
let product= 5*10;
let sum= 5+10;
let difference =10-5;
let quoitent=10/5;
console.log(product);
console.log(sum);
console.log(difference);
console.log(quoitent);


//2)Printing all even numbers from 1 to 100:

let i=2;
console.log("Even numbers from 1 to 100:")
while(i<=100)
{
    console.log(i);
    i+=2;
}

//3)Given number is prime or not:

let num=39;
let i=2;
let counter=0;
while(i<(num/2))
{
    if((num%i)===0)
    {
       counter++;
    }
    i++;
}
if(counter>0)
{
    console.log("The number is not prime");
}
else
{
    console.log("The number is prime");
}

