$(".a1").click(function() {
  $('html, body').animate({
    scrollTop: $(".headerContainer").offset().top
  }, 1000);
});
$(".a2").click(function() {
  $('html, body').animate({
    scrollTop: $(".eventsContainer").offset().top
  }, 1000);
});
$(".a3").click(function() {
  $('html, body').animate({
    scrollTop: $(".coordenadoresContainer").offset().top
  }, 1000);
});
$(".a4").click(function() {
  $('html, body').animate({
    scrollTop: $(".contatoContainer").offset().top
  }, 1000);
});