$(function () {
  $("#startButton").on("click", function () {
    validateNicknames();

    $(".boardSpace").on("click", function () {
      var locationOnBoard = this.id;
      gameLogic(locationOnBoard);
    });
  });
});

var lst1 = {
  a1: 0,
  a2: 0,
  a3: 0,
  b1: 0,
  b2: 0,
  b3: 0,
  c1: 0,
  c2: 0,
  c3: 0,
};

var round = 0;
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

function gameLogic(locationOnBoard) {
  if (round < 9 && !conditionToWin()) {
    play(locationOnBoard);
  }
  if (conditionToWin()) {
    currentPlayer = verifyTurn();
    $(".boardSpace").off();
    setTimeout(() => {
      alert(currentPlayer + " wins!");
      restartOption();
    }, 500);
  }
  round++;

  function restartOption() {
    setTimeout(() => {
      $("#restart")
        .removeClass("invisible")
        .on("click", function () {
          location.reload();
        });
    }, 800);
  }
}

function conditionToWin() {
  if (
    lst1["a1"] + lst1["a2"] + lst1["a3"] == -3 ||
    lst1["a1"] + lst1["a2"] + lst1["a3"] == 3
  )
    return true;

  if (
    lst1["b1"] + lst1["b2"] + lst1["b3"] == -3 ||
    lst1["b1"] + lst1["b2"] + lst1["b3"] == 3
  )
    return true;
  if (
    lst1["c1"] + lst1["c2"] + lst1["c3"] == -3 ||
    lst1["c1"] + lst1["c2"] + lst1["c3"] == 3
  )
    return true;

  //vertical check
  if (
    lst1["a1"] + lst1["b1"] + lst1["c1"] == -3 ||
    lst1["a1"] + lst1["b1"] + lst1["c1"] == 3
  )
    return true;
  if (
    lst1["a2"] + lst1["b2"] + lst1["c2"] == -3 ||
    lst1["a2"] + lst1["b2"] + lst1["c2"] == 3
  )
    return true;
  if (
    lst1["a3"] + lst1["b3"] + lst1["c3"] == -3 ||
    lst1["a3"] + lst1["b3"] + lst1["c3"] == 3
  )
    return true;
  //diagonal check
  if (
    lst1["a1"] + lst1["b2"] + lst1["c3"] == -3 ||
    lst1["a1"] + lst1["b2"] + lst1["c3"] == 3
  )
    return true;
  if (
    lst1["a3"] + lst1["b2"] + lst1["c1"] == -3 ||
    lst1["a3"] + lst1["b2"] + lst1["c1"] == 3
  )
    return true;

  return false;
}

function play(locationOnBoard) {
  var icon = "";
  var score = 0;

  if (round % 2 == 0) {
    icon = 'url("imagens/marcacao_1.png")';
    score = -1;
  } else {
    icon = 'url("imagens/marcacao_2.png")';
    score = 1;
  }

  $("#" + locationOnBoard)
    .css("background-image", icon)
    .off();
  lst1[locationOnBoard] = score;
}

function verifyTurn() {
  if (round % 2 == 0) return "red";
  return "blue";
}
