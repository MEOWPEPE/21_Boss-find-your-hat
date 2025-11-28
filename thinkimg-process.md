# Thinking Process Guidelines

## Table of Contents

- [Thinking Process Guidelines](#thinking-process-guidelines)
  - [Table of Contents](#table-of-contents)
  - [1. Workflow Planning](#1-workflow-planning)
  - [2.1. Board Functions (Hardcoded)](#21-board-functions-hardcoded)
  - [2.2. Board Functions (Generated)](#22-board-functions-generated)
  - [3. Input Functions](#3-input-functions)
  - [4. Movement Functions](#4-movement-functions)
  - [5. Game Rule Functions](#5-game-rule-functions)
  - [6. Game Play Loop](#6-game-play-loop)
- [WRITE YOUR THINKING PROCESS BELOW. ](#write-your-thinking-process-below)

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">1. Workflow Planning</span>

↳ Draw a flowchart or write steps describing:

<p style="display: flex; align-items: center; gap: 1rem;">
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Game start</span>
<span style="color: wheat; font-weight:bold; font-size:2rem; ">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Read input</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Update position</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">Check rules</span>
<span style="color: wheat; font-weight:bold; font-size:2rem;">→</span>
<span style="font-weight:bold; color: wheat; background-color: blue; padding: 0.5rem 2rem; border-radius: 0.5em;">End/Continue</span>
</p>

↳ Must include:

- Input/output of each function.
- Edge cases (invalid input, boundaries, hole/hat tiles).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem; margin-top: 1rem; border-buttom: none;">2.1. Board Functions (Hardcoded)</span>

↳ Prints the hardcoded board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">2.2. Board Functions (Generated)</span>

↳ Creates a random board with player, hat, and holes.
↳ Prints the board in terminal.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How the board is represented (2D array).
- Tile types (PLAYER, EMPTY, HOLE, HAT).
- How random placement avoids overlaps.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">3. Input Functions</span>

↳ Reads and validates user input (w, a, s, d).
↳ Logs invalid input.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">4. Movement Functions</span>

↳ Updates playerRow / playerCol based on the move.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- Input/output.
- Edge cases (invalid input, boundaries).
- How player position is updated.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">5. Game Rule Functions</span>

↳ Checks for out-of-bounds, falling into a hole, or finding the hat.

<span style="font-weight:bold; color: pink;">&nbsp;Game Rules:&nbsp;</span>

- Wins by finding the hat.
- Loses by landing in a hole.
- Loses by moving outside the board.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions.

## <span style="font-weight:bold; color: black; background-color: gold; padding: 0.5rem 2rem;">6. Game Play Loop</span>

↳ Combine all functions into a playable loop.
↳ Ensure messages appear correctly, board prints at start, and invalid input is handled.

<span style="font-weight:bold; color: gold;">Thinking process should explain:</span>

- How to determine win/loss conditions.
- Handling messages for win/loss conditions
- How to update the board when the player moves.

---

# <p style="display: flex; align-items: center; gap: 0.5em;"><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 2rem;">WRITE YOUR THINKING PROCESS BELOW.</span><span style="font-weight:bold; color: white; background-color: lightSeaGreen; padding: 0.5rem 0;">&nbsp;</span></p>

<!-- Thinking Process -->
-ผมเริ่มจากตั้งใจทำแผนที่ก่อนโดยผมใข้หลักการ for..of เพราะสำหรับผมเข้าใจง่ายสุด ให้หยิบมาทั้ง array และแสดงผลเลยก็จะได้ตาราง เราแต่งด้วย Join"" ให้มันติดกันก็จะออกมาเหมือน Map ครับ

<!-- 1. Workflow Planning -->
-ความตั้งใจของผมคือจะทำ Map -> key input/move -> condition คิดว่าเท่านี้ก็น่าจะจบ แต่ไม่จบอย่างที่คิด (X o x)

<!-- 2.1. Board Functions (Hardcoded) -->
<!-- 2.2. Board Functions (Generated) -->
<!-- 3. Input Functions -->
-ผมใช่ If(input === "button") เพราะ if=ถ้า ถ้ากด ... ง่ายดี และ ผมก็ใข่ --/++ เพราะจำได้ที่เรียนมันสูตรลัด +1 -1 เลยออกมาง่ายๆโง่ๆแบบนี้
	if (input === "w") playerRow--;
	if (input === "s") playerRow++;
	if (input === "a") playerCol--;
	if (input === "d") playerCol++;

<!-- 4. Movement Functions -->
<!-- 5. Game Rule Functions -->
-จากนั้นผมก็มาเขียน condition ที่ผมอยากทำ win/lose
เริ่มที่ win ก่อน ตัวที่โชว์คือ final ก่อนหน้านั้น code ยำ

	if (board[playerRow][playerCol] === HAT) {  //ผมใช่ ifเพราะง่าย (ผมใส่ที่อยู่ของ player ใน board ถ้ามันไป *ชน* หรือ *เหมือน* กับค่า HAT ที่ประกาศไว้ก็ชนะ)
		console.log("YOU WIN!") // log โชว์ว่าชนะละ ดีใจ
		break; // ใช่ breack เพื่อบอกว่าถ้ามาตรงนี้ให้ตัดจบ Loop ไปเลย (ตอนแรกใช่ playing false ให้ชึ้น game over แต่ดูละ ไม่สวยขึ้น log และ ตัดจบ ขึ้น game over มันเหมือนแพ้มากกว่า)
	}

ต่อมาคือ lose

if (board[playerRow][playerCol] === HOLE) { //ผมใช่วิถีเดิมแค่เปลี่ยนเป็น Hole
		console.log("YOU DROP INTO A HOLE!") // log โชว์สะหน่อยว่าตกละ
		playing = false; // ให้สถานะ fales เพื่อวางว่าจะอะไร false ผมจะให้ game over หมด
	}

	if (playerRow < 0 || playerRow > 2 || playerCol < 0 || playerCol > 2) { // if เหมือนเดิมหากินง่าย (ใส row-col กับจำนวนที่เราคาดว่า ถ้ามันน้อยว่าเท่านี้ แตก ถ้ามากกว่าเท่านี้ แตก ให้มันรวมที่เดียวด้วย ||=OR ก็คือหรือ เพราะถ้าลงตัวใดตัวหนึ่งในนี้คือ แตก)
		console.log("Out of map!") // log แตก
		playing = false; // ให้ false
	}

	if (playing === false) { //เขียนให้ playing แตก หรือ false มาลงจบ
		console.log("GAME OVER!!") // log บอก เกมส์จบ
		break; // break เพื่อให้ตัด loopตรงนี้
	}

<!-- 6. Game Play Loop -->
ผมติดตรงนี้นานมากเพราะ board ไม่เก็บข้อมูลสะที่โชว์แต่ board เดิมเพราะมันไม่มีการเก็บค่าเวลาเดินเลยทั้งของเก่าและใหม่
	board[oldRow][oldCol] = EMPTY; //เป็นการบอกว่าถ้ามีการออกจาก rol/col ให้เป็น Empty จะได้ขึ้น สวยๆ
	board[playerRow][playerCol] = PLAYER; //ให้ player ไปโผล้่ในสุดที่ใส่ค่าใหม่

while (playing === true) // ผมใส่ while (true) เพราะ คณะที่กำลังเล่นหากสถานะ playing -true หรือไม่แตก ให้ผมมาเริ่มตรงนี้ใหม่
	printBoard(board); // ทำให้ต่อมาเข้ามาปริ้น board ใหม่ เกมสหายตัดจากตอนแรก เดินปับ ตัดปุบ
	const input = prompt("Which way? (w/a/s/d): ");


[Back to Table of Contents](#table-of-contents)

---
