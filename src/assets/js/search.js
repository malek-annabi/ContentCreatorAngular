search = document.getElementById("scroll");
console.log(search)

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 1500) {
    search.className = "show"
  } else {
    search.className = "hide"
  }
};

window.addEventListener("scroll", myScrollFunc);
