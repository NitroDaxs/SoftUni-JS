function timeCalculation(hour, minute) {
    if (minute + 15 < 60) {
        minute += 15;
    }
    else {
        if (hour < 23) {
            hour++;
        }
        else {
            hour = 0;
        }
        minute = minute + 15 - 60;
    }

    if (minute < 10) {
        console.log(`${hour}:0${minute}`);
    }
    else {
        console.log(`${hour}:${minute}`);
    }
}

timeCalculation(1, 46);
timeCalculation(0, 1);
timeCalculation(23, 59);
