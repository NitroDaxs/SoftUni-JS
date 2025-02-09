//This function returns the day of the week for a given number.
function daysFromInput(input) {
    switch (input) {
        case 1:
            return console.log('Monday');
        case 2:
            return console.log('Tuesday');
        case 3:
            return console.log('Wednesday');
        case 4:
            return console.log('Thursday');
        case 5:
            return console.log('Friday');
        case 6:
            return console.log('Saturday');
        case 7:
            return console.log('Sunday');
        default:
            return console.log('Error');
    }
}

daysFromInput(3);