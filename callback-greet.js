//function that takes a name and a callback function
function greet(name,callback){
console.log("Hi "+name);
//Executes the callback after greeting
callback();
}
//callback function
function afterGreet(){
console.log("Welcome!");
}
//call greet function with a name and a callback
greet("Mishal",afterGreet);
