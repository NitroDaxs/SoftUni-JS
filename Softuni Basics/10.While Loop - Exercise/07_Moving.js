function moving(input){
    let width = Number(input[0]);
    let lenght = Number(input[2]);
    let height = Number(input[1]);
    count = 3;
    let totalSpace = width * lenght * height;
    
    while(input[count] !== "Done"){
        let currentBoxCount = Number(input[count]);
        totalSpace -= currentBoxCount;
        count++;

        if(totalSpace < 0){
            console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`);
            break;  
        }
    }

    if(totalSpace > 0){
        console.log(`${totalSpace} Cubic meters left.`);
    }
}

moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"]);