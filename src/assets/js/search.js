search = document.getElementById("scroll");
var clips=document.getElementById('clips')
var myScrollFunc = function() {
  var y = window.scrollY
  if (y >= 1200) {
    search.classList.add("show").add('fade-in');
  }else{
    search.classList.remove('show').remove('fade-in') }
};
window.addEventListener("scroll", myScrollFunc);
