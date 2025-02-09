//This function calculates if the student is on time for the exam and prints the appropriate message.
function examTime(examHour, examMinute, arrivalHour, arrivalMinute) {
    let examTimeInMinutes = examHour * 60 + examMinute;
    let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinute;
    let difference = Math.abs(arrivalTimeInMinutes - examTimeInMinutes);
    var hours = Math.floor(difference / 60);
    var minutes = (difference % 60).toString().padStart(2, '0');

    if (arrivalTimeInMinutes > examTimeInMinutes) {
        if (difference > 59) {
            console.log(`Late ${hours}:${minutes} hours after the start`);
        }
        else {
            console.log(`Late ${difference} minutes after the start`);
        }
    } else if (arrivalTimeInMinutes >= examTimeInMinutes - 30) {
        if (arrivalTimeInMinutes === examTimeInMinutes) {
            console.log(`On time`);
        }
        else {
            if (difference > 59) {
                console.log(`On time ${hours}:${minutes} hours before the start`);
            }
            else {
                console.log(`On time ${difference} minutes before the start`);
            }
        }
    } else {
        if (difference > 59) {
            console.log(`Early ${hours}:${minutes} hours before the start`);
        }
        else {
            console.log(`Early ${difference} minutes before the start`);
        }
    }
}

examTime(9, 30, 9, 50);
examTime(9, 0, 10, 30);
examTime(9, 0, 8, 30);
examTime(16, 0, 15, 0);