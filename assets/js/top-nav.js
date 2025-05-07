/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var navScrollPos = window.pageYOffset;

window.onscroll = function () {
  var navScrollingPos = window.pageYOffset;
  if (navScrollPos > navScrollingPos) {
    document.getElementById("top-nav").style.top = "0";
  } else {
    document.getElementById("top-nav").style.top = "-50px";
  }
  navScrollPos = navScrollingPos;
};
