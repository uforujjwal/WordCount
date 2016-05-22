var jason=function(obj)
{
  if (typeof obj === "string")
  {
    return "\""+obj+"\"";
  }
  if (typeof obj === "number"||typeof obj === 'boolean')
  {
    return obj;
  }
  if (obj=== null)
  {
    return "null";
  }
  if(obj === undefined || obj === 'function')
  {
    return ;
  }  
  if(typeof obj  === "object" && obj.constructor !== Array)
  {
    var ar = [];
    Object.keys(obj).forEach(function(prop) 
      {
      var pr = jason(obj[prop]);
      if (pr !== null) 
      {
        ar.push("\"" + prop + "\":" + pr);
  	  }
    });
    return "{" + ar.join(",") + "}";
  }
  if(obj.constructor === Array)
  {
    if (obj.length)
    {
      var ar = [];
      for (var i = 0; i < obj.length; i++) 
      {
        ar.push(jason(obj[i])); 
      }
      return "[" + ar.join(",") + "]";
    } 
    else return "[]"; 
  }
};
var obj = [{Name1: "John",Age1: 10,Address1: {Street: "Bakerloo", City: "London"},
employees:[{firstName:"John", lastName:"Doe"},{firstName:"Anna", lastName:"Smith"},
{firstName:"Peter", lastName:"Jones"}],Name2: "Mayer",Age2: 20,Address2:
{Country: "England"},Employed: false,status: null}];
 
console.log(jason(obj));
if(JSON.stringify(obj) === jason(obj))
  console.log("Correct!!");
  else
 console.log("Try again and obtain:\n"+JSON.stringify(obj));