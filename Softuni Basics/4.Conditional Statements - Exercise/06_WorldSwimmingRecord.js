//This fuction calculates if the record is broken and prints the appropriate message.
function swimmingRecord(recordInSeconds, distanceMeters, secondsPerMeter) {
    const secondsPer15Meters = 12.5;
    let totalSeconds = distanceMeters * secondsPerMeter;
    let extraTime = Math.floor(distanceMeters / 15) * secondsPer15Meters;
    totalSeconds = extraTime + totalSeconds;

    if (totalSeconds >= recordInSeconds) {
        console.log(`No, he failed! He was ${(totalSeconds - recordInSeconds).toFixed(2)} seconds slower.`);
    }
    else {
        console.log(`Yes, he succeeded! The new world record is ${totalSeconds.toFixed(2)} seconds.`);
    }
}

swimmingRecord(10464, 1500, 20);
swimmingRecord(55555.67, 3017, 5.03); 