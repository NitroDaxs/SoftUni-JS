function movie(input) {
  let count = 0;
  let lowerCaseCount = 0;
  let upperCaseCount = 0;
  let bestMovieScore = 0;
  let bestMovieName = 0;

  while (input[count] !== "STOP") {
    let movie = input[count];
    count++;
    let sum = 0;
    if (count === 7) {
      console.log("The limit is reached.");
      break;
    }
    for (let i = 0; i < movie.length; i++) {
      if (movie[i].charCodeAt() >= 65 && movie[i].charCodeAt() <= 90) {
        upperCaseCount++;
      } else if (movie[i].charCodeAt() >= 97 && movie[i].charCodeAt() <= 122) {
        lowerCaseCount++;
      }

      sum += movie.charCodeAt(i);
    }

    sum -= movie.length * 2 * lowerCaseCount;
    sum -= movie.length * upperCaseCount;

    if (sum > bestMovieScore) {
      bestMovieScore = sum;
      bestMovieName = movie;
    }

    lowerCaseCount = 0;
    upperCaseCount = 0;
  }

  console.log(
    `The best movie for you is ${bestMovieName} with ${bestMovieScore} ASCII sum.`
  );
}

movie(["Breaking bad", "STOP"]);
