function tourism(city, type, vip, days) {
  let banskoBorovetsBase = 100;
  let burgasVarnaBase = 130;
  let sum = 0;

  if (days < 1) {
    console.log("Days must be positive number!");
    return;
  }

  if (
    city !== "Borovets" &&
    city !== "Bansko" &&
    city !== "Varna" &&
    city !== "Burgas"
  ) {
    console.log("Invalid input!");
    return;
  }

  if (
    type !== "withBreakfast" &&
    type !== "noBreakfast" &&
    type !== "withEquipment" &&
    type !== "noEquipment"
  ) {
    console.log("Invalid input!");
    return;
  }

  switch (type) {
    case "noEquipment":
      banskoBorovetsBase = 80;
      break;
    case "noBreakfast":
      burgasVarnaBase = 100;
      break;
  }

  if (vip === "yes" && type === "withEquipment") {
    banskoBorovetsBase -= banskoBorovetsBase * 0.1;
  } else if (vip === "yes" && type === "noEquipment") {
    banskoBorovetsBase -= banskoBorovetsBase * 0.05;
  } else if (vip === "yes" && type === "noBreakfast") {
    burgasVarnaBase -= burgasVarnaBase * 0.07;
  } else if (vip === "yes" && type === "withBreakfast") {
    burgasVarnaBase -= burgasVarnaBase * 0.12;
  }

  if (days >= 7) {
    days -= 1;
  }

  switch (city) {
    case "Borovets":
    case "Bansko":
      sum = days * banskoBorovetsBase;
      break;
    case "Burgas":
    case "Varna":
      sum = days * burgasVarnaBase;
      break;
  }

  console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
}

tourism("Borovets", "noEquipment", "yes", 6);
