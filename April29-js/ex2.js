//if-else
var number = 23;
if(number > 65){
console.log('Senior citizen')
}
else if(number>=18 && number<65){
    console.log('Adult')
}

else {
    console.log('Minor')
}

//ternary operator
var total = 20;
var message =(total === 20) ? 'pass' : 'Fail'//only instead of if-else 
//(total === 20) 是If;pass is true statement; fail is false statement;