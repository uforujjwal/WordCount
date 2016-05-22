// Chapter 5.

// 1.Flattening

// Solution:
var arrays = [[1, 2, 3], [4, 5], [6]];
//var str=[];
var output=arrays.reduce(function(a,b) {
    return a.concat(b);
},[]);
console.log(output);

// 2.Mother-child age difference

// Solution:
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var a=ancestry.filter(hasMother(person)
                      {
                	return byName[person.mother]!= null;
		      });
var b=a.map(diff(person)
            {
              return person.born - byName[person.mother].born;
            });
		   
console.log(average(b));

// 3.Historical life expectancy
// Solution:

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function eachcentury(a,group)
{
  var b={};
  a.forEach(function(inyear)
            {
            var grp=group(inyear);
  			if(grp in b) 
              b[grp].push(inyear) ;
            else  
              b[grp]=[inyear];
	    });
return b;
}

var eachcent=eachcentury(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for(var i in eachcent)
{
  var age=eachcent[i].map(function(person)
                          {
    				return person.died-person.born;
  			  });
  console.log(i+":"+average(age));
}

// 4.some and every

// Solution:
function every(a,predicate)
{
for(var i=0;i<=a.length-1;i++)
{
  if(!predicate(a[i])) return false;
  
}
  return true;
}
function some(a,predicate)
{
  for(var i=0;i<=a.length-1;i++)
  {
    if(predicate(a[i])) return true;
  }
  return false;
}


function jason(obj)
{
  var str="";
  if(typeof obj != "object")
    console.log("Error!! Not object!!"); 
  else    
    for(var prop in obj)
   // {
      str += "\""+prop + "\":" + obj[prop]+",";
      if(typeof obj[prop] == "object") 
      {
         return jason(obj[prop]);
      }
    //}
  return console.log(str);  
}
var obj = {here: {is: 5}};//, object: 2};
jason(obj);
//console.log(str);
//console.log(JSON.stringify(obj));
//var obj1 = {here: 1, object: 2};
//jason(obj1);
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// ? true*/



