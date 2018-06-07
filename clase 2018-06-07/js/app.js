console.log("opr");

var Play = function () {
  var cells = Board.getCells();
  Board.updateCells(cells)
}

window.onload = function () {

  var btnPlay = Board.getPlayButtton();
  btnPlay.onclick = play;
}
