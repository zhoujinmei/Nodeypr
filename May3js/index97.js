
// Create a new index97.js file
// Write the code to show numbers bettwen 10000 and 0 using for
// Show all the numbers as output
// Every 10 numbers show the number but with the following format: ** number **
// Example:

// 10000
// 9999
// 9998
// 9997
// 9996
// 9995
// 9994
// 9993
// 9992
// 9991
// ** 9990 **
// 9989
// and so on...
// 0
for(n=10000;n>=0;n--){
    if(n%10==0 && n!==10000 && n!==0){
        console.log(`** ${n} **`);
    }
    else{
    console.log(n);}
}
