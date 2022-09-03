                        //Javascript Assignment 4

/*
This assignment will help you interpret mathematical relationships both
algebraically and geometrically.

Create a function that takes a number (step) as an argument and returns the
number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Take input from the user in the function parameter and return the output
using the return statement.

examples-
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21
matchHouses(87) ➞ 436

}
*/

//Approch 1

function matchsticks(step)
{
    let num = 6+((step-1)*5);
    return num;
}
let answer=matchsticks(1);
console.log(answer);

//Approch 2 ,using arrow function

let matchstick = (step) => 6+((step-1)*5)
let result = matchstick(87);
let answer2 = matchstick(4);
console.log(result);
console.log(answer2);


