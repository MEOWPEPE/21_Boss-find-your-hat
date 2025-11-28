"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board
let board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];

// Game state
let playerRow = 0;
let playerCol = 0;
let playing = true;

// Print board
function printBoard(board) {
	console.clear(); // call console.clear() before print each move
	for (const map of board) {
		console.log(map.join(""));
	}
}

// Game play loop
while (playing === true) {
	printBoard(board);
	const input = prompt("Which way? (w/a/s/d): ");

	let oldRow = playerRow;
	let oldCol = playerCol;

	// Move player
	if (input === "w") playerRow--;
	if (input === "s") playerRow++;
	if (input === "a") playerCol--;
	if (input === "d") playerCol++;


	// Win condition
	if (board[playerRow][playerCol] === HAT) {
		console.log("YOU WIN!")
		break;
	}

	// Lose condition = drop into hole
	if (board[playerRow][playerCol] === HOLE) {
		console.log("YOU DROP INTO A HOLE!")
		playing = false;
	}
	// Lose condition = out of map
	if (playerRow < 0 || playerRow > 2 || playerCol < 0 || playerCol > 2) {
		console.log("Out of map!")
		playing = false;
	}

	//if playing false
	if (playing === false) {
		console.log("GAME OVER!!")
		break;
	}

	// Update board
	board[oldRow][oldCol] = EMPTY;
	board[playerRow][playerCol] = PLAYER;

}