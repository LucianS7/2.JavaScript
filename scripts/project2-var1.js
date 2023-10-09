let moves = 0;
let winsX = 0;
let wins0 = 0;

let gameX = [[0, 0, 0],
             [0, 0, 0],
             [0, 0, 0]
            ];
let game0 = [[0, 0, 0],
             [0, 0, 0],
             [0, 0, 0]
            ];

const winningCombinations = [[[1, 1, 1],
                              [0, 0, 0],
                              [0, 0, 0]],

                             [[0, 0, 0],
                              [1, 1, 1],
                              [0, 0, 0]],

                             [[0, 0, 0],
                              [0, 0, 0],
                              [1, 1, 1]],

                             [[1, 0, 0],
                              [1, 0, 0],
                              [1, 0, 0]],

                             [[0, 1, 0],
                              [0, 1, 0],
                              [0, 1, 0]],

                             [[0, 0, 1],
                              [0, 0, 1],
                              [0, 0, 1]],

                             [[1, 0, 0],
                              [0, 1, 0],
                              [0, 0, 1]],

                             [[0, 0, 1],
                              [0, 1, 0],
                              [1, 0, 0]]                         
                            ];

document.querySelectorAll('.js-game-cell')
  .forEach ((cell) => {
    cell.addEventListener('click', cellClick)
});

document.querySelector('.js-new-game-button').addEventListener('click', newGame);

document.querySelector('.js-reset-score-button').addEventListener('click', resetScore);

function cellClick(event) {
  playGame(event);
  document.getElementById(event.target.id).removeEventListener('click', cellClick);
};

function playGame(event) {
  if (moves % 2 === 0) {  
    document.getElementById(event.target.id).innerHTML = 'X';
    document.getElementById(event.target.id).classList.add('x-cell');

    const [i, j] = event.target.id.split('').map(Number);
    gameX[i][j] = 1;

    let isWinning = true;
    for (let k = 0; k < winningCombinations.length; k++) {
      isWinning = true;
      for (let l = 0; l < winningCombinations[k].length; l++) {
        for (let m = 0; m < winningCombinations[k][l].length; m++) {
          if (winningCombinations[k][l][m] === 1) {
            if (gameX[l][m] !== 1) {
              isWinning = false
              break;};
          };
        };
      };
      if (isWinning) {
        break;
      }
    };

    moves++;

    if (isWinning) {
      winsX++;
      winNotification('X', winsX);
    } else if (moves === 9) {
      drawNotification()
    };

  } else {
    document.getElementById(event.target.id).innerHTML = 'O';

    const [i, j] = event.target.id.split('').map(Number);
    game0[i][j] = 1;

    let isWinning = true;
    for (let k = 0; k < winningCombinations.length; k++ ) {
      isWinning = true;
      for (let l = 0; l < winningCombinations[k].length; l++) {
        for (let m =0; m < winningCombinations[k][l].length; m++) {
          if (winningCombinations[k][l][m] === 1) {
            if (game0[l][m] !== 1) {
              isWinning = false
              break;};            
          };
        };
      };
      if (isWinning) {
        break;
      };
    };
    moves++;
    if (isWinning) {
      wins0++;
      winNotification('0', wins0);
    };
  };
}

function winNotification (playerSymbol, wins) {
  document.querySelector(`.js-player${playerSymbol}-wins`).innerHTML = `Player ${playerSymbol} wins: ${wins}`

  document.querySelector('.js-result-notification').innerHTML = `Player ${playerSymbol} won!`;

  document.querySelectorAll('.js-game-cell').forEach ((cell) => {
    cell.removeEventListener('click', cellClick);
  });
}

function drawNotification () {
  document.querySelector('.js-result-notification').innerHTML = 'Draw!';
};

function newGame () {
  moves = 0;
  gameX = [[0, 0, 0],
           [0, 0, 0],
           [0, 0, 0]
          ];
  game0 = [[0, 0, 0],
           [0, 0, 0],
           [0, 0, 0]
          ];
          
  document.querySelector('.js-result-notification').innerHTML = '';
  
  document.querySelectorAll('.js-game-cell').forEach ((cell) => {
    cell.innerHTML = '';
    cell.classList.remove('x-cell');
    cell.addEventListener('click', cellClick);
  });
}

function resetScore () {
  wins0 = 0;
  winsX = 0;
  document.querySelector(`.js-playerX-wins`).innerHTML = `Player X wins: ${winsX}`;
  document.querySelector(`.js-player0-wins`).innerHTML = `Player 0 wins: ${wins0}`;
  newGame ();
}
