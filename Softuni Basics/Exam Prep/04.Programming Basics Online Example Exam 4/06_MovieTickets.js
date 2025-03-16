function tickets(a1, a2, n) {
  let symbol1 = 0;
  let symbol2 = 0;
  let symbol3 = 0;
  let symbol4 = 0;
  let tickets = [];

  for (let i = a1; i < a2; i++) {
    if (i % 2 !== 0) {
      symbol1 = String.fromCharCode(i);
      for (let j = 1; j < n; j++) {
        symbol2 = j;
        for (let k = 1; k < Math.floor(n / 2); k++) {
          symbol3 = k;
          symbol4 = symbol1.charCodeAt();
          if ((symbol2 + symbol3 + symbol4) % 2 !== 0) {
            let ticket = symbol1 + "-" + symbol2 + symbol3 + symbol4;
            tickets.push(ticket);
          }
        }
      }
    }
  }
  console.log(tickets.join("\r\n"));
}

tickets(69, 72, 4);
