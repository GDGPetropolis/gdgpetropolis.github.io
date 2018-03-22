var btn = document.getElementById('a2');

btn.addEventListener("click", function() {
  var i = 10;
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 10;
    if (i >= 200) clearInterval(int);
  }, 20);
})