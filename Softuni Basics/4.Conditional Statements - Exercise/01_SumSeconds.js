//This function takes three numbers and adds them together to get the total time in seconds and convert to minutes.
function sumSeconds(firstTime, secondTime, thirdTime) {
    let totalTime = firstTime + secondTime + thirdTime;
    let timeInMinutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${timeInMinutes}:0${seconds}`)
    }
    else {
        console.log(`${timeInMinutes}:${seconds}`)
    }
}

sumSeconds(35, 45, 44);
sumSeconds(22, 7, 34);
sumSeconds(50, 50, 49);