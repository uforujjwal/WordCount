// Chapter 4.

// 1.Sum(range(x,y,z));

// Solution:
function range(start,end,step)
{ 
  var a=[],s=start;
  if(step==null) step=1;
  for(var i=0;i<=(end-start)/step;i++)
  {    
 	a[i]=s;
    s+=step;
  }
  return a;
}
function sum(range)
{
  var s=0;
  for(var i=0;i<range.length;i++)
   s+=range[i];
  return s;
}
// Output:
console.log(range(1, 10));
console.log(range(2, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
console.log(sum(range(1, 10,2)));

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [2, 4, 6, 8, 10]
// [5, 4, 3, 2]
// 55
// 25

// 2.Reverse array

// Solution:
function reverseArray(a)
{
  var b=[];
    for(var i=a.length-1;i>=0;i--)
  { 
    b.push(a[i]);
  }
    return b;
}

function reverseArrayInPlace(arrayValue)
{  
  var b;
  for(var i=0;i<arrayValue.length/2;i++)
  {
    b=arrayValue[i];
    arrayValue[i]=arrayValue[arrayValue.length-1-i];
    arrayValue[arrayValue.length-1-i]=b;    
  }
    return arrayValue;
} 
// Output:

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5,6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// ["C", "B", "A"]
// [6, 5, 4, 3, 2, 1]

// 3.arrayToList,listToArray,prepend

// Solution:

function arrayToList(a)
{ 
  var list=null;
  for(var i=a.length-1;i>=0;i--)
  {
  list = {value:a[i],rest: list};
  }
  return list;
}

function listToArray(l)
{
  var a=[];
  while(l)
  {
    a.push(l.value);
    l=l.rest;
  }
  return a;
}
function prepend(a,l)
{
  l={value:a,rest:l};
  return l;
}

function nth(l,n)
{
  var count=0;
  while(l.rest)
  {    
    if(count==n)
      break;
    l=l.rest;
    count ++;
  }
  return l.value;
}

// output:
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(listToArray({value: 10, rest: {value: 20, rest: null}}));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

// {value: 10, rest: {value: 20, rest: null}}
// [10, 20, 30]
// [10, 20]
// {value: 10, rest: {value: 20, rest: null}}
// 20

// 4.Deep Comparison

// Solution:

function deepEqual(obj1,obj2)
{
 // console.log(typeof(obj2));
  if(obj1===obj2)
   return true ;
  else if(JSON.stringify(obj1)===JSON.stringify(obj2))
              return true;          
  else return false;
}

// Output:
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

// true
// false
// true



