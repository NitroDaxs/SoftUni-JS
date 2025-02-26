function coins(input) {
    let coin2Lev = 2 * 100;
    let coin1Lev = 1 * 100;
    let coin050Stotinki = 0.50 * 100;
    let coin020Stotinki = 0.20 * 100;
    let coin010Stotinki = 0.10 * 100;
    let coin005Stotinki = 0.05 * 100;
    let coin002Stotinki = 0.02 * 100;
    let coin001Stotinki = 0.01 * 100; 
    let change = Math.floor(Number(input) * 100);
    let currentSum = 0;
    let count =0;

    while(currentSum < change){
        if(currentSum + coin2Lev <= change){
            currentSum += coin2Lev;
            count++;
        }else if(currentSum + coin1Lev <= change){
            currentSum+= coin1Lev;
            count++;
        }else if(currentSum + coin050Stotinki <= change){
            currentSum+= coin050Stotinki;
            count++;
        }else if(currentSum + coin020Stotinki <= change){
            currentSum+= coin020Stotinki;
            count++;
        }else if(currentSum + coin010Stotinki <= change){
            currentSum+= coin010Stotinki;
            count++;
        }else if(currentSum + coin005Stotinki <= change){
            currentSum+= coin005Stotinki;
            count++;
        }else if(currentSum + coin002Stotinki <= change){
            currentSum+= coin002Stotinki;
            count++;
        }
        else if(currentSum + coin001Stotinki <= change){
            currentSum+= coin001Stotinki;
            count++;
        }
    }

    console.log(count);
}

coins("1.18");
coins("2.73");
coins("0.59");
coins("1.23");
coins("2");