let playerSymbol = "X";
let gameEnd = false;

let winElement = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let inTag = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 1; i < 10; i++) {
  document.getElementById(i.toString()).addEventListener("click", turn);
}
function turn() {
  if (this.innerHTML in inTag && !gameEnd) {
    this.innerHTML = playerSymbol;
    this.classList.add(playerSymbol.toLowerCase());
    checkWin();
    //turn chenged
    if (playerSymbol === "X" && gameEnd == false) {
      playerSymbol = "O";
    } else if (playerSymbol === "O" && gameEnd == false) {
      playerSymbol = "X";
    }
  }
  (function () {
    document.getElementById("playerTurn").innerHTML = playerSymbol+ "<br/>" + " " + "turn";
  })();
}
function checkWin() {
  for (let i = 0; i < winElement.length; i++) {
    if (
      document.getElementById(winElement[i][0]).innerHTML === playerSymbol &&
      document.getElementById(winElement[i][1]).innerHTML === playerSymbol &&
      document.getElementById(winElement[i][2]).innerHTML === playerSymbol
    ) {
      document.getElementById(winElement[i][0]).classList.add("win");
      document.getElementById(winElement[i][1]).classList.add("win");
      document.getElementById(winElement[i][2]).classList.add("win");
      gameEnd = true;
      setTimeout(function () {
        alert(playerSymbol + " wins!");
      }, 500);
    }
  }
}
document.getElementById("resetGame").addEventListener("click", function () {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).innerHTML = i;
    document.getElementById(i.toString()).classList.remove("x");
    document.getElementById(i.toString()).classList.remove("o");
    document.getElementById(i.toString()).classList.remove("win");
    document.getElementById("playerTurn").innerHTML = "X"+ "<br/>" +"turn";
    gameEnd = false;
  }
});
