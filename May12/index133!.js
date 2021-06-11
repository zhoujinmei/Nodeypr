// Create a new index133.js file
// Define a mutants array with the following values:
// Professor X
// Cyclops
// Iceman
// Angel
// Magneto
// Beast
// Phoenix
// Logan
// Gambit
// First part

// Iterate over the mutants items
// Show each mutant name
// Break the execution in case Magneto is part of the mutants list
// Second part

// Fin out Magneto position and remove it from the mutants array
// Iterate over the array without Magento on it and show each mutant name in upper case and the item position

var mutants=[
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit']
//part 1
    var i=0;
    while(i<9){
        console.log(mutants[i]);
        i++;
        if(mutants[i]=='Magneto'){
            break;
        }
    }

//part 2
var i='Magneto';
for(i=0;i<9;i++){
    var result=mutants[i];
    while(mutants[i]=='Magneto'){
        mutants.pop();
    }
    console.log(result);
}