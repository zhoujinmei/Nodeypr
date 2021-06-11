// Create a new index116.js file
// Define the getHexaColor function that accepts one of the following web colors as parameter:
// white
// black
// blue
// green
// yellow
// pink
// This function returns the hexa color for the given parameter color:
// param: white, return value: #FFFFFF
// param: black, return value: #000000
// param: blue, return value: #0b24fb
// param: green, return value: #0e7e12
// param: yellow, return value: #fffd38
// param: pink, return value: #fec1cc
// The returned value must be a string
// Call the function using each posible value as parameter
// Show each hexa color as output

function getHexaColor(color){
    if(color=='white'){
    return '#FFFFFF';
    }else if(color=='black'){
        return '#000000';
    }else if(color=='blue'){
        return '#0b24fb';
    }else if(color=='green'){
        return '#0e7e12';
    }else if(color=='yellow'){
        return '#fffd38';
    }else if(color=='pink'){
        return 'fec1cc';
    }else{
        return 'Sorry,there is no color value for this color'
    }
}

var result=getHexaColor('red');
console.log(result);
result=getHexaColor('white');
console.log(result);