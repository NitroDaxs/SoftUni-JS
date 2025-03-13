function movie(name, days, tickets, ticketPrice, percent) {
  let tax = days * tickets * ticketPrice * (percent / 100);
  let total = days * tickets * ticketPrice - tax;
  console.log(`The profit from the movie ${name} is ${total.toFixed(2)} lv.`);
}

movie("The Programmer", 20, 500, 7.5, 7);
