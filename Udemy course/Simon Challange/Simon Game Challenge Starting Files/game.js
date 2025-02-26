let gamePattern = [];
let userClickedPattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let started = false
let level = 0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    addAnimation(userChosenColor);
    playSound(userChosenColor);
});



function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);

    let random = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[random];
    gamePattern.push(randomChosenColor);

    playSound(randomChosenColor);
    addAnimation(randomChosenColor);
}

function playSound(name){
    let audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}
    
function addAnimation(name){
    $("#" + name).fadeIn(100).fadeOut(100).fadeIn(100);
}
