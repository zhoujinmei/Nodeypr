// Create a new index136.js file
// Define a mutants array and assign the following values
// Professor X
// Cyclops
// Iceman
// Angel
// Magneto
// Beast
// Phoenix
// Logan
// Gambit
// Iterate over each mutants item using forEach
// The objective is to create a string value with Iceman, Logan and Phoenix
// To create the string you need to get the names while iterating the mutants array
// Once the iteration is over show the generated string with the selected mutants names

var mutants=[
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'
        ];
mutants.forEach(function(heroes){
    if(heros=='Iceman'){
       mutants.toString('Iceman');
    }else if(heros=='Iceman'){
        mutants.toString('Iceman')
    }else if(heros='Logan'){
       mutants.toString('Logan')
    }else{console.log(`${index}: ${heroes}`)}
   });console.log(`${mutants.toString('Iceman')} : Iceman,${mutants.toString('Phoenix')} : Phoenx,${mutants.toString('Logan')} : Logan`)