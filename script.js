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
}

////run playing while in for loop if computerscore or playerscore is less <=5

function makeSelection(selection) {
	if (computerSelection == selection) {
		document.querySelector('.no-one-wins-text').classList.remove('hidden');
		document.querySelector('.player-selected').textContent = SELECTIONS.emoji[selection];
		hide();

		///// no score move on
	} else if (SELECTIONS.name[selection] === SELECTIONS.beats[computerSelection]) {
		hide();
		document.querySelector('.computer-wins-text').classList.remove('hidden');
		document.querySelector('.background-selected').style.border = '5px solid red';
		document.querySelector('.background-selected').style.opacity = '0.5';
		document.querySelector('.player-selected').textContent = SELECTIONS.emoji[selection];

		document.querySelector('.background-computer').style.border = '5px solid green';

		///// add one to the score move on if less than 5
	} else if (SELECTIONS.beats[selection] === SELECTIONS.name[computerSelection]) {
		hide();
		document.querySelector('.player-wins-text').classList.remove('hidden');
		document.querySelector('.background-selected').style.border = '5px solid green';
		document.querySelector('.background-computer').style.opacity = '0.5';
		document.querySelector('.background-computer').style.border = '5px solid red';
		document.querySelector('.player-selected').textContent = SELECTIONS.emoji[selection];

		///// add one to the score move on if less than 5
	}

	console.log(SELECTIONS.name[selection]);
	console.log(SELECTIONS.name[computerSelection]);
	console.log(SELECTIONS.beats[computerSelection]);
}
