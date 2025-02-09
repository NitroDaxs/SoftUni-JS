//This function checks if a given day of the week is the business working day and prints "open" or "closed" on the console.
function workingHours(hour, dayOfWeek) {
    switch (dayOfWeek) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
        case 'Saturday':
            if (hour >= 10 && hour <= 18) {
                console.log('open');
            }
            else {
                console.log('closed');
            }
            break;
        case 'Sunday':
            console.log('closed');
            break;
    }
}

