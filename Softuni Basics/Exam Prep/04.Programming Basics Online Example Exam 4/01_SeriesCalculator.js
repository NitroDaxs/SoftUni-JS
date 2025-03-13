function series(name, seasons, episodes, episodesLength) {
  let adTime = episodesLength * 0.2;
  let totalTime = seasons * episodes * (episodesLength + adTime) + 10 * seasons;

  console.log(
    `Total time needed to watch the ${name} series is ${totalTime} minutes.`
  );
}

series("Lucifer", 3, 18, 55);
