                         //Javascript Assignment 6

/*
1) Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
○ It is a subclass of Rectangle.
○ It contains a constructor and no other methods.
○ It can use the Rectangle class' area method to print the area
of a Square object.
*/


class Rectangle
{
    constructor(length,breadth)
    {
        this.length=length;
        this.breadth=breadth;
    }
    area()
    {
        let result=(this.length)*(this.breadth);
        console.log(result);
    }
}
class Square extends Rectangle
{
    constructor(length,breadth)
    {
        super(length,breadth);
    }
}
let obj1=new Rectangle(3,5);
obj1.area();
let obj2=new Square(5,5);
obj2.area();

/*
2) Write a javascript function find_largest to return the nth largest number

in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]

find_largest(3) will return third largest number from the above array -
which is 8.
*/


let values=[3,45,6,7,23,5,7,8];
values.sort((a,b)=>b-a);
let find_largest=(n)=>console.log(values[n-1]);
find_largest(3);


/*
3) Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8.
*/


function computeDash(num)
{ 
    let str="";
    let values = Array.from(String(num));
    for(let i=0;i<values.length;i++)
    {
        if((((values[i]%2)===0))&&((values[i+1]%2)===0))
        {
            str+=values[i]+"-";
        }
        else
        {
            str+=values[i];
        }
    }
    console.log(str);
}
computeDash(1025468);