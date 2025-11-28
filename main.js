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
printBoard(board);
const input = prompt("Which way? (w/a/s/d): ");
console.log(input);

while (playing=true){
	console.clear()

let newRow = playerRow;
let newCol = playerCol;

printBoard(board);
const input = prompt("Which way? (w/a/s/d): ");
console.log(input);

// Move player
if (input === "w") {
	playerRow--;
	console.log(board[playerRow][playerCol]);
}
if (input === "s") {
	playerRow++;
	console.log(board[playerRow][playerCol]);
}
if (input === "a") {
	playerCol--;
	console.log(board[playerRow][playerCol]);
}
if (input === "d") {
	playerCol++;
	console.log(board[playerRow][playerCol]);
}

// Win condition
if ([playerRow][playerCol] === HAT) {
	console.log("Done!! HAT has been found");
	playing = false;
}

// Lose condition
if ([playerRow][playerCol] === HOLE) {
	console.log("You Lose!! You drop into a hole")
	playing = false;
}
if ([playerRow] <= -1) {
	console.log("You Lose!! Out of Map");
	playing = false;
}
if ([playerCol] >= 2) {
	console.log("You Lose!! Out of Map");
	playing = false;
}

board[playerRow][playerCol] = EMPTY;
board[newRow][newCol] = PLAYER;
playerRow = newRow;
playerCol = newCol;

}