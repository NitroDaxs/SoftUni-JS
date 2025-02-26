function steps(input){
    let goal = 10000;
    let currentSteps = 0;
    let count =0 ;
    while(currentSteps < goal){
        let steps = Number(input[count]);
        currentSteps += steps;
        count ++; 
    
        if(input[count] === 'Going home'){
            let steps = Number(input[count + 1]);
            currentSteps += steps;
            break;
        }
    }

    if(currentSteps < goal){
        console.log(`${goal - currentSteps} more steps to reach goal.`);
    } else {
        console.log(`Goal reached! Good job!`);
        console.log(`${currentSteps - goal} steps over the goal!`);
    }
}

steps(["1500",
    "300",
    "2500",
    "5500",
    "Going home",
    "200"])
    
    