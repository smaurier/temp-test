/*
 * Write a function that prints the temperature closest to 0 among input data.
 * If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5)
*/
const temps = [
    '1 -1 -3 3 2',
    '-4 -2 -111',
    '12 -1 3 6 2 9',
    '12 2 6 9 -2 7',
    '-5 -4 -2 7 -20 4 2 18 11 5',
    ''
];
// ---

// Receive string of temps one after each other
function outputTemp(tempRow) {
    // Must output Number
    const tempCloseToZero = closestToZero(tempRow)
    return tempCloseToZero;
}

function closestToZero(numbers) {
    const arrayNumbers = numbers.split(' ')
    let closest = 0;

    if(!arrayNumbers || arrayNumbers[0]===""){
        return closest;
    }

    closest = arrayNumbers.reduce((a, b) => Math.abs(b) < Math.abs(a) ? a : b);

    return parseInt(closest);
}

