//player
var playerChoice = undefined;

//ROCK PAPER SCISSORS
var rps = [];

//ARRAY
rps[0] = 'rock';
rps[1] = 'paper';
rps[2] = 'scissors';


//rivalAI

var rival = 0;
var aiRandomChoice = Math.floor(Math.random(rival)*3);
var rivalsChoice = rps[aiRandomChoice];
//TEST =>
// console.log(rivalsChoice);

//targets the buttons
var playerrock = document.querySelector('#playerrock');
var playerpaper = document.querySelector('#playerpaper');
var playerscissors = document.querySelector('#playerscissors');

var rivalrock = document.querySelector('#rivalrock');
var rivalpaper = document.querySelector('#rivalpaper');
var rivalscissors = document.querySelector('#rivalscissors');

//button activator
playerrock.addEventListener('click',rock);
playerpaper.addEventListener('click',paper);
playerscissors.addEventListener('click',scissors);

//Selects the players options/will removeDisplay later after results (No cheating!!!)
var playerMenu = document.querySelector('#player');

//announcer
var announcer = document.querySelector('#announcer');
announcer.textContent = 'WELCOME TO THE BATTLE!!! Rock, paper, scissors and.......';

//reminder
// rps[0] =     'rock';
// rps[1] =     'paper';
// rps[2] =     'scissors';

// ROCK PAPER SCISSORS AI BELOW

function rock(){
  playerChoice = rps[0];
  console.log(playerChoice);
  if(rivalsChoice === rps[0]){
    announcer.textContent = 'SHOOT!!!!...IT\s A TIE!!!!';
    rivalrock.classList.remove('opacity');
    playerMenu.classList.add('remove');
  } else if(rivalsChoice === rps[1]){
    announcer.textContent = 'SHOOT!!!!...YOU LOSE!!!!';
    rivalpaper.classList.remove('opacity');
    playerMenu.classList.add('remove');
  } else if(rivalsChoice === rps[2]){
    announcer.textContent = 'SHOOT!!!!...YOU WIN!!!!';
    rivalscissors.classList.remove('opacity');
    playerMenu.classList.add('remove');
  }
}

function paper(){
  playerChoice = rps[1];
  console.log(playerChoice);
  if(rivalsChoice === rps[1]){
    announcer.textContent = 'SHOOT!!!!...IT\s A TIE!!!!';
    rivalpaper.classList.remove('opacity');
    playerMenu.classList.add('remove');
  } else if(rivalsChoice === rps[2]){
    announcer.textContent = 'SHOOT!!!!...YOU LOSE!!!!';
    rivalscissors.classList.remove('opacity');
    playerMenu.classList.add('remove');
  } else if(rivalsChoice === rps[0]){
    announcer.textContent = 'SHOOT!!!!...YOU WIN!!!!';
    rivalrock.classList.remove('opacity');
    playerMenu.classList.add('remove');
  }
}

function scissors(){
  playerChoice = rps[2];
  console.log(playerChoice);
  if(rivalsChoice === rps[2]){
    announcer.textContent = 'SHOOT!!!!...IT\s A TIE!!!!';
    rivalscissors.classList.remove('opacity');
    playerMenu.classList.add('remove');
  } else if(rivalsChoice === rps[0]){
    announcer.textContent = 'SHOOT!!!!...YOU LOSE!!!!';
    rivalrock.classList.remove('opacity');
    playerMenu.classList.add('remove');
  } else if(rivalsChoice === rps[1]){
    announcer.textContent = 'SHOOT!!!!...YOU WIN!!!!';
    rivalpaper.classList.remove('opacity');
    playerMenu.classList.add('remove');
  }
}
