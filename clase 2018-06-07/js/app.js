console.log("hola");

var Play = function () {
var liAlives = Board.getCells();
Board.updateCells(liAlives)
}

var init =  function () {
  Board.createCells();
  var cells = Board.getCells();
  for (var i = 0; i < cells.length; i++) {
    cells[i].onclick = Cell.toggle;
  }
  //var btnPlay = Board.getPlayButtton();
  //btnPlay.onclick = play;
}


window.onload = init;
