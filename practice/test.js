let func1 = function oneFunc(){
    console.log("function1");
 }
 let func2 = function twoFunc(){
    console.log("function2");
 }
 let func3 = function threeFunc(){
    console.log("function3");
 }

let functionsAsVariables = [func1,func2,func3];
//forEach() method execute once for each array element
functionsAsVariables.forEach(function(element)
{
    element();
   //console.log(ele);
})
//----------------------------------------
function outerFunc(){
    return innerFunc;
 }
 function innerFunc()
 {
    console.log("This is inner function");
 }
 let result = outerFunc();
console.log(result);
//calling inner function 
result();