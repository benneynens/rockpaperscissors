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

const winsElement = {
    round: {
        user: document.getElementById('userRoundWins'),
        computer: document.getElementById('computerRoundWins'),
    },
    game: {
        user: document.getElementById('userGameWins'),
        computer: document.getElementById('computerGameWins'),
    }
}

let games = [];

class Game {
    constructor () {
        this.user = 0;
        this.computer = 0;
        this.roundComplete = false;
    }

    roundWin (winner) {
        this[winner]++;
        winsElement.round[winner].innerHTML = this[winner];
        this.gameWinCheck(winner);
    }

    gameWinCheck (winner) {
        if (this[winner] == 5) {
            this.roundComplete = true;
            let previousWinningStreak = parseInt( winsElement.game[winner].innerText );
            winsElement.game[winner].innerText = previousWinningStreak + 1;

            //reset round winner to zero
            for (let competitor in winsElement.round) winsElement.round[competitor].innerText = 0;
        } 
    }
}
 
//register click event
const elements = document.querySelectorAll('.selection');

elements.forEach(el => el.addEventListener('click', event => {
    let userSelectedWeapon = event.target.id;

    let computerSelectedWeapon =  Object.keys(selections)[getRandomInt(3)];

    playRound(userSelectedWeapon, computerSelectedWeapon);
  }));

function getRandomInt(max) {
return Math.floor(Math.random() * max);
}

function playRound(userSelectedWeapon, computerSelectedWeapon) {
    if (games.length === 0 || games[0].roundComplete) games.unshift ( new Game() );

    let winner;

    if (userSelectedWeapon === computerSelectedWeapon) {
        winner = 'draw';
    } else if ( selections[userSelectedWeapon] !== computerSelectedWeapon ) {
        winner = 'user'
    } else {
        winner = 'computer';
    }
    if (winner != 'draw') games[0].roundWin(winner);

    displaySelections (userSelectedWeapon, computerSelectedWeapon, winner);

}

function displaySelections (userSelectedWeapon, computerSelectedWeapon, winner) {
    userElement.innerHTML = 'You selected '+userSelectedWeapon;
    computerElement.innerHTML = 'Computer selected '+computerSelectedWeapon;
    winnerElement.innerHTML = 'You ' + winner;
}