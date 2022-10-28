//add event to start button
var start = document.getElementById('start');
start.addEventListener('click', chooseTheme);
//all of the other buttons/divs
var game = document.getElementById('game');
var which = document.getElementById('which');
var person = document.getElementById('person');
var play = document.getElementById('play');
var yesand = document.getElementById('yesand');
var leader = document.getElementById('leader');
var hr = document.getElementById('hr');
var netflix = document.getElementById('netflix');


yesand.addEventListener('click', chooseyesand);

leader.addEventListener('click', leaderButton);
hr.addEventListener('click', hrButton);
netflix.addEventListener('click', netflixButton);

//add functions for chosing a theme
function chooseTheme(){
    //Hide the 'start game' button and show the game
    start.style.display="none";
    which.style.display="block";
}
function leaderButton(){
    theme = 'yesand';
    game.style.display = "block";
    startGame();
}

function chooseyesand(){
    if (window.confirm('This game was made for the day before yesterday, cancel to stay here'))
   {
   window.open('https://yesandagency.github.io/oct-26-22/', '_blank');
   };
}

function hrButton(){
    if (window.confirm('This game was yesterday, cancel to stay here'))
   {
   window.open('https://yesandagency.github.io/oct-27-22/', '_blank');
   };
}

function netflixButton(){
    alert("Streaming not available");
}
function onEndGame(){
    
    var div = document.getElementById('details');
    var clickPercent = document.getElementById('clickPercent');
    var clickPercent1 = document.getElementById('clickPercent1');
    var clickPercent2 = document.getElementById('clickPercent2');
    var clickPercent3 = document.getElementById('clickPercent3');

    div.style.display="block";


    clickPercent.innerHTML = calcSlice(clicks)+'%';
    clickPercent1.innerHTML = calcSlice(clicks1)+'%';
    clickPercent2.innerHTML = calcSlice(clicks2)+'%';
    clickPercent3.innerHTML = calcSlice(clicks3)+'%';
    showResults();
}

function showResults(){
    person.style.display="inline";
}
//function that will start the game
function startGame(){
    //hide the theme buttons
    which.style.display="none";
    play.style.display="block";

}

var clicks = 0;
var clicks1 = 0;
var clicks2 = 0;
var clicks3 = 0;

function onClick() {
clicks += 1;
document.getElementById("clicks").innerHTML = clicks;
};

function onClick1() {
    clicks1 += 1;
    document.getElementById("clicks1").innerHTML = clicks1;
};

function onClick2() {
    clicks2 += 1;
    document.getElementById("clicks2").innerHTML = clicks2;
};

function onClick3() {
    clicks3 += 1;
    document.getElementById("clicks3").innerHTML = clicks3;
};

function calcSlice(val){
    var total = clicks+clicks1+clicks2+clicks3;
    console.log(total);
    var calc = (val/total) * 100;
    console.log(calc);
    return (calc).toFixed(2);
}
