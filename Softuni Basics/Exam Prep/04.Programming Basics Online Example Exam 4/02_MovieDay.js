function movieDay(time, scenes, sceneTime) {
  let totalSceneTime = sceneTime * scenes;
  let prepTime = time * 0.15;
  let totalTime = totalSceneTime + prepTime;

  if (totalTime <= time) {
    console.log(
      `You managed to finish the movie on time! You have ${Math.ceil(
        time - totalTime
      )} minutes left!`
    );
  } else {
    console.log(
      `Time is up! To complete the movie you need ${Math.ceil(
        totalTime - time
      )} minutes.`
    );
  }
}
movieDay(120, 10, 11);
