// Game state
let currentPlayer = 'X';
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Function to handle cell clicks
function handleClick(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    document.getElementsByClassName('cell')[row * 3 + col].innerText = currentPlayer;

    // Check for a win
    if (checkWin()) {
      alert(currentPlayer + ' wins!');
      resetBoard();
      return;
    }

    // Check for a draw
    if (checkDraw()) {
      alert('It\'s a draw!');
      resetBoard();
      return;
    }

    // Switch players
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

// Function to check for a win
function checkWin() {
  // Check rows
  for (let row = 0; row < 3; row++) {
    if (board[row][0] === currentPlayer && board[row][1] === currentPlayer && board[row][2] === currentPlayer) {
      return true;
    }
  }

  // Check columns
  for (let col = 0; col < 3; col++) {
    if (board[0][col] === currentPlayer && board[1][col] === currentPlayer && board[2][col] === currentPlayer) {
      return true;
    }
  }

  // Check diagonals
  if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
    return true;
  }
  if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
    return true;
  }

  return false;
}

// Function to check for a draw
function checkDraw() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === '') {
        return false;
      }
    }
  }
  return true;
}

// Function to reset the board
function resetBoard() {
  currentPlayer = 'X';
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}
