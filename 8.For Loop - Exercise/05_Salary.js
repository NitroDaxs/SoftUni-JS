function fines(input) {
    let tabs = Number(input[0]);
    let salaty = Number(input[1]);

    let faceBookFine = 150;
    let instagramFine = 100;
    let redditFine = 50;

    for (let i = 0; i <= tabs; i++) {
        if (salaty <= 0) {
            console.log('You have lost your salary.');
            break;
        }
        if (input[i + 2] === 'Facebook') {
            salaty -= faceBookFine;
        } else if (input[i + 2] === 'Instagram') {
            salaty -= instagramFine;
        } else if (input[i + 2] === 'Reddit') {
            salaty -= redditFine;
        }
    }

    if (salaty > 0) {
        console.log(salaty);
    }
}

fines(['3', '500', 'Github.com', 'Stackoverflow.com', 'Facebook']);
fines([10,
    750,
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]);
