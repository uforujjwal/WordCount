// Chapter 2.
// 1.Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// Solution:
var h="#";
for(var i=1;i<=7;i++)
{
  console.log(h);
  h +="#";
}

// 2.FizzBuzz


var b="";
for(var i=1;i<=100;i++)
{
  b=i;
  if(i%3==0)
  {
        
    b="Fizz";
  }
  if(i%5==0)
  {
    
  	b="Buzz";
  }
  if(i%5==0 && i%3==0)
  {
    b="FizzBuzz";
  }
    
  console.log(b);
  
}

// 3.Chess board
// Solution:

var n=8,m=8;
for(i=1;i<=n;i++)
{ 
  a="";
  for(j=1;j<=m;j++)
 {
   if((i+j)%2==0)
   	 a +=' '; 
   else 
     a +='#';
   //console.log(a);
 }
   console.log(a);
    
}

// Chapter 3

// 1.Min(n1,n2)

function min(n1,n2)
{
  if(n1<n2) return n1;
  else return n2;
}

// 2.Recursion

function isEven(n)
{
  if(n<0)  n=(n*-1);
  if(n==0) return true;
  else if(n==1) return false;
  else return isEven(n-2);
}

// 3.Bean counting
// 3.1
function countBs(s1)
{
  var count=0;
  for(var i=0;i<s1.length;i++)
    if(s1.charAt(i)=='B') count++;
  return count;
}
// 3.2
function countBs(s)
{
  return countChar(s,"B");
}

function countChar(s1,s2)
{
  var count=0;
  for(var i=0;i<s1.length;i++)
    if(s1.charAt(i)==s2) count ++;
  return count;
}







