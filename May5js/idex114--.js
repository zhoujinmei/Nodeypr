// Create a new index114.js file
// Define a revert function that accepts a string parameter
// This function shows the reverted text parameter
// For example if you call the revert function with 'hello' the function will show: olleh
// Call this function using at least 5 different words :)

function revert(greeting){
    var result="";
    for(let i=greeting.length-1;i>=-1;i--){
    result+=greeting.slice(i,i+1);
    
 }console.log(result);
 
}
revert('java');
revert('Hello world');