                          /*Javascript Assignment 7

1. Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice Output: Ice
Input:Icecream Output:Icec...

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment</title>
</head>
<body>
    <script>
        var S = prompt("Please enter any string");
        var len = S.length;
        if(len<=4)
        {
            document.write(S);
        }
        else
        {
            var ans= S.slice(0,4);
            var answer= ans+("...");
            document.write(answer);
        }
    </script>
</body>
</html>

2. Input a String S with multiple words, and remove whitespaces and
output the result -
Input: “Hii Boy” Output: “HiiBoy”

<body>
    <script>
        var S = prompt("Please enter any string");
        var len=S.length;
        let values=S.split("");
        values.filter(a => a!=' ')
              .forEach(a => document.write(a)); 
    </script>
</body>
</html>

3. Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy” Output: “Boy Hii”

<body>
    <script>
        var S = prompt("Please enter any string");
        let values=S.split(" ");
        let t = values[0];
        values[0]=values[1];
        values[1] = t;
        values.forEach(a=> document.write(a+" ")); 
    </script>
</body>

4. Input a String S with a word, and replace character “a” with “x” and
display the result -
Input: “apple” Output: “xpple”

<body>
    <script>
        var S = prompt("Please enter any string");
        S=S.replace(/a/gi,"x");
        document.write(S);
    </script>
</body>
</html>

5. What string method can be used to convert string into array ?

=>SPLIT method.
str.split(" ");   //array of words
str.split("");    //array of letters

6. What string method can be used to check the occurrence of a specified
text in a string?

There are three methods:-
str.includes();  //return true or false
str.search();    //return 0 of if not present then -1 will be returned
str.match();     //return the string or if not present then null will be returned

7. How can you break a string to a newline in Javascript ?

In javascirpt you can use "\n" escape squence ,and in html use <br> tag to break a string to newline.

8. Write a Javascript function to test whether the first character of a string
is lowercase.

 <script>
       var S = prompt("Please enter any string");
       var a = S.charCodeAt(0);
       function islow(b)
       {
           if(a>=97 && a<=122)
           {
               return 1;
           }
           else
           {
               return 0;
           }
       }
       var c=islow(a);
       document.write(c);
    </script>

9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.
How will you handle that ?

<body>
    <script>
       var S = prompt("Please enter any string");
       var a = S.toLowerCase();
       if(a.localeCompare("yes")==0)
       {
           document.write("correct");
       }
       else
       {
           document.write("incorrect");
       }
    </script>
</body>

10. Given a String S, achieve following tasks
a) Convert the String into upper case.
b) Convert only the first character to uppercase.
c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string
                             
a) 
 <script>
       var S = prompt("Please enter any string");
       var a = S.toUpperCase();
       document.write(a);
    </script>

b)
 <script>
       var S = prompt("Please enter any string");
       var len= S.length;
       var a = S[0].toUpperCase();
       var b=S.slice(1,len);
       document.write(a+b);
    </script>
    
c)    
 <script>
       var S = prompt("Please enter any string");
       var a = S.toLowerCase();
       document.write(a);
    </script>

d) 
<body>
    <script>
       var S = prompt("Please enter any string");
       var len = S.length;
       var str = S.slice(0,(len/2));
       var str2 = S.slice((len/2),len);
       var answer = str2+str;
       document.write(answer);
    </script>
</body>

e)
<body>
    <script>
       var S = prompt("Please enter any string");
       var len = S.length;
       let ans=0;
       let count;
       for(let i=0;i<len;i++)
       {
           count=0;
           for(let j=i;j<len;j++)
           {
               if(S.charCodeAt(i)==S.charCodeAt(j))
               {
                   count++;
               }
            }
            if(count==2)
            {
                ans++;
            }
       }
       document.write(ans);
    </script>
</body>

f)
<body>
    <script>
       var S = prompt("Please enter any string");
       var values= S.split("");
       var len = S.length;
       for(let i=0;i<len;i++)
       {
           document.write(values[len-i-1]);
       }
    </script>
</body>
*/