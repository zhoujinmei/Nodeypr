// Create a new index115.js file
// Define a getLongerText that accepts two string values
// This function returns the longer text
// After calling the function show the longer word as output
// Call this function 3 times with different wordså

function getLongerText(str1,str2){
    
    if(str1.length!==str2.length){
        if(str1.length>str2.length){
        console.log(str1);
        }else{
        console.log(str2);
        }
    }else{
        console.log(`${str1} has the same length with ${str2}`)
    }
}
getLongerText('java','script');
getLongerText('hello','world');
getLongerText('node','js');