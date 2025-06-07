let currentPlayer = 'red';
let positions = { red: 0, yellow: 0 };

function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById("diceValue").innerText = `Dice Rolled: ${dice}`;
  moveToken(currentPlayer, dice);
  switchTurn();
}

function moveToken(player, diceValue) {
  positions[player] += diceValue;
  if (positions[player] > 29) positions[player] = 29;

  // Clear previous position
  document.getElementById(player).style.display = 'none';

  // Move to new position
  const cell = document.getElementById(`cell-${positions[player]}`);
  cell.appendChild(document.getElementById(player));
  document.getElementById(player).style.display = 'block';

  if (positions[player] === 29) {
    document.getElementById("status").innerText = `${player.toUpperCase()} Wins! 🎉`;
    document.querySelector("button").disabled = true;
  }
}

function switchTurn() {
  currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
  document.getElementById("status").innerText = `Player ${currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1)}'s Turn`;
}
