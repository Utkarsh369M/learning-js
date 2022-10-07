                         /*Javascript Assignment 9

1. Carefully observe this example.
a) Is the InnerFunction() a closure?
b) What is output of this program

function OuterFunction()
{ var outerVariable = 100;
function InnerFunction() {
alert(outerVariable);
}
return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

a) Yes,InnerFunction() is a closure as it collects the value from the lexical scope 
of its parent outer function.
b) output:- 100

2. What is the difference between a closure and a scope ?

-> Closure relate to the inner function using the variable or functionality of the 
function outside whereas scope of the function refer to the functionality defined
within the function itself.

3. What is a lexical scope and how is it related to closure?

-> Lexical scope is the scope of the outside function(parent function) , so in closure
all the variable and functionalities of the outside function can be accessed by the 
function inside.This means due to closure a function can access its lexical scope.

4. Output of following closure ?
for (var i = 0; i < 3; i++) {
setTimeout(function log() {
console.log(i); // What is logged?
}, 1000);
}

-> 3 will be logged 3 times immediately after 1 second:-
3
3
3
as after 1 sec ,i stores the value 3 and function refer to 
the same copy all the 3 times.

*/

