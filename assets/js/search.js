search = document.getElementById("scroll");
var clips=document.getElementById('clips')
var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= clips.offsetTop-50) {
    search.className = "show fade-in"
  } else {
    search.className = "hide"
  }
};

window.addEventListener("scroll", myScrollFunc);
