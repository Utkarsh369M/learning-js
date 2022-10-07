                      /*Javascript Assignment 8

1. Can we put duplicate values in the set object ?

No, we cannot put duplicate values in set as its stores only unique values. 

2. Write the syntax for
a) Creating new set object
b) Adding new element to set object
c) Deleting element from set object

a)
let values = new Set();
b)
values.add("Utkarsh");
values.add(5);
values.add(6);
c)
values.delete("Utkarsh");

3. Create a set object with four random numbers from 0 to 10. Check if this
newly created set object has 8 in it. Use set object methods.

let nums = new Set();
nums.add(5);
nums.add(3);
nums.add(7);
nums.add(9);
console.log(nums.has(8));

*/
