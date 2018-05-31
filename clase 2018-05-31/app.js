console.log("hellow");
var changeColor = function(li) {
  li.style.backgroundColor = "#f00"
}

window.onload = function () {

  var btnPlay = document.getElementById('play');
  btnPlay.onclick = function() {
    console.log("click");
    var liAlives = document.getElementsByClassName('alive');
    for (var i = 0; i < liAlives.length; i++) {
      changeColor(liAlives[i]);
    }
  }
}
