//This function checks if a given number is in the range [-100, 100] and not 0.
function numberInRange(input) {
    if (input >= -100 && input <= 100 && input != 0) {
        console.log('Yes');
    }
    else {
        console.log('No');
    }
}

numberInRange(50);
numberInRange(150);
numberInRange(-150);
numberInRange(0);