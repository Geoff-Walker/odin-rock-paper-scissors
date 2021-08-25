/////Rock paper scissors Objects
const selection = {
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

///////If tie

if (selection.name[computerSelection] === playerSelection) {
	////// tie  add orange to the no one wins display wins leave selections alone
	///// no score move on
} else if (selection.beats[computerSelection] === playerSelection) {
	////// you lose - red computer wins red border player and green border computer
	///// add one to the score move on if less than 5
} else {
	////// you win - green wins green border player and red border computer
	///// add one to the score move on if less than 5
}

console.log(selection.emoji[computerSelection]);

///// add code to red, green and orange the score number depending on winner at that point
