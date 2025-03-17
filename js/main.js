var mobileNav = document.getElementById("mobile-nav");
mobileNav.onmousemove = function (event) {
  mobileNav.style.backgroundPosition = event.clientX / 30 + "px " + event.clientY / 30 + "px";
}


var bars = false;
var barsB = document.getElementById("button-bars");
var body = document.getElementsByTagName("body")[0];

barsB.onclick = function () {
  bars = !bars;

  if (bars) {
    mobileNav.style.display = "flex"
    body.style.overflow = "hidden";
  }

  else {
    mobileNav.style.display = "none"
    body.style.overflow = "auto";
  };

}