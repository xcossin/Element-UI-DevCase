function font() {
  document.documentElement.style.fontSize =
    document.documentElement.clientWidth / 19.2 + "px";
}
font();
window.onresize = font;
