function weather(input) {
  if (input >= 5 && input <= 11.9) {
    console.log("Cold");
  } else if (input >= 12 && input <= 14.9) {
    console.log("Cool");
  } else if (input >= 15 && input <= 20) {
    console.log("Mild");
  } else if (input >= 20.1 && input <= 25.9) {
    console.log("Warm");
  } else if (input >= 26 && input <= 35) {
    console.log("Hot");
  } else {
    console.log("unknown");
  }
}

weather(15);
