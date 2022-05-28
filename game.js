$(function () {
  $("#startButton").on("click", function () {
    validateNicknames();
    startGame();
  });
});

var lst1 = {};
var a1 = 0;
var a2 = 0;
var a3 = 0;

var b1 = 0;
var b2 = 0;
var b3 = 0;

var c1 = 0;
var c2 = 0;
var c3 = 0;

var lst1 = [a1, a2, a3, b1, b2, b3, c1, c2, c3];

var round = 0;
var p1 = "red";
var p2 = "blue";
var currentPlayer = p1; //p1 starts
var winner = "";

function validateNicknames() {
  if ($("#p1nick").val() == "") {
    alert("Please provide player red a nickname");
    return false;
  }
  if ($("#p2nick").val() == "") {
    alert("Please provide player blue a nickname");
    return false;
  }

  $("#nickChoosen1").html($("#p1nick").val());
  $("#nickChoosen2").html($("#p2nick").val());

  $("#p1nick").remove();
  $("#p2nick").remove();
}

function startGame() {
  //jogo ta rodando sem parar sem esperar o click. Preciso ajeitar isso. Mas por hoje ta bom.
  while (round < 9 && !conditionToWin()) {
    play(currentPlayer);
    round++;
    if (round < 9 && !conditionToWin()) {
      currentPlayer = switchPlayer(currentPlayer);
      play(currentPlayer);
      round++;
    }
  }
  if (conditionToWin()) winner = currentPlayer;
  else return false;
}

function switchPlayer(p) {
  if (p == "blue") return "red";
  if (p == "red") return "blue";
}

function conditionToWin() {
  //horizontal check
  if (lst1[a1] + lst1[a2] + lst1[a3] == (-3 || 3)) return true;

  if (lst1[b1] + lst1[b2] + lst1[b3] == (-3 || 3)) return true;
  if (lst1[c1] + lst1[c2] + lst1[c3] == (-3 || 3)) return true;
  //vertical check
  if (lst1[a1] + lst1[b1] + lst1[c1] == (-3 || 3)) return true;
  if (lst1[a2] + lst1[b2] + lst1[c2] == (-3 || 3)) return true;
  if (lst1[a3] + lst1[b3] + lst1[c3] == (-3 || 3)) return true;
  //diagonal check
  if (lst1[a1] + lst1[b2] + lst1[c3] == (-3 || 3)) return true;
  if (lst1[a3] + lst1[b2] + lst1[c1] == (-3 || 3)) return true;

  return false;
}

function play(player) {
  //player have to choose some option, and then click into a blank space. If its not blank, don't do anything. If its blank
  //put the respective image on the blank space
  //x will be assign as -1, and circle will be assign as 1
  $(".boardSpace").on("click", function () {
    alert("teste");
  });
}
