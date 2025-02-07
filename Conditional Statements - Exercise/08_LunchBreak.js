//This function calculates if there is enough time to watch a movie on lunch brake and prints the appropriate message.
function lunchBreakMovie(movieName, episodeDuration, breakDuration) {
    let lunchTime = breakDuration / 8;
    let restTime = breakDuration / 4;

    let timeNeeded = episodeDuration + lunchTime + restTime;

    if (timeNeeded > breakDuration) {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(timeNeeded - breakDuration)} more minutes.`)
    }
    else {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(breakDuration - timeNeeded)} minutes free time.`)
    }
}

lunchBreakMovie("Game of Thrones", 60, 96);
lunchBreakMovie("Teen Wolf", 48, 60);