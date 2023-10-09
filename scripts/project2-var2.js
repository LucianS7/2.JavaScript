function checkGame() {
  let b1, b2, b3, b4, b5, b6, b7, b8, b9; 
  b1 = document.getElementById("b1").value; 
  b2 = document.getElementById("b2").value; 
  b3 = document.getElementById("b3").value; 
  b4 = document.getElementById("b4").value; 
  b5 = document.getElementById("b5").value; 
  b6 = document.getElementById("b6").value; 
  b7 = document.getElementById("b7").value; 
  b8 = document.getElementById("b8").value; 
  b9 = document.getElementById("b9").value;
  
  let b1btn, b2btn, b3btn, b4btn, b5btn,  
  b6btn, b7btn, b8btn, b9btn;
  b1btn = document.getElementById("b1"); 
  b2btn = document.getElementById("b2"); 
  b3btn = document.getElementById("b3"); 
  b4btn = document.getElementById("b4"); 
  b5btn = document.getElementById("b5"); 
  b6btn = document.getElementById("b6"); 
  b7btn = document.getElementById("b7"); 
  b8btn = document.getElementById("b8"); 
  b9btn = document.getElementById("b9"); 

  // Checking if Player X won or not and after 
  // that disabled all the other fields 
  if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) { 
    document.querySelector('.js-print').innerHTML = "Player X won"; 
    b4btn.disabled = true; 
    b5btn.disabled = true; 
    b6btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b1btn.style.color = "red"; 
    b2btn.style.color = "red"; 
    b3btn.style.color = "red"; 
  } 
  else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) { 
    document.querySelector('.js-print').innerHTML = "Player X won"; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b5btn.disabled = true; 
    b6btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b1btn.style.color = "red"; 
    b4btn.style.color = "red"; 
    b7btn.style.color = "red"; 
  } 
  else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) { 
    document.querySelector('.js-print').innerHTML = "Player X won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b4btn.disabled = true; 
    b5btn.disabled = true; 
    b6btn.disabled = true; 

    b7btn.style.color = "red"; 
    b8btn.style.color = "red"; 
    b9btn.style.color = "red"; 
  } 
  else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) { 
    document.querySelector('.js-print').innerHTML = "Player X won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b4btn.disabled = true; 
    b5btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 

    b3btn.style.color = "red"; 
    b6btn.style.color = "red"; 
    b9btn.style.color = "red"; 
  } 
  else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) { 
    document.querySelector('.js-print').innerHTML = "Player X won"; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b4btn.disabled = true; 
    b6btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 

    b1btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b9btn.style.color = "red"; 
  } 
  else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) { 
    document.querySelector('.js-print').innerHTML = "Player X won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b4btn.disabled = true; 
    b6btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b3btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b7btn.style.color = "red"; 
  } 
  else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) { 
    document.querySelector('.js-print').innerHTML = "Player X won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b4btn.disabled = true; 
    b6btn.disabled = true; 
    b7btn.disabled = true; 
    b9btn.disabled = true; 

    b2btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b8btn.style.color = "red"; 
  } 
  else if ((b4 == 'X') && ( b5 == 'X') && (b6 == 'X')) { 
    document.querySelector('.js-print').innerHTML = "Player X won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b4btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b6btn.style.color = "red"; 
  } 
  // Checking of Player X finish 
  // Checking for Player 0 starts, Is player 0 won or 
  // not and after that disabled all the other fields 
  else if ((b1 == '0') && (b2 == '0') && (b3 == '0')) { 
    document.querySelector('.js-print').innerHTML = "Player 0 won"; 
    b4btn.disabled = true; 
    b5btn.disabled = true; 
    b6btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b1btn.style.color = "red"; 
    b2btn.style.color = "red"; 
    b3btn.style.color = "red"; 
  } 
  else if ((b1 == '0') && (b4 == '0') && (b7 == '0')) { 
    document.querySelector('.js-print').innerHTML = "Player 0 won"; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b5btn.disabled = true; 
    b6btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b1btn.style.color = "red"; 
    b4btn.style.color = "red"; 
    b7btn.style.color = "red"; 
  } 
  else if ((b7 == '0') && (b8 == '0') && (b9 == '0')) { 
    document.querySelector('.js-print').innerHTML = "Player 0 won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b4btn.disabled = true; 
    b5btn.disabled = true; 
    b6btn.disabled = true; 

    b7btn.style.color = "red"; 
    b8btn.style.color = "red"; 
    b9btn.style.color = "red"; 
  } 
  else if ((b3 == '0') && (b6 == '0') && (b9 == '0')) { 
    document.querySelector('.js-print').innerHTML = "Player 0 won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b4btn.disabled = true; 
    b5btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 

    b3btn.style.color = "red"; 
    b6btn.style.color = "red"; 
    b9btn.style.color = "red"; 
  } 
  else if ((b1 == '0') && (b5 == '0') && (b9 == '0')) { 
    document.querySelector('.js-print').innerHTML = "Player 0 won"; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b4btn.disabled = true; 
    b6btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 

    b1btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b9btn.style.color = "red"; 
  } 
  else if ((b3 == '0') && (b5 == '0') && (b7 == '0')) { 
    document.querySelector('.js-print').innerHTML = "Player 0 won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b4btn.disabled = true; 
    b6btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b3btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b7btn.style.color = "red"; 
  } 
  else if ((b2 == '0') && (b5 == '0') && (b8 == '0')) { 
    document.querySelector('.js-print').innerHTML = "Player 0 won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b4btn.disabled = true; 
    b6btn.disabled = true; 
    b7btn.disabled = true; 
    b9btn.disabled = true; 

    b2btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b8btn.style.color = "red"; 
  } 
  else if ((b4 == '0') && ( b5 == '0') && (b6 == '0')) { 
    document.querySelector('.js-print').innerHTML = "Player 0 won"; 
    b1btn.disabled = true; 
    b2btn.disabled = true; 
    b3btn.disabled = true; 
    b7btn.disabled = true; 
    b8btn.disabled = true; 
    b9btn.disabled = true; 

    b4btn.style.color = "red"; 
    b5btn.style.color = "red"; 
    b6btn.style.color = "red"; 
  } 
  // Checking of Player 0 finish 
  // Here, Checking about Tie 
  else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
  || b2 == '0') && (b3 == 'X' || b3 == '0') && 
  (b4 == 'X' || b4 == '0') && (b5 == 'X' || 
      b5 == '0') && (b6 == 'X' || b6 == '0') && 
  (b7 == 'X' || b7 == '0') && (b8 == 'X' || 
      b8 == '0') && (b9 == 'X' || b9 == '0')) { 
  document.querySelector('.js-print').innerHTML = "Match Tie";
  }
  else {
    if (flag === 1) { 
      document.querySelector('.js-print').innerHTML = "Player 0 Turn"; 
    } 
    else { 
      document.querySelector('.js-print').innerHTML = "Player X Turn"
    };
  };
}

function resetGame() {
  location.reload();
  b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

let flag = 1;

function xOr0 (event) {
  if (flag == 1) { 
    document.getElementById(event.target.id).value = 'X'; 
    document.getElementById(event.target.id).disabled = true; 
    flag = 0; 
  } 
  else { 
    document.getElementById(event.target.id).value = '0'; 
    document.getElementById(event.target.id).disabled = true; 
    flag = 1; 
  } 
} 
