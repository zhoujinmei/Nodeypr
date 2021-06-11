// Create a new index119.js file
// Define the following array:
// const data = [42, true, function() {return 'The meaning of life is: '}];
// If the second item from data is true then show the following output using the first and last items from the data array:
// The meaning of life is: 42

const data=[42,true,function(){
    return 'The meaning of life is: '
}];
var str1=data[0];
var str2=data[1];
var str3=data[2];
if(str2==true){
    console.log(str3(),str1);
    }
    else{
    console.log('false')
};
