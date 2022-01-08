/**
 * const objects include:
 *  - who beats who
 *  - available options
 */

const selections = {
    //choice: winning opponent
    'rock': 'paper',
    'paper': 'scissors',
    'scissors': 'rock',
}

const userElement = document.getElementById('user_selection');
const computerElement = document.getElementById('computer_selection');
const winnerElement = document.getElementById('winner');

//register click event
var elements = document.querySelectorAll('.selection');

elements.forEach(el => el.addEventListener('click', event => {
    let userSelectedWeapon = event.target.id;

    let computerSelectedWeapon =  Object.keys(selections)[getRandomInt(3)];

    playRound(userSelectedWeapon, computerSelectedWeapon);
  }));

function playRound(userSelectedWeapon, computerSelectedWeapon) {

    let userResult;

    if (userSelectedWeapon === computerSelectedWeapon) {
        userResult = 'draw';
    } else if ( selections[userSelectedWeapon] !== computerSelectedWeapon ) {
        userResult = 'win'
    } else {
        userResult = 'lose';
    }

    displaySelections (userSelectedWeapon, computerSelectedWeapon, userResult);

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function displaySelections (userSelectedWeapon, computerSelectedWeapon, winner) {
    userElement.innerHTML = 'You selected '+userSelectedWeapon;
    computerElement.innerHTML = 'Computer selected '+computerSelectedWeapon;
    winnerElement.innerHTML = 'You ' + winner;
}

//get result of computer's rock paper scissors

//