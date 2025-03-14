function cinema(input) {
  let capacity = input[0];
  let count = 1;
  let sum = 0;

  while (input[count] !== "Movie time!") {
    let people = Number(input[count]);
    count++;

    if (people <= capacity) {
      if (people % 3 === 0) {
        sum -= 5;
      }
      sum += people * 5;
      capacity -= people;
    } else {
      console.log("The cinema is full.");
      console.log(`Cinema income - ${sum} lv.`);
      return;
    }
  }
  if (capacity >= 0) {
    console.log(`There are ${capacity} seats left in the cinema.`);
  }
  console.log(`Cinema income - ${sum} lv.`);
}

cinema(["60", "10", "6", "3", "20", "15", "Movie time!"]);
