function profit(avioCompany, adultTicketCount, childTicketCount, netPricePerAdultTicket, tax) {
    let childrenTicket = netPricePerAdultTicket * 0.30 + tax;
    let adultTicket = netPricePerAdultTicket + tax; 
    let totalSum = (childTicketCount * childrenTicket) + (adultTicketCount * adultTicket);
    let profit = totalSum * 0.20;

    console.log(`The profit of your agency from ${avioCompany} tickets is ${profit.toFixed(2)} lv.`);
}

profit('WizzAir',
    15,
    5,
    120,
    40)