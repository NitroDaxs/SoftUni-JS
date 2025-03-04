function party(rent) {
  let cake = 0.2 * rent;
  let drinks = cake - cake * 0.45;
  let animator = rent / 3;

  console.log(rent + cake + drinks + animator);
}

party(2250);
