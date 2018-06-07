console.log("ppr");

var Play = function () {
var cells = Board.getCells();
Board.updateCells(cells)
}

window.onload = function () {

  Board.createCells();
  var btnPlay = Board.getPlayButtton();
  btnPlay.onclick = play;
}
