var lightClicked = 0;
var light = document.getElementById(`stopLight`);
var mario = document.getElementById('mario');
var bowser = document.getElementById('bowser');
var heading = document.getElementById('message');
var position1;
var position2;
var race;


light.addEventListener(`click`, () => {
    if (lightClicked == 0)
    {
        light.src = `greenLight.png`;
        heading.innerHTML = 'The Race Is Off....'
        heading.style.color = 'green';
        mario.src = 'marioRun.png';
        bowser.src = 'bowserRun.png';
        marioMove();
        bowserMove();
        removeElement('victor');
        lightClicked = 1


    }
    else
    {
        light.src = `redLight.png`;
        lightClicked = 0

        mario.src = 'marioStand.png';
        bowser.src = 'bowserStand.png';

    }

});


function marioMove() {
    position1 = 0;
    var race = setInterval(run, 10);
    function run() {
      if (position1 >= 1250) {
        clearInterval(race);
        raceResult();
      } else {
        position1 += Math.floor(Math.random() * 4); 
        mario.style.left = position1 + 'px'; 
      }

    }

  }

function bowserMove() {
    position2 = 0;
    var race = setInterval(run, 10);
    function run() {
      if (position2 >= 1250) {
        clearInterval(race);
      } else {
        position2 += Math.floor(Math.random() * 4);
        bowser.style.left = position2 + 'px'; 
      }
    }
  }

function raceResult ()
  {
    if (position1 > position2)
    {
        mario.src = 'marioWin.png';
        bowser.src = 'bowserStand.png';
        heading.innerHTML = 'Mario Wins!'
        heading.style.color = 'white';
        displayWinner('victor', 'marioWin.png', '300', '300', 'Mario Wins');

    }
    else
    {
        bowser.src = 'bowserWin.png'
        mario.src = 'marioStand.png'
        heading.innerHTML = 'Bowser Wins!'
        heading.style.color = 'white';
        displayWinner('victor', 'bowserWin.png', '300', '300', 'Bowser Wins');
    }

    clearInterval(race);

  }

function displayWinner(id, src, width, height, alt) {
    var img = document.createElement("img");
    img.id = id
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.getElementById('winner').appendChild(img);

  }

function removeElement(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
}