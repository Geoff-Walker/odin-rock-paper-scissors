/////Rock paper scissors Objects
const SELECTIONS = {
	name: [ 'rock', 'paper', 'scissors' ],
	numVal: [ 0, 1, 2 ],
	emoji: [ '👊', '✋', '✌️' ],
	beats: [ 'scissors', 'rock', 'paper' ]
};

///////random computer pick

let computerSelection = Math.trunc(Math.random() * 3);
let playerSelection;
let computerScore = 0;
let playerScore = 0;
const selectionButtons = document.querySelectorAll('[data-selection');
let playing = true;
const btnNextRound = document.querySelector('.btn-next-round');
const btnReset = document.querySelector('.btn-reset');

selectionButtons.forEach((selectionButton) => {
	selectionButton.addEventListener('click', (e) => {
		const selectionName = selectionButton.dataset.selection;
		//const selection = SELECTIONS.find((selection) => selection.name === selectionName);
		makeSelection(selectionName);
	});
});

console.log(SELECTIONS.emoji[computerSelection]);

function hide() {
	document.querySelector('.wins').classList.remove('hidden');
	document.querySelector('#rockBtn').classList.add('hidden');
	document.querySelector('#paperBtn').classList.add('hidden');
	document.querySelector('#scissorsBtn').classList.add('hidden');
	document.querySelector('.background-selected').classList.remove('hidden');
	document.querySelector('.computer-selected').textContent = SELECTIONS.emoji[computerSelection];
	document.querySelector('.background-computer').classList.remove('hidden');
	document.querySelector('.choose').classList.add('hidden');
	document.querySelector('.btn-next-round').classList.remove('hidden');
}

function unhide() {
	document.querySelector('.wins').classList.add('hidden');
	document.querySelector('#rockBtn').classList.remove('hidden');
	document.querySelector('#paperBtn').classList.remove('hidden');
	document.querySelector('#scissorsBtn').classList.remove('hidden');
	document.querySelector('.background-selected').classList.add('hidden');
	document.querySelector('.background-computer').classList.add('hidden');
	document.querySelector('.choose').classList.remove('hidden');
	document.querySelector('.btn-next-round').classList.add('hidden');
	document.querySelector('.no-one-wins-text').classList.add('hidden');
	document.querySelector('.computer-wins-text').classList.add('hidden');
	document.querySelector('.player-wins-text').classList.add('hidden');
	document.querySelector('.background-selected').style.border = '5px solid black';
	document.querySelector('.background-selected').style.opacity = '1';
	document.querySelector('.background-computer').style.border = '5px solid black';
	document.querySelector('.background-computer').style.opacity = '1';
	computerSelection = Math.trunc(Math.random() * 3);
}

function newGame() {
	computerScore = 0;
	playerScore = 0;
	playing = true;
	document.querySelector('.score-player').textContent = playerScore;
	document.querySelector('.score-computer').textContent = computerScore;
	document.querySelector('.score-text-player').style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
	document.querySelector('.score-text-computer').style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
	document.querySelector('.score-player').style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
	document.querySelector('.score-computer').style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
	unhide();
}

////run game while playing varirable is true
if (playing) {
	function makeSelection(selection) {
		if (computerSelection == selection) {
			document.querySelector('.no-one-wins-text').classList.remove('hidden');
			document.querySelector('.player-selected').textContent = SELECTIONS.emoji[selection];
			hide();
			computerSelection = null;

			///// no score move on
		} else if (SELECTIONS.name[selection] === SELECTIONS.beats[computerSelection]) {
			hide();
			document.querySelector('.computer-wins-text').classList.remove('hidden');
			document.querySelector('.background-selected').style.border = '5px solid red';
			document.querySelector('.background-selected').style.opacity = '0.5';
			document.querySelector('.player-selected').textContent = SELECTIONS.emoji[selection];
			document.querySelector('.background-computer').style.border = '5px solid green';
			computerSelection = null;

			///// add one to the score move on if less than 5
			if (computerScore < 4) {
				computerScore++;
				document.querySelector('.score-computer').textContent = computerScore;
			} else {
				computerScore++;
				document.querySelector('.score-computer').textContent = computerScore;
				document.querySelector('.score-text-player').style.backgroundColor = 'rgba(248, 0, 0, 0.664)';
				document.querySelector('.score-text-computer').style.backgroundColor = 'rgba(172, 255, 47, 0.685)';
				document.querySelector('.score-player').style.backgroundColor = 'rgba(248, 0, 0, 0.664)';
				document.querySelector('.score-computer').style.backgroundColor = 'rgba(172, 255, 47, 0.685)';
				playing = false;
				document.querySelector('.btn-next-round').classList.add('hidden');
			}
		} else if (SELECTIONS.beats[selection] === SELECTIONS.name[computerSelection]) {
			hide();
			document.querySelector('.player-wins-text').classList.remove('hidden');
			document.querySelector('.background-selected').style.border = '5px solid green';
			document.querySelector('.background-computer').style.opacity = '0.5';
			document.querySelector('.background-computer').style.border = '5px solid red';
			document.querySelector('.player-selected').textContent = SELECTIONS.emoji[selection];
			computerSelection = null;

			///// add one to the score move on if less than 5
			if (playerScore < 4) {
				playerScore++;
				document.querySelector('.score-player').textContent = playerScore;
			} else {
				playerScore++;
				document.querySelector('.score-player').textContent = playerScore;
				document.querySelector('.score-text-player').style.backgroundColor = 'rgba(172, 255, 47, 0.685)';
				document.querySelector('.score-text-computer').style.backgroundColor = 'rgba(248, 0, 0, 0.664)';
				document.querySelector('.score-player').style.backgroundColor = 'rgba(172, 255, 47, 0.685)';
				document.querySelector('.score-computer').style.backgroundColor = 'rgba(248, 0, 0, 0.664)';
				playing = false;
				document.querySelector('.btn-next-round').classList.add('hidden');
			}
		}
	}
}
