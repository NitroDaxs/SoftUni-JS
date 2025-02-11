//This function prints the outfit and shoes depending on the temperature and time of the day.
function outfitPicker(temp, timeOfDay) {
    let outfit = '';
    let shoes = '';

    switch (timeOfDay) {
        case 'Morning':
            if (temp >= 10 && temp <= 18) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            }
            else if (temp > 18 && temp <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            else {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            }
            break;
        case 'Afternoon':
            if (temp >= 10 && temp <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            else if (temp > 18 && temp <= 24) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            }
            else {
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
            }
            break;
        case 'Evening':
            if (temp >= 10 && temp <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            else if (temp > 18 && temp <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            else {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            break;
    }

    console.log(`It's ${temp} degrees, get your ${outfit} and ${shoes}.`);
}

outfitPicker(12, 'Afternoon');
outfitPicker(30, 'Evening');
outfitPicker(22, 'Afternoon');