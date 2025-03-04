function catWalk(minutes, count, calories){
    let caloriesBurned = (minutes* count) * 5;

    if(caloriesBurned >= calories / 2){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`)
    }
    else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`)
    }
}

catWalk(30,3,600);