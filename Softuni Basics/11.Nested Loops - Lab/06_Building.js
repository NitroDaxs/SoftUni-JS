function building(floor, rooms){
    let floorsOdd = [];
    let floorsEven = [];
    let lastFloor = [];
    let building = [];
    for(let i = 1; i<= floor; i++){
        for(let j = 0; j < rooms; j++){
            if(i === floor){
                lastFloor.push(`L${i}${j}`);
            }else if(i % 2 !== 0){
                floorsOdd.push(`A${i}${j}`);
            }
            else if( i % 2 === 0){
                floorsEven.push(`O${i}${j}`);
            }
        }
        
        if(floorsOdd.length > 0){
            building.push(floorsOdd);
            floorsOdd = [];
        }
        else if(floorsEven.length > 0){
            building.push(floorsEven);
            floorsEven = [];
        }else{
            building.push(lastFloor);
            lastFloor = []; 
        }
    }

    building.reverse();

    for(let i = 0; i < floor; i++){
            console.log(building[i].join(' '));   
    }       
}

building(6, 4);