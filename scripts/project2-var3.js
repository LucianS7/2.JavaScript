const gametableElement = document.querySelector('#game-table');
const buttons = gametableElement.querySelectorAll('Button');
let isPlayerXturn = true;
let board = [
							[0, 0, 0],
							[0, 0, 0],
							[0, 0, 0]
						];
let winsX = 0;
let wins0 = 0;

gametableElement.addEventListener('click', gameClickHandler);
document.querySelector('#new-game-button').addEventListener('click', newGame);
document.querySelector('#reset-score-button').addEventListener('click', resetScore);


function gameClickHandler(event)
{
	const targetElement = event.target;
	let row, column;
	
	if (targetElement.nodeName === 'BUTTON')
	{
		row = Number(targetElement.dataset.row);
		column = Number(targetElement.dataset.column);
		board[row][column] = isPlayerXturn ? 1 : -1;
		
		targetElement.innerHTML = isPlayerXturn ? 'x' : 'o';
		targetElement.classList.add(isPlayerXturn ? 'piece-x' : 'piece-o');
		targetElement.disabled = true;
		
		const [win, winCell] = playerHasWon() 
		if (win)
		{
			for (let i = 0; i < winCell.length; i++) 
			{
				document.getElementById(winCell[i]).classList.add('win-cell')
			};
			isPlayerXturn ? winsX++ : wins0++;
			winNotification((isPlayerXturn ? 'X' : '0'), (isPlayerXturn ? winsX : wins0));
			buttons.forEach((button)=>{
				button.disabled = true;
			});
		}
		else if (isDraw())
		{
			drawNotification();
		}
		else 
		{
			isPlayerXturn = !isPlayerXturn;
		}
	}
}


function playerHasWon()
{
	let sum;
	
	for (let i = 0; i < 3; i++)
	{
		sum = 0;
		
		for (let j = 0; j < 3; j++)
		{
			sum += board[i][j];
		}
		
		if (Math.abs(sum) == 3)
		{
			return [true, [`${i}0`, `${i}1`, `${i}2`]];
		}
	}
	
	for (let j = 0; j < 3; j++)
	{
		sum = 0;
		
		for (let i = 0; i < 3; i++)
		{
			sum += board[i][j];
		}
		
		if (Math.abs(sum) == 3)
		{
			return [true, [`0${j}`, `1${j}`, `2${j}`]];
		}
	}

	sum = 0;

	for (let i = 0; i < 3; i++)
	{
		sum += board[i][i];
	}

	if (Math.abs(sum) == 3)
	{
		return [true, ['00', '11', '22']];
	}

	sum = 0;

	for (let i = 0; i < 3; i++)
	{
		sum += board[i][2 - i];
	}

	if (Math.abs(sum) == 3)
	{
		return [true, ['02', '11', '20']];
	}

	return [false, 0];
}


function isDraw() {
	for (button of buttons) 
	{
		if (!button.disabled) 
		{
			return false;
		}
	};
	return true;
}
 

function winNotification (playerSymbol, wins) {
  document.querySelector(`#player${playerSymbol}-wins`).innerHTML = `Player ${playerSymbol} wins: ${wins}`

  document.querySelector('#result-notification').innerHTML = `Player ${playerSymbol} won!`;
}


function drawNotification () {
  document.querySelector('#result-notification').innerHTML = 'Draw!';
};


function newGame () {     
 	isPlayerXturn = true;
	board = [
								[0, 0, 0],
								[0, 0, 0],
								[0, 0, 0]
							];

	buttons.forEach((button)=>{
		button.innerHTML = '';
		button.classList.remove('piece-x')
		button.classList.remove('piece-o')
		button.disabled = false;
	});

	document.querySelector('#result-notification').innerHTML = '';

	document.querySelectorAll('.win-cell')
	.forEach((cell) => {
		cell.classList.remove('win-cell')
	});
};


function resetScore () {
  wins0 = 0;
  winsX = 0;
  document.querySelector(`#playerX-wins`).innerHTML = `Player X wins: ${winsX}`;
  document.querySelector(`#player0-wins`).innerHTML = `Player 0 wins: ${wins0}`;
  newGame ();
}
