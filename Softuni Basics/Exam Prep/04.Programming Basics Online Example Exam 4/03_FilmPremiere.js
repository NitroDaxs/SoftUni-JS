function filmPremiere(name, packet, tickets) {
  let drinkPrice = 0;
  let popcornPrice = 0;
  let menuPrice = 0;
  let sum = 0;
  switch (name) {
    case "John Wick":
      drinkPrice = 12;
      popcornPrice = 15;
      menuPrice = 19;
      break;
    case "Star Wars":
      drinkPrice = 18;
      popcornPrice = 25;
      menuPrice = 30;
      break;
    case "Jumanji":
      drinkPrice = 9;
      popcornPrice = 11;
      menuPrice = 14;
      break;
  }

  switch (packet) {
    case "Drink":
      sum = drinkPrice * tickets;
      break;
    case "Popcorn":
      sum = popcornPrice * tickets;
      break;
    case "Menu":
      sum = menuPrice * tickets;
      break;
  }

  if (name === "Star Wars" && tickets >= 4) {
    sum -= sum * 0.3;
  } else if (name === "Jumanji" && tickets === 2) {
    sum -= sum * 0.15;
  }

  console.log(`Your bill is ${sum.toFixed(2)} leva.`);
}

filmPremiere("John Wick", "Drink", 6);
