                  /*Javascript Assignment 10

1. Are Higher Order functions and Call back functions the same ? If not,
briefly explain about both functions.

-> No, higher order fumctions and call back functions are different.
Call back functions:- functions which are passed as arguments  to the other function is called callback function.
these are used to make asynchorous operations in javascript.
Higher order functions:- functions which contains a callback function,or any other functions for there operations
are higher order functions.

2. Is filter a Higher Order function in Javascript ? If yes, why ?

Yes, filter is a higher order function as it can take callback function as its argument to filter the values from 
the array.

3. Give an example of a Higher Order function and a call back function
used in the same program.

function pro(a,b,handle)
{
    let result= a*b;
    handle(result);
}
function print(result)
{
    console.log(result);
}
pro(4,5,print);
Here pro is the higher order function.
    handle is the call back function. 

4. Carefully check the example below:
a) What will be the output of this program ?
b) Which function is a Higher Order function here ?
const names= ['John', 'Tina','Kale','Max']
function useFunction(arr,fn){
for(let i=0; i<arr.length; i++){
fn(arr[I]);
}
}
function argFn (name){
console.log("Hello " + name );
}
useFunction(names,argFn);

a) I is not defined.There should be i.
b) useFunction is the higher order function in this program.
*/
