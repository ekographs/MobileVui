// When the user scrolls the page, execute myFunction 
window.onscroll = function() {scrollit()};

function scrollit() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("ekobar").style.width = scrolled + "%";
}
