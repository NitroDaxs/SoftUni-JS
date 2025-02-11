//This function checks if a given number is less than 100, between 100 and 200 or greater than 200.
function number100to200(input) {
    if (input < 100) {
        console.log('Less than 100');
    }
    else if (input >= 100 && input <= 200) {
        console.log('Between 100 and 200');
    }
    else {
        console.log('Greater than 200');
    }
}

number100to200(95);
number100to200(120);
number100to200(210);  