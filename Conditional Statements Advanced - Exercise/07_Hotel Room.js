//This function calculates the accomodation price depending on the month and prints it on the console.
//Was unable to find the edge case so I have only 90/100 in Alpha Judge.
function accomodation(month, nights) {
    let studioPrice = 0.0;
    let apartmentPrice = 0.0;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = 50 * nights;
            apartmentPrice = 65 * nights;
            break;
        case 'June':
        case 'September':
            studioPrice = 75.20 * nights;
            apartmentPrice = 68.70 * nights;
            break;
        case 'July':
        case 'August':
            studioPrice = 76 * nights;
            apartmentPrice = 77 * nights;
            break;
    }

    if (nights > 7 && nights <= 14 && month === 'May' || month === 'October') {
        studioPrice -= studioPrice * 0.05;
    }
    else if (nights > 14 && month === 'May' || month === 'October') {
        apartmentPrice -= apartmentPrice * 0.10;
        studioPrice -= studioPrice * 0.30;
    }
    else if (nights > 14 && month === 'June' || month === 'September') {
        studioPrice -= studioPrice * 0.20;
        apartmentPrice -= apartmentPrice * 0.10;
    }
    else if (nights > 14) {
        apartmentPrice -= apartmentPrice * 0.10;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}

accomodation('May', 15);
accomodation('August', 20);
accomodation('June', 14);