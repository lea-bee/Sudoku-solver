/*const puzzleBoard = document.querySelector("#puzzle");
const solveButton = document.querySelector("#solve-button");
const squares = 81;

for (let i = 0; i < squares; i++) {
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "number");
  inputElement.setAttribute("min", "1");
  inputElement.setAttribute("max", "9");
  puzzleBoard.appendChild(inputElement);
}*/
const squares = 9; // Ensure this is defined correctly
const puzzleBoard = document.getElementById("puzzle"); // Check this is not null

if (puzzleBoard) {
  for (let i = 0; i < squares; i++) {
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "number");
    inputElement.setAttribute("min", "1");
    inputElement.setAttribute("max", "9");
    puzzleBoard.appendChild(inputElement);
  }
} else {
  console.error("Puzzle board element not found!");
}
