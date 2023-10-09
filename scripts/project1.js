let isStopwatchRunning = false;
let stopwatchCounter = 0;
let intervalId;

document.querySelector('.js-start-stop-button')
  .addEventListener('click', startStopwatch);

document.querySelector('.js-lap-reset-button')
  .addEventListener('click', lapResetStopwatch);


function startStopwatch () {
  const startStopButtonElement = document.querySelector('.js-start-stop-button');
  const lapResetButtonElement = document.querySelector('.js-lap-reset-button');

  if (!isStopwatchRunning) {
    startStopButtonElement.innerHTML = 'Stop';
    startStopButtonElement.classList.add('start-stop-button-on');
    intervalId = setInterval (renderStopwatch, 10);
    isStopwatchRunning = true;
    lapResetButtonElement.innerHTML = 'Lap';
  } else {
    startStopButtonElement.innerHTML = 'Start';
    startStopButtonElement.classList.remove('start-stop-button-on');
    lapResetButtonElement.innerHTML = 'Reset'
    clearInterval(intervalId);
    isStopwatchRunning = false;
  };
};

function renderStopwatch () {
  stopwatchCounter++;
  document.querySelector('.js-stopwatch')
    .innerHTML = parseFloat(stopwatchCounter / 100).toFixed(2);
};

function lapResetStopwatch () {
  if (isStopwatchRunning) {
    lap();
  } else {
    resetStopwatch();
  };
};

let lapsHTML = '';
let lapNr = 1;
let lapSum = 0;

function lap () {
  lapsHTML = lapsHTML + `<pre class="lap">Lap ${lapNr}:               ${(parseFloat((stopwatchCounter - lapSum)/100).toFixed(2))}</pre>`
  lapNr++;
  lapSum = stopwatchCounter;
  document.querySelector('.js-laps').innerHTML = lapsHTML;
};

function resetStopwatch () {
  stopwatchCounter = 0;
  isStopwatchRunning = false;
  document.querySelector('.js-stopwatch').innerHTML = '<br>';
  document.querySelector('.js-laps').innerHTML = '';
  lapsHTML = '';
  lapNr = 1;
  lapSum = 0;
};