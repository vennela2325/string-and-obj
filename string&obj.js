var astring=(" hello")
var bstring=("world ")
console.log(astring.trimStart());
console.log(bstring.trimEnd());
var c=astring.concat(bstring)
console.log(c);
var duppercase=c.toUpperCase();
console.log(duppercase);
var extract=c.slice(3,8);
console.log(extract);
var index=c.lastIndexOf(bstring);
console.log(index);
console.log(duppercase.toLowerCase());
var veg="t";
var concatstring= veg.concat("amazing world");
console.log(concatstring);
var upper=concatstring.toUpperCase();
console.log(upper);
var  fruit=" banana ";
var fruittrim=fruit.trim();
console.log(fruittrim);
var sentence= "hello there, how are you";
var words = sentence.split(" ");
var index=words.indexOf("are");
console.log(index);
var str1 = "abcdef";
var str2 = "ghijkl";


var firstPart = str1.slice(0, 3);
var lastPart = str2.slice(-3);   
var combined = firstPart + lastPart;
var result = combined[0].toUpperCase() + combined.slice(1, -1) + combined.slice(-1).toUpperCase();
console.log(result); 
