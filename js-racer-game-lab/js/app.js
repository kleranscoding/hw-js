
// define how fast object rolls and how much object rotates
var speed= 25, rotateAngle= 90;

// define the roller object
var roller = function(id,name) {
    // get the DOM
    this.dom= document.getElementById(id);
    // get the name
    this.name= name;
    // define the angle counter
    this.angle= 0;
};

// create emoji and oreo
var emoji= new roller('emoji','Emoji');
var oreo= new roller('oreo','Oreo');

// load the buttons when the page is ready
window.onload= function() {
    buttonsReady();
}

// buttons are ready to activate
function buttonsReady() {
    // start game button
    document.getElementById('startRace').onclick = function() {
        startGame();
    };
    // reset game button
    document.getElementById('resetRace').onclick= function() {
        resetGame();
    };
};

// function that starts the game
function startGame() {

    // deactivate the start button
    var startRace= document.getElementById('startRace');
    startRace.onclick= null;
    startRace.style.cursor= 'default';
    startRace.style.backgroundColor= 'transparent';

    // set the racers initial position
    emoji.dom.style.left= 0;
    oreo.dom.style.left= 0;
    emoji.dom.position= 0;
    oreo.dom.position= 0;

    // set emoji and oreo angle
    emoji.angle= 0;
    oreo.angle= 0;

    // activate functions when key is pressed
    document.onkeydown= function(e) {
        checkWinner();
        raceMove(e);
    };

};

// reset the game
function resetGame() {
    window.location.reload();
};

// listener function that moves the racers
function raceMove(e){
    switch(e.keyCode) {
        case 39:
            // move right (->)
            var emojiNewPos= emoji.dom.position+= speed;
            emoji.dom.style.left= emojiNewPos+'px';
            emoji.angle+= rotateAngle;
            emoji.dom.style.transform= 'rotate('+emoji.angle+'deg)';
            break;
        case 88:
            // move right (X)
            var oreoNewPos= oreo.dom.position+= speed;
            oreo.dom.style.left= oreoNewPos+'px';
            oreo.angle+= rotateAngle;
            oreo.dom.style.transform= 'rotate('+oreo.angle+'deg)';
            break; 
    };
};

// check winner 
function checkWinner() {
    if (emoji.dom.position + emoji.dom.offsetWidth >= window.innerWidth - speed) {
        endGame(emoji);
    };
    if (oreo.dom.position + oreo.dom.offsetWidth >= window.innerWidth - speed) {
        endGame(oreo);
    };
};

// end game
function endGame(player) {
    // stop players from moving
    document.onkeydown= null;
    // set header to player wins
    var h1= document.getElementsByTagName('h1')[0];
    // change header style
    h1.style.fontSize= '50px';
    h1.style.textTransform= 'uppercase';
    h1.style.color= '#f44141';
    h1.style.backgroundColor= '#f4c741';
    h1.innerHTML= `${player.name} wins !!!`;
}
