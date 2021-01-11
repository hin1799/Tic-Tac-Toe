//function for the logic
function playGame() {
  //set the value for all elements
  var a1, a2, a3, a4, a5, a6, a7, a8, a9;
  a1 = $("#1").val();
  a2 = $("#2").val();
  a3 = $("#3").val();
  a4 = $("#4").val();
  a5 = $("#5").val();
  a6 = $("#6").val();
  a7 = $("#7").val();
  a8 = $("#8").val();
  a9 = $("#9").val();
  //checking if player X has won
  //across
  if ((a1 == 'X') && (a2 == 'X') && (a3 == 'X')) {
    document.getElementById('msg').innerHTML = "Player X has won";
    //disable other elements
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
    alert("Player X has won");
  }
  //across
  else if ((a4 == 'X') && (a5 == 'X') && (a6 == 'X')) {
    document.getElementById('msg').innerHTML = "Player X has won";
    //disable other elements
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
    alert("Player X has won");
  }
  //across
  else if ((a7 == 'X') && (a8 == 'X') && (a9 == 'X')) {
    document.getElementById('msg').innerHTML = "Player X has won";
    //disable other elements
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    alert("Player X has won");
  }
  //down
  else if ((a1 == 'X') && (a4 == 'X') && (a7 == 'X')) {
    document.getElementById('msg').innerHTML = "Player X has won";
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
    alert("Player X has won");
  }
  //down
  else if ((a2 == 'X') && (a5 == 'X') && (a8 == 'X')) {
    document.getElementById('msg').innerHTML = "Player X has won";
    document.getElementById("1").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("9").disabled = true;
    alert("Player X has won");
  }
  //down
  else if ((a3 == 'X') && (a6 == 'X') && (a9 == 'X')) {
    document.getElementById('msg').innerHTML = "Player X has won";
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    alert("Player X has won");
  }
  //diagonal
  else if ((a1 == 'X') && (a5 == 'X') && (a9 == 'X')) {
    document.getElementById('msg').innerHTML = "Player X has won";
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    alert("Player X has won");
  }
  //diagonal
  else if ((a3 == 'X') && (a5 == 'X') && (a7 == 'X')) {
    document.getElementById('msg').innerHTML = "Player X has won";
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
    alert("Player X has won");
  }
  //Finished checking for player X
  //Now check for player O
  //across
  else if ((a1 == 'O') && (a2 == 'O') && (a3 == 'O')) {
    document.getElementById('msg').innerHTML = "Player O has won";
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
    alert("Player O has won");
  }
  //across
  else if ((a4 == 'O') && (a5 == 'O') && (a6 == 'O')) {
    document.getElementById('msg').innerHTML = "Player O has won";
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
    alert("Player O has won");
  }
  //across
  else if ((a7 == 'O') && (a8 == 'O') && (a9 == 'O')) {
    document.getElementById('msg').innerHTML = "Player O has won";
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    alert("Player O has won");
  }
  //down
  else if ((a1 == 'O') && (a4 == 'O') && (a7 == 'O')) {
    document.getElementById('msg').innerHTML = "Player O has won";
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
    alert("Player O has won");
  }
  //down
  else if ((a2 == 'O') && (a5 == 'O') && (a8 == 'O')) {
    document.getElementById('msg').innerHTML = "Player O has won";
    document.getElementById("1").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("9").disabled = true;
    alert("Player O has won");
  }
  //down
  else if ((a3 == 'O') && (a6 == 'O') && (a9 == 'O')) {
    document.getElementById('msg').innerHTML = "Player O has won";
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    alert("Player O has won");
  }
  //diagonal
  else if ((a1 == 'O') && (a5 == 'O') && (a9 == 'O')) {
    document.getElementById('msg').innerHTML = "Player O has won";
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    alert("Player O has won");
  }
  //diagonal
  else if ((a3 == 'O') && (a5 == 'O') && (a7 == 'O')) {
    document.getElementById('msg').innerHTML = "Player O has won";
    document.getElementById("1").disabled = true;
    document.getElementById("2").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
    alert("Player O has won");
  }
  //checking for draw
  else if ((a1 == 'X' || a1 == 'O') && (a2 == 'X' || a2 == 'O') && (a3 == 'X' || a3 == 'O') && (a4 == 'X' || a4 == 'O') &&
    (a5 == 'X' || a5 == 'O') && (a6 == 'X' || a6 == 'O') && (a7 == 'X' || a7 == 'O') && (a8 == 'X' || a8 == 'O') && (a9 == 'X' || a9 == 'O')) {
    document.getElementById('msg').innerHTML = "Match Draw";
    alert("Match Draw");
  } else {
    if (flag == 1) {
      document.getElementById('msg').innerHTML = "Player X turn";
    } else {
      document.getElementById('msg').innerHTML = "Player O turn";
    }
  }
}

//function to reset the board
function Reset() {
  location.reload();
  $("#1").val(' ');
  $("#2").val(' ');
  $("#3").val(' ');
  $("#4").val(' ');
  $("#5").val(' ');
  $("#6").val(' ');
  $("#7").val(' ');
  $("#8").val(' ');
  $("#9").val(' ');
}

var flag = 1; //flag indicates which user's turn. 1 means player X

//function to change value of element 1
function Change1() {
  if (flag == 1) {
    document.getElementById("1").value = "X";
    document.getElementById("1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("1").value = "O";
    document.getElementById("1").disabled = true;
    flag = 1;
  }
}

//function to change value of element 2
function Change2() {
  if (flag == 1) {
    document.getElementById("2").value = "X";
    document.getElementById("2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("2").value = "O";
    document.getElementById("2").disabled = true;
    flag = 1;
  }
}

//function to change value of 3
function Change3() {
  if (flag == 1) {
    document.getElementById("3").value = "X";
    document.getElementById("3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("3").value = "O";
    document.getElementById("3").disabled = true;
    flag = 1;
  }
}

function Change4() {
  if (flag == 1) {
    document.getElementById("4").value = "X";
    document.getElementById("4").disabled = true;
    flag = 0;
  } else {
    document.getElementById("4").value = "O";
    document.getElementById("4").disabled = true;
    flag = 1;
  }
}

function Change5() {
  if (flag == 1) {
    document.getElementById("5").value = "X";
    document.getElementById("5").disabled = true;
    flag = 0;
  } else {
    document.getElementById("5").value = "O";
    document.getElementById("5").disabled = true;
    flag = 1;
  }
}

function Change6() {
  if (flag == 1) {
    document.getElementById("6").value = "X";
    document.getElementById("6").disabled = true;
    flag = 0;
  } else {
    document.getElementById("6").value = "O";
    document.getElementById("6").disabled = true;
    flag = 1;
  }
}

function Change7() {
  if (flag == 1) {
    document.getElementById("7").value = "X";
    document.getElementById("7").disabled = true;
    flag = 0;
  } else {
    document.getElementById("7").value = "O";
    document.getElementById("7").disabled = true;
    flag = 1;
  }
}

function Change8() {
  if (flag == 1) {
    document.getElementById("8").value = "X";
    document.getElementById("8").disabled = true;
    flag = 0;
  } else {
    document.getElementById("8").value = "O";
    document.getElementById("8").disabled = true;
    flag = 1;
  }
}

function Change9() {
  if (flag == 1) {
    document.getElementById("9").value = "X";
    document.getElementById("9").disabled = true;
    flag = 0;
  } else {
    document.getElementById("9").value = "O";
    document.getElementById("9").disabled = true;
    flag = 1;
  }
}
