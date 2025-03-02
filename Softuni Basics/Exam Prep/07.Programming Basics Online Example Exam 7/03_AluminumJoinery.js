function aluminum(count, type, delivery){
    let price =0;
    let total = 0;

    if(count < 10){
        console.log("Invalid order");
        return;
    }

    switch(type) {
        case "90X130": 
        price = 110;
            if(count> 30&& count <= 60){
                price -= price * 0.05;
            }
            else if(count > 60 ){
                price -= price * 0.08;
            }   
            break;
        case "100X150":
            price = 140; 
            if(count> 40 && count <= 80){
                price -= price * 0.06;
            }
            else if(count > 80){
                price -= price * 0.10;
            }
            break;
        case "130X180":
            price = 190; 
            if(count> 20 && count <= 50){
                price -= price * 0.07;
            }
            else if(count > 50){
                price -= price * 0.12;
            }
             break;
        case "200X300":
            price = 250; 
            if(count> 25 && count <= 50){
                price -= price * 0.09;
            }
            else if(count > 50){
                price -= price * 0.14;
            }
        break;
    }
    total = price * count;  

    if(delivery === "With delivery"){
        total += 60;
    }

    if(count > 99){
        total -= total * 0.04;
    }

    console.log(`${(total).toFixed(2)} BGN`);
}

aluminum(105, "100X150", "With delivery");