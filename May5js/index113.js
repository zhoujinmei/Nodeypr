// Create a new index113.js file
// Define the function getShapePerimiter that accepts 2 parameters: base and height
// If base and height are equal then calculate the perimeter of a square
// If base and height are not equal then calculate the perimeter of a rectangle
// This function returns a number that represents the shape perimiter
// Show the following output: %perimiter% is the shape perimiter
// If the perimeter is bigger than 100 then show the following output: The perimiter is to big
// Else show the following message: The perimiter is fine
// Call this function a couple of times with different values
// Test all posible cases

function getShapePerimiter(base,height){
    if(base==height){
        let perimeter=base*4;
        console.log(perimeter, ' is the shape perimiter');
        if(perimeter>100){
            console.log('The perimiter is too big');
        }else{
            console.log('The perimiter is fine');
        }
        return 1;
    }else{
        let perimeter=(base+height)*2;
        console.log(perimeter, ' is the shape perimiter ');
        if(perimeter>100){
            console.log('The perimiter is too big');
        }else{
            console.log('The perimiter is fine');
        }
        return 2;
    }
}

console.log(getShapePerimiter(6,6))
cosole.log(getShapePerimiter(3,5));
cosole.log(getShapePerimiter(28,28));